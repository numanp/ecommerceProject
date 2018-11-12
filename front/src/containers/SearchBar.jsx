import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group" id="adv-search">
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            onChange={this.props.handleChange}
            onKeyPress={event => this.props.handelOnKeyPress(event)}
          />
          <div className="input-group-btn">
            <div className="btn-group" role="group">
              <div className="dropdown dropdown-lg">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="caret" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" role="menu">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label htmlFor="filter">Filtralo por:</label>
                      <select className="form-control">
                        <option value="0" defaultValue>
                          todos los Snippets
                        </option>
                        <option value="1">CategoriaTuVieja</option>
                        <option value="2">CategoriaLancelot</option>
                        <option value="3">CategoriaElBolson</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contain">busca</label>
                      <input className="form-control" type="text" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <span
                        className="glyphicon glyphicon-search"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </div>
              </div>
              <button
                onClick={() => this.props.handleOnClick()}
                type="submit"
                className="btn btn-primary"
              >
                <span
                  className="glyphicon glyphicon-search"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
