import React from 'react'
import Photo from './Photo';
import NotFound from './NotFound';



const PhotosList = props => { 
  const results = props.data;
  let photos;
  
  if(results.length > 0) {
    photos = results.map(photo => {
      return(
        <Photo key={photo.id} url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} />
      );
    });
  }else{
    return(
     photos = <NotFound />
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

export default PhotosList;


// that loops overs props else not found and equals a return