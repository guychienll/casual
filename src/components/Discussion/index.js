import React from 'react';
import Giscus from '@giscus/react';
import './index.scss';

export default function MyApp() {
    return (
        <div className="giscus">
            <Giscus
                id="comments"
                repo="guychienll/casual"
                repoId="R_kgDOKjlsYA"
                category="Announcements"
                categoryId="DIC_kwDOKjlsYM4CbBiW"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark_dimmed"
                lang="zh-TW"
                loading="lazy"
            />
        </div>
    );
}
