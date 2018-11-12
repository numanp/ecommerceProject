import React from 'react';

export default function (props) {
    var users = props.users
    console.log(users)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <div className="review-block">
                        {
                            props.reviews && props.reviews.map(review => {
                                var user = {}
                                var idEstrellas = 0
                                var estrellas = review.estrellas;
                                var arr = [];
                                for (var i = 0; i < estrellas; i++) {
                                    arr.push(i)

                                }
                                for (var j = 0; j < users.length; j++) {
                                    if (users[j].id == review.userId) {
                                        user = users[j]
                                    }
                                }

                                return (
                                    <div key={review.id}>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg" className="img-rounded img-user-review" />
                                                <div className="review-block-name">Usuario: {user.nombre}</div>
                                                <div className="review-block-date">{review.createdAt.substring(0, 10)}</div>
                                            </div>

                                            <div className="col-sm-9">
                                                <div className="review-block-rate">
                                                    {arr.map(estrellas => {
                                                        idEstrellas++
                                                        return (
                                                            <span key={idEstrellas} className="glyphicon glyphicon-star estrellas-review-user" aria-hidden="true"></span>
                                                        )
                                                    }
                                                    )}

                                                </div>
                                                <div className="review-block-description">{review.comentario}</div>
                                            </div>

                                        </div>


                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



{/* <div class="col-sm-3">
				<div class="rating-block">
					<h4>Average user rating</h4>
					<h2 class="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
					</button>
				</div>
	</div> */}






{/* ESTE ES EL QUE ANDA */ }

{/* <div className="reviews cajaopinionproducto">
<h2>Opiniones sobre el producto</h2>
{
  props.reviews && props.reviews.map(review =>{
    return(
      <div key={review.id} className="container">
      <div className='row'>
      <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
      <p className='opinionProducto'>- {review.comentario} </p>
      </div>
      </div>
      </div>
    )
  })
}
</div> */}