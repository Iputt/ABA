import { defineComponent, App } from 'vue';

const PsDivider = defineComponent({
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
PsDivider.install = function(app: App) {
  app.component(PsDivider.name, PsDivider);
  return app;
};
export default PsDivider
