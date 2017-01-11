import React from 'react';
//redux的开发工具包，而且DevTools支持自定义的 monitor 组件，
//所以我们可以完全自定义一个我们想要的 monitor 组件的UI展示风格，以下两个是我们示例中用到的。
import { createDevTools } from 'redux-devtools';
//显示包是单独的，要额外指定
//redux-devtools-log-monitor这是Redux Devtools 默认的 monitor ，
//它可以展示state 和 action 的一系列信息，而且我们还可以在monitor改变它们的值。
import LogMonitor from 'redux-devtools-log-monitor';
// 这monitor支持键盘的快捷键来轻松的改变tree view在浏览器中的展示位置，
// 比如不断的按‘ctrl + q’组合键可以让展示工具停靠在浏览器的上下左右不同的位置，按“ctrl+h”组合键则可以控制展示工具在浏览器的显示或隐藏的状态。
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
  >
    <LogMonitor />
  </DockMonitor>
);
