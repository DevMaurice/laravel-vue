var Vue=require('vue');
var VueRouter=require('vue-router');

Vue.use(require('vue-resource'));

var About = require('./About.vue');
var contact = require('./contact.vue');
var home = require('./home.vue');
var User = require('./Users.vue');
var Position = require('./Position.vue');
var County = require('./County.vue');
var E404 =require('./errors/404.vue');

Vue.use(VueRouter);

//Set up router

Vue.http.headers.common['X-CSRF-TOKEN']=document.querySelector('#token').getAttribute('value');

var router=new VueRouter();

router.map({
	'/home':{
		component:home
	},
	'*':{
		component:E404
	},

	'/about':{
		component:About
	},

	'/contact':{
		component:contact
	},
	'/user':{
		component:User
	},
	'/position':{
		component:Position
	},
	'/county':{
		component:County
	}	

});

var App=Vue.extend({});

router.start(App, '#app');

