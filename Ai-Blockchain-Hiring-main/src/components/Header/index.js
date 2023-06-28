import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
// reactstrap components
import { Row, Col } from 'reactstrap';
import { Link} from 'react-router-dom';

import './index.scss';
function HomePage() {

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if Metamask is installed
    if (typeof window.ethereum == 'undefined') {
      alert("Please install MetaMask to use this feature.");
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Request access to the user's Metamask wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true);
    } catch (error) {
      alert('Failed to connect to wallet: ' + error.message);
    }
  };

  const signMessage = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to use this feature.");
      return;
    }

    const web3 = new Web3(window.ethereum);
    let accounts = await web3.eth.getAccounts();

    if (!accounts.length) {
      alert("Please connect your MetaMask wallet.");
      return;
    }

    let account = accounts[0];
    let message = "Hello, Ai-Blockchain!";
    try {
      let signature = await web3.eth.personal.sign(message, account);
      alert('Signature: ' + signature);
    } catch (err) {
      alert("Failed to sign message: " + err.message);
    }
  };

  return (
      <Row className="padding-32">
        <Col xs="4" className="">
          {' '}
          <img src={require('assets/img/logo.png')} />{' '}
        </Col>
        <Col xs="4" className="logo" >
          <Link to="/" className="margin-12">
            HOME
          </Link>{' '}
          <span>/</span>
          <Link to="/about" className="margin-12">
            ABOUT
          </Link>{' '}
          <span>/</span>
          <Link to="/loginpage" className="margin-12">
            LOGIN
          </Link>
        </Col>
        <Col xs="4" className="logo" >
          <a className="margin-12" onClick={connectWallet}>
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </a>
        </Col>
        <Col xs="4" className="logo" >
          <a className="margin-12" onClick={connectWallet}>
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </a>
          <button onClick={signMessage}>Sign with MetaMask</button>
        </Col>
      </Row>
  );
}

export default HomePage;
