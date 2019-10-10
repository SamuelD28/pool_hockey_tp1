import React, { Component } from 'react';

export default class Index extends Component {

    ws = new WebSocket('ws://localhost:8090')

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}