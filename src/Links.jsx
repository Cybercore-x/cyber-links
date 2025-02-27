import myImage from "/src/assets/cyber.png";
import Gaming from "/src/assets/alienbyte.png";
import Apollo from "/src/assets/Apollo.png";
import BNB from "/src/assets/bnb.png";
import GitHub from "/src/assets/github.png";
import TikTok from "/src/assets/tiktok.png";
import YouTube from "/src/assets/youtube logo.png";
import linkedin from "/src/assets/linkedin.png";
import "./Links.css";
import Animation from "./Animation";
import Bitcoin from "./Bitcoin.jsx";
import Theme from "./Theme.jsx";

const links = [
    {
        img: YouTube,
        alt: "YouTube Icon",
        text: "YouTube Channel",
        url: "https://www.youtube.com/@cybercore-x",
    },
    {
        img: TikTok,
        alt: "TikTok Icon",
        text: "TikTok",
        url: "https://www.tiktok.com/@cybercore.x1",
    },
    {
        img: Apollo,
        alt: "Apollo Store Icon",
        text: "Online Store",
        url: "https://apollostore.printify.me/",
    },
    {
        img: GitHub,
        alt: "GitHub Icon",
        text: "GitHub",
        url: "https://github.com/Cybercore-x",
    },
    {
        img: BNB,
        alt: "BNB Icon",
        text: "Binance NFT Store",
        url: "https://www.binance.com/nft/my-nfts/created/cybercorex-05f934bbfd2968d5a33e31597d7a7f49",
    },
    {
        img: linkedin,
        alt: "LinkedIn Icon",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/hector-delgadillo/",
    },
    {
        img: Gaming,
        alt: "Gaming Icon",
        text: "Gaming Channel",
        url: "https://linktr.ee/Alien_Byte",
        id: "blue-gaming",
    },
];

function Link() {
    return (
        <div className="container">
            <div>
                <Bitcoin />
            </div>
            <div>
                <Animation />
            </div>
            <div>
                <Theme />
            </div>
            <img className="logo" src={myImage} alt="CyberCore-x Logo" />
            <h1 data-glitch="CyberCore-x" className="title">
                CyberCore-x
            </h1>
            <p className="p">
                <b>
                    Powered By AI <br />
                    Crypto, Investments and motivatinal videos
                </b>
            </p>
            {links.map((link, index) => (
                <div
                    key={index}
                    className="container-child"
                    id={link.id ? link.id : undefined}
                    style={{ color: 'inherit' }}
                >
                    <img className="icon" src={link.img} alt={link.alt} />
                    <a
                        className="links"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        {link.text}
                    </a>
                </div>
            ))}
        </div>
    );
}
export default Link;
