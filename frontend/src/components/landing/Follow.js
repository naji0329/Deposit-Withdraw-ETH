import React from 'react';
import { connect } from 'react-redux';

import discord from './../../assets/img/discord.png';
import twitter from './../../assets/img/twitter.png';
import opensea from './../../assets/img/opensea.png';


const Follow = () => {
  return (
    <section style={{"padding": "50px 0px"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div style={{"text-align": "center"}}>
                        <a href="https://twitter.com/spacekoalasnft" target={"_blank"} rel="noreferrer"><img src={twitter} style={{"max-width": "100px", "width": "25%", "margin": "10px"}} alt="" /></a>
                        <a href="https://discord.gg/5HQ8tyYS" target={"_blank"} rel="noreferrer"><img src={discord} style={{"max-width": "100px", "width": "25%", "margin": "10px"}} alt="" /></a>
                        <a href="https://opensea.io/collection/spacekoalasnft" target={"_blank"} rel="noreferrer"><img src={opensea} style={{"max-width": "100px", "width": "25%", "margin": "10px"}} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default connect()(Follow);
