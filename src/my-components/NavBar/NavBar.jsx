import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="" style={{ textDecoration: 'none' }}><a className="navbar-brand" href="#" style={{fontSize: '25px'}}>Covid-19</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="" style={{ textDecoration: 'none' }}><a className="nav-item nav-link" href="" style={{fontSize: '17px'}}>Home <span class="sr-only">(current)</span></a></Link>
                    <Link to="trending" style={{ textDecoration: 'none' }}><a className="nav-item nav-link" href="" style={{fontSize: '17px'}}>Trending</a></Link>
                    <Link to="blog" style={{ textDecoration: 'none' }}><a className="nav-item nav-link" href="" style={{fontSize: '17px'}}>Blog</a></Link>
                    </div>
                </div>
                <Link to="../login" style={{textDecoration: 'none', fontSize: '12px', color: "#666666"}}>Logout</Link>
            </nav>
        </div>
    )
}

export default NavBar;