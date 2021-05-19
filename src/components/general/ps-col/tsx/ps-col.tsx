import { defineComponent, App } from 'vue';

const PsCol = defineComponent({
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
PsCol.install = function(app: App) {
  app.component(PsCol.name, PsCol);
  return app;
};
export default PsCol
