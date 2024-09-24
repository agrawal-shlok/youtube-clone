import React from 'react'
import './Playvedio.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const Playvedio = ({videoId}) => {
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>Best youtube chsnnel to learn web development</h3>
        <div className="play-video-info">
          <p>
            1525 views &bull; 2days ago
          </p>
          <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
          </div>
        </div>
        <hr />
        <div className='publisher'>
          <img src={jack} alt="" />
          <div>
            <p>Great Stack</p>
            <span>1M subscribers</span>
          </div>
          <button>subscribe</button>
        </div>
        <div className="vid-description">
          <p>Channel that makes learning easy</p>
          <p>subscribe to watch more tutorials on web development</p>
          <hr />
          <h4>130 comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicholson <span>1day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti cum aliquam ut exercitationem porro. Quod quisquam numquam fugit veniam harum voluptas saepe distinctio quasi voluptatum officiis. Id nobis sint magnam.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>2</span>
              </div>
              
            </div>
          </div>

          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicholson <span>1day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti cum aliquam ut exercitationem porro. Quod quisquam numquam fugit veniam harum voluptas saepe distinctio quasi voluptatum officiis. Id nobis sint magnam.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>2</span>
              </div>
              
            </div>
          </div>


          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicholson <span>1day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti cum aliquam ut exercitationem porro. Quod quisquam numquam fugit veniam harum voluptas saepe distinctio quasi voluptatum officiis. Id nobis sint magnam.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>2</span>
              </div>
              
            </div>
          </div>


          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicholson <span>1day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti cum aliquam ut exercitationem porro. Quod quisquam numquam fugit veniam harum voluptas saepe distinctio quasi voluptatum officiis. Id nobis sint magnam.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>2</span>
              </div>
              
            </div>
          </div>


          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicholson <span>1day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti cum aliquam ut exercitationem porro. Quod quisquam numquam fugit veniam harum voluptas saepe distinctio quasi voluptatum officiis. Id nobis sint magnam.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                <span>2</span>
              </div>
              
            </div>
          </div>
        </div>
            </div>
  )
}

export default Playvedio