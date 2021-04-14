import { defineComponent, App } from 'vue';

const PsAvatar = defineComponent({
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
PsAvatar.install = function(app: App) {
  app.component(PsAvatar.name, PsAvatar);
  return app;
};
export default PsAvatar
