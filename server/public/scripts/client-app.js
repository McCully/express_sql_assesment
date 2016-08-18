$(document).ready(function(){
  getAnimals();

  $('#animal-submit').on('click' , postAnimal);
});

function getAnimals() {
  $.ajax({
    type: 'GET',
    url: '/animals',
    success: function (animals) {
      console.log('GET /animals returns:' , animals);
      animals.forEach(function (animal){
        var $el = $('<li></li>');
        var animalProperties = ["species" , "amount"];

        animalProperties.forEach(function(property){
          var inputType = 'text';
          var $input = $('<input type = "text" id = "' + property + '"name = "' + property + '"/>"')
          $input.val(animal[property]);
          $el.append($input);
        });
        $el.data('animalId' , animal.id);
        $('#animal-list').append($el);
      });
    },
    error: function (response) {
      console.log('GET /animals fail. No animals could be retrieved!');
    },
  });
}


function postAnimal() {
  event.preventDefault();
  var book = {};

  $.each($('#animal-form').serializeArray() , function (i , field) {
  });

  $.ajax({
    type: 'POST' ,
    url: '/animals',
    success: function () {
      console.log('POST WORKING');
      $('#animal-list').empty();
      getAnimals();
    },
    error: function(response) {
      console.log('POST NOT WORKING');
    },
  })
}
