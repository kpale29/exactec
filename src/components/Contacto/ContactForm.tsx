export default function ContactForm(){
    return (
    <section class="flex items-center justify-center h-[250px] w-full md:w-full xl:w-full bg-[#FFF]">
			<div class="text-[#2F2F2F] font-inter not-italic leading-[12.4px] text-center w-full  md:w-[835px] md:text-center xl:text-center xl:w-[1440px]">
				<p class="text-[48px] font-normal">
					<span class="leading-normal text-[48px]">Contáctenos</span>
				<br /><br />
				<span class="text-[16px] font-light">
					 Le invitamos a que se ponga en contacto con nosotros. Le responderemos a la brevedad posible.
				</span>
			</div>
		</section>
		<!-- Section Formulario -->
		<section class="flex items-center justify-center h-[1450px] w-full pl-[10px] md:w-full xl:w-full md:h-[700px] bg-[#FFF]">
			<div class="flex flex-wrap">
				<div class="text-[#2F2F2F] font-light not-italic leading-[22.4px] text-left m-[30px]">
					<form id = "enviarFormulario" onsubmit="{enviarFormulario}">
						<div class="input-group">
							<label class="block">
								<span class="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Nombre
								</span>
								<div class="flex space-x-4">
									<div>
										<input type="text" name="nombre" class="text-left p-2 mt-1 w-[241px] h-[40px] md:w-[147px] xl:w-[245px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su nombre" />
									</div>
									<div>
										<input type="text" name="apellido" class="text-left p-2 mt-1 w-[241px] h-[40px] md:w-[147px] xl:w-[245px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su apellido" />
									</div>
								</div>
							</label>
							<br />
						</div>
						<div class="input-group">
							<label class="block">
								<span class="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Empresa
								</span>
								<input type="text" name="empresa" class="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese la empresa en la que trabaja" />
							</label>
							<br />
						</div>
						<div class="input-group">
							<label class="block">
								<span class="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Teléfono
								</span>
								<input type="text" name="telefono" class="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su número de teléfono" />
							</label>
							<br />
						</div>
						<div class="input-group">
							<label class="block">
								<span class="after:ml-0.5 after:text-red-500 block text-[18px] font-light">
								Email
								</span>
								<input type="email" name="email" class="text-left p-2 mt-1 w-[500px] h-[40px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-5 focus:ring-sky-5 block sm:text-sm focus:ring-1" placeholder="Ingrese su correo electrónico" />
							</label>
							<br />
						</div>
						<div class="input-group">
								<label for="mensaje" class="font-light text-[18px]">Mensaje</label>
								<br />
								<textarea id="mensaje" name="mensaje" rows="4" class="text-left p-2 mt-1 w-[500px] h-[150px] md:w-[310px] xl:w-[510px] bg-gray-50 border shadow-sm border-gray-300 placeholder-gray-400  focus:outline-none focus:border-sky-5 focus:ring-sky-5 block text-sm focus:ring-1" placeholder="Escribe tu mensaje aquí"></textarea>
							<br /><br />
						</div>
						<div>
							<button type = "submit" id = "boton1" class="rounded-none w-[200px] h-[50px] border-2 shadow-sm border-sky-500"><span class="text-[18px] font-light">Enviar</span></button>
						</div>
					</form>
				</div>
				<div class="leading-[32.4px]">
					
					<img src=`img-contacto.png` alt="Contacto" class="w-[500px] h-[656px] m-[30px] md:w-[300px] md:h-[530px] xd:m-[20px] xl:h-[535px] xl:w-[430px] xl:m-[25px]"/>
				</div>
			</div>
		</section>
    );
}
    	