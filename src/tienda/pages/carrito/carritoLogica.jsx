import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDetailsBuys } from '../../../store/slices/Tienda/TiendaSlice';


export const useFormLogic = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    tipoHogar: '',
    codigoPostal: '',
    telefono: '',
    correoElectronico: '',
    regionProvincia: '',
    localidad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las validaciones que necesites antes de enviar los datos
    dispatch(setDetailsBuys(formData));
  };

  return { formData, handleChange, handleSubmit };
};
