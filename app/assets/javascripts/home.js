$(document).ready(function() {

  $('a#home-link').click(function(e) {
    e.preventDefault();
    var content = $('#content')
    content.html('')
    content.html('<h1>Welcome to Creature Central</h1><div class="container-fluid"><img src="/assets/creatures-3c0b0b2aebee641649c842c14cca13271a0f061da19dde7390bc2081ead71866.jpg" id="home-image"></div>')
  })

  $('#all-creatures').click(function(e) {
    e.preventDefault();
    var content = $('#content')
    content.html('')
    $.ajax({
      url: '/creatures',
      method: 'GET',
      success: function(creatures) {
        console.log(creatures)
        content.append(
          '<div class="container-fluid"><h1>All Creatures</h1> <button class="btn btn-primary" method="GET" action="/creatures/new"> New Creature </button></div><div id="creature-list" class="container-fluid"></div>'
          );
        creatures.forEach(function(creature) {
          $('#creature-list').append(
            '<div class="well"><p><span style="font-weight: bold"><a href="/creatures/' + creature.id + '"> ' + creature.name + '</a></span> ' + creature.description + '</p><button method="DELETE" action="/creatures/' + creature.id + '" class="btn btn-danger delete-btn"> Delete </button>'
            )
        });
      },
      error: function(err) {

      }
    })
  })

  $('#content').on('click','button.delete-btn', function(e) {
    e.preventDefault();
    var btn = $(this);

    $.ajax({
      url: btn.attr('action'),
      method: 'DELETE',
      success: function(data) {
        console.log('success')
        btn.closest('.well').remove();
      },
      error: function(err) {
        console.log(err);
      }
    })
  })






})