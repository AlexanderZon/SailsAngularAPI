'use strict';

angularApp.controller('ClientsController', ['$scope', '$rootScope', 'ClientsService', function($scope, $rootScope, ClientsService) {
 
	/* ---------------------- */ 

	$scope.module = 'clients';

	$scope.clients = [];

	$scope.client = {};
	$scope.new_client = {};

	$scope.section = null;

	$scope.getClients = function(){
		$scope.section = 'list';
		/* Listar Usuarios */
		ClientsService.get().then(function(response){
			$scope.clients = response;
		});
	}

	$scope.saveClient = function(client){
		if(typeof client.id !== 'undefined'){
			/* Actualizar Usuario */
			ClientsService.update(client.id, client).then(function(response){
				$scope.client = {};
				$scope.getClients();
			});
		} else {
			/* Crear Usuario */
			ClientsService.create(client).then(function(response){
				$scope.client = {};
				$scope.getClients();
			});
		}

	}

	$scope.createClient = function(){
		$scope.section = 'create';
		$scope.new_client = {};
	}

	$scope.updateClient = function(client){
		/* Buscar Usuario */
		ClientsService.find(client.id).then(function(response){
			$scope.section = 'update';
			$scope.client = response;
		});
	}

	$scope.deleteClient = function(client){
		$scope.section = 'delete';
		$scope.client = client;
	}

	$scope.destroyClient = function(client){
		/* Eliminar Usuario */
		ClientsService.delete(client.id).then(function(response){
			$scope.client = {};
			$scope.getClients();
		});
	}

	$scope.getClients();
	
}]);