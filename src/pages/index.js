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
                    <small
                        className="avatar__subtitle"
                        style={{ minHeight: 66 }}
                    >
                        <Typed
                            typeSpeed={30}
                            strings={[
                                'Frontend Engineer<br/>Someone who is curious about everything and likes sharing.<br/>',
                            ]}
                        />
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
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.2rem;
        align-self: center;
        & > button {
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1;
            border-radius: 1rem;
            border: none;
            cursor: pointer;
            background-color: var(--color-neutral-050);
            & > svg {
                color: var(--color-neutral-000);
                width: 50%;
            }
            &.is-active {
                background-color: var(--ifm-color-primary-darker);
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
        height: 450px;
        max-height: 450px;
        & > details {
            width: 100%;
            position: relative;
            & > summary {
                position: sticky;
                top: 0;
                pointer-events: none;
                list-style: none;
            }
            height: 100%;
            overflow-y: auto;
        }
    }
    @media screen and (max-width: 1170px) {
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        & > .left {
            width: 90%;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.5rem;
        }
        & > .right {
            width: 90%;
            padding: unset;
        }
    }
`;

const Skill = () => {
    const skills = {
        shell: {
            icon: <Icon.Shell />,
            title: 'Shell',
            bullets: [<li>維護中</li>],
        },
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
            title: 'Git',
            bullets: [
                <li>熟悉 Git CLI</li>,
                <li>能使用 Git CLI 解決大部分版本問題</li>,
                <li>暸解如何排除衝突、挽救版本</li>,
                <li>暸解 Git/GitHub Flow</li>,
                <li>慣於撰寫 conventional commit</li>,
            ],
        },
        github: {
            icon: <Icon.Github />,
            title: 'Github Actions',
            bullets: [<li>維護中</li>],
        },
        typescript: {
            icon: <Icon.Typescript />,
            title: 'Typescript',
            bullets: [<li>維護中</li>],
        },
        javascript: {
            icon: <Icon.Javascript />,
            title: 'Javascript',
            bullets: [<li>維護中</li>],
        },
        html5: {
            icon: <Icon.Html5 />,
            title: 'HTML',
            bullets: [<li>維護中</li>],
        },
        css3: {
            icon: <Icon.Css3 />,
            title: 'CSS',
            bullets: [<li>維護中</li>],
        },
        react: {
            icon: <Icon.React />,
            title: 'React',
            bullets: [<li>維護中</li>],
        },
        jest: {
            icon: <Icon.Jest />,
            title: 'Jest',
            bullets: [<li>維護中</li>],
        },
        cypress: {
            icon: <Icon.Cypress />,
            title: 'Cypress',
            bullets: [<li>維護中</li>],
        },
        webpack: {
            icon: <Icon.Webpack />,
            title: 'Webpack',
            bullets: [
                <li>熟悉 babel-loader | ts-loader</li>,
                <li>
                    熟悉 css-loader | style-loader | css preprocessor loader |
                    postcss-loader
                </li>,
                <li>理解如何正確部署 source map 及錯誤追蹤</li>,
                <li>理解如何拆分 split chunks</li>,
                <li>熟悉各項 minimizer 配置及其效能差異</li>,
                <li>自行撰寫 Webpack Plugin 經驗</li>,
            ],
        },
    };
    const [current, setCurrent] = useState(Object.keys(skills)[0]);
    return (
        <StyledSkillSection>
            <div className="left">
                {Object.keys(skills).map((skill, index) => {
                    return (
                        <button
                            key={index}
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
                    title={skills[current].title}
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
