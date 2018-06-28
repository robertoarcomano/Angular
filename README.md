# Angular
Useful examples on Angularjs

# 1. Include js
  ```
  <script src="angular.min.js"></script>
  ```

# 2. Define app
```
  <html ng-app="hApp">
  ```

# 3. Define model
```
  var model = {
    "title": "helloworld",
    "list": [
      { "id": 1, "name": "alfa"},
      { "id": 2, "name": "beta"},
      { "id": 3, "name": "gamma"}
    ]
  }
  ```

# 4. Declare var
```
  var hApp = angular.module("hApp",[]);
  ```

# 5. Set Controller
```
  hApp.controller("hCtrl",function ($scope) {
    $scope.items = model;
  }
  ```

# 6. Define controller
```
  <body ng-controller="hCtrl">
  ```

# 7. ng-repeat
```
  <tr ng-repeat="item in items.list">
    <td>{{item.id}}</td><td>{{item.name}}</td>
  </tr>
  ```

# 8. ng-click
```
  <input type=button value="add" ng-click="add()">
  ```

# 9. Basic var
```
  <th>ID</th><th>NAME [{{items.list.length}}]</th>
  ```

# 10. Modify model
  ## 10.1. add
  - HTML
    ```
    <input type=text ng-model="newName">
    <input type=button value="add" ng-click="add()">
    ```
  - CONTROLLER
    ```
    $scope.add = function () {
        var max = 0;
        $scope.items.list.forEach(function(item,index,arr) {
            if (item.id > max)
              max = item.id;
        })
        $scope.items.list.push({
          "id": max + 1, "name": $scope.newName
        });
        $scope.newName = "";
    };
    ```

  ## 10.2 delete
  - HTML
    ```
    <td><input type=button value="X" ng-click="delete(item.id)"></td>
    ```
  - CONTROLLER
    ```
    $scope.delete = function (id) {
      $scope.items.list.forEach(function(item,index,arr) {
        if (item.id == id)
          return arr.splice(index,1);
      })
    };
    ```

# 11. Ajax Request    
  ## 11.0 NODEJS EXPRESS
  - COMMON SERVER CODE
    ```
    var model = {
      "title": "products",
      "list": [
        { "id": 1, "name": "alfa"},
        { "id": 2, "name": "beta"},
        { "id": 3, "name": "gamma"}
      ]
    }
    app.post('/products/:action',function(req,res) {
    	switch (req.params.action) {
        case "load":
          res.send(model);
          return;
        case "save":
          res.send("ok");
          model = req.body;
          return;
        default:
      }
    });
    ```
  ## 11.1 load data
  - HTML
    ```
    <input type=button value="load" ng-click="load()">
    ```
  - CONTROLLER
    ```
    $scope.load = function() {
      $http
      .post("/products/load")
      .then(function(response) {
        $scope.items = response.data;
      });
    }
    ```

  ## 11.2 save data
  - HTML
    ```
    <input type=button value="save" ng-click="save()">
    ```
  - CONTROLLER
    ```
    $scope.save = function() {
      $http
      .post("/products/save",$scope.items)
      .then(function(response) {
      });
    }
    ```

# 12 Advanced features
  ## 12.1 ng-include
  ## 12.2 factory (services, objects)
  ## 12.3 create new directive (like ng-app, ng-repeat...)
  ## 12.4 URL Routing
