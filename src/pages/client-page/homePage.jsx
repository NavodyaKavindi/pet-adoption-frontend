import Header from "../../components/header/header";
export default function HomePage(){
    return(
        <>
        <Header/>
    <div className="w-full h-screen bg-blue-900 flex flex-col items-center">
<div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex justify-center items-center ">
  <input type="date"/>
<input type="date"/>
<select>
  <option>Dog</option>
  <option>Cat</option>
</select>
<button>Apply for Adoption</button>
</div>
<h1 className="text-white-[50px]">
      Welcome to the PWAP
    </h1>
    </div>
    
        </>
    )
}