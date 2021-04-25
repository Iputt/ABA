import { defineComponent, App } from 'vue';

const PsAlert = defineComponent({
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
PsAlert.install = function(app: App) {
  app.component(PsAlert.name, PsAlert);
  return app;
};
export default PsAlert
