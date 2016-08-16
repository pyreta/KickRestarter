module.exports = {
  fetchCampaigns (callback) {
    $.ajax({
      url: "api/campaigns",
      success (campaigns) {
        callback(campaigns);
      }
    });
  },

  fetchSearch (query, callback) {
    $.ajax({
      url: "api/campaigns",
      data: {query: query},
      dataType: "JSON",
      success (campaigns) {
        callback(campaigns);
      }
    });
  },

  fetchCategory (id, callback) {
    $.ajax({
      url: "api/campaigns",
      data: {category_id: id},
      dataType: "JSON",
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

  updateCampaign (formData, id, callback, error) {
    $.ajax({
      url: `api/campaigns/${id}`,
      type: "PATCH",
      contentType: false,
      processData: false,
      data: formData,
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
