
import { defineComponent, App } from 'vue';

const PsBadge = defineComponent({
  name: 'PsBadge',
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
});

PsBadge.install = function(app: App) {
  app.component(PsBadge.name, PsBadge);
  return app;
};

export default PsBadge
