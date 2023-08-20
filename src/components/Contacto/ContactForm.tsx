export default function ContactForm() {
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
          return console.log(response.json());
        } else {
          throw new Error(`Error ${response.status}`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        console.error('Status:', error.message);
      });
  };

  return (
    <div>
      <section className="flex h-[250px] w-full items-center justify-center bg-[#FFF] md:w-full xl:w-full">
        <div className="font-inter w-full text-center not-italic leading-[12.4px] text-[#2F2F2F]  md:w-[835px] md:text-center xl:w-[1440px] xl:text-center">
          <span className="text-[48px] leading-normal">Contáctenos</span>
          <br />
          <br />
          <span className="text-[16px] font-light">
            Le invitamos a que se ponga en contacto con nosotros. Le responderemos a la
            brevedad posible.
          </span>
        </div>
      </section>
      {/* Section Formulario */}
      <section className="flex h-[1450px] w-full items-center justify-center bg-[#FFF] pl-[10px] md:h-[700px] md:w-full xl:w-full">
        <div className="flex flex-wrap">
          <div className="m-[30px] text-left font-light not-italic leading-[22.4px] text-[#2F2F2F]">
            <form id="enviarFormulario" onSubmit={enviarFormulario}>
              <label className="block">
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500">
                  Nombre
                </span>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[241px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[147px] xl:w-[245px]"
                    placeholder="Ingrese su nombre"
                  />

                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[241px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[147px] xl:w-[245px]"
                    placeholder="Ingrese su apellido"
                  />
                </div>
              </label>

              <br />
              <label className="block">
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500">
                  Empresa
                </span>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[500px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese la empresa en la que trabaja"
                />
              </label>
              <br />

              <label className="block">
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500">
                  Teléfono
                </span>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[500px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese su número de teléfono"
                />
              </label>
              <br />

              <label className="block">
                <span className="block text-[18px] font-light after:ml-0.5 after:text-red-500">
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[40px] w-[500px] border border-gray-300 bg-gray-50 p-2 text-left placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 sm:text-sm md:w-[310px] xl:w-[510px]"
                  placeholder="Ingrese su correo electrónico"
                />
              </label>

              <br />
              <label className="text-[18px] font-light">Mensaje</label>
              <br />
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="focus:border-sky-5 focus:ring-sky-5 mt-1 block h-[150px] w-[500px] border border-gray-300 bg-gray-50 p-2 text-left text-sm  placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 md:w-[310px] xl:w-[510px]"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
              <br />
              <br />
              <button
                type="submit"
                className="h-[50px] w-[200px] rounded-none border-2 border-sky-500 shadow-sm"
              >
                <span className="text-[18px] font-light">Enviar</span>
              </button>
            </form>
          </div>
          <div className="leading-[32.4px]">
            <img
              src="img-contacto.png"
              alt="Contacto"
              className="xd:m-[20px] m-[30px] h-[656px] w-[500px] md:h-[530px] md:w-[300px] xl:m-[25px] xl:h-[535px] xl:w-[430px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
