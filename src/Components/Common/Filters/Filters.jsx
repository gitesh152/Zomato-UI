import PropTypes from 'prop-types'
import FilterItem from './FilterItem/FilterItem'
import './Filters.css'

const Filters = ({filtersList}) => {
  return (
    <div className='filters'>{filtersList?.map((filter) => <FilterItem filter={filter}  key={filter.id} />)}</div>
  )
}

Filters.propTypes={
  filtersList:PropTypes.array,
}

export default Filters