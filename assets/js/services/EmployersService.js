angularApp.service('EmployersService', function($http, $q) {
  return {
    'get': function() {
      var defer = $q.defer();
      $http.get('/employers').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'find': function(id) {
      var defer = $q.defer();
      $http.get('/employers/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'create': function(user) {
      var defer = $q.defer();
      $http.post('/employers', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'update': function(id, user) {
      var defer = $q.defer();
      $http.put('/employers/' + id, user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'delete': function(id) {
      var defer = $q.defer();
      $http.delete('/employers/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});