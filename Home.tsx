import PinGrid from "./Smaller-comps/PinGrid";

//import BoardGrid from "./Smaller-comps/BoardGrid";

//import UserInfo from "./Smaller-comps/UserInfo";

import { HiSearch, HiBell, HiChat } from "react-icons/hi";

import "/home/king888/Pintii-clone/src/App.css";

import "/home/king888/Pintii-clone/src/Logo/logo.png?asset";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="/home/king888/Pintii-clone/src/Logo/logo.png?asset"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button className="nav-link btn btn-sm btn-outline-secondary">
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn btn-sm btn-outline-secondary"
                  onClick={() => "/"}
                >
                  Create
                </button>
              </li>
            </ul>

            <form className="d-flex">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button className="btn btn-outline-secondary" type="button">
                  <HiSearch className="text-gray-500" size={25} />
                </button>
              </div>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button className="nav-link btn btn-sm btn-outline-secondary">
                  <HiBell className="text-gray-500" size={20} />
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-sm btn-outline-secondary">
                  <HiChat className="text-gray-500" size={20} />
                </button>
              </li>
              <li className="nav-item">
                <img
                  src="https://picsum.photos/50/50"
                  alt="user-image"
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row m-0 p-0">
        {/* <div className="col-md-3 col-lg-2 d-none d-md-block p-0">
          <UserInfo />
        </div> */}
        <div className="col-md-12 p-0">
          <PinGrid />
        </div>
        {/* <div className="col-md-3 col-lg-3 d-none d-md-block p-0">
          <BoardGrid />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
