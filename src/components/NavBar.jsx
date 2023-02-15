import React from 'react';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-link" style={{ borderRadius: 15 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: 'white' }}>
            Weather
            ❄️
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* {!user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/reg" style={{ color: 'white' }}>Registration</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth" style={{ color: 'white' }}>Login</a>
                  </li>
                </>
              )
                : (
                  <> */}
              {/* <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/logout" style={{ color: 'white' }}>Logout</a>
                    </li>
                  </>
                )} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
