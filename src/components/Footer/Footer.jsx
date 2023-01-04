import React from 'react'
import redLogo from '../../assets/icons/winamp-logo-red.svg'
import { footerData } from '../content/footerData'
import Twitter from '../../assets/icons/twitter-logo.svg'
import Facebook from '../../assets/icons/facebook-logo.svg'
import Instagram from '../../assets/icons/instagram-logo.svg'
import Linkedin from '../../assets/icons/linkedin-logo.svg'
import Spark from '../../assets/icons/spark.svg'
import './Footer.scss'


const Footer = () => {
  return (
    <>
    <div className="footer-bg">
      <div className="section1">
      <div className='a'>
          <img src={redLogo} alt="winamp-logo" /> winamp
        </div>
      </div>
      <div className="section2">
          {
            footerData.map((footer)=>(
              <div key={footer.id} className="a">
                <ul>
                  {footer.topic.map((word, idx)=>(
                      <li key={idx}>{word}</li>
                  ))}
                </ul>
              </div>
            ))
          }
      </div>
      <div className="section3">
          <div className="a">
            set the tone!
          </div>
          <div className="b">
            <button className="btn">
              Creators
            </button>
            <button className="btn">
              Play
              <div className="circle">
              </div>
            </button>
          </div>
          <div className="c">
            <div className="c-one">
              Follow us
            </div>
            <div className="c-two">
              <img src={Facebook} alt="Facebook logo" />
              <img src={Instagram} alt="Instagram logo" />
              <img src={Linkedin} alt="Linkedin logo" />
              <img src={Twitter} alt="Twitter logo" />
            </div>
          </div>
      </div>
    </div>
    <div className="last-item">
      <div className="a">
          <ul>
            <li>Legal notice</li>
            <li>Privacy policy</li>
            <li>Specific terms of use</li>
            <li>General terms of use</li>
            <li>Cookie policy</li>
          </ul>
      </div>
      <div className="b">
            &copy; David.O 2022 
            <img src={Spark} alt=""/>
      </div>
    </div>
    </>

  )
}

export default Footer