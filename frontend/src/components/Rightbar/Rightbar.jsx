import React from 'react'
import "./Rightbar.css";
import { Users } from '../../dummyData';
import Online from '../Online/Online';
export default function Rightbar({ user }) {
  const collage = require('../../Image/collage.png');
  const ad = require('../../Image//ad.jpg');
  const HomeRightBar = () => {





    return (
      <div>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src={collage} alt="img" />
          <span className='birthdayText' >
            <b>Astha modi </b> and <b> 3 other friends </b> are in same collage
          </span>
        </div>
        <img className='rightbarAd' src={ad} alt="ad" />
        <h4 className='rightbarTitle'> online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </div>
    )
  }

  const ProfileRightbar = () => {
    return (
      <div>
        <h4 className='rightbarTitle'>User Information </h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>College:</span>
            <span className='rightbarInfoValue'>{user.College_name}</span>
          </div>

          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>Branch:</span>
            <span className='rightbarInfoValue'>Information Technology</span>
          </div>


          <div className='rightbarInfoItem'>
            <span className='rightbarInfokey'>Sem:</span>
            <span className='rightbarInfoValue'>6</span>
          </div>
        </div>


        
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src=""
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">username</span>
            </div>
          
       
      </div>

      </div>
    );
  }


  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
      {user ? <ProfileRightbar/> : <HomeRightBar/>}
        
      </div>
    </div>
  )
}
