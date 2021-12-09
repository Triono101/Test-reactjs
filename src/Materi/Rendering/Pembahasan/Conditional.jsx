import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }
    
    // render() {
    //     const isLogin = false;
    //     if(isLogin) {
    //         return(
    //             <div>
    //                 <h1>Anda sudah login</h1>
    //             </div>
    //     )
    //     } else {
    //         return(
    //             <div>
    //                 <h1>Silahkan login terlebih dahulu</h1>
    //             </div>
    //         )
    //     }   
    // }

    render() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000) 
        
        return(
            <div>
                { this.state.isLoading
                  ? <h1>Loading ...</h1>
                  : <h1>Selamat belajar Javascript</h1>
                }
            </div>
        )  
    }
}