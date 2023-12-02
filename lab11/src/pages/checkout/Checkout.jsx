import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import FormError from "../../components/formError/formError";

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <FormError touched={meta.touched} error={meta.error} />
        </>
    )
}

function Checkout (){
    return(
        <section>
            <div className="ckeckout-box">
                <div className="checkout-box__forms">
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            date_of_birth: '',
                            email: '',
                            phone: '',
                        }}
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            last_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            date_of_birth: Yup.string()
                                .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format')
                                .required('Required')
                                .test('is-adult', 'Must be at least 18 years old', function (value) {
                                    const currentDate = new Date();
                                    const selectedDate = value ? new Date(value) : null;

                                    if (!selectedDate || isNaN(selectedDate.getTime())) {
                                        return true;
                                    }

                                    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
                                    const isAdult =
                                        ageDifference > 18 ||
                                        (ageDifference === 18 &&
                                            (currentDate.getMonth() > selectedDate.getMonth() ||
                                                (currentDate.getMonth() === selectedDate.getMonth() &&
                                                    currentDate.getDate() >= selectedDate.getDate())));

                                    return isAdult;
                                }),

                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),

                            phone: Yup.string()
                                .matches(/^\+\d{12}$/, 'Invalid phone number')
                                .required('Required'),
                        })}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);
                            }, 1000)
                        }}
                    >
                        {props => (
                            <Form>
                                <h1>Checkout</h1>
                                <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Frank' />
                                <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Potapenko' />
                                <CustomTextInput label='Date of birth' name='date_of_birth' type='text' placeholder='DD.MM.YYYY' />
                                <CustomTextInput label='Email' name='email' type='text' placeholder='frank@thetank.com' />
                                <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+38...' />
                                <button type='submit'>
                                    {props.isSubmitting ? 'Loading...' : 'Submit'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default Checkout;