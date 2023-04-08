import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import './Header.scss';

function Header({userLocation}) {
  return (
    <div className='header'>
      <MdLocationOn
      className='header__locationIcon'
      />
      <h2 className='header__locationName'>{userLocation}</h2>
    </div>
  )
}

export default Header;