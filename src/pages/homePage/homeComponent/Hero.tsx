import { FlatButton } from "../../../shared/FlatButton"
import {CheckOutlined, ArrowRightOutlined} from '@ant-design/icons';
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
                            Live Online Classes — Learn From Anywhere
                            </span>
                        </div>
                        <br/>
                        
                        <h1>
                           Learn German Online <span style={{color:'var(--primary-blue)'}}>with Bilinguaschule</span>
                        </h1>
                        <br/>
                        <p className='subtopic'>
                          At Bilinguaschule, we're committed to helping you master German and succeed in your German language certification exams. Whether you're a beginner or advancing your skills, our experienced instructors deliver engaging, structured online lessons designed to help you reach your goals with confidence.

                        </p>
                        <div>
                            <FlatButton icon={<ArrowRightOutlined />} title='begin your journey' className=" btn btn-xl btnPrimary"/> <FlatButton title='view our courses' className='btn btn-xl btnSecondary'/>
                        </div>
                        <br/>

                        <div className="row heroBottom">
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined style={{color:'var(--primary-blue)'}}/> Free trial lesson</small>
                            </div>
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined style={{color:'var(--primary-blue)'}}/> Small group classes</small>

                            </div>
                            <div className="col-md-4 mb-2">
                                <small style={{display:"flex", gap:'12px'}}><CheckOutlined style={{color:'var(--primary-blue)'}}/> Exam prep included</small>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="homeImage"
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