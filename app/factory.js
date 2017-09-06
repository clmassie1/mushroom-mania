'use strict';


console.log('hello');
app.factory('MushFactory', function($q, $http) {
console.log('hello');
    let getMushrooms = () => {
        return $q((resolve, reject) => {
            $http.get('https://awesomedata-463f3.firebaseio.com/mushrooms.json')
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    console.log('itemCollection', itemCollection);
                    
                    resolve(itemCollection);
                       
                })
                .catch((error) => {
                        reject(error);
                    }

                );
        });
    };
   
    return { getMushrooms };
     
});
        