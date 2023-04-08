import React from 'react'
import {ReactComponent as LocationIcon} from '../../../assets/icons/location-dot.svg';
import './Header.scss';

function Header({userLocation}) {
  return (
    <div className='header'>
      <LocationIcon
      className='header__locationIcon'
      />
      <h2 className='header__locationName'>{userLocation}</h2>
    </div>
  )
}

export default Header;