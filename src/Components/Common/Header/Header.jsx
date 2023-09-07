// import React from 'react'
import'./Header.css'

const Header = () => {
  return (
   <div className='max__width header'>
        <img 
        className='header__logo'
        src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='zomato' />
      <div className='header__right'>
        <div className='header__location__search__container'>
          <div className='location__wrapper'>
            <div className='location__name'>
              <i className="fi fi-sr-marker absolute__center location__icon"></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-sr-caret-down absolute__center"></i>
          </div>
          <div className='location__search__seperator'></div>
          <div className='header__searchBar'>
            {/* <i className="fi fi-sr-search absolute__center search__icon"></i> */}
            <img src='/public/magnifying-glass.png' className='header__search__img' />
            <input placeholder='Search for restaurant, cuisine or a dish' className='search__input' />
          </div>
        </div>
        <div className='profile__wrapper'>
            <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
              alt='profile' className='header__profile__image' />
            <span className='header__username'>Gitesh Kumar</span>
            <i className="fi fi-sr-angle-small-down absolute__center profile__options__icon"></i>
          </div>
      </div>
    </div>
  )
}

export default Header