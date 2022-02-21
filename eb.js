Vue.createApp({
    data(){
        return {
            keywords: ''
            
        };
    }, 
        methods:{
            queryForKeywords(event) {
                const value = event.target.value
                this.keywords = value
                alert(`ALERT ${this.keywords}!`);
         
    },
    nexText(event){
        console.log(event);
        this.btn = event.target.value;

    }

}
    
}).mount('#monApp');

/*    storeValue(event){
    this.value = event.target.value
},
storeValue2(event){
    this.value2 = event.target.value
}
*/