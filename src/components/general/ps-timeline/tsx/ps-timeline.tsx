import { defineComponent, App } from 'vue';

const PsTimeline = defineComponent({
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
PsTimeline.install = function(app: App) {
  app.component(PsTimeline.name, PsTimeline);
  return app;
};
export default PsTimeline
