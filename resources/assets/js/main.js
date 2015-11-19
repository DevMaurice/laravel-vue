var Vue=require('vue');
var VueRouter=require('vue-router');

Vue.use(require('vue-resource'));

var About = require('./About.vue');
var contact = require('./contact.vue');
var home = require('./home.vue');
var User = require('./Users.vue');
var Position = require('./Position.vue');

//County components
var County = require('./County.vue');
var addCounty = require('./county/add.vue');
var editCounty = require('./county/edit.vue');
var viewCounty = require('./county/view.vue');
var deleteCounty = require('./county/delete.vue');


var E404 =require('./errors/404.vue');

Vue.use(VueRouter);

//Set up router

Vue.http.headers.common['X-CSRF-TOKEN']=document.querySelector('#token').getAttribute('value');

var router=new VueRouter();

router.map({
	'/home':{
		component:home
	},
	'/':{
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
		
		component:County,
		subRoutes:{

			'/add': {
					name:'addcounty',
				    component: addCounty
				  },

			':id/view': {
					name:'viewcounty',
				    component: viewCounty
				  },
			':id/edit': {
					name:'editcounty',
				    component: editCounty
				  },
			':id/delete': {
					name:'deletecounty',
				    component: deleteCounty
				  }
			}
	}	

});

var App=Vue.extend({});

router.start(App, '#app');

