
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ahLm9LQTqmWk22OWGsU3RnzDz48QEVFc";

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //
      .then(function(response) {

        console.log(response);
      });
