import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import {
    PINKOI_TIMELINE,
    REVTEL_TIMELINE,
    TITANSOFT_INTERN_TIMELINE,
    TITANSOFT_TIMELINE,
} from '../fixtures/timeline';
import TimelineElem from '../components/TimelineElem';
import Skill from '../components/Skill';
import Hero from '../components/Hero';

export default function Home() {
    return (
        <Layout
            title="guychienll.dev"
            description="guychienll's personal website"
        >
            <Hero />
            <Skill />
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
                <TimelineElem
                    title={TITANSOFT_INTERN_TIMELINE.TITLE}
                    subtitle={TITANSOFT_INTERN_TIMELINE.SUBTITLE}
                    date={TITANSOFT_INTERN_TIMELINE.DATE}
                    keyAchievement={TITANSOFT_INTERN_TIMELINE.KEY_ACHIEVEMENT}
                    icon={TITANSOFT_INTERN_TIMELINE.LOGO}
                />
            </VerticalTimeline>
        </Layout>
    );
}
