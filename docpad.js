// DocPad Configuration File
// http://docpad.org/docs/config

var docpadConfig = {
	collections: {
		pages: function(){
				return this.getCollection("html").findAllLive({relativeOutDirPath: "."}, [{order: 1}]);
		},
		posts: function(){
				var posts = this.getCollection("html").findAllLive({relativeOutDirPath: "blog"});
				posts.on("add", function(post){
					post.setMetaDefaults({
						layout: "blogpost"
					});
				});
				return posts;
		},
		projects: function(){
			var projects = this.getCollection("html").findAllLive({relativeOutDirPath: "projects"});
			projects.on("add", function(project){
				project.setMetaDefaults({
					layout: "contentpage"
				});
			});
			return projects;
		}
	},
  plugins: {
    cleanurls: {
      static: true
    },
		moment: {
			formats: [
				{
					raw: "date",
					format: "MMMM Do, YYYY",
					formatted: "formattedDate"
				}
			]
		}
  },
	templateData: {
		site: {
			scripts: [

			]
		}
	},
	events: {
		populateCollections: function(){
			this.docpad.blocks["scripts"].add([
				"/libs/jquery.min.js",
				"/libs/jquery.smoothState.min.js",
				"/script.js"
			], {
				defer: false
			});
			this.docpad.blocks["styles"].add([
				"/libs/Animate.css",
				"/libs/fa.css",
				"/styles.css",
				"https://fonts.googleapis.com/css?family=Open+Sans"
			]);
		}
	}
}

module.exports = docpadConfig;
