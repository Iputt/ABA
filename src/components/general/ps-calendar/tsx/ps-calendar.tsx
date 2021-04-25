import { defineComponent, App } from 'vue';

const PsCalendar = defineComponent({
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
PsCalendar.install = function(app: App) {
  app.component(PsCalendar.name, PsCalendar);
  return app;
};
export default PsCalendar
