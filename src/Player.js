import React, { Component } from "react";
export default class player extends Component {
  render() {
    return (
      <div class="container text-center">
  <div class="row">
    <div class="col-4">
    <div className="card">
             <img src='assets/images/cr.jpg' alt="Ronaldo" />
             <h3>Cristiano Ronaldo</h3>
             <p className="title">Manchester United</p>
             <p>
               <button>Detail</button>
             </p>
           </div>
    </div>
    <div class="col-4">
    <div className="card">
             <img src='assets/images/kante.jpg' alt="Kante" />
             <h3>Kante</h3>
             <p className="title">Chelsea</p>
             <p>
               <button>Detail</button>
             </p>
           </div>
    </div>
    <div class="col-4">
    <div className="card">
            <img src='assets/images/messi.jpg' alt="Messi"/>
            <h3>Messi</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
    <div className="card">
            <img src='assets/images/neymar.jpg' alt="Neymar" />
            <h3>Neymar</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
    </div>
    <div class="col-4">
    <div className="card">
            <img src='assets/images/kane.jpg' alt="Kane" />
            <h3>Kane</h3>
            <p className="title">Tottemham</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
    </div>
    <div class="col-4">
    <div className="card">
            <img src='assets/images/haaland.jpg' alt="Haaland" />
            <h3>Haaland</h3>
            <p className="title">Manchester City</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
    </div>
  </div>
</div>
    );
  }
}
