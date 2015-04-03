angular.module('TaskList').directive('ngTasksForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/tasks/form.html',

        scope: {
            task: '='
        },
        link: function(scope) {
            scope.assignees = [
                'Guy', 'Dor'
            ];
        }
    }
});