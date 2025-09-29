import * as React from 'react';

import { AutoSizingViewProps } from './AutoSizingView.types';

export default function AutoSizingView(props: AutoSizingViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
