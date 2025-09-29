import { registerWebModule, NativeModule } from 'expo';

import { AutoSizingViewModuleEvents } from './AutoSizingView.types';

class AutoSizingViewModule extends NativeModule<AutoSizingViewModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(AutoSizingViewModule, 'AutoSizingViewModule');
