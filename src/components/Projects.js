// Import Assets
import dapp from '../assets/dapp.png';
import rodspunkies from '../assets/rodspunkies.png';
import swiftees from '../assets/Swiftees Site.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Dapp Trading</h3>
                    <img src={dapp} alt="Dapp Token Swap Page" />
                    <p>This is the first ERC20 trading program that I developed through the guidance of a blockchain bootcamp. 
                        I learned a lot through this process such as React, CSS and WEB3 coding.  
                        The basics of WEB3 and how Smart Contracts and coding interact with WEB3.
                    </p>

                    <a href="https://dawn-bread-9662.on.fleek.co//" target="_blank" className="button">Site</a>
                    <a href="https://github.com/rtbowen-69/blockchaindeveloperbootcamp2.0" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Minting</h3>
                    <img src={rodspunkies} alt="NFT Minting Landing Page" />
                    <p>The very first NFT minting site I developed with the help of DApp University.
                        we Learned how to create a ERC-721 Smart Contracts, generate images and deploy NFTs to sites like OpenSea.
                        Free mints on the Goerli Test net.
                    </p>

                    <a href="https://shrill-band-1144.on.fleek.co//" target="_blank" className="button">Site</a>
                    <a href="https://github.com/rtbowen-69/RodsPunkies" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Swif Tees</h3>
                    <img src={swiftees} alt="Swif Tees NFT's and Ticketing Project" />
                    <p>This is my first ERC-721 project that I coded on my own with minimal help.
                        This is a Fan NFT site where owners of the Fan NFT get early access to concert tickets and special events.
                        This helps fights scalpers and lets true fans pay a fair price for tickets.
                    </p>

                    <a href="https://cool-haze-8908.on.fleek.co//" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;