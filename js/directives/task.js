angular.module('TaskList').directive('ngTask', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/tasks/task.html',

        scope: {
            task: '='
        },
        link: function(scope) {

            scope.printDueDate = function(task) {
                return task.due_date.getDate() + '/' + (task.due_date.getMonth() + 1) + '/' + task.due_date.getFullYear();
            };

            scope.hideEditTask = function(){
                scope.show_edit = false;
            };

            scope.showEditTask = function(){
                scope.show_edit = true;
            };
        }

    }
});