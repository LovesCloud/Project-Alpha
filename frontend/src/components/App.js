import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App , banner-nissan">
        <header className="App-header">
          <h1 className="App-title">Build Through Docker</h1>
        </header>
        </div>
        <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={thumbnail} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
              </div>
           
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={thumbnail} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
			  </div>
            
            <div className="col-md-4">
              <div classNames="card mb-4 box-shadow">
              <img className="card-img-top" src={thumbnail} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
             
			</div>
			
			</div>
      
     </div>
    );
  }
}

export default App;
