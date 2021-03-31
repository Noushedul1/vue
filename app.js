var app = Vue.createApp({
	data() {
		return{
			name: "hello akib",
			varsity: {
				department: "cse"
			},
			id: [12,13,14,15],
			value: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eius, officiis? Excepturi ea officia doloremque labore voluptatum nam, cumque animi quisquam est alias explicabo porro consequuntur dolores impedit nostrum quasi.",
			github: "https://github.com/",
			htmlCode: "<strong>Hello Vue 3 developer </strong>",
			count: 0
		};
	},
	methods: {
		getDate(){
			let ct = new Date();
			return new Date();
		},
		adition(a,b){
			return a+b;
		},
		increment(){
			this.count++;
		},
		decrement(){
			if(!this.count<1){
			this.count--;
			}
		}
	}
});
app.mount('#app');