$(function() {
  $('.item1').on('click', '.sub1', function() {
    $(this).toggleClass('status-size', {
      duration: 2000,
      easing: 'linear'
    })
    .toggleClass('status-color', {
      duration: 2000,
      easing: 'swing'
    });
  })
  .on('click', '.sub2', function() {
    $(this).toggleClass('status-size-and-color', {
      duration: 2000,
      easing: 'linear'
    });
  })
  .on('click', '.sub3', function() {
    $(this).toggle('blind', {
      duration: 1000
    })
    .toggle('bounce', {
      duration: 1000
    })
    .toggle('clip', {
      duration: 1000
    })
    .toggle('drop', {
      duration: 1000
    })
    .toggle('fold', {
      duration: 1000
    })
    .toggle('highlight', {
      duration: 1000
    })
    .toggle('puff', {
      duration: 1000
    })
    .toggle('pulsate', {
      duration: 1000
    })
    .toggle('scale', {
      duration: 1000
    })
    .toggle('shake', {
      duration: 1000
    })
    .toggle('slide', {
      duration: 1000
    })
    .toggle('transfer', {
      duration: 1000
    });
  });

  $('.item2 .sub1').draggable({
    scope: 'tasks',
    revert: 'invalid',
    helper: 'clone'
  });
  $('.item2 .sub2').droppable({
    scope: 'tasks',
    drop: function(event, ui) {
      $draggedSub = ui.draggable;
      $draggedSub.fadeOut(function() {
        $draggedSub.appendTo($(".item2 .sub2")).fadeIn(1000);
      })
    }
  });

  $('.item3 .sub1').resizable({
    animate: true,
    animateEasing: 'easeOutBounce',
    helper: 'item3-resizable-helper',
    aspectRatio: 16 / 9,
    handles: 'w, s, e, n'
  });

  $('.item4 .sub1').selectable({
    tolerance: 'touch',
    selected: function(event, ui) {
      $(ui.selected).toggleClass('selected', {
        duration: 100
      })
    }
  });
  $('.item4 .sub2').selectable({
    
  });
})