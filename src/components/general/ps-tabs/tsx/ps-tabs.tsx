import { defineComponent, App } from 'vue';

const PsTabs = defineComponent({
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
PsTabs.install = function(app: App) {
  app.component(PsTabs.name, PsTabs);
  return app;
};
export default PsTabs
