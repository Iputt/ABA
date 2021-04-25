import { defineComponent, App } from 'vue';

const PsResult = defineComponent({
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
PsResult.install = function(app: App) {
  app.component(PsResult.name, PsResult);
  return app;
};
export default PsResult
