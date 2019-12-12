// This class stores some information on the component, such as: it's name, category and preview image. It also stores a function used as a virtual constructor for any instances to be created of this component.
class ComponentType {
  constructor(design, name, category) {
    this.design = design;
    this.name = name;
    this.category = category;
    this.initer = null;
  }

  createInstance = function(x, y, args) {
    var inst = new ComponentInstance(this, x, y); // Create the instance
    this.initer.call(inst, args); // Call the initializer as the instance
    return inst;                  // Return the instance
  }
}

// This class represents every instance of a component.
class ComponentInstance {
  // Initialize Default Properties - `pType.initer` can and probably will overwrite most of these.
  constructor(pType, x, y) {
    this.pType = pType;
    this.width = 0;     // Specifies the Width of the component (Not visual, Grid based, Used to block other components from being stacked on top of this one)
    this.height = 0;    // Specifies the Height of the component (Same concept as `this.width`)
    this.x = x;         // The X location of the component on the grid (You should probably not override this)
    this.y = y;         // The Y location of the component on the grid (You should probably not override this)
    this.pins = [];     // An array of objects that holds the data for every pin (See `createPin(x, y, io, func)`)
    this.draw = null;   // The function used to display this component. (Function must accept the following parameters (x, y, inst) where x and y are the location of this component (not grid based) and inst is the component that is to be drawn)
  }
}

// createPin(x, y, io, index):
/*
  x  - The x position of the pin, relative to the components location. Grid based.
  y  - The y position of the pin, relative to the components location. Grid based.
  io - The pin is an INPUT (true), the pin is an OUTPUT (false).
  func - The function to call when this pin updates (If it's an output pin: this function gets called once every frame; if it's an input pin: it only gets called when the input changes.)
*/
function createPin(x, y, io, func) {
  return {
    rx: x,
    ry: y,
    input: io,
    fn: func
  };
}
