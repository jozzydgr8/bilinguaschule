import { FlatButton } from "../../../shared/FlatButton"
import {CheckOutlined} from '@ant-design/icons';
import heroImage from '../../../assets/teachingGerman.png';

export const Hero = ()=>{
    return(
        <section id='hero'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        
                        <div className="heroBadge">
                            
                        <span className='homeBadgeParent '> 
                            <span className='homeBadge'></span>
                            Est.2020 · CAC Registered
                            </span>
                        </div>
                        <br/>
                        
                        <h1>
                            Learn German <span style={{color:'var(--primary-blue)'}}>With Confidence</span>
                        </h1>
                        <br/>
                        <p className='subtopic'>
                            Flexible online German courses from A1 beginner to B1 intermediate. Our bilingual teachers explain concepts in English when needed, so you never feel lost. Master speaking, writing, and exam preparation at your pace.
                        </p>
                        <div>
                            <FlatButton title='Start Learning Today' className=" btn btn-xl btnPrimary"/> <FlatButton title='see how it works' className='btn btn-xl btnSecondary'/>
                        </div>
                        <br/>

                        <div className="row heroBottom">
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined/> Free trial lesson</small>
                            </div>
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined/> Small group classes</small>

                            </div>
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined/> Exam prep included</small>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="heroImage"
                        style={{
                            backgroundImage: `url(${heroImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition:'center',
                            borderRadius:'10px',    }}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}