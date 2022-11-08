const { createApp } = Vue;


createApp({
    data(){ return {
        name: "john deo",
        age: 25,
        height: 14,
        weight: 24,
        
    }},
    methods: {
        save(){
            alert("Data Saved Successfully");
        }
    }
}).mount("#demo");
