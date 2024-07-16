import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";

function Lesson09() {
    const [count, setCount] = useState(0);

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => console.log(data));
    
    const handlePlus = () => {
        setCount(prev => prev +1);
    };
    
    return(
    <div className="lesson-container">
        <h3>Lesson 09</h3>
        <h4>UseEffect hook 🐍</h4>
        <h5>Проблемы, которые решают этот hook</h5>
        <p>{count}</p>
        <MyButton name={"plus"} onClick ={handlePlus}/>
        <p>Любое изменение стейта вызывает ререндр компонента. Это значит, что все операции в теле
            компонента будут повторяться раз за разом. В том числе и те,
            которые мы не хоти повторять
        </p>
        <p>Нужен способ чтобы мы могли изолировать операции от повторов там, где нам это не нужно</p>
        
        
        <h5>Вспоминаем fetch запросы:</h5>
        <ul>
            <li>Асинхронный запрос на сервер за данными</li>
            <li>Данные приходят не сразу, их нужно подождать</li>
            <li>В ответ на приходит особый объект Promise в состоянии Pending(обработки)</li> 
                <li>Эти данные нужно дождаться и обработать особым способом</li>
                <li>Первый способ это цепочка из .then() методов</li>
                <li>Второй асинхронная функция с синтаксисом async/ await</li>
                <li>В ответ мы хотим получить данные с сервера</li>
                <li>Чаще всего он будет в формате JSON</li>
                <li>Данные с сервера приходится обрабатывать два раза</li>
                <li>Сначала мы дожидаемся самих данных</li>
                <li>Потом дожидаемся выполнения асинхронного метода .json()</li>
        </ul>
    </div>
    );
}

export default Lesson09;