module.exports = {


  createComment (data, callback, errorCallback) {
    $.ajax({
      url: "api/comments",
      type: "POST",
      data: {comment: data},
      success (comment) {
        callback(comment);
      }
    });

  },

};
