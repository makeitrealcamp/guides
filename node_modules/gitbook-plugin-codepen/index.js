'use strict';
var cheerio = require('cheerio');
var _ = require('underscore');
var parse = require('url-parse');
var defaultConfig = {
  height: 300,
  theme: 0,
  defaultTab: 'result',
  description: ''
};

var template = _.template(
  '<p data-height="<%= height %>" data-theme-id="<%= theme %>" data-slug-hash="<%= pen %>" data-default-tab="<%= defaultTab %>" data-user="<%= user %>" class="codepen">See the Pen <a href="http://codepen.io/<%= user %>/pen/<%= pen %>/"><%= description %></a> by <%= user %> (<a href="http://codepen.io/<%= user %>">@<%= user %></a>) on <a href="http://codepen.io">CodePen</a>.</p>'
);

module.exports = {
  book: {
    assets: './assets',
    js: [
      'embed-codepen.js'
    ]
  },
  hooks: {
    page: function(page) {
      var config = _.defaults(this.options.pluginsConfig
        .codepen, defaultConfig);
      _.each(page.sections, function(section) {
        var $ = cheerio.load(section.content);
        $('a').filter(function() {
          var href = $(this).attr('href');
          return parse(href).protocol ===
            'codepen:';
        }).each(function(index, a) {
          a = $(a);
          var rst = parse(a.attr('href'), true);
          a.replaceWith(template(_.extend({},
            config, rst.query, {
              user: rst.host,
              pen: rst.pathname.slice(1)
            })));
        });
        section.content = $.html();
      });
      return page;
    }
  }
};
