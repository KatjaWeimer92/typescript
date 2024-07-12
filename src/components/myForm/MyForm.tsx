import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './myForm.css'

const MyForm: React.FC = () =>  {

    return(
        <form className="myForm">
            <MyInput label="Ваш логин:" placeholder="login" type="text" />
            <MyInput label="Действительная почта:" placeholder="email" type="email" />
            <MyInput label="Ваш пароль:" placeholder="password" type="password" />
            <MyButton name="Отправить форму" type="submit" />
        </form>
    );
};

export default MyForm;