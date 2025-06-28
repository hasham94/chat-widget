# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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