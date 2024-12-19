import react from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

const Footer=()=>{
    return(
        <main className="main-Footer">
            <section className="section-footer">
                <div className="heading-footr">
                    <h2>weather searcher</h2>
                </div>
                <div className="conntent-footer">
                    <ul>
                        <li>terms of service</li>
                        <li>current report</li>
                        <li>security</li>
                    </ul>
                </div>
                <div className="last-content-footer">
                <p>© 2024 weather Searcher. all reserved.</p>
                    <ul>
                        <li><a href="https://www.instagram.com/web_code.academy/"><FaInstagram /></a></li>
                        <li><a href=""><FaFacebook /></a></li>
                        <li><a href=""><FaXTwitter /></a></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
export default Footer