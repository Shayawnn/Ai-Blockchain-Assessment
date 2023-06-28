# Ai-Blockchain-Assessment

This assessment serves as a simple project to evaluate your proficiency and experience working with Web3 by implementing a sign process using MetaMask.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Changes Made](#changes-made)

## Setup Instructions <a name="setup-instructions"></a>

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. You can check your Node.js and npm version by running `node -v` and `npm -v` in your terminal. If you have a different version, you can use [nvm](https://github.com/nvm-sh/nvm) to switch to the required version.
- You have installed Yarn. You can check if Yarn is installed by running `yarn -v` in your terminal. If Yarn is not installed, you can install it by running `npm install --global yarn`.
- You have installed [MetaMask](https://metamask.io/download/) browser extension.

### Installing

To setup the project on your local machine:

1. Clone the repository
    ```bash
    git clone https://github.com/Shayawnn/Ai-Blockchain-Assessment.git
    ```
2. Navigate to the project directory
    ```bash
    cd Ai-Blockchain-Hiring-main
    ```
3. Install the required dependencies:
   ```bash
    yarn install
    ```
4. To run the project:
   ```bash
    npm start
    ```
The application will open in your default browser at `http://localhost:3000/`.

## Changes Made <a name="changes-made"></a>

In `src/components/Header/index.js`:

- The Metamask connection feature was updated to give a more user-friendly alert if Metamask is not installed, rather than just logging the error in the console.
- The connection status ("Connected" or "Connect Wallet") is now displayed on the page.
- A feature was added to sign a message ("Hello, Ai-Blockchain!") using Metamask. After the user clicks the "Sign with MetaMask" button, the signature is displayed in an alert.

To connect your wallet and sign the message, click on the "Connect Wallet" link in the header. Once connected, the link text will change to "Connected", and you can click the "Sign with MetaMask" button to sign the message. The signature will be displayed in an alert.

