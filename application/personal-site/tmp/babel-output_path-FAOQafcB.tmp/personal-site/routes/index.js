define("personal-site/routes/index", ["exports", "ember"], function (exports, _ember) {

    // Dummy: Look in models/personal-overview when we develop an
    // Ajax CDN for this site.
    var currentAttributes = {
        name: "Austin Fell",
        img: "assets/images/personal-photo.png",
        occupation: "Front-end web developer",
        workplace: "Blue Bike Web Design",
        workplaceUrl: "http://www.bluebikedesign.com",
        education: "student",
        schoolUrl: "http://www.umdearborn.edu",
        school: "University of Michigan-Dearborn"
    };

    // Dummy: Look in models/display-card when we develop an
    // Ajax CDN for this site.
    var currentCards = [{
        title: 'Web',
        content: 'A showcase of various websites along with their designs and notes about their implementation and a few things I may (or may not) have learned along the way.',
        path: 'web-showcase'
    }, {
        title: 'Etc',
        content: 'Literally anything programming related that I may have done for fun or for school. Ranging from one off Python scripts to managements tools written in Rust.',
        path: 'etc-showcase'
    }, {
        title: 'Music',
        content: 'Music that I was remixed or written and posted on Soundcloud: Mostly for fun, nothing professional to see here.',
        path: 'music-showcase'
    }, {
        title: 'Blog',
        content: 'A personal blog that I keep to maintain thoughts, org mode documents and more. Although visible for anyone to see, this is mostly to keep track of my thoughts.',
        path: 'blog'
    }];

    exports["default"] = _ember["default"].Route.extend({
        model: function model() {
            return _ember["default"].RSVP.hash({
                personAttributes: currentAttributes,
                displayCards: currentCards
            });
        }
    });
});