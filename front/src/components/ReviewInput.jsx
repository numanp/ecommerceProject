import React from 'react'

export default ({ handleChange, handleSubmit, addreview }) => {
    return(
        <form className="form-horizontal" onSubmit={handleSubmit}>
        <label className='pProducto'>Dejanos tu review sobre este producto:</label>
            <textarea type="text" name="addreview" addreview={addreview} onChange={handleChange} className="form-control custom-control"></textarea>
            <button type="submit" className="btn btn-success">
              enviar!
            </button>
        </form>
    )
}

