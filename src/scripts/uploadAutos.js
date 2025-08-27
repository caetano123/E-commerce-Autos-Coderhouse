import { db } from '../firebase/config.js';
import { collection, addDoc } from "firebase/firestore";
import autos from '../data/autos.js';

const uploadAutos = async () => {
  try {
    for (const auto of autos) {
      await addDoc(collection(db, "cars"), auto);
      console.log(`Auto subido: ${auto.marca} ${auto.modelo}`);
    }
    console.log("Todos los autos fueron subidos");
  } catch (error) {
    console.error("Error subiendo autos:", error);
  }
};

uploadAutos();

