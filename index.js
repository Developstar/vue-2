new Vue({
  el: "#app",
  data: {
    greetings: `Hello guys, My name is `,
    firstName: "...",
    secondName: "...",
    gmailIntro: "You can reachout to me via",
    email: "...",
    comma: ",",
    phone: "...",
    registration: "Registration Form",
    emptySting: "",
  },

  methods: {
    displayFirstName: function (e) {
      this.firstName = e.target.value;
    },

    displaySecondName: function (e) {
      this.secondName = e.target.value;
    },

    displayEmail: function (e) {
      this.email = e.target.value;
    },

    displayPhone: function (e) {
      this.phone = e.target.value;
    },

    prevDefault: function (e) {
      let firstName = this.firstName;
      e.preventDefault();
      alert(`${firstName} Form is Submitted`);
      this.firstName = e.target.emptySting;
      this.secondName = e.target.emptySting;
      this.email = e.target.emptySting;
      this.phone = e.target.emptySting;
      this.$refs["num"].value = "";
      this.$refs["name1"].value = "";
      this.$refs["name2"].value = "";
      this.$refs["mail"].value = "";
    },
  },
});
