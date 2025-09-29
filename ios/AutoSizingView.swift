import ExpoModulesCore
import SwiftUI

struct AutoSizingView: ExpoSwiftUI.View, ExpoSwiftUI.WithHostingView  {
    @State var checked: Bool = false
    
    init(props: ExpoModulesCore.ExpoSwiftUIDefaultProps) {
        
    }
    
    var body: some View {
        Toggle("", isOn: $checked)
            .labelsHidden()
            .toggleStyle(.switch)
    }
}
