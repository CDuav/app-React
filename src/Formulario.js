import React, {useState} from 'react';

const Formulario = () => {
	const [inputId, cambiarId] = useState('');
    const [inputNombre, cambiarNombre] = useState('');
    const [inputPrecio, cambiarPrecio] = useState('');
    const [inputDescripcion, cambiarDescripcion] = useState('');
    const [inputImagen, cambiarImagen] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();


		console.log('Formulario Enviado!');
	}

	const handleId = (e) => {
		cambiarId(e.target.value);
	}
	
	const handleNombre = (e) => {
		cambiarNombre(e.target.value);
	}

    const handlePrecio = (e) => {
		cambiarPrecio(e.target.value);
	}
    const handleDescripcion = (e) => {
		cambiarDescripcion(e.target.value);
	}
    const handleImagen = (e) => {
		cambiarImagen(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
                <h3>Formulario de Productos</h3>
				<div>
					<label htmlFor="form">Id</label>
					<input
						type="number"
						name="id"
						placeholder="Id "
						id="id"
						value={inputId}
						onChange={handleId}
					/>
				</div>
				<div>
					<label htmlFor="form">Nombre</label>
					<input
						type="string"
						name="Nombre"
						placeholder="Nombre "
						id="Nombre"
						value={inputNombre}
						onChange={handleNombre}
					/>
				</div>
                <div>
					<label htmlFor="form">Precio</label>
					<input
						type="number"
						name="Precio"
						placeholder="Precio "
						id="Precio"
						value={inputPrecio}
						onChange={handlePrecio}
					/>
				</div>
                <div>
					<label htmlFor="form">Descripcion</label>
					<input
						type="string"
						name="Descripcion"
						placeholder="Descripcion"
						id="Descripcion"
						value={inputDescripcion}
						onChange={handleDescripcion}
					/>
				</div>
                <div>
					<label htmlFor="form">Imagen</label>
					<input
						type="image"
						name="Imagen"
						placeholder="Imagen "
						id="Imagen"
						value={inputImagen}
						onChange={handleImagen}
					/>
				</div>

				<button type="submit">Guardar</button>
                <div/>
                <button type="submit">Eliminar</button>
			</form>
		</>
	);
}
 
export default Formulario;