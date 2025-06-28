# React + TypeScript + Vite

A customizable chat widget component built with React and TypeScript using Vite.
Supports chat interaction with large language models (LLMs), local message persistence, and theming.

## Features
Simple React + TypeScript + Vite setup

Customizable UI: colors, icons, modes, and varaints

Basic chat interaction powered by Hugging Face or other LLM APIs

Local persistence of chat messages with localStorage

Maintenance mode disabling input with a warning banner

## Installation

npm install @hasham94/chat-widget2
# or
yarn add @hasham94/chat-widget2

## Usage

```tsx
import React from "react";
import ChatWidget from "@hasham94/chat-widget2";

function App() {
  return (
    <ChatWidget
      primaryColor="#5C6BC0"
      maintenanceMode={false}
      icon={<YourCustomIcon />}
      variant="drawer"
      apiKey='<hugging face api key>'
    />
  );
}

export default App;
```



## Chat Configuration

| Prop                 | Type                     | Description                                                     |
| -------------------- | ------------------------ | --------------------------------------------------------------- |
| `primaryColor`       | `string`                 | Primary color for the chat button and UI.                       |
| `isUnderMaintenance` | `boolean`                | When `true`, disables input and displays a maintenance message. |
| `isOnline`           | `boolean`                | Displays online/offline status indicator.                       |
| `variant`            | `"bubble"` | `"drawer"`  | Controls the chat layout: floating bubble or full-width drawer. |
| `icon`               | `string`  | `null`       | Optional custom emoji or image URL for the chat launcher icon.  |


## Hugging Face Integration
https://huggingface.co/