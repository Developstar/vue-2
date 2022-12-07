new Vue({
    el:'#app',
    data: {
        greetings: 'Hello guys',
        firstName: '',
        secondName: 'your firstName',
        email : 'yourmail',
        phone : 'your phone number'
    },

    methods: {
        displayFirstName : function(e){
            this.firstName = e.target.value;
        }
    }
})