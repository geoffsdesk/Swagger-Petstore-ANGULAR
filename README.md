#Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/)

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `swaggerpetstorelib` folder inside the scripts folder.

![folder-structure-image](http://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Swagger%20Petstore-Angular&projectName=SwaggerPetstoreLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](http://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Swagger%20Petstore-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
    var app = angular.module('myApp', []);
    app.controller('testController', function($scope) 
    {

    });
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Angular Project</title>
		<script></script>
	</head>

	<body>
	</body>

	</html>
```

![initial-html-code-image](http://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Swagger%20Petstore-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
	<script src="scripts/angular.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
	<head>
		...
		<!-- Helper files -->
		<script src="scripts/swaggerpetstorelib/Configuration.js"></script>
		<script src="scripts/swaggerpetstorelib/APIHelper.js"></script>
		<script src="scripts/swaggerpetstorelib/Http/Client/HttpContext.js"></script>
		<script src="scripts/swaggerpetstorelib/Http/Client/RequestClient.js"></script>
		<script src="scripts/swaggerpetstorelib/Http/Request/HttpRequest.js"></script>
		<script src="scripts/swaggerpetstorelib/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/swaggerpetstorelib/Controllers/UserController.js"></script>
        <script src="scripts/swaggerpetstorelib/Controllers/PetController.js"></script>
        <script src="scripts/swaggerpetstorelib/Controllers/StoreController.js"></script>


		<!-- Models -->
        <script src="scripts/swaggerpetstorelib/Models/BaseModel.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/StatusEnum.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/Category.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/Tag.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/Status6Enum.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/Order.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/User.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/Pet.js"></script>
        <script src="scripts/swaggerpetstorelib/Models/ApiResponse.js"></script>

		...
	</head>
```
> The Configuration.js file should be imported before the other files.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
	<head>
		...
		<script src="scripts/app.js"></script>
	</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
	<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
	...
	<body ng-app="myApp">
		<div ng-controller="testController">
			...
		</div>
		...
	</body>
	...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
    var app = angular.module('myApp', ['SwaggerPetstoreLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](http://apidocs.io/illustration/angularjs?step=appRunning)

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [UserController](#user_controller)
* [PetController](#pet_controller)
* [StoreController](#store_controller)

### <a name="user_controller"></a>![Class: ](http://apidocs.io/img/class.png ".UserController") UserController

#### Get singleton instance

The singleton instance of the ``` UserController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	});
```

#### <a name="get_user_by_name"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.getUserByName") getUserByName

> *Tags:*  ``` Skips Authentication ``` 

> Get user by user name


```javascript
function getUserByName(username)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be fetched. Use user1 for testing. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var username = "username";


		var result = UserController.getUserByName(username);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




#### <a name="delete_user"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.deleteUser") deleteUser

> *Tags:*  ``` Skips Authentication ``` 

> Delete user


```javascript
function deleteUser(username)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be deleted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var username = "username";


		var result = UserController.deleteUser(username);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




#### <a name="get_logout_user"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.getLogoutUser") getLogoutUser

> *Tags:*  ``` Skips Authentication ``` 

> Logs out current logged in user session


```javascript
function getLogoutUser()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	

		var result = UserController.getLogoutUser();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | successful operation |




#### <a name="create_users_with_list_input"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.createUsersWithListInput") createUsersWithListInput

> *Tags:*  ``` Skips Authentication ``` 

> Creates list of users with given input array


```javascript
function createUsersWithListInput(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });


		var result = UserController.createUsersWithListInput(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | successful operation |




#### <a name="create_users_with_array_input"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.createUsersWithArrayInput") createUsersWithArrayInput

> *Tags:*  ``` Skips Authentication ``` 

> Creates list of users with given input array


```javascript
function createUsersWithArrayInput(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });


		var result = UserController.createUsersWithArrayInput(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | successful operation |




#### <a name="get_login_user"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.getLoginUser") getLoginUser

> *Tags:*  ``` Skips Authentication ``` 

> Logs user into the system


```javascript
function getLoginUser(username, password)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The user name for login |
| password |  ``` Required ```  | The password for login in clear text |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var username = "username";
    var password = "password";


		var result = UserController.getLoginUser(username, password);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username/password supplied |




#### <a name="create_user"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.createUser") createUser

> *Tags:*  ``` Skips Authentication ``` 

> Create user


```javascript
function createUser(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Created user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = new User({"key":"value"});


		var result = UserController.createUser(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | successful operation |




#### <a name="update_user"></a>![Method: ](http://apidocs.io/img/method.png ".UserController.updateUser") updateUser

> *Tags:*  ``` Skips Authentication ``` 

> Updated user


```javascript
function updateUser(username, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | name that need to be updated |
| body |  ``` Required ```  | Updated user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var username = "username";
    var body = new User({"key":"value"});


		var result = UserController.updateUser(username, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid user supplied |
| 404 | User not found |




[Back to List of Controllers](#list_of_controllers)

### <a name="pet_controller"></a>![Class: ](http://apidocs.io/img/class.png ".PetController") PetController

#### Get singleton instance

The singleton instance of the ``` PetController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	});
```

#### <a name="upload_file"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.uploadFile") uploadFile

> uploads an image


```javascript
function uploadFile(petId, additionalMetadata, file)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to update |
| additionalMetadata |  ``` Optional ```  | Additional data to pass to server |
| file |  ``` Optional ```  | file to upload |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController, $http,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var petId = 143;
    var additionalMetadata = "additionalMetadata";
    var file = "";


		$http.get(url).then(function(successData){
            file = successData;
            var result = PetController.uploadFile(petId, additionalMetadata, file);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```



#### <a name="delete_pet"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.deletePet") deletePet

> Deletes a pet


```javascript
function deletePet(petId, apiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | Pet id to delete |
| apiKey |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var petId = 143;
    var apiKey = api_key;


		var result = PetController.deletePet(petId, apiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




#### <a name="get_pet_by_id"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.getPetById") getPetById

> Find pet by ID


```javascript
function getPetById(petId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var petId = 143;


		var result = PetController.getPetById(petId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




#### <a name="find_pets_by_tags"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.findPetsByTags") findPetsByTags

> Finds Pets by tags


```javascript
function findPetsByTags(tags)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tags |  ``` Required ```  ``` Collection ```  | Tags to filter by |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var tags = ["tags"];


		var result = PetController.findPetsByTags(tags);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid tag value |




#### <a name="update_pet_with_form"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.updatePetWithForm") updatePetWithForm

> Updates a pet in the store with form data


```javascript
function updatePetWithForm(petId, name, status)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet that needs to be updated |
| name |  ``` Optional ```  | Updated name of the pet |
| status |  ``` Optional ```  | Updated status of the pet |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var petId = 143;
    var name = "name";
    var status = "status";


		var result = PetController.updatePetWithForm(petId, name, status);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




#### <a name="find_pets_by_status"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.findPetsByStatus") findPetsByStatus

> Finds Pets by status


```javascript
function findPetsByStatus(status)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  ``` Collection ```  | Status values that need to be considered for filter |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var status = [ Object.keys(Status6Enum)[0] ];


		var result = PetController.findPetsByStatus(status);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid status value |




#### <a name="update_pet"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.updatePet") updatePet

> Update an existing pet


```javascript
function updatePet(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = new Pet({"key":"value"});


		var result = PetController.updatePet(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |
| 405 | Validation exception |




#### <a name="add_pet"></a>![Method: ](http://apidocs.io/img/method.png ".PetController.addPet") addPet

> Add a new pet to the store


```javascript
function addPet(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = new Pet({"key":"value"});


		var result = PetController.addPet(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




[Back to List of Controllers](#list_of_controllers)

### <a name="store_controller"></a>![Class: ](http://apidocs.io/img/class.png ".StoreController") StoreController

#### Get singleton instance

The singleton instance of the ``` StoreController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, StoreController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	});
```

#### <a name="delete_order"></a>![Method: ](http://apidocs.io/img/method.png ".StoreController.deleteOrder") deleteOrder

> *Tags:*  ``` Skips Authentication ``` 

> Delete purchase order by ID


```javascript
function deleteOrder(orderId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of the order that needs to be deleted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var orderId = 143;


		var result = StoreController.deleteOrder(orderId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




#### <a name="get_order_by_id"></a>![Method: ](http://apidocs.io/img/method.png ".StoreController.getOrderById") getOrderById

> *Tags:*  ``` Skips Authentication ``` 

> Find purchase order by ID


```javascript
function getOrderById(orderId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of pet that needs to be fetched |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var orderId = 143;


		var result = StoreController.getOrderById(orderId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




#### <a name="create_place_order"></a>![Method: ](http://apidocs.io/img/method.png ".StoreController.createPlaceOrder") createPlaceOrder

> *Tags:*  ``` Skips Authentication ``` 

> Place an order for a pet


```javascript
function createPlaceOrder(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | order placed for purchasing the pet |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	    var body = new Order({"key":"value"});


		var result = StoreController.createPlaceOrder(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Order |




#### <a name="get_inventory"></a>![Method: ](http://apidocs.io/img/method.png ".StoreController.getInventory") getInventory

> Returns pet inventories by status


```javascript
function getInventory()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController,StatusEnum,Category,Tag,Status6Enum,Order,User,Pet,ApiResponse){
	

		var result = StoreController.getInventory();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



