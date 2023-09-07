import PropTypes from 'prop-types'
import Slider from 'react-slick'
import NextArrow from '../Carousel/nextArrow.jsx';
import PrevArrow from '../Carousel/PrevArrow.jsx';
import './Collection.css'
import { useEffect, useState } from 'react';
import DummyCollection from '../Dummy/DummyCollection';

const settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

const Collection = ({ list }) => {
    const [resList, setResList] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setResList(list)      
        },500)
    })
    
  return (
      <div className="collection__wrapper">
          <div className='max__width collection'>
              <div className='collection__title'>Collection</div>
              <div className='collection__subtitle__row'>
                  <div className='collection__subtitle__text'>
                      Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
                  </div>
                  <div className='collection__location'>
                    <span>All collections in Lucknow</span>
                  <i className="fi fi-sr-caret-right absolute__center"></i>
                  </div>
              </div>
              <Slider {...settings} >
                  {resList.length>0 ? resList.map((item) => {
                      return <div key={item.id} >
                          <div className='collection__cover'>
                              <img className='collection__image' src={item.cover} alt={item.title} />
                              <div className='gradient__bg'></div>
                              <div className='collection__card__title'>{item.title}</div>
                              <div className='collection__card__subtitle'>
                                  <div>{item.places}</div>
                                  <i className="fi fi-sr-caret-right absolute__center"></i>
                              </div>
                          </div>
                      </div>
                  }) :
                      [1,2,3,4,5,6].map(i=><DummyCollection key={i}/>)
                  }
              </Slider>
          </div>
        </div>
  )
}

Collection.propTypes = {
    list:PropTypes.array
}

export default Collection