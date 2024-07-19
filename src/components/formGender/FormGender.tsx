import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './formGender.module.css';
import * as Yup from 'yup'

interface IFormGender {
  name: string;
}

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

const schema = Yup.object().shape({
name: Yup
.string()
.required('имя обязательно')
.typeError('здесь подойдет только строка')
.min(2, 'минимум 2 символа')
.max(20, 'имя должно быть короче! 20 это много 😉')

});


export default function FormGender() {

  // аналог обработки promise запросов
  // можете использовать цепочку из .then() или его

  const [genderData, setGenderData] = useState<IGenderData>({
    name: '',
    gender: '',
    probability: 0,
    count: 0
  });

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormGender,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormGender, { resetForm }) => {
      fetchGender(values.name);
      resetForm();
    }
  });

  const handleClean = () => {
    setGenderData({
      name: '',
    gender: '',
    probability: 0,
    count: 0
    })
  }

  // useEffect(()=> {
  //   fetchGender('dmitrii')
  // }, [])

  return (
    <>
      <h4>✨ Know name`s gender 🔮 </h4>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <input onChange={formik.handleChange} name='name' value={formik.values.name} placeholder='type name to analyze' type="text" />
        <button onClick={handleClean} type="submit" >send request</button>

        {genderData.name && (
          <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
        )}
        {formik.errors.name && (
        <div className={styles.errorContainer}>
        <span>{formik.errors.name}</span>
        </div>

        )}
      
      </form>
     
      
    </>
  );
}