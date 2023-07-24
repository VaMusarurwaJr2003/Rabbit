import React, { Component } from "react"
import "../Breed/Breed.css"

class BreedData extends Component {
    render() {
        return (

            <div className={this.props.className}>
                <div className={this.props.title}>
                    <h2>{this.props.heading}<span> {this.props.span}</span></h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    {<img alt="img" src={this.props.img2} />}
                </div>
            </div>

        )
    }
}
export default BreedData;