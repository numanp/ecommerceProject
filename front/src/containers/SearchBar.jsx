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
          />
          {/* <input
            type="text"
            className="form-control"
            placeholder="ingresa un snippet"
          /> */}
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

//</div>

//este es el que meti en la pagina

{
  /* <div className="col-md-12">
<div className="input-group" id="adv-search">
    <input type="text" className="form-control" placeholder="ingresa un snippet" />
    <div className="input-group-btn">
        <div className="btn-group" role="group">
            <div className="dropdown dropdown-lg">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></button>
                <div className="dropdown-menu dropdown-menu-right" role="menu">
                    <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label htmlFor="filter">Filtralo por:</label>
                        <select className="form-control">
                            <option value="0" defaultValue>todos los Snippets</option>
                            <option value="1">CategoriaTuVieja</option>
                            <option value="2">CategoriaLancelot</option>
                            <option value="3">CategoriaElBolson</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label For="contain">busca</label>
                        <input className="form-control" type="text" />
                    </div>
                    <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </form>
                </div>
            </div>
            <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </div>
    </div>
</div>
</div> */
}

//este es el original

{
  /* <div class="col-md-12">
            <div class="input-group" id="adv-search">
                <input type="text" class="form-control" placeholder="Search for snippets" />
                <div class="input-group-btn">
                    <div class="btn-group" role="group">
                        <div class="dropdown dropdown-lg">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                <form class="form-horizontal" role="form">
                                  <div class="form-group">
                                    <label for="filter">Filter by</label>
                                    <select class="form-control">
                                        <option value="0" selected>All Snippets</option>
                                        <option value="1">Featured</option>
                                        <option value="2">Most popular</option>
                                        <option value="3">Top rated</option>
                                        <option value="4">Most commented</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Author</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Contains the words</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                </form>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </div>
                </div>
            </div>
          </div>
        </div> */
}
