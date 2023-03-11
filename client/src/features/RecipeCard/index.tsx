import './index.scss'
//import styles

import Stars from 'entities/Stars';


import ClockImg from './image/clock.svg';
import StartImg from './image/star.svg';
import TestImg from './image/test.png';
import BreadImg from './image/bread.png';
import OliveImg from './image/olive.png';
import SausageImg from './image/sausage.png';
import RightArrow from './image/right-arrow.svg';


const RecipeCard = () => {
  return (
    <div className='RecipeCard'>
      <div className="RecipeCard__img" style={{background:`url(${TestImg})`}}>
      <div className="RecipeCard__img-link">
        <a href="/">Смотреть рецепт</a>
        <img src={RightArrow} alt="--->" />
      </div>
      </div>
      <div className="RecipeCard__content">
        <h5 className="RecipeCard__content-title">Курочка BARBEQUE</h5>
        <div className="RecipeCard__content-info">
          <div className="RecipeCard__info-time">
            <img src={ClockImg} alt="time-clock" />
            <p>15 минут</p>
          </div>
          <div className="RecipeCard__info-rating">
            <Stars stars={3.5} reviews={2}/>
          </div>
        </div>
      <div className="RecipeCard__content-product">
        <div className="RecipeCard__product-box">
          <img src={SausageImg} alt="sausage" />
        </div>
        <div className="RecipeCard__product-box">
          <img src={OliveImg} alt="olive" />
        </div>
        <div className="RecipeCard__product-box">
          <img src={BreadImg} alt="bread" />
        </div>
        <button className="RecipeCard__product-btn">Купить ингридиенты</button>
      </div>
      </div>

    </div>
  )
}

export default RecipeCard