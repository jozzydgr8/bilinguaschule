import { FlatButton } from "../../../shared/FlatButton";
import {ArrowRightOutlined, MailOutlined} from '@ant-design/icons'

export const Cta = ()=>{
    return(
        <section id="cta">
            <div className="container-fluid text-center d-flex justify-content-center">
               
                    <div style={{maxWidth:'750px'}}>
                        <span className="homeBadgeParentAlt">Begin Your German Learning Journey</span>
                    <h2 className="mt-4">Ready to Start Speaking <span style={{color:'var(--burnished-gold)'}}>German?</span></h2>
                    <br/>
                    <p className="subtopic">
                        Whether your goal is higher education, career advancement, relocation, or obtaining a German language certificate, Bilinguaschule is here to help you succeed.
                    </p>
                    <br/>
                    <FlatButton icon={<ArrowRightOutlined/>} title="Enroll today" className="btn btnAlternate btn-xl"/> <FlatButton iconTwo={<MailOutlined/>} title="bilingualschule@yahoo.com" className="btn btnSecondary btn-xl"/>
                        <br/><br/>
                    <small style={{color:'gray'}}>Take the next step toward fluency in German with confidence.</small>
                    </div>
            </div>
        </section>
    )
}