angular.module('TaskList')
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        //
        // Now set up the states
        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: "templates/tasks/index.html",
                controller: 'TasksIndexController'
            })

    });


