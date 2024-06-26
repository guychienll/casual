import * as React from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.scss';

const Image = (props) => {
    const { loading = 'lazy', credit = '', wrapperClassNames, ...rest } = props;
    const { onLoad, element, load } = usePlaceholder({
        delay: 1000,
    });

    return (
        <div className={clsx(['image-wrapper', wrapperClassNames])}>
            {element}
            <BrowserOnly>
                {() => {
                    return (
                        <img
                            className={clsx({
                                image: true,
                                'fade-in': load,
                            })}
                            onLoad={onLoad}
                            loading={loading}
                            {...rest}
                            alt=""
                        />
                    );
                }}
            </BrowserOnly>
            {credit && <small>圖片出處 : {credit}</small>}
        </div>
    );
};

const usePlaceholder = ({ delay = 0 }) => {
    const [load, setLoad] = React.useState(false);
    const ref = React.useRef(null);

    const onLoad = () => {
        setTimeout(() => {
            setLoad(true);
            setTimeout(() => {
                if (ref?.current?.style) {
                    ref.current.style.display = 'none';
                }
            }, 500);
        }, delay);
    };

    return {
        load,
        element: (
            <div
                ref={ref}
                className={clsx({
                    placeholder: true,
                    'fade-out': load,
                })}
            >
                <div className="activity" />
            </div>
        ),
        onLoad,
    };
};

export default Image;
