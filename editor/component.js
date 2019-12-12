class ComponentType {
  constructor(design) {
    this.design = design;
    this.initer = null;
  }

  createInstance = function(x, y, args) {
    var inst = new ComponentInstance(this, x, y); // Create the instance
    this.initer.call(inst, args); // Call the initializer as the instance
    return inst;                  // Return the instance
  }
}

class ComponentInstance {
  // Initialize Default Properties - `pType.initer` can and probably will overwrite most of these.
  constructor(pType, x, y) {
    this.pType = pType;
    this.inputs = [];
    this.outputs = [];
    this.width = 0;
    this.height = 0;
    this.x = x;
    this.y = y;
    this.pins = [];
    this.draw = null;
    this.tick = null;
  }
}
