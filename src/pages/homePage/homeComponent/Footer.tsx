import {PhoneOutlined,LinkedinOutlined,TwitterOutlined,GithubOutlined,
        MailOutlined,
        ArrowRightOutlined,
        EnvironmentOutlined} from '@ant-design/icons';

import { FlatButton } from '../../../shared/FlatButton';
import businessLogo from '../../../assets/businessLogo.png';
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <img src={businessLogo} alt='magresidence-logo'/>

                        <br/>
                        <p>
                           Bilinguaschule teaches German online from A1 to B1 with bilingual teachers who explain in English when needed. Small groups, flexible schedule, real results.
                
                        </p>
                        <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h3>Courses </h3>
                        <br/>
                        <a href="/" target="_blank" rel="noopener noreferrer">German courses</a>
                        <a href="/" target="_blank" rel="noopener noreferrer">Exam Preparation</a>
                        <a href="/#services" target="_blank" rel="noopener noreferrer">Pricing</a>

                    </div>


                    
                    <div className="col-md-3">
                        <h3>Services</h3>
                        <br/>
                        <p>Data Analytics</p>
                        <p>AI Solutions</p>
                        <p>Process Automation</p>
                        <p>Corporate Training</p>
                    </div>


                    <div className="col-md-3">
                        <h3>Get In Touch</h3>
                        <br/>
                        <p><PhoneOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}} />  +234 902 915 4607</p>
                        <p><MailOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}} />  seunaiconulting@gmail.com</p>
                        <p><EnvironmentOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}}/>  Africa / Remote worldwide</p>
                        <FlatButton title="Contact Us" className="btn btnSuccess btn-lg" icon={<ArrowRightOutlined/>}/>
                    </div>
                </div>
                <hr/>
                <p>Copyright © {new Date().getFullYear()} BilingualSchule. All rights reserved.</p>
                <small>
                    <a href="https://jozzycodes.com" target="_blank" rel="noopener noreferrer" style={{ color: "#008080" }}>
                    Website created by jozzycodes
                </a>
                </small>
            </div>
        </footer>
    )
}