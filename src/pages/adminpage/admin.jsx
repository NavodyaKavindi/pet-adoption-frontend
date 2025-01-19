import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className ="w-full h-[100vh] bg-red-600">
            <div> 
                <Link className="mr-12" to= {"/admin/animals"}> Animals</Link>
                <Link className="mr-12" to= {"/admin/adoption"}> Adoption</Link>
                
                </div>
           <Routes path="/*"> 
           <Route path="/animals" element={
            <div>
          <h1>Animals</h1>
            </div>
           }/>

 <Route path="/adoption" element={
            <div>
          <h1>Adoption</h1>
            </div>
           }/>
           
           </Routes>
        </div>
    )
}

