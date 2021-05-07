import { defineComponent, App } from 'vue';

const PsConfigProvider = defineComponent({
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
PsConfigProvider.install = function(app: App) {
  app.component(PsConfigProvider.name, PsConfigProvider);
  return app;
};
export default PsConfigProvider
