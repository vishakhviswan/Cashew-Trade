import React from 'react'
import './Header.css'

import Logo from '../../assets/Logo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {
  return (
    <div>
        <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" >
          <Logo/>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cashew Kernels..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> Grades </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>Login</span>
          <hr />
         
        </div>
        <div className="logOut">
        <span> Logout</span>
        </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
