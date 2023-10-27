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
                    date="2011 - present"
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
