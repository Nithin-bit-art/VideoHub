import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<div>
<Navbar className="bg-light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/050n1Hkd/playback-video.webp"
              width="40"
              height="40"
              className="d-inline-block align-top me-3"
            />{' '}
            <b className='fs-3'> <span>V</span>ideo <span>U</span>ploader</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
</div>
    )
}

export default Header