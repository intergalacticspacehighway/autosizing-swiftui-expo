import { NativeModule, requireNativeModule } from 'expo';

import { AutoSizingViewModuleEvents } from './AutoSizingView.types';

declare class AutoSizingViewModule extends NativeModule<AutoSizingViewModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AutoSizingViewModule>('AutoSizingView');
