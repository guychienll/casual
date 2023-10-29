import React, { useState } from 'react';
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
    TITANSOFT_INTERN_TIMELINE,
} from '../fixtures/timeline';
import styled from 'styled-components';
import clsx from 'clsx';
import * as Icon from '../components/Icon';

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
                        isOpen={value.isOpen}
                    />
                ))}
            </div>
        </VerticalTimelineElement>
    );
};

const StyledSkillSection = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 20px;
    background-color: var(--ifm-color-primary);
    display: flex;
    justify-content: space-around;
    max-width: 1170px;
    & > .left {
        width: 48%;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.2rem;
        align-self: center;
        & > button {
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            background-color: var(--ifm-color-primary-darker);
            aspect-ratio: 1;
            border-radius: 1rem;
            border: none;
            cursor: pointer;
            & > svg {
                color: var(--color-neutral-000);
                width: 50%;
            }
            &.is-active {
                background-color: var(--ifm-color-primary-darkest);
                & > svg {
                    color: var(--ifm-color-warning);
                }
            }
        }
    }
    & > .right {
        display: flex;
        justify-content: center;
        width: 48%;
        padding: 1rem;
        & > details {
            width: 100%;
            & > summary {
                pointer-events: none;
            }
        }
    }
    @media screen and (max-width: 1170px) {
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        & > .left {
            width: 90%;
        }
        & > .right {
            width: 90%;
            padding: unset;
        }
    }
`;

const Skill = () => {
    const skills = {
        vim: {
            icon: <Icon.Vim />,
            title: 'vim',
            bullets: [
                <li>創建並維護開源 vim 環境 </li>,
                <li>熟悉 vim 指令並用其開發</li>,
                <li>熟悉使用 vim text object</li>,
                <li>熟悉使用 vim 巨集指令</li>,
                <li>
                    熟悉於 vscode | webstrom 設置 vim plugin 和快捷加速開發
                </li>,
            ],
        },
        git: {
            icon: <Icon.Git />,
            title: 'git',
            bullets: [<li>維護中</li>],
        },
        shell: {
            icon: <Icon.Shell />,
            title: 'shell',
            bullets: [<li>維護中</li>],
        },
        javascript: {
            icon: <Icon.Javascript />,
            title: 'javascript',
            bullets: [<li>維護中</li>],
        },
        html5: {
            icon: <Icon.Html5 />,
            title: 'html',
            bullets: [<li>維護中</li>],
        },
        css3: {
            icon: <Icon.Css3 />,
            title: 'css',
            bullets: [<li>維護中</li>],
        },
        github: {
            icon: <Icon.Github />,
            title: 'github',
            bullets: [<li>維護中</li>],
        },
        react: {
            icon: <Icon.React />,
            title: 'react',
            bullets: [<li>維護中</li>],
        },
        test: {
            icon: <Icon.Test />,
            title: 'test',
            bullets: [<li>維護中</li>],
        },
    };
    const [current, setCurrent] = useState(Object.keys(skills)[0]);
    return (
        <StyledSkillSection>
            <div className="left">
                {Object.keys(skills).map((skill) => {
                    return (
                        <button
                            className={clsx({
                                'is-active': current === skill,
                            })}
                            type="button"
                            onClick={() => {
                                setCurrent(skill);
                            }}
                        >
                            {skills[skill].icon}
                        </button>
                    );
                })}
            </div>
            <div className="right">
                <According
                    title={skills[current].title.toLocaleUpperCase()}
                    bullets={skills[current].bullets}
                />
            </div>
        </StyledSkillSection>
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

                <TimelineElem
                    title={TITANSOFT_INTERN_TIMELINE.TITLE}
                    subtitle={TITANSOFT_INTERN_TIMELINE.SUBTITLE}
                    date={TITANSOFT_INTERN_TIMELINE.DATE}
                    keyAchievement={TITANSOFT_INTERN_TIMELINE.KEY_ACHIEVEMENT}
                    icon={TITANSOFT_INTERN_TIMELINE.LOGO}
                />
            </VerticalTimeline>

            <Skill />
        </Layout>
    );
}
