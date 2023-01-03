import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/icons/winamp-logo.svg'
import Caret from '../../assets/icons/caret-down.svg'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [menu, setMenu] = useState(true)
  return (
    <div className='header-bg'>
      <div className={menu ? 'navigation' : 'navigation show' }>
        <div className={menu ? 'logo' : 'logo show'}>
          <img src={Logo} alt="winamp-logo" /> winamp
        </div>
        <div className={menu ? 'links' : 'links show' }>
          <ul>
            <li>
              <Link>
                Player
              </Link>
            </li>
            <li>
              <Link>
                Fanzone
              </Link>
            </li>
            <li>
              <Link>
                Creators
              </Link>
            </li>
            <li>
              <Link>
                More <img src={Caret} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={menu ? 'buttons' : 'buttons show'}>
            <button className="btn">
              Creator Pass
            </button>
            <button className="btn">
              Play
              <div className="circle">
              </div>
            </button>
        </div> 
        <div className="mobile-menu"
          onClick={()=> setMenu(!menu)}
        >
          {menu ? 
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            className='Hamburger-icon'
            /> : 
            <FontAwesomeIcon
            icon={faXmark}
            size='2x'
            className='Hamburger-icon'
            />
            }
        </div>
      </div>
      <div className="hero">
          <h1>
            Set the tone!
          </h1>
          <p>
            A universal platform connecting listeners with their favourite artists, podcasts and
            radio stations. Stay tuned, much more to come!
          </p>
      </div>
    </div>
  )
}

export default Header