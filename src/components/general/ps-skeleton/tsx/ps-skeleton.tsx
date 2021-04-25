import { defineComponent, App } from 'vue';

const PsSkeleton = defineComponent({
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
PsSkeleton.install = function(app: App) {
  app.component(PsSkeleton.name, PsSkeleton);
  return app;
};
export default PsSkeleton
