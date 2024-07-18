import { useFormik } from 'formik';
import styles from './robotForm.module.css';
import * as Yup from 'yup'



interface IFormValues {
  model: string;
  creator: string;
  email: string;
}


export default function RobotForm() {

  const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError('введи свой номер робота ⛷️')
    .required('напиши свою модель')
    .min(100, 'твоя модель должна начинаться с 100!')
    .max(1000, 'ты не такой робот! модель до 1000...'),
    creator: Yup
    .string()
    .required('скажи, кто твой создатель'),
    email: Yup
    .string()
    .email('некорректный формат email')
    .required('email вашей компании обязателен!')
  })
  
  const formik = useFormik({

    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

 
  return (
<>
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label>Это форма для 🤖</label>
      <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='ваша модель' />
      <input value={formik.values.creator} name='creator' onChange={formik.handleChange} type="text" placeholder='имя создателя' />
      <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email производителя' />
      <button type='submit'>отправить</button>
    </form>
    <span className={styles.errors}>{formik.errors.model}</span>
    <span className={styles.errors}>{formik.errors.creator}</span>
    <span className={styles.errors}>{formik.errors.email}</span>
</>
  );
}