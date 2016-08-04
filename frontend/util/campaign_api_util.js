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

  createCampaign (data, callback) {
    $.ajax({
      url: "api/campaigns",
      type: "POST",
      data: { campaign: data },
      success (campaign) {
        callback(campaign);
      }
    });
  },

  updateCampaign (data, callback) {
    $.ajax({
      url: `api/campaigns/${data.id}`,
      type: "PATCH",
      data: { campaign: { title: data.title, body: data.body } },
      success (campaign) {
        callback(campaign);
      }
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
