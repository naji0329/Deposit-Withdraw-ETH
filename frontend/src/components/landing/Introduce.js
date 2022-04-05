import React from 'react';
import { connect } from 'react-redux';
import { Fade } from "react-reveal";

import planet_with_cards from './../../assets/img/planet_with_cards.png';

const Introduce = () => {
  return (
    <section id="introduce" style={{"padding": "100px 0px"}}>
      <div className="container">
        <div className="row align-items-center">
          <Fade left>
            <div className="col-md-6" data-aos="fade-right" style={{"color": "rgb(255,255,255)", "font-family": "'Comic Neue', serif"}}>
              <h1 style={{"font-weight": "bold"}}>Space Koalas</h1>
              <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>What is Space Koalas?<br/></h5>
              <p>999 NFT's are divided into different rarity levels.Each Space Koala is unique and exclusive based on up to 50 characteristics. The goal is to generate a uniquely strong community to grow the project with the community afterwards.<br/><br/>Joining the Space-Koala community means joining a family full of investors and NFT enthusiasts who believe in the future of cryptocurrencies and blockchain technology.<br/></p>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6" data-aos="fade-left">
              <img src={planet_with_cards} style={{"max-width": "634px", "width":"100%", "text-align": "center", "margin": "0px", "margin-top":"50px", "margin-left": "0"}} alt=""/>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default connect()(Introduce);
