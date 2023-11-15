import * as React from 'react';
import Zoom from 'react-medium-image-zoom';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.scss';

const Image = (props) => {
    const { loading = 'lazy', ...rest } = props;
    const { onLoad, element, load } = usePlaceholder({
        delay: 1000,
    });

    return (
        <Zoom>
            <div className="image-wrapper">
                {element}
                <BrowserOnly>
                    {() => {
                        return (
                            <img
                                className={clsx({
                                    'fade-in': load,
                                })}
                                onLoad={onLoad}
                                loading={loading}
                                {...rest}
                            />
                        );
                    }}
                </BrowserOnly>
            </div>
        </Zoom>
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
