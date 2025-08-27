
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

const useAutos = () => {
  const [autos, setAutos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchAutos = async () => {
      setCargando(true);
      const autosCollection = collection(db, "cars");
      const autosSnapshot = await getDocs(autosCollection);
      const autosList = autosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAutos(autosList);
      setCargando(false);
    };

    fetchAutos();
  }, []);

  return { autos, cargando };
};

export default useAutos;
