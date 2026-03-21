/**
 * @overview
 * Minimal example of a ccmjs component ("hello").
 *
 * Renders a simple greeting using the configured name.
 *
 * @author André Kless
 * @license MIT
 */
export const component = {
  name: "hello",
  ccm: "https://ccmjs.github.io/framework/ccm.js",
  config: {
    name: "World", // Name used in the greeting
  },
  Instance: function () {
    this.start = async () => {
      this.element.innerHTML = "Hello " + this.name;
    };
  },
};
