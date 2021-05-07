import { defineComponent, App } from 'vue';

const PsBackTop = defineComponent({
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
PsBackTop.install = function(app: App) {
  app.component(PsBackTop.name, PsBackTop);
  return app;
};
export default PsBackTop
