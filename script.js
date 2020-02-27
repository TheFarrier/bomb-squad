var srchBtn = $("#run-search");



function getArticles(event){
  var search = $("#search-term").val();
  var count = $("#article-count").val();
  var start = $("#start-year").val();
  var end = $("#end-year").val();
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=ahLm9LQTqmWk22OWGsU3RnzDz48QEVFc";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for(i=0; i<=count; i++ ){
      displayArticles(response);
    }

  });
}

function displayArticles(response){
  var main = $("#article-section");
  var article = $("<div>").addClass("card");
  var title = $("<div>").addClass("card-header");
  var story = $("<div>").addClass("card-body");

  title.text(response.response.docs[i].headline.main);
  story.text(response.response.docs[i].abstract);
  console.log(title);
  article.click(function(event){
    event.stopPropagation()
    window.location.replace(response.response.docs[i].web_url);
  })

  article.append(title, story);
  main.append(article);
}

srchBtn.click(function(){
  event.preventDefault();
  getArticles();
})