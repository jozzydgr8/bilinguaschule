import { germanCourses } from "../../../data"
import { FlatButton } from "../../../shared/FlatButton"

export const Courses = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="text-center">
                    <span className='homeBadgeParent'>Our Course</span>
                    
                    <h2 className='subheading mt-2'>German Courses for Every Level</h2>
                    <p className='subtopic'>All courses are delivered live online in small groups, allowing for interactive lessons and personalized attention.</p>
                </div>
                    <div className="row">
                        {
                            germanCourses.map(course=>(
                                <div className="col-md-3 d-flex mb-4" key={course.id}>
                                    <div className="course-card h-100 d-flex flex-column ">
                                        <div style={{width:"fit-content", fontSize: '1rem',color:'var(--primary-blue-dark)', backgroundColor: 'var(--primary-blue-transparent)', padding: '7px 15px', borderRadius: '10px' }}>
                                            {course.level}
                                        </div><br/>
                                        <h3 className="subheading">{course.title}</h3><br/>
                                        <p>
                                            {course.description}
                                        </p>
                                        <br/> <hr/>
                                        <div className="row">
                                            <div className="col-6" style={{color:'gray'}}> Start Date</div>
                                            <div className="col-6 mb-2" style={{fontWeight:'bold'}}>{course.startDate}</div>
                                            
                                            <div className="col-6" style={{color:'gray'}}>Duration</div>
                                            <div style={{fontWeight:'bold'}} className="col-6 mb-2">{course.duration}</div>
                                            
                                            <div className="col-6 " style={{color:'gray'}}>Schedule</div>
                                            <div className="col-6 mb-2" style={{fontWeight:'bold'}}>{course.schedule}</div>
                                            
                                            <div className="col-6" style={{color:'gray'}}>Class Size</div>
                                            <div className="col-6 " style={{fontWeight:'bold'}}>{course.classSize}</div>
                                        </div>
                                        <br/>
                                        <div className="mt-auto">
                                        <hr />
                                        <div className="mb-4">
                                        <h3 style={{color:'var(--primary-blue)'}}>{course.tuition}</h3>
                                        <small style={{color:'gray'}}>{course.feeType}</small>
                                        </div>
                                       
                                        <FlatButton
                                            title="Enroll Now"
                                            className="btn btnPrimary w-100"
                                        />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
               
            </div>
        </section>
    )
}