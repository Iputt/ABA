import { defineComponent, App } from 'vue';

const PsModal = defineComponent({
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
PsModal.install = function(app: App) {
  app.component(PsModal.name, PsModal);
  return app;
};
export default PsModal
