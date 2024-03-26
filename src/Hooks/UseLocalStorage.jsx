/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getStoreApplication } from '../Components/Utility/LocalStorage';

const UseLocalStorage = value => {
  const [localData, setLocalData] = useState([]);
  // console.log(localData);
  useEffect(() => {
    setLocalData(getStoreApplication(value));
  }, []);
  return { localData };
};

export default UseLocalStorage;
