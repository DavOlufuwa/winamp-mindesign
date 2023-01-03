import React from 'react'
import './History.scss'

const History = () => {
  return (
    <div className="history-bg">
        <div className="history">
            <div className="a">
                The History of Winamp
            </div>
            <div className="b">
                Winamp is a legend with a heritage going all the way back to 1997, and still maintaining a vibrant community of millions of active users worldwide today.
                Check out the story of Winamp and what’s coming next!
            </div>
            <div className="c">
                <button>
                    More about Winamp
                </button>
            </div>
        </div>
        <div className="carousel">
            <div className="">                
                <span>What they say about us</span>
                <span>What they say about us</span>
            </div>
        </div>
    </div>

  )
}

export default History