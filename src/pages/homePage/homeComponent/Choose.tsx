import {whyChooseUs} from "../../../data"
export const Choose = ()=>{
    return(
        <section id="choose">
            <div className="container-fluid">
               <div className='text-center'>
                 <span className='homeBadgeParent'>
                    Why Bilinguaschule
                </span>
             
                <h2 className='subheading mt-3'>Why Choose Bilinguaschule?</h2>
               </div>
               <br/>

               <div className="row">
                {
                    whyChooseUs.map(choose=>(
                        <div className='col-md-3 mb-4' key={choose.id}>
                            <div className="choose-card h-100 animate-up ">
                                <div style={{width:"fit-content", fontSize: '2rem',color:'var(--primary-blue-dark)', backgroundColor: 'var(--primary-blue-transparent)', padding: '7px 15px', borderRadius: '10px' }}>
                                    {choose.icon}
                                </div>
                                <br/>
                                <h3 className="subheading">
                                    {choose.title}
                                </h3>
                                <br/>
                                <p>
                                    {choose.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
               </div>
            </div>
        </section>
    )
}