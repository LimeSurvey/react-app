import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import './SideBar.scss'
import SideBarLeft from './SideBar'

export default {
    title: 'General/SideBar',
    component: SideBarLeft,
};

export const Basic = () => (
    <SideBarLeft/>
);
