new Vue({
    el:'#app',
    data: {
        greetings: 'Hello guys',
        firstName: '',
        secondName: 'your firstName',
        email : 'yourmail',
        phone : 'your phone number',
        registration : 'Registration Form'
    },

    methods: {
        displayFirstName : function(e){
            this.firstName = e.target.value;
        }
    }
})