import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    



    <div className="container-fluid p-3 bg-dark text-white mb-md-0">
  <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top ">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Rick y Morty WIKI, Inc</span> 
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg>Twitter</a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg>Instagram</a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg>Facebook</a></li>
    </ul>
  </footer>
</div>
    </>
    
  )
}

export default Footer