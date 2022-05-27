import { Link } from "react-router-dom";
import "./topBar.css"

function topBar() {
  const user = false ;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
        </div>

        <div className="topCentre">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">CONTACT</Link>
                 </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
               {user && "LOGOUT"}
                </li>
            </ul>
     </div>

        <div className="topRight">
          {user ? (
            <img className="topImg" src="https://i.pinimg.com/474x/af/09/41/af0941ba06185e9846af909ba9350baf--letter-b-logo-b-logo-design.jpg" alt="" />
          ):(
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to='/login'>LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to='/register'>REGISTER</Link>
              </li>
             
            
            </ul>
           
          )
        }
          
           <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default topBar