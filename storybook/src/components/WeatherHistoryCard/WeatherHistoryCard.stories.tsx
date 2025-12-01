import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WeatherHistoryCard, { Props } from './WeatherHistoryCard';
import sampleData from '../../data/hist-clima.json';

export default {
  title: 'Components/WeatherHistoryCard',
  component: WeatherHistoryCard,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <WeatherHistoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: sampleData as any,
  expanded: false,
  loading: false,
  error: null,
};

export const Expanded = Template.bind({});
Expanded.args = {
  data: sampleData as any,
  expanded: true,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: undefined,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Falha na conexão com a API',
  data: undefined,
};

export const Empty = Template.bind({});
Empty.args = {
  data: { daily: { time: [], weather_code: [], temperature_2m_mean: [], temperature_2m_max: [], precipitation_sum: [], wind_speed_10m_max: [], relative_humidity_2m_mean: [] } } as any,
};
