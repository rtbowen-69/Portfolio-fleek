// Import Assets
import dapp from '../assets/dapp.png';
import rodspunkies from '../assets/rodspunkies.png';
import ethdaddy from '../assets/eth_daddylp.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Dapp Trading</h3>
                    <img src={dapp} alt="Dapp Token Swap Page" />
                    <p>This is the first trading program that I developed through the guidance of a blockchain bootcamp. I learned a lot through this process. The basics of WEB3 and coding.
                    </p>

                    <a href="https://dawn-bread-9662.on.fleek.co//" target="_blank" className="button">Site</a>
                    <a href="https://github.com/rtbowen-69/blockchaindeveloperbootcamp2.0" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Minting</h3>
                    <img src={rodspunkies} alt="NFT Minting Landing Page" />
                    <p>The very first NFT minting site I developed with the help of DAP University.
                        Learned how to create and deploy NFTs,
                        Free mints on the Goerli Test net.
                    </p>

                    <a href="https://shrill-band-1144.on.fleek.co//" target="_blank" className="button">Site</a>
                    <a href="https://github.com/rtbowen-69/RodsPunkies" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>ETH Daddy</h3>
                    <img src={ethdaddy} alt="ETH Daddy Landing Page" />
                    <p>This is a shell for a Web3 Domain Name service like Go Daddy.
                        Web3 addresses can be bought and sold on the blockchain as NFTs.
                        It gets you the security of the blockchain with the immutiability of NFTs.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;