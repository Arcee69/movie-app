import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddFavourite = () => {
  return (
    <>
      <span className="mr-2 primary">Add to Favorites</span>
      <svg 
        width='1em'
        height='1em'
        viewBox='0 0 16 16'
        className='bi bi-heart-fill'
        fill='red'
        xmlns='http://www.w3.org/2000/svg'
      >
      <path 
        fill-rule='evenodd'
        d='M8 1.314C12.438-3.248 
           23.534 4.735 8 15-7.534 4.736 
           3.562-3.248 8 1.314z' 
      />

      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> */}
    </>
  )
}

export default AddFavourite
