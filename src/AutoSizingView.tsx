import { requireNativeView } from 'expo';
import * as React from 'react';

const NativeView: React.ComponentType = requireNativeView('AutoSizingView');

export default function AutoSizingView(props: any) {
  return <NativeView {...props} />;
}
