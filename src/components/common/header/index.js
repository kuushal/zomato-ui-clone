import './header.css'
const Header = () => {
    return (
        <div className='max-width header'>
            <img
                src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
                alt='logo'
                className='header-logo'
            />
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
                            <div>Bangalore</div>
                        </div>
                        <i class="fa-solid fa-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-separator"></div>
                    <div className="header-search-bar">
                        <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                        <input placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <i class="fa-solid fa-user header-profile-image"></i>
                    <span className='header-username'>Kushal</span>
                    <i className="fa-solid fa-caret-down absolute-center profile-options-icon"></i>
                </div>
            </div>
        </div>
    )
}
export default Header;