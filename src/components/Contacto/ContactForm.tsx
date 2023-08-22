import React, {useState} from "react";
import Modal from 'react-modal';
 
// Modal.setAppElement('#root');


export default function ContactForm() {
  
  const [error, setError] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const empresa = formData.get('empresa');
    const telefono = formData.get('telefono');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');

    const formDataObj = {
      nombre,
      apellido,
      empresa,
      telefono,
      email,
      mensaje,
    };

  
    if (!nombre || !apellido || !empresa || !telefono|| !email || !mensaje) {
      setError(true)
    }
    else
    {
    await fetch('https://rzrzpfn5i5.execute-api.us-east-1.amazonaws.com/Prod/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Methods: 'POST,PATCH,OPTIONS',
      },
      body: JSON.stringify(formDataObj),
      
    })
      .then((response) => {
        if (response.ok) {
      setIsModalOpen(true);     
      
      return console.log(response.json());
        } else {
          throw new Error(`Error ${response.status}`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        console.error('Status:', error.message);
      });
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <section className="flex items-center justify-center w-full md:w-full xl:w-full mb-5">
        <div className="font-inter text-[#2F2F2F] w-full not-italic mb-7 text-center md:text-center xl:text-center">
          <span className="text-[48px] leading-normal">Contáctenos</span>
          <br />
          <span className="text-[16px] font-light p-5 leading-7">
            Le invitamos a que se ponga en contacto con nosotros. Le responderemos a la
            brevedad posible.
          </span>
        </div>
      </section>
      {/* Section Formulario */}
      <section className="flex w-full items-center justify-center md:w-full xl:w-full">
        <div className="flex flex-wrap md:space-x-4">
          <div className="text-left font-light not-italic leading-[22.4px] text-[#2F2F2F]">
            <form id="enviarFormulario" onSubmit={enviarFormulario}>
                <span className="block text-[18px] font-light">
                  Nombre
                </span>
                <div className="flex space-x-4 mb-5 lg:mb-5">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[144px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[147px] xl:w-[245px]"
                    placeholder="Ingrese su nombre"
                    required
                  />
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[144px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[147px] xl:w-[245px]"
                    placeholder="Ingrese su apellido"
                    required
                  />
                </div>
                <span className="text-[18px] font-light after:ml-0.5 after:text-red-500">
                  Empresa
                </span>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[305px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese la empresa en la que trabaja"
                  required
                />
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500 mt-5">
                  Teléfono
                </span>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[305px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese su número de teléfono"
                  required
                />
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500 mt-5">
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="focus:border-sky-5 focus:ring-sky-5 mb-5 block h-[40px] w-[305px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese su correo electrónico"
                  required
                />
              <label className="text-[18px] font-light">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className=" resize-none focus:border-sky-5 focus:ring-sky-5 mb-8 block h-[150px] w-[305px] md:w-[310px] xl:w-[510px] py-4 border border-gray-300 bg-gray-50 p-2 text-left text-sm  placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
              <button
                type="submit"
                className="h-[50px] w-[200px] rounded-none border-2 border-sky-500 shadow-sm hover:bg-[#1B75BB] duration-[0.5s] hover:text-white" 
              >
                <span className="text-[18px] font-light">Enviar</span>
              </button>
            </form>
          </div>
          <div className="pt-5">
            <img
              src="/img-contacto.png"
              alt="Contacto"
            />
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <h2 className="text-[16px] font-light py-2">¡Formulario enviado!</h2>
        <p className="text-[16px] font-light py-2">Tu formulario se ha enviado con éxito.</p>
        <button onClick={closeModal} className="p-2 items-center text-[16px] font-light rounded-none border-2 border-sky-500 shadow-sm hover:bg-[#1B75BB] duration-[0.5s] hover:text-white">Cerrar</button>

      </Modal>
    </div>
  );
}
