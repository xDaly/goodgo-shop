import { useEffect } from 'react';
import {
  Outlet, useLocation
} from "react-router-dom";
import Authguard from './providers/Authguard';
import DataPersistor from './providers/Datapersistor';

const titles: any = {
  '/login': 'Login',
  '/dashboard': 'Dashboard',
}

function App() {
  let location = useLocation();


  useEffect(() => {
    document.title = titles[location.pathname]
  }, [location])


  return (
    <DataPersistor>
      <Authguard>
        <Outlet />
      </Authguard>
    </DataPersistor>
  );
}

export default App;
