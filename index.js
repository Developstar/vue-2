new Vue({
    el:'#app',
    data: {
        greetings: `Hello guys, My name is `,
        firstName: '...',
        secondName: '...',
        gmailIntro: 'You can reachout to me via',
        email : '...',
        comma : ',',
        phone : '...',
        registration : 'Registration Form'
    },

    methods: {
        displayFirstName : function(e){
            this.firstName = e.target.value;
        },

        displaySecondName : function(e){
            this.secondName = e.target.value;
        },

        displayEmail : function(e){
            this.email = e.target.value;
        },
        
        displayPhone : function(e){
            this.phone = e.target.value;
        }
        

        
    }
})