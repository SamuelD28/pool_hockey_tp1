import React, { Component } from 'react';
import CompteurPersonne from './comptePersonne';
import LocalizedStrings from 'react-localization';

export default class Index extends Component {

    strings = new LocalizedStrings({
        en:{
            how:"How do you want your egg today?",
            boiledEgg:"Boiled egg",
            softBoiledEgg:"Soft-boiled egg",
            choice:"How to choose the egg"
        },
        it: {
            how:"Come vuoi il tuo uovo oggi?",
            boiledEgg:"Uovo sodo",
            softBoiledEgg:"Uovo alla coque",
            choice:"Come scegliere l'uovo"
        },
        fr: {
            how:"Comment veux-tu tes oeufs ce matin",
            boiledEgg:"Uovo sodo",
            softBoiledEgg:"Uovo alla coque",
            choice:"Come scegliere l'uovo"
        }
    });

    ws = new WebSocket('ws://localhost:8090')

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({ dataFromServer: message })
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }
    }

    render() {
        return (
            <div className="container">
                <CompteurPersonne
                    name="pizza Large"
                />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{this.strings.how}</div>
                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}