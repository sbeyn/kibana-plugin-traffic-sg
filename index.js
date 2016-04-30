'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/traffic_sg/traffic_sg']
    }

  });
};
