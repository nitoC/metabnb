import React from 'react';
import stars from '../assets/stars.png'

function Card({image}) {
  return (
    <div className="cards">
      <div className="card__img=wrapper">
        <img src={image} alt="" className="card__img" />
      </div>
      <div className="card__details">
        <div className="card__row">
          <div className="card__name card__data">Desert king</div>
          <div className="card__price">1MBT per night</div>
        </div>
        <div className="card__row">
          <div className="card__distance card__data">2345km away</div>
          <div className="card__availability card__data">available for 2weeks stay</div>
        </div>
        <div className="card__stars-wrapper">
            <img src={stars} alt="" className="card__stars" />
        </div>
      </div>
    </div>
  )
}

export default Card
