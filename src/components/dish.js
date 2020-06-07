import React, { Component } from 'react';

class Dish extends Component {
    Ingredients = ['Arroz','Carne','Pollo'];
    countIngredients(){
        return this.Ingredients.length;

    }
    render(){
        return (
            <div className="dish"> 
                <h1> {this.props.name} </h1>
                <h4>Total Ingredientes</h4>
                <h3>{this.countIngredients()}</h3>
                <ul>

                    {this.Ingredients.map((Ingredients) => (

                    <li>{Ingredients}</li>

                    ))}

                </ul>
                
            
            
            </div>

        );
    }

}
export default Dish;