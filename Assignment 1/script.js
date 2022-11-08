const conditionalRendering = {
	data() {
		return {
			bulbSwitch: "on",
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

Vue.createApp(conditionalRendering).mount("#app");
