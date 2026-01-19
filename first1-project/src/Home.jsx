import './App.css'
function Home(){
    let name ="Sourav"
    let mystyle ={
        backgroundColor:"lightblue",
        padding:"30px",
        color:"white"
    }
    return(
        <>
        <h1 style={{backgroundColor:"red"}}>This is Home</h1>
        <h1 style={mystyle}>this is {name}</h1>

        <div className="container">
            <h1>headiding lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est perspiciatis exercitationem officiis perferendis dignissimos, repellat recusandae quasi ratione alias!
            </p>
            <button>get out</button>
        </div>
        </>
    )
}
export default Home