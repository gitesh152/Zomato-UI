import '../ExploreSection/ExploreSection.css'

const DummyExplore = () => {
    return (
            <div className='explore__card cu_po'>
        <div className='explore__card__cover skeleton'>
          </div>
          <div className='res__row'>
              <div className='res__name skeleton skeleton-footer' style={{width:'60%'}}></div>
              <div className='skeleton skeleton-footer'></div>
          </div>
          <div className='res__row'>
              <div className='res__name skeleton skeleton-footer'></div>
              <div className='skeleton skeleton-footer' style={{width:'60%'}}></div>
          </div>
    </div>
            )  
}


export default DummyExplore