import Collection from '../Common/Collection/Collection'
import ExploreSection from '../Common/ExploreSection/ExploreSection'
import Filters from '../Common/Filters/Filters'
import { diningOut } from '../data/diningOut'

const collectionList = [
  {
    id: 1,
    title: '12 Must-visit Legendary Places',
    cover: 'https://b.zmtcdn.com/data/collections/f023dcb182a90f8997f7f39bcd4ca00f_1692120448.jpg',
    places:'12 Places'
  },
  {
    id: 2,
    title: 'Winners of Zomato Restaurant Awards',
    cover: 'https://b.zmtcdn.com/data/collections/a4d47a022a2df415898e877e71f1674e_1682080549.jpg',
    places:'7 Places'
  },
  {
    id: 3,
    title: '5 Newly Opened Restaurants',
    cover: 'https://b.zmtcdn.com/data/collections/b9e2e8be78f3c581f2630c1382bce2ea_1595820049.jpg',
    places:'5 Places'
  },
  {
    id: 4,
    title: '8 Best Insta-worthy Places',
    cover: 'https://b.zmtcdn.com/data/collections/59d229eb19755004aa13769bb9e37002_1675252826.jpg',
    places:'8 Places'
  },
  {
    id: 5,
    title: '5 Places for Smoky Kebabs',
    cover: 'https://b.zmtcdn.com/data/collections/3b856aa87e09b2e78fa9d09f936b0494_1675239659.jpg',
    places:'5 Places'
  },
  {
    id: 6,
    title: '10 Best Bars & Pubs',
    cover: 'https://b.zmtcdn.com/data/collections/d2bf1a1e8403e207dc4001ee5021de91_1675239777.jpg',
    places:'7 Places'
  },
]

const diningFiltersList = [
  {
    id: 1,
    icon: <i className="fi fi-sr-settings-sliders absolute__center"></i>,
    title:"Filters"
  },
  {
    id: 2,
    icon: <i className="fi fi-sr-treasure-chest"></i>,
    title:"Gold"
  },
  {
    id: 3,
    title: 'Rating: 4.0+',
  },
  {
    id: 4,
    title: 'Outdoor Seating',
  },
  {
    id: 5,
    title: 'Serves Alcohol',
  },
  {
    id: 6,
    title: 'Open Now',
  },
]

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max__width'>
        <Filters filtersList={diningFiltersList} />
        <ExploreSection list={diningOut} collectionName='Trending dining restaurants in Lucknow' />
      </div>
    </div>
  )
}

export default DiningOut