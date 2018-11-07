import React from 'react'

export default ({ handleChange, handleSubmit, addreview }) => {
    return(
        <form className="form-horizontal inputReview" onSubmit={handleSubmit}>
        <label className='input-review-text'>Dejanos tu review sobre este producto:</label>
            <textarea placeholder="deja tu review aca..." type="text" name="addreview" className='' addreview={addreview} onChange={handleChange} className="form-control custom-control"></textarea>
            <button type="submit" className="btn btn-success input-review-button">
              enviar!
            </button>
        </form>
    )
}

