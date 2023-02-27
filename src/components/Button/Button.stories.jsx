import Button from '../Button/Button';
import { action } from '@storybook/addon-actions';

// export default {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     argTypes: {
//       handleClick: { action: 'clicked' },
//     },
//     color: {
//       options: ['primary', 'default', 'danger'],
//       control: { type: 'radio' },
//     },
//     size: {
//       options: ['sm', 'base', 'lg'],
//       control: { type: 'select' },
//     },
//     backgroundColor: {
//       control: { type: 'color' },
//     },
//   },
// };

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
  },
};

// const Template = (args) => <Button {...args} />;
// export const Default = Template.bind({});
// Default.args = {
//   children: 'Default',
// };
const something = action('something');

const Template = (args) => {
  const handleClick = () => {
    something();
  };
  return <Button {...args} handleClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Large',
  color: 'primary',
  size: 'lg',
};
