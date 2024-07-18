import ReactDOM from 'react-dom/client';
import './index.css';
//import Layout from './components/layout/Layout';
//import StarWarsGalllery from './components/starWarsGallery/StarWarsGallery';
import Lesson09 from './lessons/lesson_09/Lesson09';
import Lesson11 from './lessons/lesson_11/Lesson11';
import Lesson12 from './lessons/lesson_12/Lesson12';
//import App from './app/App';
//import Lesson06 from './lessons/lessons_06/Lesson06';
//import Lesson07 from './lessons/lesson_07/Lesson07';
//import Lesson08 from './lessons/lesson_08/Lesson08';
//import Homework05 from './homework_05/Homework05';



const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/*<App />*/}
    {/*<Lesson07/>*/}
     {/*<Lesson08/>*/}
    {/*<Homework05/>*/}
    {/*<Layout/>*/}
    {/*<StarWarsGalllery/>*/}
    {/*<Lesson09/>*/}
    {/*<Lesson11/>*/}
    <Lesson12/>
  </>
);

