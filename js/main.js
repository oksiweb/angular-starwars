'use strict';

angular.module('myApp', [])
    .controller('HeroController', function($scope, $http, $q){

    $scope.load = function (index){
        $scope.someclass="start";
        $scope.loader = 'preloader-active';
        $scope.index = index;
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'+$scope.index+'/'
        })
        .then(function(response) {
            var hero = response.data;
            var description = [];
            var counter = 0;
                for(let key in hero){
                counter++;
                    if(counter<=8){
                        let title = key.split('_')
                                    .map(item => item.charAt(0).toUpperCase()+
                                                 item.slice(1))
                                                     .join(' ');
                        description.push( `${title}  ${hero[key]}` );
                    }
            }
            $scope.description = description;
            return response.data.films;
        })
        .then(function(response){
             var promises = response.map(function(film){
                return $http({
                   method: 'GET',
                   url:film
                })
             })
             return $q.all(promises);
        })
        .then(function(response){
            var films = [];
            response.forEach(function(item){
                    films.push(`Episode ${item.data.episode_id} ${item.data.title}`)
            })
            $scope.films = films;
            $scope.someclass="end";
            $scope.loader = '';

        })
        .catch(function(err) {
            console.log("Failed",err);
            $scope.description = ['There is no such hero. Please, click button']
            $scope.films = '';
            $scope.someclass="end";
            $scope.loader = '';
        });
       }
       $scope.load(1)
});




