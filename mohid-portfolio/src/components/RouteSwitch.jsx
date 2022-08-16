import { HashRouter,Routes, Route } from 'react-router-dom';
import App from '../App';
import ContactPage from '../ContactPage';
import WorkPage from '../WorkPage';

function RouteSwitch() {
    return (
      <HashRouter>
        <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<WorkPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
        </Route>
        </Routes>
      </HashRouter>
    )
  }
  
  export default RouteSwitch;