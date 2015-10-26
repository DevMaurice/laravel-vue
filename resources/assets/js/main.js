var Vue=require('vue');
var VueRouter=require('vue-router');

Vue.use(require('vue-resource'));

var About = require('./About.vue');
var contact = require('./contact.vue');
var home = require('./home.vue');

Vue.use(VueRouter);

//Set up router



var router=new VueRouter();

router.map({
	'/home':{
		component:home
	},
	'/':{
		component:home
	},

	'/about':{
		component:About
	},

	'/contact':{
		component:contact
	}
	

});

var App=Vue.extend({});

router.start(App, '#app');

