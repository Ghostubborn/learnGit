var app = angular.module('test-angular', []);

app.directive('myDraggable', ['$document', function($document) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;

    element.css({
     position: 'relative',
     border: '1px solid red',
     backgroundColor: 'lightgrey',
     cursor: 'pointer'
    });

    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      if (Math.abs(x) > 200 || Math.abs(y) > 200) {
        x = 0;
        y = 0;
        element.css({
          top: 0,
          left:  0
        });
      }
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
}]);

app.directive('myDirective', function() {
  return {
    restrict: 'E',
    template: '<a href="http://www.baidu.com">Click me to baidu</a>'
  }
});

app.controller('TestParentController', function($scope) {
  $scope.person = { greet: false };
});
app.controller('TestChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.name = 'Ghost';
    $scope.person.greet = true;
  }
});

app.controller('ClockDemo', function($scope) {
  $scope.clock = {
    now: new Date().toLocaleTimeString()
  };
  var updateClock = function() {
    $scope.clock = new Date().toLocaleTimeString();
  };
  setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});

app.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {"name":"Xiaomi", "type":"4(4G)"},
    {"name":"Smartisan", "type":"T1"},
    {"name":"iPhone", "type":"5S"}
  ];
  $scope.hello = "Hi, boy";
});
