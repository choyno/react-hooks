import React from 'react'
import './App.css'
import Counter from './counter'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unMountCounter = () => this.setState({mount: false})
    this.ignoreProp  = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator  = () => this.setState({seed: Number.parseInt(Math.random() * 100) })
  }

  render (){
    return <div>
      <button className="btn-default" onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button className="btn-default" onClick={this.unMountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      <button className="btn-default" onClick={this.ignoreProp} >Ignore Prop</button>
      <button className="btn-default" onClick={this.seedGenerator} >Generate Seed</button>
      <div className="App">
        {this.state.mount ?
            <Counter ignoreProp={ this.state.ignoreProp }
                     seed={ this.state.seed }
            /> :
            null}
      </div>
    </div>
  }
}

export default App;
