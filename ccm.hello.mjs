export const component = {
  name: "hello",
  ccm: "https://ccmjs.github.io/framework/ccm.js",
  config: {
    name: "World",
  },
  Instance: function () {
    this.start = async () => {
      this.element.innerHTML = "Hello " + this.name;
    };
  },
};
