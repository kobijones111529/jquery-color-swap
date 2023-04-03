$(document).ready(function() {
  $('#generate-btn').data('count', 0);
  $('#generate-btn').on('click', function(e) {
    // Update count
    const jqElem = $(e.target);
    jqElem.data('count', jqElem.data('count') + 1);

    $('#item-container').append(`
      <div class="item red-bg">
        <p>${jqElem.data('count')}</p>
        <button class="yellow-btn">Yellow</button>
        <button class="delete-btn">Delete</button>
      </div>
    `);
  });
  $('#item-container').on('click', '.yellow-btn', function(e) {
    $(e.target).parent().css('background-color', 'yellow');
  });
  $('#item-container').on('click', '.delete-btn', function(e) {
    $(e.target).parent().remove();
  });
});
