import React, { useEffect, useState } from 'react';
import {
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import Moment from 'react-moment';

import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import TokenArtifact from "../../contracts/NFT.json";
import contractAddress from "../../contracts/contract-address.json";

const AlchemyWeb3URL = "https://eth-rinkeby.alchemyapi.io/v2/gdOvJjVNmQ6fAqIZ46sy7uTYW-Is7-Kl";
let web3;
let contract;
const allowedChainId = 4;

const Action = () => {

  const [address, setAddress] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0.1);
  const [withdrawAmount, setWithdrawAmoun] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [invested, setInvested] = useState(0);
  const [withdrawn, setWithdrawn] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    web3 = createAlchemyWeb3(AlchemyWeb3URL);
    contract = new web3.eth.Contract(
      TokenArtifact.abi,
      contractAddress.Token
    );

    getInvestedAmount();
    getWithDrawAmount();

  })

  const getInvestedAmount = async () => {
    const investedValue = await contract.methods.invested().call();
    setInvested(investedValue / (10 ** 18));
  }

  const getWithDrawAmount = async () => {
    const withdrawnValue = await contract.methods.withdrawn().call();
    console.log("withdrawnValue", withdrawnValue);
    setWithdrawn(withdrawnValue / (10 ** 18));
  }

  const getUserInfo = async (userAddress) => {
    const userInfoData = await contract.methods.userInfo(userAddress).call();
    setUserInfo(userInfoData);
    console.log("userInfo", userInfoData);
  }

  const connectWallet = async () => {
    const [userAddress] = await window.ethereum.enable();
    setAddress(userAddress);
    getUserInfo(userAddress);
  }

  const deposit = async () => {
    setLoading(true);
    if (!checkNetwork()) {
      setLoading(false);
      return;
    }

    contract.methods
      .deposit()
      .send({
        gasLimit: 285000,
        from: address,
        value: depositAmount * 10 ** 18,
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(
          err,
          "Error within deposit"
        );
      })
      .then(async (receipt) => {
        setLoading(false);
        // const event = receipt.events;
        
        getInvestedAmount();
        getWithDrawAmount();
        getUserInfo(address);
        alert("Deposit Success!");
      }); // Minting the token
  }

  
  const withdraw = async () => {
    setLoading(true);
    if (!checkNetwork()) {
      setLoading(false);
      return;
    }

    console.log(`withdraw to ${address} : ${withdrawAmount}`);

    contract.methods
      .withdraw((withdrawAmount * 10 ** 18).toString())
      .send({
        gasLimit: 285000,
        from: address,
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(
          err,
          "Error within withdraw"
        );
      })
      .then(async (receipt) => {
        setLoading(false);
        // const event = receipt.events;
        
        getInvestedAmount();
        getWithDrawAmount();
        getUserInfo(address);
        alert("Withdraw Success!");
      }); // Minting the token
  }


  const loadingSpinner = (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  ); 
  
  // This method checks if Metamask selected network is Localhost:8545
  const checkNetwork = () => {
    console.log("allowed chain id " + allowedChainId);
    console.log("current chain id " + window.ethereum.networkVersion );
    if (window.ethereum.networkVersion == allowedChainId) {
      return true;
    }
    alert("Please connect Metamask to RinkeBy!");
    return false;
  };


  const connectWalletBtn = (
    <button onClick={connectWallet} className="btn portofolio_connect_btn mt-3" data-bss-hover-animate="bounce" type="button" style={{"border-radius": "5px", "width": "195.234px", "height": "70px", "background-color": "#0ea0ff", "border-bottom": "5px solid #0d6efd", "font-weight": "bold", "color": "white", "font-size": "18px"}}>Connect Wallet</button>
  )
  const depositBtn = (
    <div className='mt-3 d-flex align-items-center justify-content-center'>
      <input type={"number"} min="0.1" onChange={(e) => setDepositAmount(e.target.value) } value={depositAmount} style={{"background": "#0ea0ff !important", "font-weight": "bold", "height": "40px", "font-size": "18px", "paddingLeft": "20px", "width": "200px"}} />
      <button onClick={deposit} className="btn btn-primary portofolio_mint_btn" data-bss-hover-animate="bounce" 
          disabled={isLoading} type="button" style={{"background": "#0ea0ff !important", "border-bottom": "#0d6efd solid 5px", "font-weight": "bold", "height": "40px", "font-size": "18px"}}>
          {isLoading ? loadingSpinner : ""}Deposit</button>
    </div>
  )

  const withdrawBtn = (
    <div className='mt-3 d-flex align-items-center justify-content-center'>
      <input type={"number"} min="0.1" onChange={(e) => setWithdrawAmoun(e.target.value) } value={withdrawAmount} style={{"background": "#0ea0ff !important", "font-weight": "bold", "height": "40px", "font-size": "18px", "paddingLeft": "20px", "width": "200px"}} />
      <button onClick={withdraw} className="btn btn-primary portofolio_mint_btn" data-bss-hover-animate="bounce" 
          disabled={isLoading} type="button" style={{"background": "#0ea0ff !important", "border-bottom": "#0d6efd solid 5px", "font-weight": "bold", "height": "40px", "font-size": "18px"}}>
          {isLoading ? loadingSpinner : ""}Withdraw</button>
    </div>
  )

  return (
    <>
      <Row className='text-center text-light' style={{"marginBottom": "200px"}}>
        <Col><h2>Total Deposit<br/> {invested} ETH</h2></Col>
        <Col><h2>Total Withdraw<br/> {withdrawn} ETH</h2></Col>
        <Col><h2>Contract Value<br/> {invested - withdrawn} ETH</h2></Col>
      </Row>
      <section className="portfolio-block" id="action">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 text-center" style={{"color": "rgb(255,255,255)", "font-family": "'Comic Neue', serif"}}>
              <h1 style={{"font-weight": "bold"}}>DEPOSIT</h1>
              <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>You can deposit 0.1 ETH at minium<br/></h5>
              
              <div className="mt-3">
                { address ? depositBtn : connectWalletBtn }
              </div>
            </div>

            <div className="col-md-6 text-center" style={{"color": "rgb(255,255,255)", "font-family": "'Comic Neue', serif"}}>
              <h1 style={{"font-weight": "bold"}}>WITHDRAW</h1>
              <h5 style={{"color": "#10f2d7", "font-weight": "bold", "text-shadow": "1px 1px var(--bs-blue)"}}>Your available withdraw amount is <big>{ address ? userInfo.left_invest / ( 10 ** 18 ) : "0" }</big> Eth<br/></h5>
              <div className="mt-3">
                { address ? withdrawBtn : connectWalletBtn }
              </div>
            </div>
          </div>

          <Row className="my-5">
            <Col>
              { 
                  address ? (
                      <>
                          <Row>
                              <Col className='bg-div mx-3 my-5 text-light text-center'>
                                  <h3 className='text-left'>Deposit History</h3>
                                  <Row className='my-2'>
                                      <Col>Deposit Amount</Col>
                                      <Col>Deposit Date</Col>
                                  </Row>
                                  {userInfo['deposits'] &&
                                      userInfo['deposits'].map((item, index) => {
                                      return (
                                          <>
                                              <Row>
                                                  <Col>{item.amount / ( 10 ** 18 ) } ETH</Col>
                                                  <Col><Moment unix format="YYYY.MM.DD HH.mm.ss">{item.time}</Moment></Col>
                                              </Row>
                                          </>
                                      );
                                  })}
                              </Col>
                          </Row>
                      </>
                  ) : '' 
              }
            </Col>
            <Col>
              { 
                  address ? (
                      <>
                          <Row>
                              <Col className='bg-div mx-3 my-5 text-light text-center'>
                                  <h3 className='text-left'>Withdraw History</h3>
                                  <Row className='my-2'>
                                      <Col>Withdraw Amount</Col>
                                      <Col>Withdraw Date</Col>
                                  </Row>
                                  {userInfo['withdraws'] &&
                                      userInfo['withdraws'].map((item, index) => {
                                      return (
                                          <>
                                              <Row>
                                                  <Col>{item.amount / ( 10 ** 18 ) } ETH</Col>
                                                  <Col><Moment unix format="YYYY.MM.DD HH.mm.ss">{item.time}</Moment></Col>
                                              </Row>
                                          </>
                                      );
                                  })}
                              </Col>
                          </Row>
                      </>
                  ) : '' 
              }
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Action;
