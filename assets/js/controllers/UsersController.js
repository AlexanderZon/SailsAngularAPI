'use strict';

angularApp.controller('UsersController', ['$scope', '$rootScope', 'UsersService', function($scope, $rootScope, UsersService) {
 
	/* ---------------------- */ 

	$scope.module = 'users';

	$scope.users = [];

	$scope.user = {};
	$scope.new_user = {};

	$scope.section = null;

	$scope.getUsers = function(){
		$scope.section = 'list';
		/* Listar Usuarios */
		UsersService.get().then(function(response){
			$scope.users = response;
		});
	}

	$scope.saveUser = function(user){
		if(typeof user.id !== 'undefined'){
			/* Actualizar Usuario */
			UsersService.update(user.id, user).then(function(response){
				$scope.user = {};
				$scope.getUsers();
			});
		} else {
			/* Crear Usuario */
			UsersService.create(user).then(function(response){
				$scope.user = {};
				$scope.getUsers();
			});
		}

	}

	$scope.createUser = function(){
		$scope.section = 'create';
		$scope.new_user = {};
	}

	$scope.updateUser = function(user){
		/* Buscar Usuario */
		UsersService.find(user.id).then(function(response){
			$scope.section = 'update';
			$scope.user = response;
		});
	}

	$scope.deleteUser = function(user){
		$scope.section = 'delete';
		$scope.user = user;
	}

	$scope.destroyUser = function(user){
		/* Eliminar Usuario */
		UsersService.delete(user.id).then(function(response){
			$scope.user = {};
			$scope.getUsers();
		});
	}

	$scope.getUsers();
	
}]);