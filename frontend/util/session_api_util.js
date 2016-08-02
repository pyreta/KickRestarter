const SessionApiUtil = {
	logIn(user, success, error) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: { user },
			success,
			error(xhr) {
				const errors = xhr.responseJSON;
        console.log("LOGIN ERRROROR");
				error("login", errors);
			}
		});
	},

	logOut(success) {
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success,
			error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
		});
	},

	signUp(user, success, error) {
		$.ajax({
			url: '/api/user',
			type: 'POST',
			dataType: 'json',
			data: { user },
			success,
			error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
		});
	},

	fetchCurrentUser(success, error, complete) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success(resp) {
        console.log("Successss");
        console.log(resp);
      },
			error(xhr) {
			  console.log("Error in SessionApiUtil#fetchCurrentUser");
			},
      complete(){
				console.log("Complete!");
			}
		});
	}
};

module.exports = SessionApiUtil;
