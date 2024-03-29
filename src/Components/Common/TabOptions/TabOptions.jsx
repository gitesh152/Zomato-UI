import PropTypes from 'prop-types'
import './TabOptions.css'

const tabs = [
  {
  id: 1,
  name: 'Delivery',
  active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
  inactive_img: 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
  backdrop:'#FCEEC0'
  },
  {
  id: 2,
  name: 'Dining Out',
  active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
  inactive_img: 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
  backdrop:'#E5F3F3'
  },
  {
  id: 3,
  name: 'Nightlife',
  active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
  inactive_img: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
  backdrop:'#EDF4FF'
  },
]

const TabOptions = ({activeTab,setActiveTab}) => {
  return (
    <div className='tab__options'>
      <div className='max__width options__wrapper' >
        {tabs.map(tab => { 
          return (<div key={tab.id} onClick={() => setActiveTab(tab.name)}
            className={`tab__item absolute__center absolute__center cu__po ${activeTab===tab.name && "active__tab"}`}
          >
            <div className='tab__image__container absolute__center'
                 style={{backgroundColor:`${activeTab===tab.name ? tab.backdrop : ''}`}}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img} 
                alt={tab.name}
                className='tab__image'
              />
            </div>
            <div className='tab__name'>{tab.name}</div>
          </div>)
        })}
      </div>
    </div>
  )
}

TabOptions.propTypes={
  activeTab:PropTypes.string,
  setActiveTab:PropTypes.func,
}


export default TabOptions