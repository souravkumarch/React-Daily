import Ch2 from "./ch2"

function Ch1(props){
    return(
        <>
        <h1>Ch1</h1>
        <Ch2 city={props.city} />
        </>
    )
} export default Ch1