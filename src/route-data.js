angular.module('ng-route-data')
  .provider('$routeData', function($routeProvider) {
    var routeData = this;

    var data = {
      routes: {},
      default: null
    };

    routeData.when = function(rt, cfg) {
      cfg.path = rt;
      $routeProvider.when(rt, cfg);
      data.routes[rt] = cfg;
      return routeData;
    };

    routeData.otherwise = function(cfg) {
      $routeProvider.otherwise(cfg);
      data.default = data.routes[cfg.redirectTo];
      return routeData;
    };

    this.$get = function() {
      return data;
    };
  });
