import { defineComponent, App } from 'vue';

const PsSpin = defineComponent({
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
PsSpin.install = function(app: App) {
  app.component(PsSpin.name, PsSpin);
  return app;
};
export default PsSpin
