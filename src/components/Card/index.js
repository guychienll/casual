import clsx from 'clsx';
import React from 'react';
import Image from '../Image';
import './index.scss';

const Card = (props) => {
    const {
        title = '',
        description = null,
        link = {
            label: '',
            url: '',
        },
        image = {
            src: '',
            alt: '',
        },
        labels = [],
    } = props;
    return (
        <div className="card margin-vert--md">
            {image.src && (
                <Image
                    wrapperClassNames="card-image"
                    src={image.src}
                    alt={image.alt}
                />
            )}
            <div
                className="card__header"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                {title && <h4>{title}</h4>}
            </div>
            <div className="card__body">{description}</div>
            <div className="card__footer">
                {link.url && (
                    <button
                        onClick={() => {
                            window.open(link.url, '_blank', 'noopener');
                        }}
                        className="button button--secondary button--block margin-bottom--sm"
                    >
                        {link.label}
                    </button>
                )}
                {labels.map((label, idx) => {
                    const isLastItem = idx === labels.length - 1;
                    return (
                        <div
                            key={idx}
                            className={clsx({
                                badge: true,
                                'badge--secondary': true,
                                'margin-right--sm': !isLastItem,
                            })}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
