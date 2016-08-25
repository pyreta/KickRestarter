module.exports = {
  fetchPledges (callback) {
    $.ajax({
      url: "api/pledges",
      success (pledges) {
        callback(pledges);
      }
    });
  },

  getPledge (id, callback) {
    $.ajax({
      url: `api/pledges/${id}`,
      success (pledge) {
        callback(pledge);
      }
    });
  },


    
  createPledge (formData, callback) {
    $.ajax({
      url: "api/pledges",
      type: "POST",
      data: formData,
      success (pledge) {
        callback(pledge);
      }
    });
  },

  updatePledge (formData, id, callback, error) {
    $.ajax({
      url: `api/pledges/${id}`,
      type: "PATCH",
      data: formData,
      success (pledge) {
        callback(pledge);
      },
      error,
    });
  },

  deletePledge (id, callback) {
    $.ajax({
      url: `api/pledges/${id}`,
      type: "DELETE",
      success (pledge) {
        callback(pledge);
      }
    });
  }
};
