import React, { useState } from 'react';
import { ReactNode, useEffect } from 'react';
import Loading from '../components/Loading';
import { useDispatch } from 'react-redux';
import { addAccessToken } from '../store/user.slice';



function DataPersistor(props: { children: ReactNode }) {
  const [token, setToken] = useState<string>();

  const localToken = localStorage.getItem("access_token") as string;
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(addAccessToken(localToken))
      setToken(localToken)
  }, [])

  if (token === undefined) {
    return <Loading />;
  }

  return <React.Fragment>{props.children}</React.Fragment>
}

export default DataPersistor;
