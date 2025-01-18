import UserTag from "../userData/userdata.jsx";



function Header(){
    return(
        <header className= 'w-full bg-blue-500 flex h[100px] relative items-center p-[10px]'>
            <h1 className='text-white text [30px]' >Animal Adoption System</h1>
            <UserTag imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" name="Kavindi"/>
            
        </header>
    )
}

export default Header;
