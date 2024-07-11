import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
//import Lesson06 from './lessons/lessons_06/Lesson06';
import Lesson07 from './lessons/lesson_07/Lesson07';
//import Homework05 from './homework_05/Homework05';

const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <Lesson07/>
    {/*<Homework05/>*/}
  </>
);

