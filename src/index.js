import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import QrReader from 'react-qr-scanner'
import './index.css';

class QrContainer extends Component{
	constructor(props) {
		super(props)
	  	this.state = {text : "", data:""}
	}

	render(){
		return(
			<React.Fragment>
			<div>
				<QrReader delay={1000} onError={this.handleError.bind(this)} onScan={this.handleScan.bind(this)}/>
			</div>
			
			</React.Fragment>
		)
	}

	handleScan(data) {
		if (data) {
		  this.setState({text: "Confirm order for "+data.text+" ID: "});
		  this.setState({result: data});
		  window.location.href=data.text;
		}
	  }

	handleError(error){
		console.log(error)
	}

}
ReactDOM.render(<QrContainer/>,document.getElementById('reacthere'))