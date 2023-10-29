import React from 'react';
import TypedJs from 'typed.js';

const Typed = ({ typeSpeed = 50, strings, style = {} }) => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new TypedJs(el.current, {
            strings,
            typeSpeed,
            loop: false,
            loopCount: Infinity,
            cursorChar: '▐',
        });

        return () => {
            typed.destroy();
        };
    }, [strings, typeSpeed]);

    return <span style={style} ref={el} />;
};

export default Typed;
