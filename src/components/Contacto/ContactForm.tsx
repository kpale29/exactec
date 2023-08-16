export default function ContactForm(){


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
        mensaje
        };
        
        console.log('haciendo solicitud');

        await fetch('https://rzrzpfn5i5.execute-api.us-east-1.amazonaws.com/Prod/sendemail', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Methods':'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify(formDataObj)
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
    }  


    return (
        <div>
            <section className="flex items-center justify-center h-[250px] w-full md:w-full xl:w-full bg-[#FFF]">
			<div className="text-[#2F2F2F] font-inter not-italic leading-[12.4px] text-center w-full  md:w-[835px] md:text-center xl:text-center xl:w-[1440px]">
					<span className="leading-normal text-[48px]">Contáctenos</span>
				<br /><br />
				<span className="text-[16px] font-light">
					 Le invitamos a que se ponga en contacto con nosotros. Le responderemos a la brevedad posible.
				</span>
			</div>
		</section>
		 {/* Section Formulario */}
		<section className="flex items-center justify-center h-[1450px] w-full pl-[10px] md:w-full xl:w-full md:h-[700px] bg-[#FFF]">
			<div className="flex flex-wrap">
				<div className="text-[#2F2F2F] font-light not-italic leading-[22.4px] text-left m-[30px]">
					<form id = "enviarFormulario" onSubmit={enviarFormulario}>

							<label className="block">
								<span className="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Nombre
								</span>
								<div className="flex space-x-4">
										<input type="text" id="nombre" name="nombre" className="text-left p-2 mt-1 w-[241px] h-[40px] md:w-[147px] xl:w-[245px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su nombre" />
									
										<input type="text" id="apellido" name="apellido" className="text-left p-2 mt-1 w-[241px] h-[40px] md:w-[147px] xl:w-[245px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su apellido" />
								</div>
							</label>

							<br />	
							<label className="block">
								<span className="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Empresa
								</span>
								<input type="text" id="empresa" name="empresa" className="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese la empresa en la que trabaja" />
							</label>
							<br />

							<label className="block">
								<span className="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Teléfono
								</span>
								<input type="text" id="telefono" name="telefono" className="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su número de teléfono" />
							</label>
							<br />

							<label className="block">
								<span className="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Email
								</span>
								<input type="email" id="email" name="email" className="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su correo electrónico" />
							</label>
                            
							<br />
								<label className="font-light text-[18px]">Mensaje</label>
								<br />
								<textarea id="mensaje" name="mensaje" rows={4} className="text-left p-2 mt-1 w-[500px] h-[150px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400  focus:outline-none focus:border-sky-5 focus:ring-sky-5 block text-sm focus:ring-1" placeholder="Escribe tu mensaje aquí"></textarea>
							<br />
                            <br />
							<button type = "submit" className="rounded-none w-[200px] h-[50px] border-2 shadow-sm border-sky-500"><span className="text-[18px] font-light">Enviar</span></button>
					</form>
				</div>
				<div className="leading-[32.4px]">
					
					<img src='img-contacto.png' alt="Contacto" className="w-[500px] h-[656px] m-[30px] md:w-[300px] md:h-[530px] xd:m-[20px] xl:h-[535px] xl:w-[430px] xl:m-[25px]"/>
				</div>
			</div>
		</section>
        </div>
    );
}
    	