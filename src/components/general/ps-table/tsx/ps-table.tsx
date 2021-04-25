import { defineComponent, App } from 'vue';

const PsTable = defineComponent({
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
PsTable.install = function(app: App) {
  app.component(PsTable.name, PsTable);
  return app;
};
export default PsTable
