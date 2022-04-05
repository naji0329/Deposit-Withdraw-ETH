import React from 'react';
import { connect } from 'react-redux';
import { Fade } from "react-reveal";
import {Accordion} from "react-bootstrap";

const Faq = () => {
  return (
    <section id="faq" style={{"padding": "100px 0px"}}>
        <Fade bottom>
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                    <div className="text-center" style={{"padding": "60px 30px 30px 30px", "border-radius": "50px", "background": "#3c2b5b", "color": "white"}}>
                        <h1 style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}><strong>Frequently Asked Questions</strong><br/></h1>
                        <h5 style={{"font-family": "'Comic Neue', serif"}}><strong>Any questions you have we are here to answer.</strong><br/></h5>
                        <div className="accordion" role="tablist" id="accordion-1" style={{"margin-top": "30px", "color": "rgb(0,0,0)", "font-family": "'Comic Neue', serif"}}>
                            
                        <Accordion defaultActiveKey="0" >
                            <Accordion.Item eventKey="0" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "Comic Neue", "font-weight": "bold"}}>WHEN IS THE OFFICIAL LAUNCH?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">The official launch date will be the XX.XX.XXXX at 7PM UTC.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>WHAT WILL BE THE PRICE?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">The Price of Minting will be 0.1ETH + Gas Fees.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>HOW MANY NFT’S CAN I MINT?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">Your can mint a max. of 5pcs per Wallet.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>HOW DO I GET WHITELISTED?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">Our Whitelist is still open, you can check all the info on our discord.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>WHERE I WILL BE ABLE TO SEE MY SPACE KOALA NFT?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">Once you have minted a SPACE KOALA NFT, you will be able to see it by connecting your wallet to OpenSea.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>HOW I CAN BUY A SPACE KOALAS NFT?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">You will be able to buy only on our website when we launch.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className="accordion-item" style={{"padding": "14px"}}>
                                <Accordion.Header style={{"font-family": "'Comic Neue', serif", "font-weight": "bold"}}>WHY SPACE KOALAS?</Accordion.Header>
                                <Accordion.Body className="accordion-collapse collapse show item-1" >
                                    <p className="mb-0">When you buy a SPACE KOALA, you’re not simply buying a simple NFT, you are getting a chance to fly with your NFT-Koala into the space.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            
                        </div>
                        <div style={{"margin-top": "48px"}}>
                            <h5 style={{"font-family": "'Comic Neue', serif"}}><strong>Haven’t got your answer?&nbsp;</strong><a href="https://twitter.com/spacekoalasnft" target={"_blank"} rel="noreferrer">Contact us on Twitter</a><br/></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </Fade>
    </section>
  );
};

export default connect()(Faq);
