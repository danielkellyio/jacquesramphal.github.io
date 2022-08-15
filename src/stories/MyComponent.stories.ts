// MyComponent.stories.js

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Primary = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

export const Secondary = () => ({
  components: { MyComponent },
    template: '<MyComponent prop="value"/>',
});