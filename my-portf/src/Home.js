import React from "react";
import "../src/style.css";
import MyImage from "../src/Image/perfil.png"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Home = () => {
    return (
        <>
        <div className="body">
            <table className="table">
                <tr>
                    <td className="link">
                    <ul>
      <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
      <li><a href="https://www.twitter.com"><FaTwitter /></a></li>
      <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
    </ul>
                    </td>
                    <td className="detail">
                    <div>
                    <div className="typing-animation"><span>Hi, I'm Alxa</span></div><br/>
                    <p className="proff">Front end Developer</p>
                    High Level Experience in Web Design and<br/>
                    and development Knowledge, producing<br/>
                    quality work.

                    </div>
                    </td>
                    <td className="profile"><div class="circle"><img className="img" src={MyImage} alt="My Image" /></div></td>
                </tr>
            </table>

        </div>
        </>
    );
};
export default Home;

