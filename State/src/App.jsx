import Hooks from "./Hooks"


function App(){
  function demo(a){
    alert("Working......"+a)
  }
  function add(a,b){
    document.write(a+b)
  }
  return(
    <>
    <button onClick={demo}>Click</button>
    <button onClick={()=>{
      demo(10)
    }}>Useme</button>
    <button onDoubleClick={()=>{add(3,4)}}>DoubleClick</button>
    <button onContextMenu={()=>{"hello"}}>oncontext  menu</button>
    <button onMouseEnter={demo}></button>
    <Hooks />
    </>
  )
}export default App