import PropTypes from 'prop-types'
import './DeliveryItem.css'

const DeliveryItem = ({ item }) => {
  return (
    <div>
          <div className='delivery__item__cover'>
            <img className='delivery__item__img' src={item.cover} alt={item.title} />
          </div>      
          <div className='delivery__item__title'>
              {item.title}
          </div>
    </div>
  )
}

DeliveryItem.propTypes={
  item:PropTypes.object,
}

export default DeliveryItem