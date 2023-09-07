import './ExploreSection.css'
import PropTypes from 'prop-types'
import ExploreCard from './ExploreCard/ExploreCard'
import {useEffect, useState} from 'react'
import DummyExplore from '../Dummy/DummyExplore'

const ExploreSection = ({ list, collectionName }) => {
  const [resList, setResList] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setResList(list)  
    },1000)
  })
  return (
      <div className='max__width explore__section'>
      <div className='collection__title'>{collectionName}</div>
      <div className='explore__grid'>
        {resList.length>0 ?  list?.map((res,i) => {
          return <ExploreCard res={res} key={i} />
        })
          :
          [1,2,3,4,5,6].map((i)=><DummyExplore key={i}/>)
      }
      </div>
    </div>
  )
}

ExploreSection.propTypes={
  list: PropTypes.array,
  collectionName:PropTypes.string
}

export default ExploreSection