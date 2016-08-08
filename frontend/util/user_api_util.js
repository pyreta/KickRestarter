module.exports = {
  fetchUsers (callback) {
    $.ajax({
      url: "api/users",
      success (users) {
        callback(users);
      }
    });
  },

  getUser (id, callback) {
    $.ajax({
      url: `api/users/${id}`,
      success (user) {
        callback(user);
      }
    });
  },

  createUser (formData, callback) {
    $.ajax({
      url: "api/users",
      type: "POST",
      contentType: false,
      processData: false,
      data: formData,
      success (user) {
        callback(user);
      }
    });
  },

  updateUser (data, id, callback, error) {
    $.ajax({
      url: `api/users/${id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: { user: { title: data.title, body: data.body } },
      success (user) {
        callback(user);
      },
      error,
    });
  },

  deleteUser (id, callback) {
    $.ajax({
      url: `api/users/${id}`,
      type: "DELETE",
      success (user) {
        callback(user);
      }
    });
  }
};
