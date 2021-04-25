import { defineComponent, App } from 'vue';

const PsDrawer = defineComponent({
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
PsDrawer.install = function(app: App) {
  app.component(PsDrawer.name, PsDrawer);
  return app;
};
export default PsDrawer
