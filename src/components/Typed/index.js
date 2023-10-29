import React from 'react';
import TypedJs from 'typed.js';

const Typed = ({ typeSpeed = 50, strings, style = {}, ...rest }) => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new TypedJs(el.current, {
            strings,
            typeSpeed,
            loop: false,
            loopCount: Infinity,
            showCursor: false,
            cursorChar: '▐',
            ...rest,
        });

        return () => {
            typed.destroy();
        };
    }, [rest, strings, typeSpeed]);

    return <span style={style} ref={el} />;
};

export default Typed;
