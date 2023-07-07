import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory) ) return;
    // console.log(newCategory)
    // categories.push(newCategory)
    setCategories([newCategory, ...categories]);
  }
  return (
      <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={ value => onAddCategory(value) }
        />

          { categories.map( category => (
              <GifGrid 
                category={category} 
                key={category} 
              />
            )) 
          }
      </>
    )
}
