import './index.scss'
import NewsImg from "../../app/assets/images/news.png";
import { Link } from 'react-router-dom';
import { NewsCardProps } from './newscard.interface';


const NewsCard = (data: NewsCardProps) => {

    const { id, img, title, text } = data;

    return (
        <div className='NewsCard'>
            <img src={img} alt="News" className="NewsCard__img" />
            <div className="NewsCard__info">
                <Link to="/" className="NewsCard__info-title">{title}</Link>
                <p className="NewsCard__info-description">{text}</p>
                <Link to="/" className="NewsCard__info-link">Читать дальше</Link>
            </div>
        </div>
    )
}

export default NewsCard