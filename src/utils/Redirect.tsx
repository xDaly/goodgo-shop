import React from 'react';
import { Navigate, Navigation } from 'react-router-dom';


function Redirect(props: { route: string }) {
  return <Navigate to={props.route} />
}

export default Redirect;
