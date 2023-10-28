import React from 'react';
import Layout from '@theme/Layout';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Typed from '../components/Typed';
import {
    PINKOI_TIMELINE,
    REVTEL_TIMELINE,
    TITANSOFT_TIMELINE,
} from '../fixtures/timeline';

const HeroSection = () => (
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
                        <Typed strings={['Frontend Engineer']} />
                    </small>
                </div>
            </div>
        </div>
    </div>
);

const According = ({ title = '', bullets = [], isOpen = true }) => {
    return (
        <details open={isOpen}>
            <summary>{title}</summary>
            <ul>
                {bullets.map((bullet, index) => {
                    return (
                        <React.Fragment key={index}>{bullet}</React.Fragment>
                    );
                })}
            </ul>
        </details>
    );
};

const TimelineElem = (props) => {
    const {
        contentStyle = {
            background: 'var(--ifm-color-primary)',
            color: 'var(--color-neutral-100)',
        },
        contentArrowStyle = {
            display: 'none',
            // borderRight: '7px solid var(--ifm-color-primary)',
        },
        iconStyle = {},
        icon = null,
        date = '',
        title = '',
        subtitle = null,
        keyAchievement = {},
    } = props;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date={date}
            icon={icon}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle margin-top--sm margin-bottom--md">
                {subtitle.map((s, idx) => (
                    <span
                        key={idx}
                        className="badge badge--secondary margin-right--sm"
                    >
                        {s}
                    </span>
                ))}
            </h4>
            <div>
                {Object.entries(keyAchievement).map(([key, value]) => (
                    <According
                        key={key}
                        title={value.title}
                        bullets={value.bullets}
                    />
                ))}
            </div>
        </VerticalTimelineElement>
    );
};

export default function Home() {
    return (
        <Layout
            title="guychienll.dev"
            description="guychienll's personal website"
        >
            <HeroSection />
            <VerticalTimeline>
                <TimelineElem
                    title={PINKOI_TIMELINE.TITLE}
                    subtitle={PINKOI_TIMELINE.SUBTITLE}
                    date={PINKOI_TIMELINE.DATE}
                    keyAchievement={PINKOI_TIMELINE.KEY_ACHIEVEMENT}
                    icon={PINKOI_TIMELINE.LOGO}
                />
                <TimelineElem
                    title={REVTEL_TIMELINE.TITLE}
                    subtitle={REVTEL_TIMELINE.SUBTITLE}
                    date={REVTEL_TIMELINE.DATE}
                    keyAchievement={REVTEL_TIMELINE.KEY_ACHIEVEMENT}
                    icon={REVTEL_TIMELINE.LOGO}
                />

                <TimelineElem
                    title={TITANSOFT_TIMELINE.TITLE}
                    subtitle={TITANSOFT_TIMELINE.SUBTITLE}
                    date={TITANSOFT_TIMELINE.DATE}
                    keyAchievement={TITANSOFT_TIMELINE.KEY_ACHIEVEMENT}
                    icon={TITANSOFT_TIMELINE.LOGO}
                />
            </VerticalTimeline>
        </Layout>
    );
}
