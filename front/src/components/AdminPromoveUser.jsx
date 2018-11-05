import React from 'react';

export default props => (
  <div className="well">
    <form className="form-horizontal" onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Promover Usuario</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">User</label>
          <div className="col-xs-10">
            <input
              value={props.user}
              onChange={props.handleChange}
              className="form-control"
              type="text"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success">
              Haceme admin
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
);
//   <div className="col-sm-6 col-md-4">
//     <div className="thumbnail">
//       <div className="caption">
//         <h3>Promover Usuario</h3>
//         <div class="form-group">
//           <input type="text" class="form-control" placeholder="Promover" />
//         </div>
//         <p>
//           <a href="#" className="btn btn-warning">
//             Haceme admin
//           </a>
//         </p>
//       </div>
//     </div>
//   </div>
