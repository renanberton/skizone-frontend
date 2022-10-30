import './style.scss';

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    CONTATO
                </li>
                <li>
                    (11) 9999-9999<br/>
                    contato@skinzone.com.br
                </li>
                <li>
                    <div className="social-media">
                        <img src="assets/images/social-icons/facebook.png" alt="" />
                        <img src="assets/images/social-icons/instagram.png" alt="" />
                        <img src="assets/images/social-icons/twitter.png" alt="" />
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;