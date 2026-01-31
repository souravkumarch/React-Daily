import rose from './assets/girl.jpg'
function App(){

  return(
    <>
      <h1 className='bg-cyan-950 text-white '>This is story about fairy tail</h1>
   <div className="parent flex bg-amber-200">
<div className="Content">

  <p>Story Earth Land naam ki magical world me set hai, jahan mages (jaadugar) guilds me kaam karte hain. Ye guilds logon ke problems solve karte hain—jaise monsters ko harana, curses todna, ya dangerous missions complete karna.</p>
  <button className='box-border'>Read More</button>
</div>
<div className="">
  <img src={rose} className='h-70' />
</div>
   </div>

    </>
  )
}export default App