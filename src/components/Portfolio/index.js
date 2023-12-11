import * as React from 'react';
import styles from './index.module.scss';
import Image from '@site/src/components/Image';

const ITEMS = [
    {
        title: '嘉禮富裕建案',
        description: (
            <p className={styles.desc}>
                嘉禮富裕建案官網，單頁式網頁，並提供顧客線上諮詢表單寄送
                <br />
                <br />
                使用技術： React / Next.js / Firebase
            </p>
        ),
        image: '/assets/portfolio/chia-li-fu-yu.jpeg',
        link: {
            text: '嘉禮富裕建案',
            url: 'https://kuangtai-02.com.tw/',
        },
    },
    {
        title: '葛林美斯家具 | Glimax',
        description: (
            <p className={styles.desc}>
                葛林美斯家具品牌官網，全站包含搜尋、會員、產品列表篩選分頁，並提供顧客線上諮詢表單寄送
                <br />
                <br />
                使用技術： React / Gatsby / Firebase
            </p>
        ),
        image: '/assets/portfolio/glimax.png',
        link: {
            text: '葛林美斯家具 | Glimax',
            url: 'https://oa7-11.web.app/',
        },
    },
    {
        title: '惇聚 | Tungrp',
        description: (
            <p className={styles.desc}>
                為 <code>KENZO</code> | <code>Agete</code> |{' '}
                <code>Isabel Marant</code> | <code>self-portrait</code> |{' '}
                <code>Les Nereides</code>
                五家精品品牌代理商，全站包含搜尋、會員、產品列表篩選分頁、社群登入
                <br />
                <br />
                使用技術： React / React Native / Gatsby / GCP / 綠界金流
            </p>
        ),
        image: '/assets/portfolio/tungrp.png',
        link: {
            text: '惇聚 | Tungrp',
            url: 'https://www.tungrp.com',
        },
    },
    {
        title: '拼吧 | Pinbar',
        description: (
            <p className={styles.desc}>
                提供顧客自選照片線上預覽拼圖切割，已達成客製化拼圖的販售
                <br />
                <br />
                使用技術： React / Gatsby / AWS / 綠界金流
            </p>
        ),
        image: '/assets/portfolio/pinbar-2.png',
        link: {
            text: '拼吧 | Pinbar',
            url: 'https://www.pinbar.tw/',
        },
    },
    {
        title: '幫農事',
        description: (
            <p className={styles.desc}>
                為小農提供一個訂單管理平台，讓小農可以更方便的管理訂單，
                即時追蹤訂單狀態
                <br />
                <br />
                使用技術： React Native
            </p>
        ),
        image: '/assets/portfolio/ifarmer.jpg',
        link: {
            text: '幫農事',
            url: 'https://apps.apple.com/tw/app/%E5%B9%AB%E8%BE%B2%E4%BA%8B/id1607435148',
        },
    },
    {
        title: 'ReactConf TV',
        description: (
            <p className={styles.desc}>
                統整並聚集 react conference 相關影片，使 React
                社群可以更加便利取得有用資訊，實現內部現正熱播與即將上映的影片
                <br />
                <br />
                使用技術： React / Gatsby / Youtube API
            </p>
        ),
        image: '/assets/portfolio/reactconftv.png',
        link: {
            text: 'ReactConf TV',
            url: 'https://reactconf.tv/',
        },
    },
];

export default function Portfolio() {
    return (
        <div className={styles.wrapper}>
            {ITEMS.map((item, index) => (
                <div key={`${item.title}-${index}`} className={styles.card}>
                    <Image
                        src={item.image}
                        alt={`image-for-${item.image}`}
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                        }}
                    />
                    <div className={styles.content}>
                        <h2 className={styles.title}>{item.title}</h2>
                        {item.description}
                        <div style={{ flex: 1 }}></div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link.url}
                            className={styles.link}
                        >
                            {item.link.text}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
