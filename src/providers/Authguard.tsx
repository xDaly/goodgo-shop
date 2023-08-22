import React from 'react';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { visitorRoutes } from '../core/variables.constants';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../store/user.slice';


function Authguard(props: { children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname, search, hash, state, key } = useLocation();
  const accessToken = useSelector(selectAccessToken)

  useEffect(() => {
    if (!visitorRoutes.includes(pathname) && accessToken == null) {
      navigate('/login')
    }
    else if (visitorRoutes.includes(pathname) && accessToken != null) {
      navigate('/dashboard')
    }
  }, [pathname, accessToken])
  

  return <React.Fragment>{props.children}</React.Fragment>
}

export default Authguard;
