// we need to load the css ourselves
import 'plugins/traffic_sg/traffic_sg.less';
import 'plugins/traffic_sg/traffic_sg_controller';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { VisSchemasProvider } from 'ui/vis/schemas';
import trafficVisTemplate from 'plugins/traffic_sg/traffic_sg.html';
import networkVisParamsTemplate from 'plugins/traffic_sg/traffic_sg_params.html';


// register the provider with the visTypes registry
VisTypesRegistryProvider.register(MetricVisProvider);

function MetricVisProvider(Private) {
  var TemplateVisType = Private(TemplateVisTypeProvider);
  var Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'traffic',
    title: 'Traffic',
    description: 'Chart display lights of a standard color green/yellow/red',
    icon: 'fa-thumbs-up',
    template: trafficVisTemplate,
    params: {
      defaults: {
        titleTraffic: null,
        fontSize: 60,
        width: 50,
        redThreshold: 20,
        greenThreshold: 80,
        invertScale: null,
        handleNoResults: true
      },
      editor: networkVisParamsTemplate
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        max: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        title: 'X-Axis',
        min: 0,
        max: 1,
        aggFilter: ['terms']
      }
    ])
  });
}

// export the provider so that the visType can be required with Private()
export default MetricVisProvider;
