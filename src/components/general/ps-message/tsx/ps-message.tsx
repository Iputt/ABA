import { defineComponent, App } from 'vue';

const PsMessage = defineComponent({
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
PsMessage.install = function(app: App) {
  app.component(PsMessage.name, PsMessage);
  return app;
};
export default PsMessage
