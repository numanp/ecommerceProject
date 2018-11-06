import React from 'react';
import { Link } from 'react-router-dom';

//MAPEAR POR TODAS LAS CATEGORIAS HACER UN  DISPLAY
//Agregarle un boton para elminar la categoria de la db
// Y DEJAR UN BOTON PARA AGREGAR UNA NUEVA CATEGORIA


export default (props) => (

	<div  className="container-fluid" id="AdminAddCategory">
		<div  className="container" >
	
	
        <Link to='/admin'>
        <button className=''>
        <span className="
            glyphicon glyphicon-chevron-left">
                Back
            </span>
        </button>
        </Link>
		<br/>
		<div class="row">
			<div class=" col-md-12">
			<h1>Editar Categorias</h1>
				<div class="thumbnail edit" >
					<ul>
					{
						props.listaCategorias.map(categoria => {
							return (
							<li key={categoria.id}> <p>{categoria.nombre}</p>	 
								<button className="btn btn-danger" onClick={() => props.removeCategory(categoria.id)}>
	
									<span class="glyphicon glyphicon-remove" aria-hidden="true">
									</span> Eliminar categoria
								</button> 
							</li>)
						})
						
					}
					<br/>
						<form action="" onSubmit={props.handleSubmit}>
							<label htmlFor="categoriaNueva">Agregar Categoria</label>
							<input type="text" class="form-control" name="categoriaNueva" placeholder="Agregar categoria"/>
							<br/>
							<button className="btn btn-success" type="submit" onClick={() => props.handleSubmit}>
								<span class="glyphicon glyphicon-plus" aria-hidden="true"> </span> Agregar categoria
							</button>
						</form>
					</ul>
				</div>
			</div>
		</div>
		<br/><br/><br/><br/><br/><br/>
		<br/><br/><br/><br/><br/><br/>
	</div>
</div>
);
