'use strict';

angularApp.controller('EmployersController', ['$scope', '$rootScope', 'EmployersService', function($scope, $rootScope, EmployersService) {
 
	/* ---------------------- */ 

	$scope.module = 'employers';

	$scope.employers = [];

	$scope.employer = {};
	$scope.new_employer = {};

	$scope.section = null;

	$scope.getEmployers = function(){
		$scope.section = 'list';
		/* Listar Empleados */
		EmployersService.get().then(function(response){
			$scope.employers = response;
		});
	}

	$scope.saveEmployer = function(employer){
		if(typeof employer.id !== 'undefined'){
			/* Actualizar Empleado */
			EmployersService.update(employer.id, employer).then(function(response){
				$scope.employer = {};
				$scope.getEmployers();
			});
		} else {
			/* Crear Empleado */
			EmployersService.create(employer).then(function(response){
				$scope.employer = {};
				$scope.getEmployers();
			});
		}

	}

	$scope.createEmployer = function(){
		$scope.section = 'create';
		$scope.new_employer = {};
	}

	$scope.updateEmployer = function(employer){
		/* Buscar Empleado */
		EmployersService.find(employer.id).then(function(response){
			$scope.section = 'update';
			$scope.employer = response;
		});
	}

	$scope.deleteEmployer = function(employer){
		$scope.section = 'delete';
		$scope.employer = employer;
	}

	$scope.destroyEmployer = function(employer){
		/* Eliminar Empleado */
		EmployersService.delete(employer.id).then(function(response){
			$scope.employer = {};
			$scope.getEmployers();
		});
	}

	$scope.getEmployers();
	
}]);