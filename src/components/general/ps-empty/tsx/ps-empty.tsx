import { defineComponent, App } from 'vue';

const PsEmpty = defineComponent({
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
PsEmpty.install = function(app: App) {
  app.component(PsEmpty.name, PsEmpty);
  return app;
};
export default PsEmpty
