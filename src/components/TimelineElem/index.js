import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import According from '../According';
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';

const TimelineElem = (props) => {
    const {
        contentStyle = {
            background: 'var(--ifm-color-primary)',
            color: 'var(--color-neutral-100)',
        },
        contentArrowStyle = {
            display: 'none',
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

export default TimelineElem;
