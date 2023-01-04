import React from 'react'
import './Intros.scss'
import { subData } from '../content/subData'
import FanImage from '../../assets/images/fanzone_creatorpage.png'

const Intros = () => {
  return (
    <div className="intros-bg">
        <div className="section1" id='player'>
            {
                subData.map((sub, index)=>(
                    <div key={index} className='box'>
                        <div className="b1">
                            <div className="b">
                                {sub.picture}
                            </div>
                            <div className="b">
                                {sub.name}
                            </div>
                        </div>
                        <div className="b2">
                            {sub.content}
                        </div>
                        <div className="b3">
                            <button>
                                {sub.btn}
                            </button>
                        </div>
                    </div> 
                ))
            }
        </div>
        <div className="section2" id='fanzone'>
            <div className="part1">
                <div className="a">
                    <svg width="88" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37.3846" cy="46.6154" r="35.3846" stroke="url(#paint0_radial_105_20)" strokeWidth="4"/>
                    <circle cx="49.6917" cy="37.3846" r="35.3846" stroke="url(#paint1_radial_105_20)" strokeWidth="4"/>
                    <defs>
                    <radialGradient id="paint0_radial_105_20" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.6615 11.2308) rotate(122.836) scale(72.4348)">
                    <stop stopColor="#9C2376"/>
                    <stop offset="1" stopColor="#EA5C26"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_105_20" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(65.9686 2) rotate(122.836) scale(72.4348)">
                    <stop stopColor="#9C2376"/>
                    <stop offset="1" stopColor="#EA5C26"/>
                    </radialGradient>
                    </defs>
                    </svg>
                </div>
                <div className="b">
                    Fanzone: a place where artists meet listeners
                </div>
                <div className="c">
                    <div className="c-one">
                        Fanzone for Listeners
                    </div>
                    <div className="c-two">
                        <ul>
                            <li>
                                Keep your favourite music, radio stations and podcasts in one place.
                            </li>
                            <li>
                                Support your favourite artisits in Winamp and get exclusive content.
                            </li>
                            <li>
                                Interact directly with who inspire you.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="c">
                    <div className="c-one">
                        Fanzone for Creators
                    </div>
                    <div className="c-two">
                        <ul>
                            <li>
                                Discover new ways to generate income from your music.
                            </li>
                            <li>
                                Create more direct engagement with passionate fans.
                            </li>
                            <li>
                                Take your power back and get supported directly by fans.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d">
                    <button>
                        Discover the Fanzone
                    </button>
                </div>
            </div>
            <div className="part2">
                <img src={FanImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Intros