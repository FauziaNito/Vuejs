const bulbApp = {
	data() {
		return {
			bulbSwitch: "off",
            // image: "./images/bulb-off.png",
			// switchStatus: [
			// 	{ bulbStatus: "off", image: "./images/bulb-off.png" },
			// 	{ bulbStatus: "on", image: "./images/bulb-off.png" },
			// ]
		};
	},
	methods: {
		updateImage(statusImage){
            this.image = statusImage;
        }
	},
};

Vue.createApp(bulbApp).mount("#app");
