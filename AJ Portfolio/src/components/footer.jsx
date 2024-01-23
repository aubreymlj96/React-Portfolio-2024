import React from "react";

function Footer(){
    return (
        <footer className="footer">
            <div className="footerContent text-centered">
                <a href='https://github.com/aubreymlj96'>
                <img class="pp-images2" src="/github-logo.png" alt="github"/>
                </a>
                <a href='https://www.linkedin.com/in/aubrey-johnson-190704137/'>
                <img class="pp-images1" src="/vecteezy_linkedin-logo-png-linkedin-logo-transparente-png-linkedin_23986900.png" alt="linkedin"/>
                </a>
                <a href='https://www.instagram.com/aubss_96?igsh=MTZpa3I1OHQ5M3Rueg%3D%3D&utm_source=qr'>
                <img class="pp-images1" src="/vecteezy_instagram-logo-png-instagram-logo-transparent-png_23986521.png" alt="insta"/>
                </a>
            </div>
            <img src="./AJ Portfolio-logos_white2.png" alt="logo-footer" id="logofooter"/>
            <p>@2024 Developer Portfolio - React Website</p>
        </footer>
    )
}

export default Footer;