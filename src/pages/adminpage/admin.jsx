import { Link, Routes,Route } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory, MdPets } from "react-icons/md";
import { FaUser, FaCommentAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import AdminAdoption from "../admin/Adoption/adminAdoption.jsx";
import AdminCategories from "../admin/categories/adminCategories.jsx"; 
import AdminAnimals from "../admin/animals/animals.jsx";
import AdminGalleryItems from "../admin/galleryItems/galleryItems.jsx";
import AdminUsers from "../admin/users/users.jsx";
import AdminFeedback from "../admin/feedback/feedback.jsx";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] flex">
      <div className="w-[20%] bg-blue-300 h-[100vh] flex flex-col">
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <CiBookmarkCheck className="mr-2" />
          <Link to="/admin/adoption">Adoption</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <MdOutlineCategory className="mr-2" />
          <Link to="/admin/categories">Categories</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <MdPets className="mr-2" />
          <Link to="/admin/animals">Animals</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <FaUser className="mr-2" />
          <Link to="/admin/users">Users</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <FaCommentAlt className="mr-2" />
          <Link to="/admin/feedback">Feedback</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <BsImages className="mr-2" />
          <Link to="/admin/gallery items">Gallery Items</Link>
        </div>
      </div>
      <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-900">
        <Routes path="/*">

        <Route path= "/adoption" element={<AdminAdoption/>}
        />
        <Route path= "/categories" element={<AdminCategories/>}/>
        <Route path= "/animals" element={<AdminAnimals/>}/>
        <Route path= "/users" element={<AdminUsers/>}/>
        <Route path= "/feedback" element={<AdminFeedback/>}/>
        <Route path= "/gallery items" element={<AdminGalleryItems/>}/>

        </Routes>
      </div>
    </div>
  );
}
