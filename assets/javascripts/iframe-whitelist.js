(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/doodle\.com\/poll\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/civicdashboards\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/data\.beta\.nyc\/.+/i);
})();

