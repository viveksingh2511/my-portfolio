import React from "react";
import "../src/style.css"; 
import MyImage from "./Image/Vivek.jpg"

const About = () => {
    return (
        <>
        <div className="main-div">
        <table className="table">
            <tr>
                <td className="td1"><div><img className="Pimg" src={MyImage} alt="My Image" /></div></td>
                <td className="td2" valign="top">
                    <div className="h1">Vivek Singh</div>
                    <div>About</div>
                    <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                        Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                        Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\</p>
                </td>
            </tr>
        </table>
        </div>
        </>
    );
};
export default About;