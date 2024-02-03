import React from 'react';

export default function Footer() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}> 
      <footer className="sticky-footer" style={{backgroundColor:'#2c3e50', marginBottom:'auto'}}>
        <div className="container ">
          <div className="row m-4">
            {/* First Card */}
            <div className="col-md-4">
              <div className="card text-center" style={{ border: 'none' }}>
                <div className="card-body" style={{backgroundColor:'#2c3e50', color:'white'}}>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-md-4">
              <div className="card text-center" style={{ border: 'none' }}>
                <div className="card-body" style={{backgroundColor:'#2c3e50', color:'white' }}>
                  <h3>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter mx-1 "></i>
                    <i className="fab fa-linkedin-in mx-1 "></i>
                    <i className="fas fa-globe mx-1 "></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="col-md-4" style={{  textAlign:'center' , color:'white'}}>
              <div className="card text-center" style={{ border: 'none' }}>
                <div className="card-body" style={{backgroundColor:'#2c3e50', color:'white' }}>
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' ,color:'white'}}>
          Copyright © Your Website 2021
        </div>
      </footer>
    </div>
  );
}
