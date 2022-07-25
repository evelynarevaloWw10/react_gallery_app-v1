import React from 'react'
import Photo from './Photo';
import NotFound from './NotFound';

//photo containter that maps over array if a photo is found return the key and results otherwise return not found component
const PhotoList = props => { 
  const results = props.data;
  let photos;
  
  if(results.length > 0) {
    photos = results.map(photo => {
      return(
        <Photo key={photo.id} url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
      );
     
    });

  } else {
    return(
     photos = <NotFound/>
 )
  } return (
    <div className="photo-container">
      
    <h2>Results</h2>
    <ul>
      { photos }
    </ul>
  </div>
  )
}

export default PhotoList;
