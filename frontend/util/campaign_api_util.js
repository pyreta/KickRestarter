module.exports = {
  fetchCampaigns (callback) {
    $.ajax({
      url: "api/campaigns",
      success (campaigns) {
        callback(campaigns);
      }
    });
  },

  getCampaign (id, callback) {
    $.ajax({
      url: `api/campaigns/${id}`,
      success (campaign) {
        callback(campaign);
      }
    });
  },

  createCampaign (formData, callback) {
    $.ajax({
      url: "api/campaigns",
      type: "POST",
      contentType: false,
      processData: false,
      data: formData,
      success (campaign) {
        callback(campaign);
      }
    });
  },

  updateCampaign (data, id, callback, error) {
    $.ajax({
      url: `api/campaigns/${id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: { campaign: { title: data.title, body: data.body } },
      success (campaign) {
        callback(campaign);
      },
      error,
    });
  },

  deleteCampaign (id, callback) {
    $.ajax({
      url: `api/campaigns/${id}`,
      type: "DELETE",
      success (campaign) {
        callback(campaign);
      }
    });
  }
};
