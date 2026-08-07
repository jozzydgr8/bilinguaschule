import { Form, Input, Select } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import { FlatButton } from '../../../shared/FlatButton';
import {SendOutlined} from '@ant-design/icons'


const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phone: Yup.string(),
    interest: Yup.string().required('interest is required'),
    message:Yup.string()
})
export const handleFormEmailSend = (values: {
  fullName: string;
  phone: string;
  interest: string;
  message: string;
}) => {
  const email ="bilinguaschule@yahoo.com";

  const subject = `Course Enquiry - ${values.interest}`;

  const body = `
Full Name: ${values.fullName}
Phone Number: ${values.phone || "Not provided"}
Course of Interest: ${values.interest}

Message:
${values.message || "No additional message."}
`;

  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoURL;

  toast.success("Your email draft has been prepared.");
};
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
        onSubmit={(values, {resetForm})=> { handleFormEmailSend(values);
        setTimeout(() => {
        resetForm();
        }, 100);}}>
            {
                formik=>{
                    return(
                        <div className='contact-card'>
                            <h2 className='subheading'>Send Us A Message</h2><br/>
                            <Form  layout='vertical' onFinish={formik.handleSubmit}>
                                <div>
                                    <Form.Item label='Full Name'
                                     validateStatus={
                                            formik.touched.fullName && formik.errors.fullName ? "error" : ""
                                        }
                                        help={formik.touched.fullName && formik.errors.fullName}>
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
                                        type={'tel'}
                                        />
                                        
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item label="I'm Interested In"
                                     validateStatus={
                                        formik.touched.interest && formik.errors.interest ? "error" : ""
                                    }
                                    help={formik.touched.interest && formik.errors.interest}>
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
                                            { value: "Not Sure Yet", label: "Not Sure Yet" }
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
                                        />
                                        
                                    </Form.Item>
                                </div>
                                <FlatButton
                                className="btn btn-lg btnPrimary"
                                icon={<SendOutlined />}
                                title="Send Message"
                                onClick={formik.submitForm}
                                />
                            </Form>
                        </div>
                    )
                }
            }
        </Formik>
    )
}