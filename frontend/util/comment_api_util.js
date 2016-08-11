module.exports = {
  // fetchComments (callback) {
  //   $.ajax({
  //     url: "api/comments",
  //     success (comments) {
  //       callback(comments);
  //     }
  //   });
  // },
  //
  // getComment (id, callback) {
  //   $.ajax({
  //     url: `api/comments/${id}`,
  //     success (comment) {
  //       callback(comment);
  //     }
  //   });
  // },

  createComment (data, callback, errorCallback) {
    $.ajax({
      url: "api/comments",
      type: "POST",
      data: {comment: data},
      success (comment) {
        console.log("yeahh comment!");
        callback(comment);
      }
    });

  },

  // updateComment (formData, id, callback, error) {
  //   $.ajax({
  //     url: `api/comments/${id}`,
  //     type: "PATCH",
  //     contentType: false,
  //     processData: false,
  //     data: formData,
  //     success (comment) {
  //       callback(comment);
  //     },
  //     error,
  //   });
  // },
  //
  // deleteComment (id, callback) {
  //   $.ajax({
  //     url: `api/comments/${id}`,
  //     type: "DELETE",
  //     success (comment) {
  //       callback(comment);
  //     }
  //   });
  // }
};
