import { defineComponent, App } from 'vue';

const PsImage = defineComponent({
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
PsImage.install = function(app: App) {
  app.component(PsImage.name, PsImage);
  return app;
};
export default PsImage
