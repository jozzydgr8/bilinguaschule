import potentialImage from '../../../assets/children-having-fun-learning-german.png';
export const Potential = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <span className='homeBadgeParentAlt'>🚀For Ages 6–14</span>
                            <h2 className='subheading mt-2'>Unlock Your Child's <span style={{ color: 'var(--primary-blue-light)' }}>Potential</span></h2>
                            <p className='subtopic'>Give your child a head start in life! Our specialized German courses turn language learning into an exciting adventure, combining play with proven educational results.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="heroImage"
                            style={{
                                backgroundImage: `url(${potentialImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}