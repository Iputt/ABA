import { defineComponent, App } from 'vue';

const PsCard = defineComponent({
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
PsCard.install = function(app: App) {
  app.component(PsCard.name, PsCard);
  return app;
};
export default PsCard
