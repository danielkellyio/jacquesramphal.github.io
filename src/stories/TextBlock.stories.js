import TextBlock from '../components/TextBlock.vue';


export default {
  title: 'TextBlock',
  component: TextBlock,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextBlock },
  template: '<TextBlock v-bind="$props" />',
});

export const Left = Template.bind({});
Left.args = {
  left: true,
};

export const Center = Template.bind({});
Center.args = {
  center: true,
};