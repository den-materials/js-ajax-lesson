  // Get all books and spit out the JSON collection in the console
  $.get('https://super-crud.herokuapp.com/books')
    .done(function(data){
      console.log(data);
    });

  // Now, get a single book and spit out the JSON in the console

  $.get('https://super-crud.herokuapp.com/books/5a0e0cde0b2739001158d4f7')
    .done(function(data){
      console.log(data);
    });  

  // Use the more generic $.ajax to do the same request

  $.ajax({
    url: 'https://super-crud.herokuapp.com/books/5a0e0cde0b2739001158d4f7'
  })
    .done(function(data) {
      console.log(data);
    });

  // Add a new book to the list with name and note
  let book = {
    // title here
    title: "My Book",
    // author here
    author: "My author",
    // image URL here
    image: "www.zombo.com",
    // release date here
    releaseDate: "1-2-3"
  };

  // Now make the AJAX request. What verb adds new data
  // to our endpoint?

  //$.post('https://super-crud.herokuapp.com/books', book);
    // .done(function(data) {
    //   console.log(data);
    // });

  // Modify the book you just made by changing its title
  // the property `type:` is an alias for method.
  // By default, your `type` is GET, but we need to use
  // a different one here...remember which one?

  let updatedBook = {
    // title here
    title: "My Bookybook",
    // author here
    author: "My author",
    // image URL here
    image: "www.zombo.com",
    // release date here
    releaseDate: "1-2-3"
  };

  $.ajax({
    url: 'https://super-crud.herokuapp.com/books/5a32c4ff33746a0011324bd3',
    type: 'PUT',
    data: updatedBook
  })
    .done(function(data) {
      console.log(data);
    });

  $.ajax({
    url: 'https://super-crud.herokuapp.com/books/5a32c4ff33746a0011324bd3',
    type: 'DELETE'
  })
    .done(function(data) {
      console.log(data);
    });