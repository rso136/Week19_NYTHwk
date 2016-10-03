var React = require('react');

// Here we include all of the sub-components
var Form = require('./Children/Form');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');
//var History = require('./Children/History');

// Helper Function
var helpers = require('./utils/helpers.js');

var Main = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			start: "",
			end: "", 
			results: []
		}
	},

	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},
	startVal: function(start){
		this.setState({
			start: start
		})
	},
	endVal: function(end){
		this.setState({
			end: end
		})
	},
	saveArticle: function(data) {
		console.log('saving article', data);
		var self = this;
		helpers.postArticle(data).then(function(response) {
			self.setState({article: response.data});
		})
	},

	componentDidUpdate: function(prevProps, prevState){
		if(prevState.searchTerm != this.state.searchTerm){

			helpers.runQuery(this.state.searchTerm, this.state.start, this.state.end)
				.then(function(data){

					this.setState({
						results: []
					})

					var searchRes = [];

					for (var i = 0; i < 5; i++) {
						searchRes.push(data[i]);
					}

					this.setState({
						results: searchRes
					})


				}.bind(this))
		}
	},

	render: function() {

		return(

			<div className="container">
			<div className="jumbotron">
				<h2>New York Times Article Repository</h2>
				<h3>Search and save articles of interest</h3>

			</div>
				<div className="row">
					<div className="col-md-12">

						<Form setTerm={this.setTerm} startVal={this.startVal} endVal={this.endVal} />

					</div>

					<div className="col-md-12">

						<Results saveArticle={this.saveArticle} info={this.state.results} />

					</div>

					<div className="col-md-12">

						<Saved article={this.state.article} />

					</div>

				</div>
			</div>
		)
	}
});

module.exports = Main;