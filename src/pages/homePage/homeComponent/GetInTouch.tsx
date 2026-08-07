import { features } from "../../../data"
import { ContactForm } from "./ContactForm"

export const GetInTouch = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <span className="homeBadgeParent">Get in touch</span>
                        <h2 className="subheading mt-4">
                            Ready to Start Your Language Journey?
                        </h2>
                        <p className="subtopic">Have questions about our courses? Want to discuss which level is right for you? Send us a message and we'll get back to you within 24 hours.</p>
                        <br/>
                       
                            {
                                features.map((feature, index)=>(
                                    <div className="d-flex align-items-center mb-4" style={{display:'flex', gap:"15px"}} key={index}>
                                        <div style={{width:"fit-content", fontSize: '2rem',color:'var(--primary-blue-dark)', backgroundColor: 'var(--primary-blue-transparent)', padding: '7px 15px', borderRadius: '10px' }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="subheading">{feature.title}</h4>
                                            <small style={{color:'gray'}}>{feature.description}</small>
                                        </div>
                                    </div>
                                ))
                            }
                    <br/>
                    <div style={{background:'var(--light-blue)', padding:'30px 15px', borderRadius:'10px'}}>
                        <b>98% exam pass rate</b>. Our students consistently achieve their certificate goals. Join them today.
                    </div>
                    </div>


                    <div className="col-md-6">
                        <ContactForm/>
                    </div>

                </div>
            </div>
        </section>
    )
}