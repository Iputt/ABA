import { defineComponent, App } from 'vue';

const PsDescriptions = defineComponent({
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
PsDescriptions.install = function(app: App) {
  app.component(PsDescriptions.name, PsDescriptions);
  return app;
};
export default PsDescriptions
