import PropTypes from 'prop-types';
import './ExploreCard.css'

const ExploreCard = ({ res }) => {
    const name = res?.info?.name ?? "";
    const coverImg = res?.info?.image?.url;
    const deliveryTime = res?.order?.deliveryTime;
    const rating = res?.info?.rating?.rating_text;
    const approxPrice = res?.info?.cfo?.text;
    const offers = res?.bulkOffers ?? [];
    const cuisines=res?.info?.cuisine?.map(item=>item.name).slice(0,3)

    const bottomContainers = res?.bottomContainers;
    const goldOffer = res?.gold?.text;
    const proOffer = offers.length > 1 ? offers[0].text : null
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null; 

  return (
      <div className='explore__card cu_po'>
        <div className='explore__card__cover'>
            <img src={coverImg} alt={name} className='explore__card__image' />  
            <div className='delivery__time'>{deliveryTime}</div>
            {proOffer && <div className='pro__offer'>{proOffer}</div>}
            {goldOffer && <div className='gold__offer absolute__center'></div>}
            {discount && <div className='discount absolute__center'>{discount}</div>}
          </div>
          <div className='res__row'>
              <div className='res__name'>{name}</div>
              {rating && (<div className='res__rating absolute__center'>
                  {rating} <i className="fi fi-sr-star absolute__center"></i>
              </div>)}
          </div>
          <div className='res__row'>
              {cuisines.length && <div className='res__cuisine' >
                  {cuisines.map((c,i) => {
                      return <span className='res__cuisine__tag' key={i}>{c}{i!==cuisines.length-1 && ", "}</span>
                  })}
              </div>}
              {approxPrice && <div className='approx__price'>{approxPrice}</div>}
          </div>
          {bottomContainers.length > 0 && <div>
              <div className='card__seperator'></div>
              <div className='explore__bottom'>
                  <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:'18px'}} />
                  <div className='explore__bottom__text'>
                      {bottomContainers[0]?.text}
                      </div>
              </div>
          </div>}
    </div>
  )
}

ExploreCard.propTypes={
  res: PropTypes.object,
}

export default ExploreCard