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
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>

								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>Start Date</strong></h4>
								<input type="text" className="form-control text-center" id="start" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>End Date</strong></h4>
								<input type="text" className="form-control text-center" id="end" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>

		)
	}

});




module.exports = Form;