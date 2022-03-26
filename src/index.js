import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


    


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>rohit27_02</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={toggle: true};
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange(){
    this.setState(a=>({
      toggle:!a.toggle
    }));
  }
   

  render(){
    if(this.state.toggle==true){
      document.getElementById("body").style.backgroundColor="black"
      document.getElementById("body").style.color="white"
    }else{
      document.getElementById("body").style.backgroundColor="white"
      document.getElementById("body").style.color="black"
    }
    return (
      <div>
      <button onClick={this.handleChange} className="rounded-circle btn btn-warning">
        {this.state.toggle?"ON":"OFF"}
      </button>
      </div>

    );
  }



}

ReactDOM.render(
  (<div className='text-center'>
      <Clock />
      <Toggle/>
     

    </div>),
  document.getElementById('root')
);