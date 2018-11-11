import React from 'react'
//import ContainerStars from '../containers/ContainerStars'
import StarRatingComponent from 'react-star-rating-component';

export default ({ handleChange, handleSubmit, addreview, rating, onStarClick }) => {
    return(
        <div className="container">
            <div className="row" style={{marginTop:"40px"}}>
                <div className="col-md-12">
                    <div className="well well-sm">
                        <div className="text-right">
                            <a className="btn btn-success btn-green" href="#reviews-anchor" id="open-review-box">Dejanos tu review!</a>
                        </div>
                    
                        <div className="row" id="post-review-box" style={{display:"none"}}>
                            <div className="col-md-12">
                                <form onSubmit={handleSubmit} acceptCharset="UTF-8" action="" method="post">
                                    <input id="ratings-hidden" name="rating" type="hidden"/> 
                                    <textarea className="form-control animated" cols="50" id="new-review" name="comment" placeholder="escribi aca y puntua!" rows="5" addreview={addreview} onChange={handleChange}></textarea>
                    
                                    <div className="text-right">
                                        <div className="contenedorEstrellas">
                                            <StarRatingComponent onStarClick={onStarClick.bind(this)} name="rate1" starCount={5} value={rating}/>
                                        </div>
                                        <div>
                                            <a className="btn btn-danger btn-sm" href="#" id="close-review-box" style={{display:"none", marginRight:"10px"}}>
                                            <span className="glyphicon glyphicon-remove"></span>Cancel</a>
                                            <button className="btn btn-success btn-lg" type="submit">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

{/* <form className="form-horizontal inputReview" onSubmit={handleSubmit}>
<label className='input-review-text'>Dejanos tu review sobre este producto:</label>
    <textarea placeholder="deja tu review aca..." type="text" name="addreview" className='' addreview={addreview} onChange={handleChange} className="form-control custom-control"></textarea>
    <button type="submit" className="btn btn-success input-review-button">
      enviar!
    </button>
</form> */}