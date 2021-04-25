import { defineComponent, App } from 'vue';

const PsNotification = defineComponent({
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
PsNotification.install = function(app: App) {
  app.component(PsNotification.name, PsNotification);
  return app;
};
export default PsNotification
