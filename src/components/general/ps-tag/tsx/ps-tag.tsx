import { defineComponent, App } from 'vue';

const PsTag = defineComponent({
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
PsTag.install = function(app: App) {
  app.component(PsTag.name, PsTag);
  return app;
};
export default PsTag
