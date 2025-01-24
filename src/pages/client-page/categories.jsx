
import axios from "axios"
    import React, { useEffect, useState } from "react";
   
export default function CategoriesPage() {

  const [categories, setCategories] =useState([])
 const [categoriesIsLoaded, setCategoriesIsLoaded] = useState(false)
    useEffect(
      ()=>{
        if(!categoriesIsLoaded){
          axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then((res)=>{
            console.log(res)
          setCategories(res.data.categories)
          setCategoriesIsLoaded(true)
        })
      }
    },[ categoriesIsLoaded]  
    )


    function deleteItem (name)
{
  alert("Deleting category with name: "+ name)
  axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/category/"+name).then((res)=>{
setCategoriesIsLoaded(false)
  }
  )
}




  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Animal Categories</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="py-3 px-6  border-b">Image</th>
              <th className="py-3 px-6 border-b">Name</th>
              <th className="py-3 px-6 border-b">Description</th>
              <th className="py-3 px-6 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map ((category, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-6 font-medium">{category.name}</td>
                <td className="py-3 px-6">{category.description}</td>
                <td className="py-3 px-6" >

                  <button onClick= {
                    ()=>{
                      deleteItem(category.name)
                  }}
                  className="bg-red-500 text-white px-py-1 rounded-lg ml-2">
                  Delete
                  </button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


    
    
