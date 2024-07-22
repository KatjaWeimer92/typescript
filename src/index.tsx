import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import FormGender from './components/formGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
//import MyForm from './components/myForm/MyForm';
import Feedback from './components/feedback/Feedback';
import Counter from './components/counter/counter';
import Homepage from './components/homepage/Homepage';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';


const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/star-wars' element={<StarWarsGallery/>}/>
      <Route path='/gender-form' element={<FormGender/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='*' element={<h1>Error 404 😵</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);

