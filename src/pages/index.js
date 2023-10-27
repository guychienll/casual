import React from 'react';
import Layout from '@theme/Layout';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
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
                    <h3 className="vertical-timeline-element-title">
                        Pinkoi Inc.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle margin-vert--sm">
                        Frontend Engineer Platform Squad
                    </h4>
                    <div>
                        <details>
                            <summary>
                                建立 Web Vitals 監控系統
                            </summary>
                            <p>
                                藉由 Grafana Prometheus Node.js 安排 cronjob 定期產出 web vitals report 
                                並且於部署時也會進行打點，因此能夠即時監控網站的 web vitals 狀況，
                                在網頁效能發生問題時能夠快速找到問題點。
                            </p>
                        </details>
                        <details>
                            <summary>
                                建立 design system
                            </summary>
                            <p>
                                讓 design token 能夠跨語言的支持，同時支持 js css 
                            </p>
                        </details>
                        <details>
                            <summary>
                                Node v14 升級到 v18 解決套件相依性問題
                            </summary>
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
                    <h3 className="vertical-timeline-element-title">
                        Revtel Tech
                    </h3>
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
