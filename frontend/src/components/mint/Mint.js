import React, { useEffect, useState } from 'react';
import {
  InputGroup,
  FormControl,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Spinner,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from "../../contracts/NFT.json";
import contractAddress from "../../contracts/contract-address.json";
import koala_gif from './../../assets/img/koala_small.gif';
// For Live Server(ethereum) :  1
// For Test(rinkeby)         : 4
const Allowed_NETWORK_ID = "4";
const AlchemyWeb3URL = "https://eth-rinkeby.alchemyapi.io/v2/gdOvJjVNmQ6fAqIZ46sy7uTYW-Is7-Kl";

const Mint = () => {
    useEffect(() => {
        getTotalSupply();
    })

  const [address, setAddress] = useState(null);
  const [mintPrice, setMintPrice] = useState(100000000000000000);
  const [mintedCount, setMintedCount] = useState(0);
  const [mintCount, setMintCount] = useState(1);
  const [isLoading, setLoading] = useState(false);


  const connectWallet = async () => {
    const [userAddress] = await window.ethereum.enable();
    setAddress(userAddress);
  }

  const getTotalSupply = async () => {
    const web3 = createAlchemyWeb3(AlchemyWeb3URL);
    const token = new web3.eth.Contract(
      TokenArtifact.abi,
      contractAddress.Token
    );
    const totalSupply = await token.methods.totalSupply().call();
    setMintedCount(totalSupply);
  };


  const mint = async () => {
    setLoading(true);
    if (!checkNetwork()) {
      setLoading(false);
      return;
    }
    const web3 = createAlchemyWeb3(AlchemyWeb3URL);

    const token = new web3.eth.Contract(
      TokenArtifact.abi,
      contractAddress.Token
    );

    token.methods
      .mint(address, mintCount)
      .send({
        gasLimit: 285000 * mintCount,
        to: contractAddress.Token, // the address of your contract
        from: address,
        value: mintPrice * mintCount,
        // "value": 100000000 * mintCount,
      })
      .once("error", (err) => {
        setLoading(false);
        console.log(
          err,
          "EEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR"
        );
      })
      .then(async (receipt) => {
        setLoading(false);
        // const event = receipt.events;
        toast.success("Mint Success!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
        getTotalSupply();
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
    if (window.ethereum.networkVersion === Allowed_NETWORK_ID) {
      return true;
    }
    toast.error("Please connect Metamask to RinkeBy!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  };


  const connectWalletBtn = (
    <button onClick={connectWallet} className="btn portofolio_connect_btn mt-3" data-bss-hover-animate="bounce" type="button" style={{"border-radius": "5px", "width": "195.234px", "height": "70px", "background-color": "#0ea0ff", "border-bottom": "5px solid #0d6efd", "font-weight": "bold", "color": "white", "font-size": "18px"}}>Connect Wallet</button>
  )
  const mintNFTBtn = (
    <div>
      <p style={{"color": "white"}}>Connected Address: {address}</p>
      <button onClick={mint} className="btn btn-primary portofolio_mint_btn mt-1" data-bss-hover-animate="bounce" 
          disabled={isLoading} type="button" style={{"border-radius": "5px", "background": "#0ea0ff !important", "border-bottom": "#0d6efd solid 5px", "font-weight": "bold", "height": "70px", "font-size": "18px"}}>
          {isLoading ? loadingSpinner : ""}Mint NFT</button>
    </div>
  )

  return (
    <section className="portfolio-block block-intro portfolio-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white" style={{"textAlign": "center"}}>
                <img data-bss-hover-animate="pulse" className='portofolio_img rounded-circle' src={koala_gif} style={{"max-width": "300px", "width": "80%"}} alt=""/>

                <div className=' mint-control mt-3'>
                  <p className="minted-number">Left NFTs <span>{9999 - mintedCount}/9999</span></p>
                  <p className="mint-price mt-1">
                    {mintPrice / Math.pow(10, 18)} ETH + Gas Fee
                  </p>
                  <ButtonToolbar
                    className="mb-2 text-center justify-content-center"
                    aria-label="Toolbar with Button groups"
                  >
                    <InputGroup className="me-2 mt-1">
                      <InputGroup.Text
                        id="btnGroupAddon"
                        onClick={() => setMintCount(Math.max(1, mintCount - 1))}
                        className="mint-counter-minus rounded-0 border-primary"
                      >
                        -
                      </InputGroup.Text>
                      <FormControl
                        type="number"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                        value={mintCount}
                        onChange={(e) => {
                          if (e.target.value > 5) {
                            setMintCount(5);
                          } else if (e.target.value < 1) {
                            setMintCount(1);
                          } else {
                            setMintCount(e.target.value);
                          }
                        }}
                        min={1}
                        max={5}
                        className="rounded-0 border-primary mint-counter-input"
                      />
                      <InputGroup.Text
                        id="btnGroupAddon"
                        onClick={() => setMintCount(Math.min(5, mintCount + 1))}
                        className="mint-counter-plus rounded-0 border-primary"
                      >
                        +
                      </InputGroup.Text>
                    </InputGroup>
                    <ButtonGroup
                      className="me-2 mt-1 gap-2 btn-counter-group"
                      aria-label="First group"
                    >
                      <Button
                        variant="secondary"
                        className="border-primary rounded-0"
                        onClick={() => setMintCount(1)}
                      >
                        1
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        className="border-primary rounded-0"
                        onClick={() => setMintCount(2)}
                      >
                        2
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        className="border-primary rounded-0"
                        onClick={() => setMintCount(3)}
                      >
                        3
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        className="border-primary rounded-0"
                        onClick={() => setMintCount(4)}
                      >
                        4
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        className="border-primary rounded-0"
                        onClick={() => setMintCount(5)}
                      >
                        5
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  { address ? mintNFTBtn : connectWalletBtn }
                </div>
          </div>
        </div>
      </div>
        {/* <ToastContainer /> */}
    </section>
  );
};

export default Mint;
