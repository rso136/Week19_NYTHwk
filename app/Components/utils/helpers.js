var axios = require('axios');
var authKey = "503eccf364884975a1867380357a1f48";

var helpers = {

	runQuery: function(topic, startYear, endYear){

		console.log(topic);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";
	
		return axios.get(queryURL)
			.then(function(nytdata){
				console.log(nytdata);

				console.log(nytdata.data.response.docs);

				return nytdata.data.response.docs


			})
	},

	postArticle: function(article){

		return axios.post('/api/saved', article)
			.then(function(response) {

				console.log(response);
				return response;
			});
	},

	getArticle: function(){

		return axios.get('/api/saved')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

}


module.exports = helpers;
