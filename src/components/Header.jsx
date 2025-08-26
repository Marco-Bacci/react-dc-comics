const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-50">
            <div id="logo">
              <img src="/img/dc-logo.png" alt="logo" />
            </div>
          </div>
          <div className="col-50 d-flex align-items-center">
            <ul id="menu">
              <li>
                <a href="#">CHARACTERS</a>
              </li>
              <li>
                <a href="#">COMICS</a>
              </li>
              <li>
                <a href="#">MOVIES</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">GAMES</a>
              </li>
              <li>
                <a href="#">COLLECTIBLES</a>
              </li>
              <li>
                <a href="#">VIDEOS</a>
              </li>
              <li>
                <a href="#">FANS</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
