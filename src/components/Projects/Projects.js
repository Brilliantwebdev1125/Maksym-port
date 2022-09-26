import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import houseSell from "../../Assets/Projects/housesell.PNG";
import danapayClient from "../../Assets/Projects/danapay-1.png";
import danapayAdmin from "../../Assets/Projects/danapay-2.png";
import rapidWristband from "../../Assets/Projects/rapid-2.png";
import mintAirdrop from "../../Assets/Projects/airdropmint.JPG";
import foodDelivery from "../../Assets/Projects/foodDelivery.png";
import treeDefi from "../../Assets/Projects/tree.PNG";
import miroTalk from "../../Assets/Projects/mirotalk-header.gif";
import marketplace from "../../Assets/Projects/marketplace.JPG";
import nonoNFT from "../../Assets/Projects/nonoNFT.JPG";
import roosterWars from "../../Assets/Projects/roosterwars.JPG";
import polyCat from "../../Assets/Projects/polycat.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseSell}
              isBlog={false}
              title="House Selling project"
              description="E-commerce project for buying and selling house.
              AngularJS, Angular CLI, Angular Material, Prime NG used.
               Integrated Google Maps API"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://housebuyersofamerica.com/"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danapayClient}
              isBlog={false}
              title="Danapay Client Financial Project"
              description="Financial Project for sending Money using Crypto and several Bank accounts. Used React and Node.js and implemented Sumsub registration."
              ghLink="https://github.com/Brilliantwebdev1125/Danapay-app-front"
              demoLink="https://app.danapay.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danapayAdmin}
              isBlog={false}
              title="Danapay Admin Project"
              description="Danapay Admin project for managing users, transactions and so on. Used Vue.js and Laravel and implemented several Blockchain features using Solidiy."
              // ghLink="https://github.com/Brilliantwebdev1125/Danapay-app-front"
              demoLink="https://admin.danapay.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapidWristband}
              isBlog={false}
              title="Wristbands online shopping project"
              description="RapidWristband online shopping project in United States. Used Laravel and Aemios for CMS. I made version 1.0 from scratch and upgraded to 2.0 with Ionic-React. I used Cypress and Laravel Dusk for Testing."
              ghLink="https://github.com/Brilliantwebdev1125/RapidWristband1.0.git"
              demoLink="https://rapidwristbands.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mintAirdrop}
              isBlog={false}
              title="Airdrop Minting Project"
              description="A successful NFT project in bear crypto market!!!
Beautiful UI and special utility page.
Implemented special complex minting process with 3 levels of whitelists."
              // ghLink="https://github.com/Brilliantwebdev1125/RapidWristband1.0.git"
              demoLink="https://airdrophouses.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery}
              isBlog={false}
              title="Food Delivery App"
              description="Food Delivery Project using MERN stack. Deployed using Heroku. Implemented Admin and Customer side. It is simple Online-shopping project."
              ghLink="https://github.com/Brilliantwebdev1125/Food-Delivery-App"
              demoLink="https://fast-food-delivery-app.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treeDefi}
              isBlog={false}
              title="Tree Defi Project"
              description="Users can buy Trees using Crypto and contribute in decreasing CO2. Developed Defi Contract, Front-End using React and integrated using web3.js. "
              // ghLink="https://github.com/Brilliantwebdev1125/Food-Delivery-App"
              demoLink="https://app.treedefi.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miroTalk}
              isBlog={false}
              title="MiroTalk Video Chat App"
              description="Best video chat app.Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms."
              ghLink="https://github.com/Brilliantwebdev1125/MiroTalk-Video-Chat-App"
              demoLink="https://p2p.mirotalk.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="NFT Marketplace"
              description="NFT marketplace with React, Node and Blockchain Technology. Developed from scratch. Future areas and perks can be unlocked by the community through roadmap activation. "
              // ghLink="https://github.com/Brilliantwebdev1125/MiroTalk-Video-Chat-App"
              demoLink="https://testnet.sundrip.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nonoNFT}
              isBlog={false}
              title="NONO NFT Mint project"
              description="Created Clean and 3D UI using Three.js. NoNo Mint launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard.
"
              ghLink="https://github.com/Brilliantwebdev1125/React-Nono-NFT"
              demoLink="https://nono.la/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roosterWars}
              isBlog={false}
              title="RoosterWars Blockchain Game"
              description="Mainly worked on building smart contract and web3 integration.
In this game, players can buy and sell rooster, egg, gem and gaff.
There are also utility contracts such as egg sale, marketplace, store, fight betting, jackpot, tournament and so on.
"
              // ghLink="https://github.com/Brilliantwebdev1125/React-Nono-NFT"
              demoLink="https://www.roosterwars.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polyCat}
              isBlog={false}
              title="PolyCat Dex project"
              description="Forked pancakeSwap, implemented fantastic UI, Lower Fee - Maximum Earning when Exchange. Safe and Flexible, reliable Exchange. Well audited smart contracts.
"
              // ghLink="https://github.com/Brilliantwebdev1125/React-Nono-NFT"
              demoLink="https://polycat.finance/farms"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
