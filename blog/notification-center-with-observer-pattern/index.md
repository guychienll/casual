---
slug: notification-center-with-observer-pattern
title: 實作 Notification Center 學習 Observer Pattern 觀察者模式
authors: guy
tags: [typescript, javascript, notification, observer, design pattern]
keywords: [typescript, javascript, notification, observer, design pattern]
date: 2022-05-27
---

# 實作 Notification Center 學習 Observer Pattern 觀察者模式

> 前言

由於最近想更加深入的了解 Design Pattern ，於是挑選了 Observer Pattern 當作練習的目標，這篇文章後續會提到：

1. 滿足 Observer Pattern 觀察者模式至少需要滿足的介面
2. 如何使用 Observer Pattern 實作一個通知中心，能夠滿足 `廣播 ( broadcast )` 給每個人。
3. 新增一些介面來讓現有實作能滿足 `推播 ( push )` 給某個人。

那廢話不多說，我們開始吧！

---

:::info 先讓我們來看看 [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern) 的定義：

The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

:::

由此段定義可以知道，我們會需要至少兩樣物件，其中一項是其中所敘述到的 subject (在以下案例當中我們稱作 Observable _可被訂閱的_ )，而另一項則是被呼叫的 observer。

:::tip 因此滿足此 pattern 至少要滿足以下介面：

1. 讓 Observable 能夠被觀察 `subscribe`
2. 讓 Observable 能夠被取消觀察 `unsubscribe`
3. 讓 Observable 能夠在事件發生時能夠通知所有的觀察者 `notify` `observers`

:::

### IObservable

被通知後的 Observer 實際上的行為由觀察者自己本身實作 `update`

```typescript showLineNumbers
interface IObservable {
    observers: IObserver[];
    subscribe: (observer: IObserver) => void;
    unsubscribe: (observer: IObserver) => void;
    notify: (payload: any) => void;
}

interface IObserver {
    update: (payload: any) => void;
}
```

而先讓我們實作最一開始的 NotificationCenter ( IObservable ):

```typescript showLineNumbers
class NotificationCenter implements IObservable {
    //透過此介面能夠維護目前現有觀察此事件的所有觀察者。
    observers: typeNotificationObserver[];

    constructor() {
        this.observers = [];
    }

    //透過此介面能夠通知所有觀察者事件發生了。
    notify(payload): void {
        this.observers.forEach((observer) => {
            observer.update({ ...payload });
        });
    }

    //透過此介面能夠讓外界的觀察者留下自身訊息，使後續事件發生時，被觀察者可以通知。
    subscribe(observer): void {
        this.observers.push(observer);
    }

    //透過此介面，觀察者可以抹去自己的紀錄，讓往後事件發生，不會再收到通知。
    unsubscribe(observer): void {
        const target = this.observers.findIndex((obr) => {
            return obr === observer;
        });

        if (target !== -1) {
            this.observers.splice(target, 1);
        }
    }
}
```

而由於我們是在實作一個通知中心，並且希望這通知中心能夠有個簡單的介面讓我們能達到，紀錄通知的歷史，獲得所有通知歷史，及推播、廣播功能。因此定義了 INotificationCenter，並且讓上方的 NotificationCenter 多重實作介面 IObservable、INotificationCenter，且我們還會需要一個簡單的通知物件介面，讓我們能在這些功能中傳遞。

### INotificationCenter

1. 用來維護所有通知的歷史紀錄 `notifications`
2. 廣播給所有的觀察者 `broadcast`
3. 推播給某一位觀察者 `push`
4. 獲得所有的通知歷史紀錄 `getAllNotifications`

```typescript showLineNumbers
interface INotificationCenter {
    notifications: INotification[];
    broadcast: (notification: INotification) => void;
    push: (notification: INotification, target: IPerson) => void;
    getAllNotifications: () => INotification[];
}
```

### INotification

1. 通知訊息的識別 `id`
2. 通知訊息的時間點 `date`
3. 通知訊息的內容 `message`

```typescript showLineNumbers
interface INotification {
    id: string;
    date: Date;
    message: string;
}
```

而原先的 NotificationCenter 將被擴充並改寫為以下樣子：

```typescript showLineNumbers
class NotificationCenter implements IObservable, INotificationCenter {
    //原有介面
    observers: typeNotificationObserver[];

    //所有通知的歷史紀錄
    notifications: INotification[];

    constructor() {
        this.observers = [];
        this.notifications = [];
    }

    /* 由於要滿足可以推播給某一位觀察者，這裏實作有一些調整，
     * 可以理解為當今天目標是 `all` 時將會對所有觀察者進行通知也就是廣播，
     * 而當今天目標是某一個觀察者 id 時只針對那位觀察者進行通知。*/
    notify(payload): void {
        if (payload.target.id === 'all') {
            this.observers.forEach((obr) => {
                obr.update({
                    ...payload,
                });
            });
        } else {
            // 此處聰明如你，會發現 observer 介面有新增，先別急，下面做解釋。
            const target = this.observers.find(
                (obr) => obr.id === payload.target.id
            );
            if (target) {
                target.update({
                    ...payload,
                });
            }
        }
    }

    //原有介面
    subscribe(observer): void {
        this.observers.push(observer);
    }

    //原有介面
    unsubscribe(observer): void {
        const target = this.observers.findIndex((obr) => {
            return obr === observer;
        });

        if (target !== -1) {
            this.observers.splice(target, 1);
        }
    }

    //分別傳入通知、目標對象，達到推播功能。
    push(notification: INotification, target: IPerson): void {
        this.notifications.push(notification);
        this.notify({
            notification,
            target,
        });
    }

    //傳入通知，並且目標對象為所有觀察者 all，達到廣播功能。
    broadcast(notification: INotification): void {
        this.notifications.push(notification);
        this.notify({ notification, target: { id: 'all' } });
    }

    //獲取所有通知歷史紀錄
    getAllNotifications(): INotification[] {
        return this.notifications;
    }
}
```

:::caution 小提醒

眼尖的讀者可能會發現，上方 notify 當中所使用的 observer 多了一個 `id` 介面可以做使用，目的是為了讓 notify 能辨別 observer，只通知目標觀察者。

:::

而為此定義了一項新介面 ITargetObserver，當今天有針對目標的需求時，能夠透過多重實作此介面來達到需求。而介面如下：

### ITargetObserver

1. 用於識別 Observer `id`

```typescript showLineNumbers
interface ITargetObserver {
    id: string;
}
```

那我們最終需求的觀察者 Observer 的介面就滿足了，讓我們來看看實作，其中的 update 就是當 observer 收到通知後最終的行為：

```typescript showLineNumbers
interface IObserver {
    update: (payload: any) => void;
}

interface ITargetObserver {
    id: string;
}

type typeNotificationObserver = IObserver & ITargetObserver;

class NotificationObserver implements typeNotificationObserver {
    update: (payload: any) => void;
    id: string;

    constructor(update, id) {
        this.update = update;
        this.id = id;
    }
}

const update = (payload) => {
    const { notification: ntfc, target } = payload;
    if (target.id !== 'all') {
        console.log(
            `[push] ${ntfc.id} , ${ntfc.date.toDateString()} , ${
                ntfc.message
            } send to ${target.name}`
        );
    } else {
        console.log(
            `[broadcast] ${ntfc.id} , ${ntfc.date.toDateString()} , ${
                ntfc.message
            }`
        );
    }
};
```

最後我們將建立一個人的物件，去註冊這些事件，一但 push / broadcast 事件發生時，能夠第一時間的去通知這些註冊此事件的人。

```typescript showLineNumbers
interface IPerson {
    id: string;
    name: string;
}

type typeEvent = { observable: IObservable; observer: IObserver };

class Person implements IPerson {
    id: string;
    name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    register(events: typeEvent[]) {
        events.forEach((event) => {
            event.observable.subscribe(event.observer);
        });
    }

    unRegister(event: typeEvent) {
        event.observable.unsubscribe(event.observer);
    }
}

const brian = new Person('001', 'brian');
const brainRegisterNotificationEvent = {
    observable: center,
    observer: new NotificationObserver(update, brian.id),
};
brian.register([brainRegisterNotificationEvent]);

const guy = new Person('002', 'guy');
const guyRegisterNotificationEvent = {
    observable: center,
    observer: new NotificationObserver(update, guy.id),
};
guy.register([guyRegisterNotificationEvent]);
```

最後我們將可以透過 push 跟 broadcast 這兩介面，達到通知中心的推播跟廣播功能：

```typescript showLineNumbers
center.broadcast({
    id: '001',
    date: new Date(),
    message: 'this is broadcast',
});

brian.unRegister(brainRegisterNotificationEvent);

center.push(
    {
        id: '002',
        date: new Date(),
        message: 'this is the push notification for brian',
    },
    brian
);

center.push(
    {
        id: '003',
        date: new Date(),
        message: 'this is the push notification for guy',
    },
    guy
);
```

<iframe
    height="300"
    style={{ width: '100%' }}
    scrolling="no"
    title="Observer Pattern - Notification Center"
    src="https://codepen.io/guychienll/embed/mdXpBWL?default-tab=html%2Cresult"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
>
    See the Pen{' '}
    <a href="https://codepen.io/guychienll/pen/mdXpBWL">
        Observer Pattern - Notification Center
    </a>{' '}
    by Guy (<a href="https://codepen.io/guychienll">@guychienll</a>) on{' '}
    <a href="https://codepen.io">CodePen</a>.
</iframe>
