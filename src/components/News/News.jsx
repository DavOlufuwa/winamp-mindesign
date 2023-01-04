import React from 'react'
import './News.scss'
import { newsData } from '../content/newsData'
import rightArrow from '../../assets/icons/red-arrow-up.svg'

const News = () => {
  return (
    <div className='news-bg'>
        <div className="section1" id='news'>
            {
              newsData.map((news, index)=>(
                <div key={index} className="box">
                  <div className="a">
                    {news.image}
                  </div>
                  <div className="b">
                    <span>{news.date}</span>
                    <span>{news.title}</span>
                  </div>
                  <div className="c">
                    {news.subHeading}
                  </div>
                  <div className="d">
                    {news.content}
                  </div>
                  <div className="e">
                    <button>
                      Read more
                      <img src={rightArrow} alt="" />
                    </button>
                  </div>
                </div>
              ))
            }
        </div>
        <div className="section2">
            <button>
              See more
            </button>
        </div>
    </div>
  )
}

export default News