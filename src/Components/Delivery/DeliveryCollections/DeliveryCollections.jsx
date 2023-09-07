import Slider from 'react-slick';
import PrevArrow from '../../Common/Carousel/PrevArrow';
import NextArrow from '../../Common/Carousel/nextArrow';
import './DeliveryCollections.css'
import DeliveryItem from './DeliveryItem/DeliveryItem';
import { useEffect, useState } from 'react';
import DummyItem from '../../Common/Dummy/DummyItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 2,
        title: "Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 3,
        title: "Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id: 4,
        title: "Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },    
    {
        id: 5,
        title: "Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id: 6,
        title: "Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 7,
        title: "Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id: 8,
        title: "North Indian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id: 9,
        title: "Chole Bhature",
        cover:"https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
    },
    {
        id: 10,
        title: "Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id: 11,
        title: "Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id: 12,
        title: "Fried Rice",
        cover:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },
]

const settings = {
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

const DeliveryCollections = () => {
    const [items, setitems] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setitems(deliveryItems)
        },500)
    })
  return (
      <div className='delivery__collections'>
          <div className='max__width'>
              <div className='collection__title'>Eat what makes you happy</div>
              <Slider {...settings} >
                  {items.length > 0 ? items.map((item) => {
                      return <DeliveryItem key={item.id} item={item} />;
                  }) 
                      :
                      [1,2,3,4,5,6,7].map((i) => <DummyItem type='delivery' key={i} />)
                }
              </Slider>
          </div>
      </div>
  )
}



export default DeliveryCollections