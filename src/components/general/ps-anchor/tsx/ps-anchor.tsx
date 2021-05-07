import { defineComponent, App } from 'vue';

const PsAnchor = defineComponent({
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
PsAnchor.install = function(app: App) {
  app.component(PsAnchor.name, PsAnchor);
  return app;
};
export default PsAnchor
