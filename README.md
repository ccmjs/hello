# ccmjs Hello Component

A minimal example component for the **ccmjs framework**.

This component renders a simple greeting using a configurable name.

## 🚀 Quick Start

Include ccmjs and start the component:

```html
<!DOCTYPE html>
<meta charset="UTF-8">
<body>

<script src="./libs/framework/ccm.js"></script>

<script>
ccm.start("./ccm.hello.mjs", {
  name: "Mika"
}, document.body);
</script>
```

## 💡 Example Output

```
Hello Mika
```

## ⚙️ Configuration

Configuration is defined directly in the component source code.

Open `ccm.hello.mjs` to see all available configuration options and their descriptions.

This follows the ccmjs principle of **code transparency**:
all configuration is documented where it is defined.

## 📦 Usage with CDN (versioned)

```html
<script src="https://ccmjs.github.io/hello/libs/framework/ccm.js"></script>

<script>
ccm.start("https://cdn.jsdelivr.net/gh/ccmjs/hello@v1.0.1/ccm.hello-1.0.1.min.mjs", { name: "Mika" }, document.body);
</script>
```

## 🧩 Component Structure

A ccmjs component exports a `component` object:

```js
export const component = {
  name: "hello",
  ccm: "https://ccmjs.github.io/framework/ccm.js",
  config: {
    name: "World"
  },
  Instance: function () {
    this.start = async () => {
      this.element.innerHTML = "Hello " + this.name;
    };
  }
};
```

## 🔍 Code Transparency

Each ccmjs component is a standalone file that can be inspected at runtime.

There is no build step, bundling, or hidden abstraction layer.

You can always:

- read the original source code
- understand how the component works
- inspect it directly in the browser (via source maps)

## 📚 Learn More

- ccmjs Framework: https://github.com/ccmjs/framework
- Documentation: https://github.com/ccmjs/framework/wiki

## 📄 License

MIT License
