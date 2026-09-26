/**
 * @overview
 * Minimal example of a ccmjs component ("hello").
 *
 * Renders a simple greeting using the configured name.
 *
 * @author André Kless <andre.kless@web.de>
 * @copyright 2025–2026 André Kless
 * @license MIT
 * @version 1.0.1
 */
export const component = {
  name: "hello",
  ccm: "././libs/framework/ccm-28.0.0.min.js",
  config: {
    name: "World", // Name used in the greeting
  },
  Instance: function () {
    this.start = async () => {
      this.element.innerHTML = "Hello " + this.name;
    };
  },
};
