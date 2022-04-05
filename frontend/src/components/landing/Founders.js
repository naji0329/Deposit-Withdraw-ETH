import React from 'react';
import { connect } from 'react-redux';
import { Fade } from "react-reveal";

import founder1 from './../../assets/img/15.png';
import founder2 from './../../assets/img/44.png';
import founder3 from './../../assets/img/87.png';
import founder4 from './../../assets/img/152.png';
import founder5 from './../../assets/img/159.png';
import founder6 from './../../assets/img/276.png';

const Founders = () => {
  return (
    <section id="founders" style={{"padding": "100px 0px"}}>
        <div className="container">
            <Fade top>
                <div data-aos="fade-down">
                    <p style={{"margin-bottom": "0px", "font-family": "'Comic Neue', serif", "font-weight": "bold", "color": "rgb(166,151,193)", "text-align": "center"}}>YOUR FRENS&nbsp; THROUGH THE METAVERSE</p>
                    <h1 style={{"font-family": "'Comic Neue', serif", "font-weight": "bold", "text-shadow": "0px 2px var(--bs-blue)", "text-align": "center", "color": "rgb(255,255,255)", "margin-bottom": "51px"}}>The Space Koalas Founders</h1>
                </div>
            </Fade>
            <div className="row">
            <Fade left>
                <div className="col-md-4" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder1} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Kathrin</h2>
                        <p style={{"margin-bottom": "-17px"}}>Designer</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="col-md-4" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder2} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Leon</h2>
                        <p style={{"margin-bottom": "-17px"}}>Designer</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="col-md-4" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder3} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Paul</h2>
                        <p style={{"margin-bottom": "-17px"}}>Blockchain Expert</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="col-md-4 mt-5" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder4} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Marc</h2>
                        <p style={{"margin-bottom": "-17px"}}>Investor</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="col-md-4 mt-5" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder5} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Robert</h2>
                        <p style={{"margin-bottom": "-17px"}}>Co-Founder</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="col-md-4 mt-5" data-aos="fade-right" style={{"text-align": "center"}}>
                    <div>
                        <img className="border rounded-circle border-dark" src={founder6} style={{"max-width": "272px", "width": "70%"}} alt="" />
                    </div>
                    <div style={{"color": "rgb(255,255,255)", "padding-top": "24px"}}>
                        <h2 style={{"font-family": "'Comic Neue', serif, font-weight: bold"}}>Neil</h2>
                        <p style={{"margin-bottom": "-17px"}}>Co-Founder</p>
                        {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
                    </div>
                </div>
            </Fade>
            </div>
        </div>
    </section>
  );
};

export default connect()(Founders);
