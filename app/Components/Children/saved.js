var React = require('react');

var helpers = require('../utils/helpers.js');

var Saved = React.createClass({

	getInitialState: function() {
		return {
			saved: []
		}
	},
	 componentWillReceiveProps(nextProps){
	 	if (nextProps.article){

			this.setState({saved: this.state.saved.concat([nextProps.article])});
	 	}
	 
	},

	//componentDidUpdate: function(prevProps, prevState) {

	//	console.log('component updated');

	//},

	componentDidMount: function() {

		helpers.getArticle()		
			.then(function(response){
				if (response.data != this.state.saved){
					console.log(this.state.saved);
					console.log("Saved", response.data);
					//console.log("First", response.data[0].title);
								
					this.setState({
						saved: response.data,
						//first: response.data[0]
					})
				}	
			}.bind(this))
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Saved Articles</h3>
				</div>
				<div className="panel-body">

					{this.state.saved.map(function(result, i){
						return <div key={i}>
							   <form>
								<p><a href={result.url} target="_blank">{result.title}</a></p>
								<input className="idInput" type="hidden" name="_id" value={result._id}></input>
								<button className="deleteBtn" type="button">Delete</button>
								</form>
								</div>
					}
					)}


				</div>

			</div>

		)
	}
});

module.exports = Saved;

