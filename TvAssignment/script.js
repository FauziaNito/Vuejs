const tvApp = {
	data() {
		return {
			powerOn: true,
			indexCount: 0,
			tvChannels: ["./images/Wow-gif.gif", "./images/sing.gif", "./images/stand.gif", "./images/potter.gif"],
		};
	},
	methods: {
		switchOn(){
			this.powerOn = !this.powerOn;
		},
		next(){
			if(this.indexCount >= this.tvChannels.length - 1){
				this.indexCount = 0;
			}else{
				this.indexCount++;
			}
		},
		previous(){
			if (this.indexCount <= 0) {
				this.indexCount = this.tvChannels.length - 1
			} else{
				this.indexCount--
			}
		}
	},
};

Vue.createApp(tvApp).mount("#app");
