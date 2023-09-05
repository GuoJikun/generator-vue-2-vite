"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  initializing() {}

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the neat ${chalk.red("generator-vue-2-vite")} generator!`
      )
    );

    const prompts = [
      {
        type: "text",
        name: "title",
        message: "请输入项目名称"
      },
      {
        type: "confirm",
        name: "router",
        message: "Can you confirm?",
        initial: true
      },
      {
        type: "checkbox",
        name: "components",
        message: "Select UI Components",
        choices: [
          { title: "ElementUI", value: "element-ui" },
          { title: "ElementUI", value: "element-ui1" },
          { title: "ElementUI", value: "element-ui2" },
          { title: "ElementUI", value: "element-ui3" },
          { title: "ElementUI", value: "element-ui4" },
          { title: "ElementUI", value: "element-ui5" },
          { title: "ViewDesign(IView)", value: "view-design" }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      console.log(props);
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath(), this.destinationPath(this.props.title));
  }

  install() {
    this.spawnCommandSync("ls");
    this.spawnCommandSync(`cd ./${this.props.title}`);
    console.log(`cd ${this.props.title}`);
    this.yarnInstall("element-ui");
    // this.installDependencies({
    //   yarn: true,
    //   npm: false,
    //   bower: false,
    //   skipMessage: true
    // });
    // this.run("yarn", this.props.title);
  }

  end() {
    this.spawnCommandSync(`cd ./${this.props.title}`);
    this.spawnCommandSync("pwd");
  }
};
