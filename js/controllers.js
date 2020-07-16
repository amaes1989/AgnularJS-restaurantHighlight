var restaurantApp = angular.module('restaurantApp', []);

restaurantApp.controller('RestaurantTableController', ['$scope', function($scope) {
    $scope.directory = [{ name: 'd Akkerhoeve', cuisine: 'BBQ', city: 'Lo-Reninge' },
        { name: 'La kantina', cuisine: 'Salads, burgers, ...', city: 'Houthulst' },
        { name: 'Il Trullo', cuisine: 'Italian', city: 'Roeselare' },
        { name: 'de vlerke en de bille', cuisine: 'chicken', city: 'Ieper' }
    ];

    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    }
}]);