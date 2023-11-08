import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ReactGist = ({ id, ...rest }) => {
    return (
        <BrowserOnly>
            {() => {
                const ReactEmbedGist = require('react-embed-gist').default;
                return (
                    <ReactEmbedGist
                        wrapperClass="gist"
                        gist={`guychienll/${id}`}
                        {...rest}
                    />
                );
            }}
        </BrowserOnly>
    );
};

export default ReactGist;
