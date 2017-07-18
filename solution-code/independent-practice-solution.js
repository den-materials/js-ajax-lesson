  // Get all cats and spit out the JSON collection in the console
  $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
    });

  // Get a single cat and spit out the JSON in the console
  $.get('https://ga-cat-rescue.herokuapp.com/api/cats/2')
    .done(function(data){
      console.log(data);
    });

  // Use the more generic $.ajax to do the same request
  $.ajax({
    url: 'https://ga-cat-rescue.herokuapp.com/api/cats/2',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
    console.log(data);
  });
  // type: is an alias for method.
  // You should use type if you're using versions of jQuery prior to 1.9.0.

  // Modify that cat by changing its name
  $.ajax({
    url: 'https://ga-cat-rescue.herokuapp.com/api/cats/2',
    type: 'PUT',
    dataType: 'json',
    contentType: 'application/json',
    data: '{"id": 1, "name": "Captain Meowington", "note": "This cat gets stuff done."}',
  }).done(function(data){
    console.log(data);
  });

  // Add a new cat to the list with name and note
  var cat = {
    "name": "Caturnalia",
    "note": "Like Christmas but better!"
  };

  $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
    .done(function(data){
      console.log("Kitty was added");
    });