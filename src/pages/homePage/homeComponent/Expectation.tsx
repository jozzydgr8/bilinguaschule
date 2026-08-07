import { expectations } from "../../../data";
import {CheckOutlined} from '@ant-design/icons';

export const Expectation = ()=>{
    return(
        <section id="expectation">
            <div className="container-fluid">
                <div className="text-center">
                    <span className="homeBadgeParent">What you can expect</span>
                    
                    <h2 className="subheading mt-3">Everything You Need to Succeed</h2>
                </div>
                <br/>
                <div className="row">
                    {
                        expectations.map(data=>(
                            <div className="col-md-4" key={data.id}>
                                
                                <div className=" expectation-card d-flex align-items-center mb-4 animate-up" style={{display:'flex', gap:"15px",}}>
                                    <div style={{width:"fit-content", fontSize: '1.5rem',color:'var(--burnished-gold)', backgroundColor: 'var(--transparent-gold)', padding: '5px 13px', borderRadius: '10px' }}>
                                    <CheckOutlined/>
                                    </div>
                                    {data.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}