import React from 'react';
import { connect } from 'react-redux';
import { Fade } from "react-reveal";

const Roadmap = () => {
  return (
    <Fade bottom>
    <section id="roadmap" style={{"padding": "100px 0px"}}>
        <div className="container m-auto" data-aos="fade-up" style={{"background": "#3c2b5b", "padding": "60px 30px 30px 30px", "border-radius": "50px", "color": "white"}}>
            <div style={{"text-align": "center", "margin-bottom": "30px"}}>
                <h1 style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}><strong>The Space Koalas NFT Roadmap</strong><br/></h1>
                <h5 style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}><strong>Reports of a few Space Koalas spotted in the metaverse.</strong><br/><strong>Here's your compass for the journey...</strong><br/></h5>
            </div>
            <div className="row" style={{"margin-top": "10px", "margin-bottom": "10px"}}>
                <div className="col-md-12">
                    <Fade bottom>
                    <div className="d-xxl-flex" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>Our goal is to generate a harmonious community. Therefore, our top priority is to make your investment and our NFT's as successful as possible. +For this reason, we will only release our NFT's when we think they are of the best possible quality. We will also not announce our drop release date until we are also satisfied with the technical parts of the project.<br/></h5>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="d-flex d-xxl-flex flex-column justify-content-xxl-start" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h3 style={{"color": "rgb(16,242,215)", "font-family": "'Comic Neue', serif", "font-weight": "bold"}}>Release date announcement<br/></h3>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>After the date is announced, we will start a 7-day timer.<br/></h5>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="d-flex d-xxl-flex flex-column justify-content-xxl-start" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h3 style={{"color": "rgb(16,242,215)", "font-family": "'Comic Neue', serif", "font-weight": "bold"}}>Release<br/></h3>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>A week after the release date was announced. To celebrate the achievement of our goals, we will organize a spaced party for our owners. The community will choose the location.<br/></h5>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="d-xxl-flex" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>We will donate 10 percent of profits to a koala sanctuary/foundation. This is located in Australia. Unfortunately, the koalas are repeatedly badly affected by bush fires. This money is intended to help the koalas directly. Be it in koala sanctuaries or in reforestation.<br/>We are currently still in talks with various foundations. We will announce a link on our homepage as soon as possible.</h5>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="d-flex d-xxl-flex flex-column justify-content-xxl-start" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h3 style={{"color": "rgb(16,242,215)", "font-family": "'Comic Neue', serif", "font-weight": "bold"}}>Reward System<br/></h3>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>We undertake to implement the project in the best possible way and to integrate project ideas from the communities in the best possible way. We will then also reward these project ideas.<br/><br/>Those who will own at least two space koalas will have the opportunity to further develop their space koalas (Mechas, Goldenline, Mutants via Plagued Eucalyptus...&nbsp;... - in consultation with the community)<br/>Part 2 will be announced (among other things in consultation with the largest space koala holders)<br/></h5>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="d-xxl-flex" data-aos="fade-up" style={{"width": "auto", "height": "auto", "padding": "23px", "background": "#523f76", "border-radius": "10px", "margin": "10px"}}>
                        <h5 style={{"font-weight": "bold", "font-family": "'Comic Neue', serif"}}>Our designers are already working on the development of the 3D Koalas. However, the 3D koalas will only come after the mutants/... on the market.</h5>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
    </Fade>
  );
};

export default connect()(Roadmap);
