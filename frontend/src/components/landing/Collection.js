import React from 'react';
import { connect } from 'react-redux';

import x4 from './../../assets/img/4x4.png'
import { Fade } from "react-reveal";

const Collection = () => {
  return (
    <section id="collection" style={{"padding": "100px 0px"}}>
        <div className="container"  >
            <Fade top>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" style={{"padding": "0px", "text-align": "center"}}>
                        <img src={x4} style={{"max-width": "541px", "width": "90%", "margin": "0px", "margin-left": "0"}} alt="" />
                    </div>
                    <div className="col-lg-6 mt-5" data-aos="fade-up" style={{"color": "rgb(255,255,255)", "font-family": "'Comic Neue', serif"}}>
                        <h1 style={{"font-weight": "bold"}}>A Collection of 9,999 Space Koalas</h1>
                        <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>Benefits<br/></h5>
                        <p>When you buy a Space-Koala, you're not just buying a simple NFT, you're getting
                            Access to a community where the benefits and advantages increase over time. <br/><br/>
                            Want to see your koala in space? Your koala has a chance to go on a space flight. He will take his best friend with him. Are you his best friend?<br/>
                            Furthermore, five NFT koalas will fly to Australia to visit a sanctuary. Again, each koala will take his best friend with him. <br/><br/>
                            We will support this sanctuary with a share of the profits from our project. <br/>
                        </p>
                        <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>Increase the value of your NFT<br/></h5>
                        <p>If you are lucky enough to mint one of our rare NFTs, you can realise 2, 5, maybe even 10 times the value of your investment within a few days.<br/></p>
                        <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>Rewards for holders<br/></h5>
                        <p>NFT holders gain access to our community resources, which are used to actively develop the project. In the process, implemented project ideas benefit the community.<br/></p>
                        <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>Grow your NFT<br/></h5>
                        <p>Space koala owners can breed their koalas to create a 2nd generation koala. Remember that you need a total of 2 Space-Koalas to breed. <br/>Small perspective: Possible to breed mutants using contaminated/burnt eucalyptus.<br/></p>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
  );
};

export default connect()(Collection);
