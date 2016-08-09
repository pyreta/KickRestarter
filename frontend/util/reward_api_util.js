module.exports = {
  fetchRewards (callback) {
    $.ajax({
      url: "api/rewards",
      success (rewards) {
        callback(rewards);
      }
    });
  },

  getReward (id, callback) {
    $.ajax({
      url: `api/rewards/${id}`,
      success (reward) {
        callback(reward);
      }
    });
  },

  createReward (formData, callback) {
    $.ajax({
      url: "api/rewards",
      type: "POST",
      data: formData,
      success (reward) {
        callback(reward);
      }
    });
  },

  updateReward (formData, id, callback, error) {
    $.ajax({
      url: `api/rewards/${id}`,
      type: "PATCH",
      data: formData,
      success (reward) {
        callback(reward);
      },
      error,
    });
  },

  deleteReward (id, callback) {
    $.ajax({
      url: `api/rewards/${id}`,
      type: "DELETE",
      success (reward) {
        callback(reward);
      }
    });
  }
};
