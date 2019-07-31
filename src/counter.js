import React from 'react'
//const ErrorComponent  =  () => <div>{ props.ignore }</div>

class Counter extends React.Component {
  constructor(props){
    console.log('Constructor - First Page Load')
    super(props);
    this.state = {
      counter: 0,
      seed: 0
    };

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})

  }

  static getDerivedStateFromProps (props, state){
    // use to copy props to and assign to this(current component) state
    console.log( props.seed )
    console.log( state.seed )
    if(props.seed && state.seed !== props.seed){
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  componentDidMount (){
    console.log("Component Did Mount - First Page Load");
    console.log("--------------------------------------------------------");
  }

  shouldComponentUpdate (nextProps, nextState){

    console.log("should component update - trigger on parent class  ( use to check if this components need to rerender )");
    if(nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp){
      console.log("should component update - false")
      return false
    }
    console.log("should component update - true")
    console.log("---------------------")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("get SnapShot before update")
    return null
  }

  render () {

    console.log("Render - Page Load or event click")
    //if (this.state.error){
    //  return <div>We Encounter an error { this.state.error.message }<div>
    //}

    return <div>
      <button className="btn-default" onClick={this.increment}>Incremenet</button>
      <button className="btn-default" onClick={this.decrement}>Decremenet</button>
      <div className="Counter">
        <h1> Counter: {this.state.counter} </h1>
      </div>
    </div>
  }

  componentDidUpdate (prevProps, prevState, snapshot){
    console.log('Component Did Update - Trigger on Event Click')
    console.log('---------------------')
  }

  componentWillUnmount () {
    console.log('Component Will UnMount trigger on parent if not display/render')
    console.log("--------------------------------------")
  }

  componentDidCatch (error, info){
    console.log('Component did Catch')
    this.setState({error, info})
    //<ErrorComponent/>
  }

}

export default Counter;
