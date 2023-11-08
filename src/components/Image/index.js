import Zoom from 'react-medium-image-zoom';
import './index.scss';

const Image = (props) => {
    return (
        <Zoom>
            <div className="image-wrapper">
                <img {...props} />
            </div>
        </Zoom>
    );
};

export default Image;
