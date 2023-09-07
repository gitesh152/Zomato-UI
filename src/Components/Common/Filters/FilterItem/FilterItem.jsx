import PropTypes from 'prop-types'
import './FilterItem.css'

const FilterItem = ({filter}) => {
  return (
      <div className='filter__item'>
          {filter.icon && filter.icon}
     <div className='filter__name'>{filter.title}</div>
    </div>
  )
}

FilterItem.propTypes={
  filter:PropTypes.object,
}

export default FilterItem