import { defineComponent, App } from 'vue';

const PsComment = defineComponent({
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
PsComment.install = function(app: App) {
  app.component(PsComment.name, PsComment);
  return app;
};
export default PsComment
