import React, {useState, useEffect} from 'react';
// import { env } from 'node:process';
// import gallery_images_data from './data/gallery_images.json'

const Welcome = () => {
  const [gallery_images_data, setgallery_images_data] = useState([])
  const loadgallery_images_data = async() =>{
    //Query the API gateway
    var uri = process.env.REACT_APP_API_URL + process.env.REACT_APP_GET_GALLERYIMAGES_ENDPOINT
    const resp = await fetch(uri);
    let jsonData = await resp.json();

    //Assign response data to our state variable
    setgallery_images_data(jsonData);

  }
  
  useEffect(() =>{
    loadgallery_images_data();
  }

  )
return (
  <div className="scene" id="welcome">
    <article className="content">
      <div className="gallery">
        {gallery_images_data.map((image) =>
        <img className={image.className} src={image.src} alt={image.alt} />

        )}
      </div>
      <h1>Welcome to the Landon&nbsp;Hotel</h1>
      <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
    </article>
  </div>
)
}


export default Welcome;