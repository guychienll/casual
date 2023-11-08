import BrowserOnly from '@docusaurus/BrowserOnly';

const ReactGist = (props) => {
    return (
        <BrowserOnly>
            {() => {
                const ReactEmbedGist = require('react-embed-gist').default;
                return <ReactEmbedGist {...props} />;
            }}
        </BrowserOnly>
    );
};

export default ReactGist;