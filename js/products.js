var hApp = angular.module("hApp",[]);
hApp.controller("hCtrl",function ($scope, $http) {
  // 9. Model
  $scope.items = {
    "title": "products",
    "list": [
    ]
  }
  $scope.searchAndCreateName = "";

  // 10. Edit Product
  $scope.edit = function(parentHtmlName,htmlName,id) {
    // 10,1, Get value from Modal Input
    var newName = $(htmlName).val();
    // 10.2. Search value from model by ID
    $scope.items.list.forEach(function(item,index,arr) {
      if (item.id == id) {
        // 10.3 Set New Value
        item.name = newName;
        // 10.4 Close Modal Prompt
        $(parentHtmlName).trigger('click.dismiss.bs.modal')
        return;
      }
    })
  }

  // 11. Search Filter by String
  $scope.searchFilter = function(item) {
    // 11.1. IF var is undefined => set it to null string
    if ($scope.searchAndCreateName == undefined)
      $scope.searchAndCreateName = "";

    // 11.2. IF var is null string OR var is included into item found => return item
    if ($scope.searchAndCreateName == "" || item.name.indexOf($scope.searchAndCreateName) != -1)
      return item;
  }

  // 12. Get Next ID
  $scope.getNextID = function () {
    var max = 0;
    $scope.items.list.forEach(function(item,index,arr) {
        if (item.id > max)
          max = item.id;
    })
    return max + 1;
  }

  // 13. Add Product
  $scope.add = function () {
    // 13.1. Push new name using NEXT ID
    $scope.items.list.push({
      "id": this.getNextID(), "name": $scope.searchAndCreateName
    });
    // 13.2. Reset Input Name
    $scope.searchAndCreateName = "";
  };

  // 14. Delete Product
  $scope.delete = function (id) {
    // 14.1. Search ID and Splice it from array
    $scope.items.list.forEach(function(item,index,arr) {
      if (item.id == id)
        return arr.splice(index,1);
    })
  };

  // 15. Load Products from Server
  $scope.load = function() {
    // 15.1. Ajax to get products
    $http
    .post("/products/load")
    .then(function(response) {
      $scope.items = response.data;
    });
  }

  // 16. Save Products to Server
  $scope.save = function() {
    // 16.1. Ajax to put products
    $http
    .post("/products/save",$scope.items)
    .then(function(response) {
    });
  }
})
