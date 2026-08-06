import potentialImage from '../../../assets/children-having-fun-learning-german.png';
import { benefits } from '../../../data';
import { FlatButton } from '../../../shared/FlatButton';
import {ArrowRightOutlined} from '@ant-design/icons';
export const Potential = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div>
                            <span className='homeBadgeParentAlt'>🚀For Ages 6–14</span>
                            <h2 className='subheading mt-2'>Unlock Your Child's <span style={{ color: 'var(--primary-blue-light)' }}>Potential</span></h2>
                            <p className='subtopic'>Give your child a head start in life! Our specialized German courses turn language learning into an exciting adventure, combining play with proven educational results.</p>
                           
                                {
                                    benefits.map((data, index)=>(
                                        <div key={index} className='d-flex align-items-center mb-4' style={{display:'flex',gap:'15px'}}>
                                            <div style={{width:"fit-content", fontSize: '2rem',color:'var(--burnished-gold)', backgroundColor: 'var(--transparent-gold)', padding: '7px 15px', borderRadius: '10px' }}>{data.icon}</div>
                                            <div>
                                                <h4 style={{color:'var(--burnished-gold)'}} className='subheading'>{data.title}</h4>
                                               
                                                <small>{data.description}</small>
                                            </div>
                                        </div>
                                    ))
                                }

                            <br/>
                            <FlatButton title='Start Learning today' icon={<ArrowRightOutlined/>} className='btn btnAlternate btn-xl'/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="homeImage"
                            style={{
                                backgroundImage: `url(${potentialImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}