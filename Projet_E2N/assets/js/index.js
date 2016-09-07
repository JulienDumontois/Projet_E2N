/*PAGE APPRENANT*/
/*LINK D'APPRENANT.JSON*/
var app = angular.module("apprenantE2n", []);
app.factory("PromoFactory", ['$http', function ($http) {
        return $http.get('./apprenant.json')
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    return err;
                });
    }]);
/*DECLARATION DU CONTROLLER*/
app.controller("promoController", ["$scope", "PromoFactory", function ($scope, PromoFactory) {
        PromoFactory.success(function (data) {
            $scope.promos = data; //Permet de récupérer les données des apprenants.
        });
         $scope.random = function() {// Permet d'afficher les apprenants de façon aléatoire. 
       return 0.5 - Math.random();
           };
    }]);
/*FIN PAGE APPRENANT*/
$(document).ready(function () {
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');

    $nav_list.click(function () {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });
});