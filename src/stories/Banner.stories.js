import MyBanner from './Banner.vue';

export default {
  title: 'Components/Banner',
  component: MyBanner,
  argTypes: {
    type: { control: { type: 'select', options: ['background', 'base'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyBanner },
  template: '<my-banner v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = {
  Base: true,
  type: Base,
};

export const Background = Template.bind({});
Background.args = {
  type: Background,
};