// Reexport the native module. On web, it will be resolved to AutoSizingViewModule.web.ts
// and on native platforms to AutoSizingViewModule.ts
export { default } from './AutoSizingViewModule';
export { default as AutoSizingView } from './AutoSizingView';
export * from  './AutoSizingView.types';
