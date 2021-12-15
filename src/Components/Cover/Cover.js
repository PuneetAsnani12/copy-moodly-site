
import "./cover.styles.scss";
import coverImage from "../../assets/images/cover.jpeg"

const Cover = () => (
    <div className="cover">
        <div className="cover__title">
            <div className="cover__title-inner">
                <div className="cover__en">
                    <div className="cover__en-inner">Inspiritely</div>
                </div>
                <div className="cover__sp">
                    <div className="cover__sp-inner">(ánimo)</div>
                </div>
            </div>
        </div>

        <div className="cover__image">
            <img src={coverImage} alt='cover-image' />
        </div>
    </div>
);

export default Cover;
