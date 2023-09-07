import Slider from "react-slick";
import './TopBrands.css'
import PrevArrow from "../../Common/Carousel/PrevArrow";
import NextArrow from "../../Common/Carousel/nextArrow";
import { useEffect,useState } from "react";
import DummyItem from "../../Common/Dummy/DummyItem";

const topBrandList = [
    {
        id: 1,
        time: "23 min",
        title: "Burger King",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png"
    },
    {
        id: 2,
        time: "21 min",
        title: "The Hazelnut Factory",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png"
    },
    {
        id: 3,
        time: "20 min",
        title:"McDonald's",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png"
    },
    {
        id: 4,
        time: "26 min",
        title:"La Pino'z Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },    
    {
        id: 5,
        time: "26 min",
        title:"Sharma Chai",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7162970d4c4b94a60e25d91facab0407_1600683841.png"
    },
    {
        id: 6,
        time: "35 min",
        title:"The Manish Eating Point",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png"
    },
    {
        id: 7,
        time: "32 min",
        title:"Royal Cafe - Royal Inn",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png"
    },
    {
        id: 8,
        time: "26 min",
        title: "KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png"
    },
    {
        id: 9,
        time: "19 min",
        title: "Mr. Brown - Danbro",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png"
    },
    {
        id: 10,
        time: "29 min",
        title: "Aryan Family's Delight",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png"
    },
]

const settings = {
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

const TopBrands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setBrands(topBrandList)
        },500)
    })
  return (
      <div className="top__brands max__width">
          <div className="collection__title">Top brands for you</div>
          <Slider {...settings} >
              {brands.length > 0 ? topBrandList.map(brand => {
                  return <div key={brand.id}>
                      <div className="brand__item__cover">
                      <img className="brand__item__img" src={brand.cover} alt={brand.title} />
                      </div>
                      <div className='brand__item__title'>
                        {brand.title}
                    </div>
                  </div>
              })
                  :
                  [1,2,3,4,5,6,7].map((i) => <DummyItem type='brand' key={i} />)
            }
          </Slider>
    </div>
  )
}

export default TopBrands