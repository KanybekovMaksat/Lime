import React from 'react'

const ProductCard = () => {
  return (
    <div className='ProductCard'>
        <img src="" alt="" className="ProductCard__img" />
        <div className="ProductCard__info">
            <div className="ProductCard__info-rating">

            </div>
            <h5 className="ProductCard__info-title">Макаронные изделия Макфа Триколлини свитки</h5>
            <div className="ProductCard__info-discount">
                <p className="ProductCard__discount-with">
                    120 руб
                </p>
                <p className="ProductCard__discount-without">
                    140 he,
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard