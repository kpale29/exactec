export default function enviarFormulario(formElement) {
    formElement.preventDefault();
  
    
    const formData = new FormData(formElement.target);

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

    fetch('https://rzrzpfn5i5.execute-api.us-east-1.amazonaws.com/Prod/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
      .then((result) => {
        console.log('Response:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.error('Status:', error.message);
      });
    }  