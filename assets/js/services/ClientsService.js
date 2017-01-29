angularApp.service('ClientsService', function($http, $q) {
  return {
    'get': function() {
      var defer = $q.defer();
      $http.get('/clients').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'find': function(id) {
      var defer = $q.defer();
      $http.get('/clients/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'create': function(user) {
      var defer = $q.defer();
      $http.post('/clients', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'update': function(id, user) {
      var defer = $q.defer();
      $http.put('/clients/' + id, user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'delete': function(id) {
      var defer = $q.defer();
      $http.delete('/clients/' + id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});