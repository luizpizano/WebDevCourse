function LoadDynamicFeedControl() {
  var feeds = [ 
    {title:'CNN', url:'http://rss.cnn.com/rss/edition_world.rss'},
    {title:'NY Times', url:'http://feeds.nytimes.com/nyt/rss/World'},
    {title:'Reuters',  url:'http://feeds.reuters.com/Reuters/worldNews'}
  ];
  var options = {
    stacked : false,
    horizontal : false,
    title : "News"
  }

  new GFdynamicFeedControl(feeds, 'feed-control', options);
}
// Load the feeds API and set the onload callback.
google.load('feeds', '1');
google.setOnLoadCallback(LoadDynamicFeedControl);