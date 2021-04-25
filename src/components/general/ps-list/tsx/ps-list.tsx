import { defineComponent, App } from 'vue';

const PsList = defineComponent({
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
PsList.install = function(app: App) {
  app.component(PsList.name, PsList);
  return app;
};
export default PsList
