import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Eric',
            age: 90
        }
        
        
        
    }

   

    
    


    render = () => {
        console.log('i rendered')

        return (
            <div>

                <h1>This is the home page</h1>
                <h2>This is the home page of {this.state.name}</h2>
                <img src="makoto-megami-wallpaper.jpg" alt="a"/>
                


            
            </div>
        )
    }
}