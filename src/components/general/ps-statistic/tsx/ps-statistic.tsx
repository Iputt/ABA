import { defineComponent, App } from 'vue';

const PsStatistic = defineComponent({
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
PsStatistic.install = function(app: App) {
  app.component(PsStatistic.name, PsStatistic);
  return app;
};
export default PsStatistic
