import { defineComponent, App } from 'vue';

const PsPopconfirm = defineComponent({
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
PsPopconfirm.install = function(app: App) {
  app.component(PsPopconfirm.name, PsPopconfirm);
  return app;
};
export default PsPopconfirm
