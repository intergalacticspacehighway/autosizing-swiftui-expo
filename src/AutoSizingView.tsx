import { requireNativeView } from 'expo';
import * as React from 'react';

import { AutoSizingViewProps } from './AutoSizingView.types';

const NativeView: React.ComponentType<AutoSizingViewProps> =
  requireNativeView('AutoSizingView');

export default function AutoSizingView(props: AutoSizingViewProps) {
  return <NativeView {...props} />;
}
