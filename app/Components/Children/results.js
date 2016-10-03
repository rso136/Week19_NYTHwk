// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({
	
	handleClick: function(results) {
		
		this.props.saveArticle({
			title: results.headline.main,
			url: results.web_url
		});

	},
	// Here we render the function
	render: function(){
		var self = this;
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body">

						{this.props.info.map(function(results, i) {
							
							return <div className="resultBox" key={i}>
								   <form className="resultForm" >
								   	<h4><a href={results.web_url} target="_blank">{results.headline.main}</a></h4>
								   	<input type="hidden" name="title" value={results.headline.main} size="100"></input>
								   	<input type="hidden" name="url" value={results.web_url} size="100"></input>
								   	<button className="saveBtn" type="button" onClick={self.handleClick.bind(self, results)}>Save</button>
								   </form>
								   </div>
						}
						)}


				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;