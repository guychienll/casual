import React from 'react';
import Layout from '@theme/Layout';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Zoom from 'react-medium-image-zoom';
// https://rpearce.github.io/react-medium-image-zoom/?path=/docs/introduction--docs
import 'react-medium-image-zoom/dist/styles.css';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
    return (
        <Layout
            title="guychienll.dev"
            description="guychienll's personal website"
        >
            <div className="hero hero--primary" style={{ height: '25rem' }}>
                <div className="container">
                    <div className="avatar avatar--vertical margin-vert--lg">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src="./img/courage-the-coward-dog.webp"
                        />
                        <div className="avatar__intro margin-vert--sm">
                            <div className="avatar__name">Guy Chien</div>
                            <small className="avatar__subtitle">
                                Frontend Engineer
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'var(--ifm-color-primary)',
                        color: 'var(--color-neutral-100)',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid var(--ifm-color-primary)',
                    }}
                    date="Jul. 2022 - Present"
                    iconStyle={{
                        background: 'var(--ifm-color-primary)',
                        color: '#fff',
                    }}
                    icon={
                        <img
                            src="./img/pinkoi.jpg"
                            style={{ borderRadius: '50%' }}
                        ></img>
                    }
                >
                    <h1 className="vertical-timeline-element-title">
                        Pinkoi Inc.
                    </h1>
                    <h4 className="vertical-timeline-element-subtitle margin-vert--sm">
                        <span className="badge badge--secondary margin-right--sm">
                            Frontend Engineer
                        </span>
                        <span className="badge badge--secondary margin-right--sm">
                            Platform Squad
                        </span>
                    </h4>
                    <div>
                        <details open>
                            <summary>建立 Web Vitals 監控系統</summary>
                            <ul>
                                <li>
                                    使用 Grafana Prometheus Node 安排 cronjob
                                    定期產出 Web Vitals Report
                                    並且於部署時也會進行打點，因此能夠即時監控網站的
                                    Web Vitals 指標狀況，
                                    在網頁效能發生問題時能夠快速找到問題點。
                                </li>
                                <li>
                                    建立後透過動態載入共用模組跟延遲加載有效降低
                                    FCP 1.7s 時間差距
                                </li>
                                <Zoom>
                                    <img
                                        src="./assets/web-vitals-monitor.png"
                                        alt="web-vitals-monitor"
                                    />
                                </Zoom>
                            </ul>
                        </details>
                        <details>
                            <summary>建立 Design System</summary>
                            <ul>
                                <li>
                                    讓 Design Token 達成 Single Source Of Truth
                                    並且同時跨語言支持 <code>javascript</code>{' '}
                                    <code>css</code>
                                </li>
                                <li>
                                    Code Gen Design Token Snippets
                                    讓開發上能夠更加快速跟準確
                                </li>
                                <li>
                                    撰寫 Custom Eslint Rules
                                    避免開發人員直接使用未規範的色票
                                </li>
                                <li>與 Tailwind CSS | StoryBook 整合</li>
                            </ul>
                        </details>
                        <details open>
                            <summary>建立開發環境 CI</summary>
                            <ul>
                                <li>引入 Cypress 進行全站性 E2E 測試</li>
                                <li>
                                    打包 Cypress Image 供 CI 使用，並透過
                                    cypress-parallel 平行化測試，
                                    大幅縮短測試時間
                                </li>
                                <li>
                                    讓 Jest 與 Cypress 都產出 JUnit Report
                                    準確回報測試結果
                                </li>
                                <li>
                                    在 CI 過程加入 ESLint Job 確保程式碼品質
                                </li>
                                <Zoom>
                                    <img
                                        src="./assets/pinkoi-ci.png"
                                        alt="pinkoi-ci"
                                    />
                                </Zoom>
                            </ul>
                        </details>
                        <details>
                            <summary>TypeScript Type Base On OpenApi</summary>
                            <ul>
                                <li>
                                    由 backend fast api Generate 出
                                    openapi.json， 透過 openapi schema 產出
                                    TypeScript Type， 達成在前後端串接 api
                                    時介面的一致性，使 api 介面能夠成為 single
                                    source of truth
                                </li>
                            </ul>
                        </details>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov. 2020 - May. 2022"
                    contentStyle={{
                        background: 'var(--ifm-color-primary)',
                        color: 'var(--color-neutral-100)',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid var(--ifm-color-primary)',
                    }}
                    iconStyle={{
                        background: '#fff',
                        color: '#fff',
                    }}
                    icon={
                        <img
                            src="./img/revtel.png"
                            style={{
                                borderRadius: '50%',
                                transform: 'scale(0.8) translateY(-10%)',
                            }}
                        ></img>
                    }
                >
                    <h1 className="vertical-timeline-element-title">
                        Revtel Tech
                    </h1>
                    <h4 className="vertical-timeline-element-subtitle margin-vert--sm">
                        Frontend Engineer
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                        background: 'var(--ifm-color-primary)',
                        color: 'var(--color-neutral-100)',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid var(--ifm-color-primary)',
                    }}
                    date="Mar. 2019 - Apr. 2020"
                    iconStyle={{
                        background: 'var(--ifm-color-primary)',
                        color: '#fff',
                    }}
                    icon={
                        <img
                            src="./img/titansoft.png"
                            style={{ borderRadius: '50%' }}
                        ></img>
                    }
                >
                    <h3 className="vertical-timeline-element-title">
                        Titansoft Pte Ltd
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Product Developer
                    </h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Layout>
    );
}
