import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img className="headerImg" src="https://cutewallpaper.org/26/beautiful-nature-wallpaper-for-facebook/50-beautiful-natural-facebook-cover-page-photos-nature-wallpaper-landscape-landscape-trees.png" alt="" />
    </div>
  )
}

export default Header