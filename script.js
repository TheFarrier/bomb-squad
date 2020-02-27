
var search = $("searchbox").val
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=ahLm9LQTqmWk22OWGsU3RnzDz48QEVFc";


$.ajax({
  url: queryURL,
  method: "GET"
})

//
  .then(function(response) {

    console.log(response);
  });



