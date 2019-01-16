import React, { Component } from 'react';
import API from "../../utils/index"

class Home extends Component{
    componentDidMount(){
        API.getAllCharacter().then(data => console.log(data.data)).catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <h1>
                    Hello World!
                </h1>
            </div>
        )
    }
}

export default Home;