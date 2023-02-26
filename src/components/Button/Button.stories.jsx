import Button from '../Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    argTypes: {
      handleClick: { action: 'clicked' },
    },
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

const Template = (args) => <Button {...args} />;
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
