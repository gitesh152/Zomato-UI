import '../../Delivery/DeliveryCollections/DeliveryCollections.css'
import PropTypes from 'prop-types'

const DummyItem = ({type}) => {
    return (
            <>
                <div className={`${type}__item__cover`}>
                    <div className={`${type}__item__img skeleton`} ></div>
                </div>      
                <div className={`${type}__item__title skeleton skeleton-text`}>
                </div>
            </>
            )
  
}

DummyItem.propTypes = {
    type: PropTypes.string
}

export default DummyItem