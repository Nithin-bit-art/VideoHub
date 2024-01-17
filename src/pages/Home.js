import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Categories from '../components/Categories'
import Add from '../components/Add'
import View from '../components/View'


function Home() {
  return (
    <div className='m-5 fs-3'>
      <h1 className='ms-5 ps-5'>
<span>S</span>tart <span>U</span>ploading <span>V</span>ideos <span>F</span>or <span>F</span>ree     
             </h1>
      <div>
        <a style={{textDecoration:'none',fontFamily:'Satisfy,cursive'}} href="">
          <i className="fa-solid fa-clock fa-spin text-light mt-2"></i>View Watch History
          </a>
      </div>
      <Row>

        <Col lg={1}>

          <Add></Add>

        </Col>
        <Col lg={7}>

          <View></View>

        </Col>
        <Col lg={4}>

          <Categories></Categories>

        </Col>

      </Row>
    </div>

  )
}

export default Home