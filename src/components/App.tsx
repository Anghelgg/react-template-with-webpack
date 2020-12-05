import React from "react"

export default class App extends React.Component<Iprops, any> {
    render(){
        return (
            <h1>holiwis {this.props.angel}</h1>
        )
    }
}

interface Iprops {
    angel: string
}