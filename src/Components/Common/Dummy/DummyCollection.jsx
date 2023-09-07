import '../Collection/Collection.css'

const DummyCollection = () => {
    return (
        <div>
            <div className='collection__cover'>
                              <div className='collection__image' ></div>
                              <div className='gradient__bg skeleton'></div>
                              <div className='collection__card__title'></div>
                              <div className='collection__card__subtitle'>
                                  <div>loading places ...   </div>
                                  <i className="fi fi-sr-caret-right absolute__center"></i>
                              </div>
                          </div>
            </div>
            )  
}


export default DummyCollection