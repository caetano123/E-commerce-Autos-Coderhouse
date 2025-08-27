
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const useAuto = (id) => {
  const [auto, setAuto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchAuto = async () => {
      setCargando(true);
      try {
        const docRef = doc(db, "cars", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAuto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setAuto(null);
        }
      } catch (error) {
        console.error("Error al traer el auto:", error);
        setAuto(null);
      } finally {
        setCargando(false);
      }
    };

    if (id) fetchAuto();
  }, [id]);

  return { auto, cargando };
};

export default useAuto;
