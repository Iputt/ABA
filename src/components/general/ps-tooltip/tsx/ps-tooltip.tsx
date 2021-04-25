import { defineComponent, App } from 'vue';

const PsTooltip = defineComponent({
  name: '',
  props: {},
  setup() {
    return {};
  },
  methods: {},
  render() {
    return (
      <span>
      </span>
    );
  },
})
PsTooltip.install = function(app: App) {
  app.component(PsTooltip.name, PsTooltip);
  return app;
};
export default PsTooltip
