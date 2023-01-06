import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import './SideBarRight.scss'
import SideBarRight from './SideBarRight'

export default {
  title: 'Editor/SideBarRight',
  component: SideBarRight,
};

export const Basic = () => (
    <SideBarRight/>
);
