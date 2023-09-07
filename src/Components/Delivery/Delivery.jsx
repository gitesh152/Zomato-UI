// import React from 'react'
import ExploreSection from '../Common/ExploreSection/ExploreSection'
import Filters from '../Common/Filters/Filters'
import DeliveryCollections from './DeliveryCollections/DeliveryCollections'
import TopBrands from './TopBrands/TopBrands'

const filtersList = [
  {
    id: 1,
    icon: <i className="fi fi-sr-settings-sliders absolute__center"></i>,
    title:"Filters"
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    icon: <i className="fi fi-sr-apps-sort absolute__center"></i>,
    title: 'Delivery Time',
  },
  {
    id: 6,
    title: 'Great Offers',
  },
]

import { restaurants } from '../data/restaurants'

const Delivery = () => {
  return (
    <div>
      <div className='max__width'>
        <Filters filtersList={filtersList} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurants} collectionName="Delivery Restaurants in Lucknow" />
    </div>
  )
}

export default Delivery