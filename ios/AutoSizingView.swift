import ExpoModulesCore
import SwiftUI

struct AutoSizingView: ExpoSwiftUI.View, ExpoSwiftUI.WithHostingView  {
  @State var checked: Bool = false
  @EnvironmentObject var shadowNodeProxy: ExpoSwiftUI.ShadowNodeProxy

  init(props: ExpoModulesCore.ExpoSwiftUIDefaultProps) {}
    
  private func setShadowNodeSize(width: CGFloat, height: CGFloat) {
    shadowNodeProxy.setStyleSize?(NSNumber(value: width), NSNumber(value: height))
  }
  
  var body: some View {
    let toggleBody = Toggle("", isOn: $checked)
      .labelsHidden()
      .toggleStyle(.switch)
    
    if #available(iOS 16.0, *) {
      toggleBody.onGeometryChange(for: CGSize.self, of: { proxy in proxy.size }, action: { value in
        setShadowNodeSize(width: value.width, height: value.height)
      })
    } else {
      toggleBody.overlay {
        GeometryReader { geometry in
          Color.clear
            .hidden()
            .onAppear {
              setShadowNodeSize(width: geometry.size.width, height: geometry.size.height)
            }
        }
      }
    }
  }
}
