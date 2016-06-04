$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append('<div class="item">'+toAdd+'</div>');
  });

  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});

// Notes:
// $('.item').click(function() {
//   $(this).remove();
// });
//
// The above would not work as jQuery looks for all the .items when the DOM is loaded, so by the time your document is ready, it's already decided there are no .items to .remove(), and your code won't work.
//
// For this, we'll need a new event handler: .on(). You can think of .on() as a general handler that takes the event, its selector, and an action as inputs. The syntax looks like this:
//
// $(document).on('event', 'selector', function() {
//   Do something!
// });
//
// In this case, 'event' will be 'click', 'selector' will be '.item', and the thing we'll want to do is call .remove() on this.
