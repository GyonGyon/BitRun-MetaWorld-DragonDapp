import React from 'react'
import { Link } from 'react-router-dom'
import SellImage from '../../public/images/mai.png'
import ChouImage from '../../public/images/chou.png'
import TaoImage from '../../public/images/tao.png'
import './bottomNav.css'

const BottomNav = () => (
    <div className="bottomnav__navs--container" >
        {/* <Link to="/sell">
           <img src={SellImage}/>
        </Link> */}
        <Link to="/lottery">
            <img src={ChouImage}/>
      </Link>
      {/* <Link to="/list">
          <img src={TaoImage}/>
      </Link> */}
    </div>
)

export default BottomNav
