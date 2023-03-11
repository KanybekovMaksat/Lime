import './index.scss';


import FullStar from './image/FullStar.svg';
import HalfFullStar from './image/HalfFullStars.svg';
import EmptyStar from './image/EmptyStar.svg';

import { StarsProps } from './stars.interface';

const Stars = ({stars, reviews}:StarsProps) => {


    const ratingStar = Array.from({length: 5}, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? (<img src={FullStar}/>)
                    : stars >= number 
                    ? (<img src={HalfFullStar}/>)
                    : (<img src={EmptyStar}/>)
                }
            </span>
        )
    });

  return (
    <div className='StarRating'>
        {ratingStar}
        <p>{reviews}</p>
    </div>
  )
}

export default Stars