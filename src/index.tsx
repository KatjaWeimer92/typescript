import ReactDOM from 'react-dom/client';
import './index.css';
//import Layout from './components/layout/Layout';
//import StarWarsGalllery from './components/starWarsGallery/StarWarsGallery';
//import Lesson13 from './lessons/lesson_13/Lesson13';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import FormGender from './components/formGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';


const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<StarWarsGallery/>}/>
      <Route path='/gender-form' element={<FormGender/>}/>
      <Route path='/robot-form' element={<RobotForm/>}/>
      <Route path='/my-form' element={<MyForm/>}/>
      </Route>
    </Routes>
  </HashRouter>
);

