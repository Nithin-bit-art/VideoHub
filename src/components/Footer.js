import React from 'react'
import { Col , Container , Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <Container className='fixed-bottom p-5'>
       <Row>
          <Col>
          <img
              alt=""
              src="https://i.postimg.cc/050n1Hkd/playback-video.webp"
              width="20"
              height="20"
              className="d-inline-block align-top me-1 mt-2"
            />{' '}
            <b className='fs-5'> <span>V</span>ideo <span>U</span>ploader</b>

          </Col>
          <Col>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, aspernatur minus. Facere amet molestias error voluptates repudiandae odit magnam iure nostrum dicta! Doloribus distinctio optio consequatur reprehenderit. Deleniti, velit nostrum.</p> */}
          </Col>
          <Col>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi veniam doloribus iusto odit! Quam doloribus atque velit laboriosam aliquam laudantium quis, deserunt amet. Eveniet iste quam amet enim repellat.</p> */}
          </Col>
          <Col>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae possimus molestias, aperiam odio quibusdam amet aliquam alias earum. Nam dolores labore dolorem illum quo quia quasi molestiae natus ratione atque?</p> */}
          </Col>
          </Row>
</Container>       
    </div>
  )
}

export default Footer