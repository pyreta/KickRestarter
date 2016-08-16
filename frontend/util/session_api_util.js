const SessionApiUtil = {
	logIn(user, success, errorCallback) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: { user },
			success,
			error(xhr) {
				const errors = xhr.responseJSON;
				errorCallback("login", errors);
			}
		});
	},

	logOut(success, errorCallback) {
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success,
			error(xhr) {
				const errors = xhr.responseJSON;
				errorCallback("logout", errors);
			}
		});
	},

	signUp(user, success, error) {
		$.ajax({
			url: '/api/users',
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

	fetchCurrentUser(success, error) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success(resp) {

      },
			error(xhr) {
				const errors = xhr.responseJSON;
				error("fetchUsers", errors);
			}
		});
	}
};

module.exports = SessionApiUtil;
