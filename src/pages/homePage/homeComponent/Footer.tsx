import {PhoneOutlined,InstagramOutlined,TwitterOutlined,TikTokOutlined,
        MailOutlined,
        ArrowRightOutlined,
        SolutionOutlined} from '@ant-design/icons';

import { FlatButton } from '../../../shared/FlatButton';
import businessLogo from '../../../assets/businessLogo.png';
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div >
                        <h2>Ready to start learning German?</h2>
                        <small style={{color:'gray'}}>Join Bilinguaschule today and start speaking German with confidence.</small>
                    </div>
                    <FlatButton title='Start learning today' className='btn btn-lg btnSecondary' icon={<ArrowRightOutlined/>}/>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <img src={businessLogo} alt='magresidence-logo'/>

                        <br/>
                        <p>
                           Bilinguaschule teaches German online from A1 to B1 with bilingual teachers who explain in English when needed. Small groups, flexible schedule, real results.
                
                        </p>
                        <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'var(--primary-blue-transparent)', color:"gray" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px',  background: 'var(--primary-blue-transparent)', color:"gray" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <TikTokOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'var(--primary-blue-transparent)', color:"gray" }} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h3>Courses </h3>
                        
                        <a href="/" target="_blank" rel="noopener noreferrer">German courses</a>
                        <a href="/" target="_blank" rel="noopener noreferrer">Exam Preparation</a>
                        <a href="/#services" target="_blank" rel="noopener noreferrer">Pricing</a>

                    </div>


                    
                    <div className="col-md-3 mb-4">
                        <h3>About</h3>
                        
                        <p>About Us</p>
                        <p>How It Works</p>
                        <p>Student Support</p>
                        
                    </div>


                    <div className="col-md-3 mb-4">
                        <h3>Help</h3>
                       
                        <p><PhoneOutlined className='me-2' style={{fontSize:"20px", color:"gray", padding:"10px", borderRadius:'5px', background:'var(--primary-blue-transparent)'}} />  +234 903 669 1764</p>
                        <p><MailOutlined className='me-2' style={{fontSize:"20px", color:"gray", padding:"10px", borderRadius:'5px', background:'var(--primary-blue-transparent)'}} />  bilingualschule@yahoo.com</p>
                        <p><SolutionOutlined className='me-2' style={{fontSize:"20px", color:"gray", padding:"10px", borderRadius:'5px', background:'var(--primary-blue-transparent)'}}/>  Enroll Now</p>
                        <FlatButton title="Contact Us" className="btn btnPrimary btn-lg" icon={<ArrowRightOutlined/>}/>
                    </div>
                </div>
                <hr/>
                <p>Copyright © {new Date().getFullYear()} BilingualSchule. All rights reserved.</p>
                <small>
                    <a href="https://jozzycodes.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue-light)" }}>
                    Website created by jozzycodes
                </a>
                </small>
            </div>
        </footer>
    )
}