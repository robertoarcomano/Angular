# Angular
Useful examples on Angularjs

## HTML
#### Main HTML and Chrome Source Inspector
<img src=html1.png>

#### Edit Modal Prompt
<img src=html2.png>

## 1. Define app
```
<html ng-app="hApp" lang="en">
```
## 2. Include jquery, popper, bootstrap, angular and products
```
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  <script src="angular.min.js"></script>
  <script src="products.js"></script>
  ```
## 3. Define Controller
```
<body ng-controller="hCtrl">
```
## 4. Products Count & Load & Save Buttons
```
    <h5 class="card-title">Products Count: {{filtered.length}}</h5>
    <button type="button" class="btn btn-success" ng-click="load()">Load</button>
    <button type="button" class="btn btn-warning" ng-click="save()">Save</button>
```
## 5. Product List
```
    <div style="height: 60%; overflow-y: scroll">
      <div ng-repeat="item in items.list|filter: searchFilter|orderBy:'name' as filtered" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editPrompt{{item.id}}">
            Edit
          </button>
          <a href="#" class="btn btn-danger" ng-click="delete(item.id)">Delete</a>
        </div>
      </div>
    </div>
```
## 6. Search & Create Product
```
    Search & Create Product
    <form name="form1" ng-submit="add()">
      <input type=text ng-model="searchAndCreateName" required>
      <button type="submit" class="btn btn-info" ng-disabled="form1.$invalid">Add</button>
    </form>
```
## 7. Modal Popup to Edit Product
```
  <div ng-repeat="item in items.list" class="modal fade" id="editPrompt{{item.id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Edit Product {{item.id}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input id="product_{{item.id}}" type=text value={{item.name}}>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" ng-click="edit('#editPrompt'+item.id,'#product_' + item.id,item.id)">Edit</button>
        </div>
      </div>
    </div>
  </div>
```
## 8. On Showing Modal Prompt => select & focus input field
```
  <script>
    $(window).on('shown.bs.modal', function() {
      var inputObj = $(".modal-body").find("input");
      inputObj.select();
      inputObj.focus();
    });
  </script>
```

# 20 Other features
  ## 12.1 ng-include
  ## 12.2 factory (services, objects)
  ## 12.3 create new directive (like ng-app, ng-repeat...)
  ## 12.4 URL Routing
