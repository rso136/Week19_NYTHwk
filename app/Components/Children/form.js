var React = require('react');

var Form = React.createClass({

	getInitialState: function(){
		return {
			term: "",
			start: "",
			end: ""
		}
	},

	handleChange: function(event){

    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	},
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);
		console.log(this.state.start);
		console.log(this.state.end);
		
		this.props.setTerm(this.state.term);
		this.props.startVal(this.state.start);
		this.props.endVal(this.state.end);
	},	

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Search Parameters</h3>
				</div>
				<div className="panel-body">

						<form>
							<div className="form-group">
								<p className="">Search Term:</p>

								<input type="text" className="form-control" id="term" onChange= {this.handleChange} required/>
								<br />
								<p className="">Start Year:</p>
								<input type="text" className="form-control" id="start" onChange= {this.handleChange} required/>
								<br />
								<p className="">End Year:</p>
								<input type="text" className="form-control" id="end" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="searchBtn btn btn-custom" onClick={this.handleClick}>SUBMIT</button>
							</div>

						</form>
				</div>
			</div>

		)
	}

});




module.exports = Form;