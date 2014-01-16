'use strict';

/* App Module */

angular.module('mne', ['myFilter', 'ui.bootstrap', 'bookappServices', 'ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'view/login.html',   controller: LoginCtrl}).
            when('/items', {templateUrl: 'view/public-items.html',   controller: MainCtrl}).
            when('/add', {templateUrl: 'view/add-book.html',   controller: MainCtrl}).
            otherwise({redirectTo: '/login'});
}]);

function appCrtl($scope, $location){

    $scope.initThis = function(){
        $scope.currentView = $location.url().replace('/','');
        var user = {authorized: true};
        $scope.user = user;
        $scope.language = {name:'eng', displayName:'English'};

    }



    $scope.lots = { hello:"hello",
                    part:"part",
                    element:"element"}

    $scope.changeView = function(name){
        $scope.currentView = name;
        $location.path(name);
    }

    $scope.switchLanguage = function(lang){
        $scope.language.name = lang;

        $scope.user.authorized = !$scope.user.authorized;

        switch(lang) {
            case 'rus': {
                $scope.language.displayName = 'Русский';
                break;
            };
            default: {
                $scope.language.displayName = 'English';
                break;
            }
        }
    }


}