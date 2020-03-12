import React from "react";

function Heading( props = [] ){
	return (<h1>Username: {props.text}</h1>)
}

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page_title: "This is a greet component!", count: 1 ,username:this.props.userData.name};
  }

  componentWillMount() {
    this.setState({
      page_title: "Click Me",
	  username:"mount name",
    });
  }

  handleSomethingDo() {
    this.setState({
      page_title: "Value updated",
	  username:"My new name",
    });
    console.log(this.state);
  }
  render() {
    let cons = this.getClass();
    return (
      <span className={cons}>
	  <Heading text={this.state.username} />
        <h1>Username : {this.state.username}</h1>
		 <h1>Email {this.props.userData.email}</h1>
        <button onClick={this.handleSomethingDo.bind(this)}>
          {this.state.page_title}
        </button>
      </span>
    );
  }

  getClass() {
    return this.state.count === 1 ? "badge  badge-md" : "badge badge-sm";
  }

  /*changePropValue() {
   return  this.props.username = this.props.username + "abc";
    //return a;
  }*/
}



export default Greet;
