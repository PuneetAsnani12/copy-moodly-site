
import "./cover.styles.scss";
import coverImage from "../../assets/images/cover.jpeg"

const Cover = () => (
    <div className="cover" style={{animation:`transOut 2s`,animationDelay:"3.4s"}}>
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
            <img src={coverImage} alt='cover' />
        </div>
    </div>
);

export default Cover;
