// const Inline = () => {
//     return(
//     <h1 style={{color: "orangered"}}>Hello Javascript</h1>) 
// }

const Inline = () => {
    const style = {
        color: "orangered",
        fontSize: "50px"
    }
    return(
    <h1 style={style}>Hello Javascript</h1>
    ) 
}

export default Inline;