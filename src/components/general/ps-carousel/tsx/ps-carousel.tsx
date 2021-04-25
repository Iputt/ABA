import { defineComponent, App } from 'vue';

const PsCarousel = defineComponent({
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
PsCarousel.install = function(app: App) {
  app.component(PsCarousel.name, PsCarousel);
  return app;
};
export default PsCarousel
