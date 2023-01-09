import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import 'themes/Sea_Green/sea_green.scss'
import './TopBar.scss'
import TopBar from './TopBar'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Editor/TopBar',
  component: TopBar,
};

export const Basic = () => (
  <div id="container">
    <TopBar/>
  </div>
);