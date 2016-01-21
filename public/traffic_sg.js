define(function (require) {
  
  // we need to load the css ourselves
  require('plugins/traffic_sg/traffic_sg.less');

  // we also need to load the controller and used by the template
  require('plugins/traffic_sg/traffic_sg_controller');

  // register the provider with the visTypes registry
  require('ui/registry/vis_types').register(MetricVisProvider);

  function MetricVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
    var Schemas = Private(require('ui/Vis/Schemas'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'traffic',
      title: 'Traffic',
      description: 'Chart display lights of a standard color green/yellow/red',
      icon: 'fa-thumbs-up',
      template: require('plugins/traffic_sg/traffic_sg.html'),
      params: {
        defaults: {
          titleTraffic: null,
          fontSize: 60,
          width: 50,
          redThreshold: 20,
          greenThreshold: 80,
          invertScale: null
        },
        editor: require('plugins/traffic_sg/traffic_sg_params.html')
      },
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 1,
          defaults: [
            { type: 'count', schema: 'metric' }
          ]
        }
      ])
    });
  }

  // export the provider so that the visType can be required with Private()
  return MetricVisProvider;
});
