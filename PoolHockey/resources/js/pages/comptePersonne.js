import React, { Component } from 'react'

export default class ComptePersonne extends Component {

    constructor(props) {
        super(props);
        this.state = { conteur: 0 };
    }

    componentDidMount() {

    }

    Incrementer = () => {
        this.setState({ conteur: ++this.state.conteur });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.state.conteur}</h2>
                <button onClick={this.Incrementer}>Incrementer</button>
            </div>
        )
    }
}
