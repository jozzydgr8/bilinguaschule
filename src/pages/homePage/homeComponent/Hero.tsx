import { FlatButton } from "../../../shared/FlatButton"
import {CheckOutlined, ArrowRightOutlined} from '@ant-design/icons';
import heroImage from '../../../assets/teachingGerman.png';
import { handleRequest } from "../../../shared/handleRequest";
import { useEffect } from "react";
export const Hero = ()=>{
    useEffect(() => {
    const headerText = document.querySelector('.heroWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerImage = document.querySelector('.heroImage');
    headerImage?.classList.add('sectionAnimationRight');

    const headerBottom = document.querySelector('.heroBottom');
    headerBottom?.classList.add('sectionAnimationUp');

    const headerButton = document.querySelector('.heroButton');
    headerButton?.classList.add('sectionAnimationUp');

    const heroBadge = document.querySelector('.heroBadge');
    heroBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section id='hero'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        
                        <div className="heroBadge">
                            
                        <span className='homeBadgeParent '> 
                            <span className='homeBadge'></span>
                            Learn From Anywhere
                            </span>
                        </div>
                        <br/>
                        
                        <h1>
                           Learn German Online <span style={{color:'var(--primary-blue)'}}>with Bilinguaschule</span>
                        </h1>
                        <br/>
                        <p className='subtopic heroWrite'>
                          At Bilinguaschule, we're committed to helping you master German and succeed in your German language certification exams. Whether you're a beginner or advancing your skills, our experienced instructors deliver engaging, structured online lessons designed to help you reach your goals with confidence.

                        </p>
                        <div className="heroButton">
                            
                            <FlatButton onClick={() =>
                            handleRequest(
                            "Hello! I'm interested in learning German with Bilinguaschule. I'd like to know more about your classes."
                            )
                        } icon={<ArrowRightOutlined />} title='begin your journey' className=" btn btn-xl btnPrimary"/> <a href="/#courses"><FlatButton title='view our courses' className='btn btn-xl btnSecondary'/></a>
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
                        <div className="homeImage heroImage"
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