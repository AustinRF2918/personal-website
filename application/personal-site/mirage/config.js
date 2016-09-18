let musicEntries = [
    {
	type: 'music-entries',
	id: 0,
	attributes: {
	    title: "Boards Of Canada - Heard Through The Telegraph Lines (Austin's Telegraph Remix)",
	    genre: "Downtempo/Chill",
	    date:  "February, 2015",
	    img: "assets/images/boc1.jpg",
	    ident: "210992419"
	}
    } , {
	type: 'music-entries',
	id: 1,
	attributes: {
	    title: "Austin Ferr - The Ferry",
	    genre: "Downtempo/Chill",
	    date:  "December, 2015",
	    img: "https://i1.sndcdn.com/artworks-000142636898-fd638b-t500x500.jpg",
	    ident: "241311128"
	}
    }, {
	type: 'music-entries',
	id: 2,
	attributes: {
	    title: "Galantic - Peanut Butter Jelly (Austin's Bettye Extended Edit)",
	    genre: "House/Mashup",
	    date:  "December, 2015",
	    img: "https://i1.sndcdn.com/artworks-000141480885-rqxr4e-t500x500.jpg",
	    ident: "239930490"
	}
    }, {
	type: 'music-entries',
	id: 3,
	attributes: {
	    title: "Galantic - Peanut Butter Jelly (Austin's Bettye Extended Edit)",
	    genre: "House/Mashup",
	    date:  "December, 2015",
	    img: "https://i1.sndcdn.com/artworks-000141480885-rqxr4e-t500x500.jpg",
	    ident: "239930490"
	}
    }, {
    }, {
	
    }  
];

let webEntries = [
    {
	type: 'web-entries',
	id: 0,
	attributes: {
	    title: "Stonewater Subdivision",
	    genre: "Home Assocation",
	    date:  "August, 2016",
	    img: "assets/images/boc1.jpg",
	    ident: "210992419"
	}
    } , {
	type: 'web-entries',
	id: 1,
	attributes: {
	    title: "Juventis Spa",
	    genre: "Medical Spa",
	    date:  "June, 2016",
	    img: "https://i1.sndcdn.com/artworks-000142636898-fd638b-t500x500.jpg",
	    ident: "241311128"
	}
    }, {
	type: 'web-entries',
	id: 2,
	attributes: {
	    title: "Alarm Clock Buddy",
	    genre: "Web Application",
	    date:  "July, 2016",
	    img: "https://i1.sndcdn.com/artworks-000141480885-rqxr4e-t500x500.jpg",
	    ident: "239930490"
	}
    }, {
	type: 'web-entries',
	id: 3,
	attributes: {
	    title: "Blue Bike Web Design",
	    genre: "Business Website",
	    date:  "May, 2016",
	    img: "https://i1.sndcdn.com/artworks-000141480885-rqxr4e-t500x500.jpg",
	    ident: "239930490"
	}
    }, {
    }, {
	
    }  
];


export default function() {
  this.namespace = '/api';
    this.get('/music-entries', function(db, request) {
	let qp = request.queryParams;
	let perPage = Number(qp.per_page);
	let page = Number(qp.page);

	let otherObjects = [];

	for (let i = 0; i < perPage; i++) {
	    if (page === 1) {
	      otherObjects.push(musicEntries[Number(i + page - 1)]);
	    } else {
	      otherObjects.push(musicEntries[Number(i + page)]);
	    }
	}

    return {
	data: otherObjects,
	meta: {
	    total_pages: 2
	}
    };
  });

     this.get('/web-entries', function(db, request) {
	let qp = request.queryParams;
	let perPage = Number(qp.per_page);
	let page = Number(qp.page);

	let otherObjects = [];

	for (let i = 0; i < perPage; i++) {
	    if (page === 1) {
	      otherObjects.push(webEntries[Number(i + page - 1)]);
	    } else {
	      otherObjects.push(webEntries[Number(i + page)]);
	    }
	}

    return {
	data: otherObjects,
	meta: {
	    total_pages: 2
	}
    };
  });
  
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
