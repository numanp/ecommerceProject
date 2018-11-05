import React from 'react';
import { Link } from 'react-router-dom';

//MAPEAR POR TODAS LAS CATEGORIAS HACER UN  DISPLAY
//Agregarle un boton para elminar la categoria de la db
// Y DEJAR UN BOTON PARA AGREGAR UNA NUEVA CATEGORIA


export default (props) => (
<div  className="container-fluid" id="AdminAddCategory">
	<div  className="container" >
		<button>  <Link to="/admin/">Volver</Link> </button>
		<br/><br/><br/>
		<div class="row">
			<div class="col-sm-6 col-md-offset-2 col-md-8">
			<h1>Editar Categorias</h1>
				<div class="thumbnail edit" >
					<ul>
						<li>Categoria 1 <button className="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"> </span> Eliminar categoria</button> </li> <br/>
						<li>Categoria 1 <button className="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"> </span> Eliminar categoria</button> </li>    <br/>
						<li>Categoria 1 <button className="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"> </span> Eliminar categoria</button> </li><br/>
						<li>Categoria 1 <button className="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"> </span> Eliminar categoria</button> </li><br/>
						<form action="" onSubmit={props.handleSubmit}>
							<input type="text" class="form-control" name="categoriaNueva"/>
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
