import ExpoModulesCore

public class AutoSizingViewModule: Module {

  public func definition() -> ModuleDefinition {
    Name("AutoSizingView")


    View(AutoSizingView.self) {
    }
  }
}
