import { Form, Input, Select } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FlatButton } from '../../../shared/FlatButton';
import {SendOutlined} from '@ant-design/icons'


const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    Phone: Yup.number(),
    interest: Yup.string().required('interest is required'),
    message:Yup.string()
})
export const ContactForm = ()=>{
    return(
        <Formik
        initialValues={{
            fullName:'',
            message:'',
            phone:'',
            interest:''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm})=> console.log(values)}>
            {
                formik=>{
                    return(
                        <div className='contact-card'>
                            <h2 className='subheading'>Send Us A Message</h2><br/>
                            <Form  layout='vertical' onFinish={formik.handleSubmit}>
                                <div>
                                    <Form.Item label='Full Name'>
                                        <Input 
                                        name='fullName'
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type={'text'}
                                        required/>
                                        
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label='Phone Number (optional)'>
                                        <Input 
                                        name='phone'
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type={'number'}
                                        required/>
                                        
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label="I'm Interested In">
                                        <Select
                                        placeholder="Select A Course"
                                        value={formik.values.interest}
                                        onChange={(value)=>formik.setFieldValue('interest', value)}
                                        onBlur={()=>formik.setFieldTouched('interest', true)}
                                        options={[
                                            {value:'German - A1 Beginner', label:'German - A1 Beginner'},
                                            {value:'German - A2 Elementary', label:'German - A2 Elementary'},
                                            {value:'German - B1 Intermediate', label:'German - B1 Intermediate'},
                                            {value:'German - B2 Upper Intermediate', label:'German - B2 Upper Intermediate'},
                                            {Value:'Not Sure yet', label:'Not Sure Yet'}
                                        ]}></Select>
                                    </Form.Item>
                                </div>

                                <div>
                                    <Form.Item label='Message (optional)'>
                                        <Input.TextArea 
                                        name='message'
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required/>
                                        
                                    </Form.Item>
                                </div>
                                <FlatButton className='btn btn-lg btnPrimary ' icon={<SendOutlined/>} title='send message'/>
                            </Form>
                        </div>
                    )
                }
            }
        </Formik>
    )
}