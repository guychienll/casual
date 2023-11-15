import * as React from 'react';
import Zoom from 'react-medium-image-zoom';
import clsx from 'clsx';
import './index.scss';

const Image = (props) => {
    const { loading = 'lazy', ...rest } = props;
    const { onLoad, element, fadeInClassNames } = usePlaceholder({
        delay: 1000,
    });

    return (
        <Zoom>
            <div className="image-wrapper">
                {element}
                <img
                    className={`${fadeInClassNames}`}
                    onLoad={onLoad}
                    loading={loading}
                    {...rest}
                />
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
                ref.current.style.display = 'none';
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
                    'with-animate': !load,
                    'fade-out': load,
                })}
            />
        ),
        onLoad,
        fadeInClassNames: load ? 'fade-in' : '',
    };
};

export default Image;
