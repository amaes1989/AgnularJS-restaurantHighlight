var restaurantApp = angular.module('restaurantApp', []);

restaurantApp.controller('RestaurantTableController', ['$scope', function($scope) {
    $scope.directory = [{ name: 'd Akkerhoeve', cuisine: 'BBQ', city: 'Lo-Reninge', image: 'ribben' },
        { name: 'La kantina', cuisine: 'Salads, burgers, ...', city: 'Houthulst', image: 'burger' },
        { name: 'Il Trullo', cuisine: 'Italian', city: 'Roeselare', image: 'pizza' },
        { name: 'de vlerke & de bille', cuisine: 'Chicken', city: 'Ieper', image: 'chickens' }
    ];

    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    }
}]);