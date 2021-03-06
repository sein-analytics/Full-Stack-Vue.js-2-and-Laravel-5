var app = new Vue({ //the el property tells vue to mount itselt in the page
	el: '#app',
	data: {
		title: sample.title,
		address: sample.address,
		about: sample.about,
		headerImageStyle: {
			'background-image': 'url(sample/header.jpg)'
		},
		amenities: sample.amenities,
		prices: sample.prices,
		contracted: true,
		modalOpen: false
	},
	methods: {
		escapeKeyListener: function(evt){
			if (evt.keyCode === 27 && this.modalOpen) {
        		this.modalOpen = false;
      		}
		}
	},
	watch: {
		modalOpen: function(){
			let className = 'modal-open';
			if(this.modalOpen){
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		}
	},
	created: function(){
		document.addEventListener('keyup', this.escapeKeyListener);
	},
	destroyed: function(){
		document.removeEventListener('keyup', this.escapeKeyListener);
	}
});

console.log(app);
/**
Vue has dominion over elementts it mounts.
So in our case, Vue will have dominion over the div with class container but
not over the div with class toolbar
Vue's directives are html attributes with the v-prefix...used to add functionality to templates
v-if: conditionally render the element
v-for: render element multiple times based on array of objects...bestt practice is to provide a unique key
	like v-bind:key="item.id" -- more effecient DOM updating
v-bind: bind atttribute of element to a javascriptt expression
v-on: attach an event listener to the element - This directive takes an argument like so:
	<a v-on:click="doSomething"
Also in index.html we used the v-bind directive with an argument to pass the css style to the element

An example of using getter/setter iin Javascript
var person = {
	first = 'Samuel',
	last = John,
	get fullName () {
		return this.first + ' ' + this.last;
	}

	set full (name){
		var words = name.toString().split(' ');
		this.first = words[0];
		this.last = words[1];
	}
}

If we type in the console app._data we'll see that Vue adds adds getters and setters to our data objects
to enable it tto perform dependency tracking and change notification.















**/