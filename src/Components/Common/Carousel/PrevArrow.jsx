import PropTypes from 'prop-types'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
          style={{
              ...style,
              backgroundColor: 'white',
              padding: '4px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
          }}
      onClick={onClick}
    ></div>
  )
}

PrevArrow.propTypes={
  className:PropTypes.string,
  style:PropTypes.object,
  onClick:PropTypes.func,
}

export default PrevArrow