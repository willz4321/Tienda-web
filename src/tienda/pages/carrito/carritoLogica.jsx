
import { useDispatch, useSelector } from 'react-redux';
import { useCompra } from '../../components/thunks';
import { useState } from 'react';
import { resetClienteCompra, setDetailsBuys } from '../../../store/slices/Tienda/TiendaSlice';
import Swal from 'sweetalert2';




export const useFormLogic = () => {
  const { agregarCompra } = useCompra();
  const productosSeleccionados = useSelector((state) => state.Tienda.clienteCompra.listaProductos); 
  const datosCompra = useSelector((state) => state.Tienda.clienteCompra.datosCompra);
  const [redirectToDetails, setRedirectToDetails] = useState(false);
  const dispatch = useDispatch();

  


  const totalCompra = productosSeleccionados.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

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
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las validaciones que necesites antes de enviar los datos
    dispatch(setDetailsBuys(formData));
    setRedirectToDetails(true)
   
  };
  
 
  const handleFormSubmit = (event) => {
    
    Swal.fire({
      icon: 'success',
      title: '¡Pedido procesado con éxito!',
      showConfirmButton: false,
      timer: 2000  // El mensaje se cerrará automáticamente después de 1.5 segundos
    }).then(() => {
      window.location.reload();  // Recarga la página
    }); 

    event.preventDefault();
    const direcciones = {
      calle: datosCompra.direccion.calle,
      hogar: datosCompra.direccion.hogar,
      cp: datosCompra.direccion.cp,
      provincia: datosCompra.direccion.provincia,
      localidad: datosCompra.direccion.localidad,
      comentarios: datosCompra.direccion.comentarios
    };

    const productosParaEnviar = productosSeleccionados.map((producto) => ({
      nombre: producto.nombre,
      talle: producto.talle,
      precio: producto.precio,
      cantidad: producto.cantidad,
    }));
    // Llama a la función agregarCompra con los datos del formulario
    agregarCompra({
      nombre: datosCompra.nombre,
      apellido: datosCompra.apellido,
      telefono: datosCompra.telefono,
      email: datosCompra.correoElectronico,
      total: totalCompra*0.95,
      direcciones: [direcciones],
     productoCompra: productosParaEnviar,
    });
   
  };
  const handleResetClienteCompra = () => {
    dispatch(resetClienteCompra());
  };
  return { formData, handleChange, handleFormSubmit, handleSubmit, handleResetClienteCompra, redirectToDetails};
};
