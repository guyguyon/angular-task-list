

angular.module('TaskList').controller('TasksIndexController', function($scope) {

    $scope.tasks = [
        {
            description: '333',
            assignee: 'Guy',
            due_date: new Date(2016, 1, 1),
            done: false
        },
        {
            description: '2222',
            assignee: 'Dor',
            due_date: new Date(2015, 10, 1),
            done: false
        },
        {
            description: '1111',
            assignee: 'Guy',
            due_date: new Date(2015, 7, 12),
            done: false
        }
    ];


    $scope.task = {};

    $scope.addTask = function () {
        $scope.task.done = false;
        $scope.tasks.push($scope.task);
        $scope.task = {};
    };


});
