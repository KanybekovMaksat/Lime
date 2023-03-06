import React from 'react'

import CloseImg from '../../app/assets/images/popup-close.svg';
import SuccessImg from '../../app/assets/images/success.svg'
import ErrorImg from '../../app/assets/images/error.svg';
import AddToFavImg from '../../app/assets/images/addToFavorite.svg';
import RemAtFavImg from '../../app/assets/images/rmAtFavorite.svg';




const PopUp = () => {
  return (
    <div className='PopUp'>
      <img src="" alt=""  className='PopUp-image'/>
      <h3 className="PopUp-message"></h3>
      <button>
        <img src={CloseImg} alt="Close" />
      </button>
    </div>
  )
}

export default PopUp