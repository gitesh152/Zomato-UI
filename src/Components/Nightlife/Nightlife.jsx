import Collection from '../Common/Collection/Collection'
import Filters from '../Common/Filters/Filters'
import ExploreSection from '../Common/ExploreSection/ExploreSection'
import {nightlife} from '../data/nightlife' 

const collectionList = [
  {
    id: 1,
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
    icon: <i className="fi fi-sr-arrow-up-right-and-arrow-down-left-from-center"></i>,
    title: 'Distance',
  },
  {
    id: 4,
    title: 'Rating: 4.0+',
  },
  
  {
    id: 5,
    title: 'Pubs & Bars',
  },
  {
    id: 6,
    title: 'Open Now',
  },
]

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max__width'>
        <Filters filtersList={diningFiltersList} />
        <ExploreSection list={nightlife} collectionName='Nightlife Restaurants in Lucknow' />
      </div>
    </div>
  )
}

export default Nightlife