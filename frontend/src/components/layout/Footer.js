import React from 'react';
import { connect } from 'react-redux';


const Footer = () => {
  return (
    <footer className="page-footer" style={{"color": "rgb(255,255,255)"}}>
        <div className="container">
            <div className="links">
                <h6>Created with ♥️ by NAJI<br/>
                {/* For all press inquiries, please contact&nbsp; spacekoala@agency.com<br/> */}
                </h6>
            </div>
        </div>
    </footer>
  );
};

export default connect()(Footer);
