'use strict';
console.log('shroomCtrl');

app.controller('MushroomFactroy', function($scope, MushFactory) {
    MushFactory.getMushrooms()
        .then(function(itemCollection) {
            // push items to array for search funtionality
            let shroomArray = [];
            let shrooms = Object.keys(itemCollection);
            shrooms.forEach((item) => {
                shroomArray.push(itemCollection[item]);
            });
            console.log('MushRooms', itemCollection);
            $scope.shrooms = shroomArray;
        });
});