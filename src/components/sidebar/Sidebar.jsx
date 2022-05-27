import './sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className='sidebarTitle'>About Me</span>
                <img className='sidebarImg' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione pariatur esse nihil ipsam itaque error.</p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className='sidebarlistItem'>Life</li>
                    <li className='sidebarlistItem'>Music</li>
                    <li className='sidebarlistItem'>Style</li>
                    <li className='sidebarlistItem'>Sport</li>
                    <li className='sidebarlistItem'>Tech</li>
                    <li className='sidebarlistItem'>Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                </div>


            </div>
        </div>
    )
}

export default Sidebar