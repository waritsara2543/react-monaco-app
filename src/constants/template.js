export const CODE_TEMPLATES = {
  javascript: `
      function greet(name) {
        console.log("Hello, " + name + "!");
      }
      
      greet("Paul");
      `,
  typescript: `
      type Params = {
        name: string;
      };
      
      function greet(data: Params) {
        console.log("Hello, " + data.name + "!");
      }
      
      greet({ name: "Paul" });
      `,
  python: `def greet(name):
    print("Hello, " + name + "!")
      
greet("Paul")
      `,
};