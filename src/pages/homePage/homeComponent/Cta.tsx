import { FlatButton } from "../../../shared/FlatButton";
import {ArrowRightOutlined, MailOutlined} from '@ant-design/icons'
import { handleEmailSend } from "../../../shared/handleEmailSend";

export const Cta = ()=>{
    return(
        <section id="cta">
            <div className="d-flex justify-content-center text-center"
    style={{ padding: "4rem 1rem" }}>
               
                    <div style={{maxWidth:'750px'}}>
                        <span className="homeBadgeParentAlt">Begin Your German Learning Journey</span>
                    <h2 className="mt-4">Ready to Start Speaking <span style={{color:'var(--burnished-gold)'}}>German?</span></h2>
                    <br/>
                    <p className="subtopic animate-up">
                        Whether your goal is higher education, career advancement, relocation, or obtaining a German language certificate, Bilinguaschule is here to help you succeed.
                    </p>
                    <br/>
                    <FlatButton
                    icon={<ArrowRightOutlined/>}
                    title="Enroll Today"
                    className="btn btnAlternate btn-lg animate-up"
                    onClick={() =>
                        handleEmailSend(
                        "German Course Enrollment",
                        "Hello, I would like to enroll in one of your German language courses. Please send me details about the available levels, fees, and the registration process."
                        )
                    }
                    />

                    <FlatButton
                    iconTwo={<MailOutlined/>}
                    title="bilinguaschule@yahoo.com"
                    className="btn btnSecondary btn-lg animate-up"
                    onClick={() =>
                        handleEmailSend(
                        "General Enquiry",
                        "Hello, I would like to learn more about your German language courses. Please provide information about your programs, schedules, and enrollment process."
                        )
                    }
                    />
                        <br/><br/>
                    <small style={{color:'gray'}}>Take the next step toward fluency in German with confidence.</small>
                    </div>
            </div>
        </section>
    )
}