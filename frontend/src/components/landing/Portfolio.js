import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import bg from './../../assets/img/space-koala-logo-01.png';


const Portfolio = () => {
  return (
    <section className="portfolio-block block-intro portfolio-bg" id="potofolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white" style={{"textAlign": "center"}}>
            <img data-bss-hover-animate="pulse" className='portofolio_img' src={bg} style={{"max-width": "160px", "width": "80%"}} alt="" />
            <br/>
            <h3 className='my-2'>Deposit and Withdraw Money</h3>              
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect()(Portfolio);
