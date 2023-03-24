import React from 'react'
import {Link} from 'react-router-dom';
const Video = ({name, id, thumbnail, username}) => {

  //add onClick event listener to video
  //when clicked, it will hit the /api/videos/views/id route
  //which will increment the views of the video

  

  return (
    <div className='Video' >
      <Link to={`/${id}`}><img className='thumbnail' src={thumbnail} alt={name}></img></Link>
      <div className='video-mini-header'>
        <img className='profile-icon' alt={name} src='https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0='></img>
        <div>
          <h5 className='video-mini-name'>{name}</h5>
          <p className='video-mini-author'>{username}</p>
        </div>
      </div>
    </div>
  )
}

export default Video