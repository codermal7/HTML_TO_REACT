// import React from 'react';
import "./App.css";
import { useState } from "react";

function App() {
  const { ethereum } = window;
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
          console.log(accounts[0]);
          setWalletConnected(true);
        });
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  return (
    <div>
      {/* <!-- header design --> */}
      <header className="header">
        <a href="#" className="logo">
          dAppFund.
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#top-per" className="active">
            Top
          </a>
          <a href="#edtech">Edtech</a>
          <a href="#fintech">Fintech</a>
          <a href="#contact">Profile</a>
          <button
            className="btn"
            id="connect-button"
            onClick={handleConnectWallet}
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </nav>
      </header>

      {/* <section className="top-per" id="top-per">
        <div className="section-heading">Top Performing Pre IPO's</div>
        <div className="card-container">
          <div className="card">
            <a href="https://www.dream11.com/">
              <img src="images/dream11copy.png" alt="" />
            </a>
            <h3>
              Dream11
              <button className="btn2" id="connect-button">
                Manya
              </button>
            </h3>
            <p>
              A fantasy sports platform that has been valued at over $2.5
              billion
            </p>
          </div>
          <div className="card">
            <a href="https://sharechat.com/">
              <img
                src="https://cdn.selloship.com/images/store_logo_sm/611a577bc2b28.jpeg"
                alt=""
              />
            </a>
            <h3>
              ShareChat
              <button className="btn2" id="connect-button">
                Manya
              </button>
            </h3>
            <p>
              A social media and messaging platform that has been valued at over
              $2 billion
            </p>
          </div>
          <div className="card">
            <a href="https://pharmeasy.in/">
              <img
                src="https://cdn.selloship.com/images/store_logo_sm/611a577bc2b28.jpeg"
                alt=""
              />
            </a>
            <h3>
              PharmEasy
              <button className="btn2" id="connect-button">
                Manya
              </button>
            </h3>
            <p>
              {" "}
              An online pharmacy and healthcare platform that has been valued at
              over $1.5 billion
            </p>
          </div>
          <div className="card">
            <a href="https://pharmeasy.in/">
              <img
                src="https://cdn.selloship.com/images/store_logo_sm/611a577bc2b28.jpeg"
                alt=""
              />
            </a>
            <h3>
              Byjus
              <button className="btn2" id="connect-button">
                Manya
              </button>
            </h3>
            <p>
              An edtech startup that provides online learning services and has
              been valued at over $16 billion
            </p>
          </div>
        </div>
      </section>

      <section className="edtech" id="edtech">
        <div className="section-heading">Edtech</div>
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>

      <section className="fintech" id="fintech">
        <div className="section-heading">Fintech</div>
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section> */}

      <section className="top-per" id="top-per">
        <div className="section-heading">Top Performing Pre IPO's</div>
        <div className="cards-list">
          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                A fantasy sports platform that has been valued at over $2.5
                billion
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>
        </div>
      </section>

      <section className="edtech" id="edtech">
        <div className="section-heading">Edtech</div>
        <div className="cards-list">
          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>
        </div>
      </section>

      <section className="fintech" id="fintech">
        <div className="section-heading">Fintech</div>
        <div className="cards-list">
          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>

          <div className="newc 1">
            <div className="card_image">
              {" "}
              <img src="images/dream11.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, praesentium?
              </p>
              <button className="newcbtn">Invest</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
