'use strict';

/* App Module */

angular.module('mne', ['myFilter', 'ui.bootstrap', 'bookappServices', 'ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/meetings', {templateUrl: 'view/meetings.html',   controller: LoginCtrl}).
            when('/places', {templateUrl: 'view/places.html',   controller: MainCtrl}).
            when('/createMeeting', {templateUrl: 'view/meeting-crt.html',   controller: MainCtrl}).
            when('/authorization', {templateUrl: 'view/authorization.html',   controller: MainCtrl}).
            when('/profile', {templateUrl: 'view/profile.html',   controller: MainCtrl}).
            when('/about', {templateUrl: 'view/about.html',   controller: MainCtrl}).
            otherwise({redirectTo: '/login'});
}]);

function appCrtl($scope, $location){

    $scope.initThis = function(){
        $scope.currentView = $location.url().replace('/','');
        var user = {authorized: true};
        $scope.user = user;
        $scope.language = {name:'eng', displayName:'English'};
        $scope.lots = { hello:"hello",
            part:"part",
            element:"element"}
    }


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