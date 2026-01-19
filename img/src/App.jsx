import imgsrc from './assets/react.svg'
import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
function App(){
  return(
    <>
    <img src="vite.svg" height="200px" alt="" />
    <img src="doctor.png" alt="" />
    <img src="doctor1.jpg" height="200px" alt="" />

    <h1>this image is from src</h1>
    <img src={imgsrc} height="200px" alt="" />
    <img src={a1} height="200px" alt="" />
    <img src={a2} height="200px" alt="" />

    </>
  )
}
export default App