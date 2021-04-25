import { defineComponent, App } from 'vue';

const PsPopover = defineComponent({
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
PsPopover.install = function(app: App) {
  app.component(PsPopover.name, PsPopover);
  return app;
};
export default PsPopover
