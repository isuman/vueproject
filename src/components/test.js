new Vue({
    el:"app-test",
    data: {
        firstName: 'Bo',
		lastName: 'Andersen'
    },
    methods: {
		getFullName: function() {
			return this.firstName + ' ' + this.lastName;
		}
	}
})