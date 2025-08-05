import React from 'react';
import Card from './card';
    
import './card.css';
export default {
  title: 'Components/Card',
  component: Card,
  
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello Card',
  content: 'This is the card content.',
  footer: 'Footer content here.',
};
