import { defineComponent, App } from 'vue';

const PsRow = defineComponent({
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
PsRow.install = function(app: App) {
  app.component(PsRow.name, PsRow);
  return app;
};
export default PsRow
