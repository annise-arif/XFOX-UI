import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export const Header:FC = () => {
  return (
    <div>
      <Navbar className="HeaderBg" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <a href="#" className='text-white text-decoration-none fs-3 fw-bold'>
          Xfox.com
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className="text-white fw-semibold">All ads</Nav.Link>
            <Nav.Link href="#">
            <a href="#" className='text-white text-decoration-none'><small className=' border border-dark px-2 py-1 rounded-1'>বাংলা</small></a>
            </Nav.Link>
          </Nav>

          <Nav.Link href="#"><a href="#" className='Chat text-decoration-none'>
          <div className="icon--3D09z medium--6L0i0" ><svg fill='white' viewBox="0 0 60 60" className="svg-wrapper--8ky9e"><path d="M38.05 30.85c-9.16.64-11.38-4.9-11.38-9.44a10.16 10.16 0 0 1 .26-2.25H20a10.57 10.57 0 0 0-2.14 20.77v4.5a1.6 1.6 0 0 0 1.57 1.6 1.53 1.53 0 0 0 1.02-.4l5.92-5.4H30a11.03 11.03 0 0 0 9.8-7.4z"></path><path d="M28.9 21.4a7.32 7.32 0 0 1 7.03-7.4h7.03a7.43 7.43 0 0 1 1.06 14.7v3.07a1.12 1.12 0 0 1-1.1 1.13 1.08 1.08 0 0 1-.72-.28l-.04-.04-.03-.03-3.72-3.73h-2.46a7.32 7.32 0 0 1-7.03-7.4"></path></svg></div>
            <small className="text-white me-5"> Chat</small>
            </a>
          </Nav.Link>
            <Nav.Link href="#">
            <a href="#" className='Login text-white text-decoration-none'>
            <div className="icon--3D09z medium--6L0i0"><svg fill='white' viewBox="0 0 60 60" className="svg-wrapper--8ky9e"><path d="M36.723 34.65c1.637 1.243 6.495 2.38 10.397 4.484 1.286.694 1.396 1.724 1.492 2.345.097.622.3 7.404.3 7.404H11s.204-6.782.3-7.404c.097-.621.105-1.565 1.493-2.345 3.866-2.169 8.738-3.169 10.375-4.412.65-.494.482-1.292.627-2.058.144-.766.626-.24.626-1.052 0-.819.153-.676.063-1.763-.078-.948-1.386-1.049-1.46-2.821-.015-.374-.674-.623-1.06-1.197-.385-.574-1.01-1.579-1.01-2.727s.24-.862.24-2.297-.053-2.267.771-5.598c.308-1.243 1.354-2.7 2.402-3.359 1.413-.888.845.296 5.593-.756 3.077-.682 7.898 2.488 7.946 5.024.065 3.43.276 3.172.48 4.593.145 1.005.434.766.434 1.914 0 1.15-.626 2.584-1.011 3.158-.385.575-.742 1.496-.792 1.866-.252 1.917-1.54 1.474-1.593 2.501-.05.938-.111.818.03 1.549.118.61.476-.04.62.726.146.765.045 1.89.649 2.225"></path></svg></div>
              <small className='me-5'>Login</small>
            </a>
            </Nav.Link>
            <Nav.Link href="#" className="my-3"><small className='PostAdd'>POST YOUR AD</small></Nav.Link>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};