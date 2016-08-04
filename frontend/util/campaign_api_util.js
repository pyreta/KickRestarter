module.exports = {
  fetchCampaigns (cb) {
    $.ajax({
      url: "api/posts",
      success (posts) {
        cb(posts);
      }
    });
  },

  getCampaign (id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      success (post) {
        cb(post);
      }
    });
  },

  createCampaign (data, cb) {
    $.ajax({
      url: "api/posts",
      type: "POST",
      data: { post: data },
      success (post) {
        cb(post);
      }
    });
  },

  updateCampaign (data, cb) {
    $.ajax({
      url: `api/posts/${data.id}`,
      type: "PATCH",
      data: { post: { title: data.title, body: data.body } },
      success (post) {
        cb(post);
      }
    });
  },

  deleteCampaign (id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      type: "DELETE",
      success (post) {
        cb(post);
      }
    });
  }
};
