angularApp.service('UsersService', function($http, $q) {
  return {
    'get': function() {
      var defer = $q.defer();
      $http.get('/users').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'find': function(id) {
      var defer = $q.defer();
      $http.get('/users/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'create': function(user) {
      var defer = $q.defer();
      $http.post('/users', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'update': function(id, user) {
      var defer = $q.defer();
      $http.put('/users/' + id, user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'delete': function(id) {
      var defer = $q.defer();
      $http.delete('/users/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});