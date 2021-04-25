import { defineComponent, App } from 'vue';

const PsCollapse = defineComponent({
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
PsCollapse.install = function(app: App) {
  app.component(PsCollapse.name, PsCollapse);
  return app;
};
export default PsCollapse
