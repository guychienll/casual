import Typed from '../Typed';
import React from 'react';

const Hero = () => (
    <div className="hero hero--primary" style={{ height: '25rem' }}>
        <div className="container">
            <div className="avatar avatar--vertical margin-vert--lg">
                <img
                    width="6rem"
                    height="6rem"
                    className="avatar__photo avatar__photo--xl"
                    src="/img/courage-the-coward-dog.png"
                    alt="avatar"
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

export default Hero;
