import yourImage from '../Images/download.png'; 

export default function Home() {

  return (
      <div className="home d-flex justify-content-center align-items-center text-white" style={{ backgroundColor:'#1abc9c', height: '100vh',
      width: '100vw'}}>
      <div className="text-center">
        <img src={yourImage} alt="" className="mb-3" />
        <div className="text-center pt-4" style={{ color: 'white' }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" style={{ backgroundColor: 'white' , width: '90px', height: '5px'}}></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" style={{ backgroundColor: 'white' , width: '90px', height: '5px'}}></div>
          </div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  )
}
