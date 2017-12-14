  // Get all books and spit out the JSON collection in the console
  $.get('https://super-crud.herokuapp.com/books')
    .done(function(data){
      console.log(data);
    });

  // Now, get a single book and spit out the JSON in the console


  // Use the more generic $.ajax to do the same request

  // Add a new book to the list with name and note
  let book = {
    // title here

    // author here

    // image URL here

    // release date here

  };

  // Now make the AJAX request. What verb adds new data
  // to our endpoint?

  // Remember JSON is serialized, so you will need to
  // "stringify" your book object...Google to the rescue!

  // Modify the book you just made by changing its title
  // the property `type:` is an alias for method.
  // By default, your `type` is GET, but we need to use
  // a different one here...remember which one?

