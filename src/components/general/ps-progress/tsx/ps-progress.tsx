import { defineComponent, App } from 'vue';

const PsProgress = defineComponent({
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
PsProgress.install = function(app: App) {
  app.component(PsProgress.name, PsProgress);
  return app;
};
export default PsProgress
