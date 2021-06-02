import { defineComponent, App } from 'vue';

const PsPicshow = defineComponent({
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
PsPicshow.install = function(app: App) {
  app.component(PsPicshow.name, PsPicshow);
  return app;
};
export default PsPicshow
