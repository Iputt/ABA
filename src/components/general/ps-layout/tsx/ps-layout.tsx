import { defineComponent, App } from 'vue';

const PsLayout = defineComponent({
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
PsLayout.install = function(app: App) {
  app.component(PsLayout.name, PsLayout);
  return app;
};
export default PsLayout
