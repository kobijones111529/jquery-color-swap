$(document).ready(function() {
  $('#generate-btn').data('count', 0);
  $('#generate-btn').on('click', function(e) {
    // Update count
    const jqElem = $(e.target);
    const count = jqElem.data('count');
    jqElem.data('count', count + 1)

    $(document.body).append(`
      <div class="red-bg">
        <p>${jqElem.data('count')}</p>
        <button>Yellow</button>
        <button>Delete</button>
      </div>
    `);
  });
});
