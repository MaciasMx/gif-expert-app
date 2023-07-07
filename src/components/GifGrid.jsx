import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGIfs";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect( () => {
    getImages();
    console.log(images);
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({id, title, url}) => (
          <>
          <li key={id}>{title}</li>
          <img src={url} alt="" />
          </>
        ))}
      </ol>
    </>
  )
}
