app.controller('itemController', ['$scope', '$resource', function($scope, $resource) {

	var Item = $resource('/api/items');


	Item.query(function(results) {
		$scope.items = results;
	})
	
	$scope.items = [];

	$scope.createItem = function() {
		// $scope.items.push({name: $scope.itemName});
		// $scope.itemName = '';

		var item = new Item();
		item.name = $scope.itemName;
		item.$save(function(result) {
			$scope.items.push(result);
			$scope.itemName = '';
		});
	}


	$scope.deleteItem = function(item) {
		console.log(item);
		item.$delete(function() {
			Item.query(function(results) {
				$scope.items = results;
			})
		})
	}

}])


