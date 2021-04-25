import { defineComponent, App } from 'vue';

const PsTree = defineComponent({
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
PsTree.install = function(app: App) {
  app.component(PsTree.name, PsTree);
  return app;
};
export default PsTree
