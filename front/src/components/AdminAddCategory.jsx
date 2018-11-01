import React from 'react';

//MAPEAR POR TODAS LAS CATEGORIAS HACER UN  DISPLAY
//Agregarle un boton para elminar la categoria de la db
// Y DEJAR UN BOTON PARA AGREGAR UNA NUEVA CATEGORIA

export default () => (


<div  className="container-fluid" id="AdminAddCategory">

  
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
					<input type="text" class="form-control"/>
					<br/>
					 <button className="btn btn-success"><span class="glyphicon glyphicon-plus" aria-hidden="true"> </span> Agregar categoria</button>
				</ul>
    		</div>
    	</div>
	</div>
</div>
);
