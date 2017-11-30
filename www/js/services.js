service = angular.module('starter.services', [])

service.factory('Auth', function($rootScope) {

    var Auth0Cordova = require('@auth0/cordova');
    var auth0 = require('auth0-js');
    var userProfile = {};

    var auth0Config = {
        clientId: 'wSyqm1HK0kOJ2APXyS6CJjLkI4Er2oCq',
        domain: 'thewinesider.eu.auth0.com',
        responseType: "token",
        packageIdentifier: 'io.ionic.starter'
    };

    auth0Config.clientID = auth0Config.clientId;

    var webAuth = new auth0.WebAuth(auth0Config);

    function setSession(authResult) {
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        window.localStorage.setItem('access_token', authResult.accessToken);
        window.localStorage.setItem('id_token', authResult.idToken);
        window.localStorage.setItem('expires_at', expiresAt);
    }

    function isAuthenticated() {
        var expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    }

    function getProfile(cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }

        webAuth.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                userProfile = profile;
            }
            cb(err, profile);
        });
    }

    function login(user) {
        webAuth.client.login({
            realm: "thewinesider",
            username: user.email,
            password: user.password,
            scope: "openid email profile"
        }, function(err, authResult) {
            if(err) {
                return console.warn(err);
            } 
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult);
                $rootScope.$apply();
            }
        });
    }

    function logout() {
        window.localStorage.removeItem('profile');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('expires_at');
    }

    return {
        login: login,
        logout: logout,
        getProfile: getProfile,
        isAuthenticated: isAuthenticated
    };
});
