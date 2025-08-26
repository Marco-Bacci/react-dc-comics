import Navbar from "./Navbar";
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
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
