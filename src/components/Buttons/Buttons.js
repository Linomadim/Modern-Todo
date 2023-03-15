class Button {
  constructor(props) {
    this.icon = props.icon;
    this.name = props.name;
    this.type = props.type;
    this.state = props.state;
    this.onClick = props.onClick;
  }

  render() {
    const button = document.createElement("div");

    button.classList.add("button");
    button.classList.add(this.type);
    button.classList.add(this.state);

    if (this.type === "Secondary") {
      switch (this.state) {
        case "None":
          button.classList.add("Secondary_None");

          break;
        case "Warning":
          button.classList.add("Secondary_Warning");

          break;
        case "Error":
          button.classList.add("Secondary_Error");
          break;
        default:
          break;
      }
    }

    if (this.icon) {
      const buttonIcon = document.createElement("div");
      buttonIcon.classList.add("button_icon");
      buttonIcon.innerHTML = this.icon;
      button.append(buttonIcon);
    }

    const buttonName = document.createElement("div");
    buttonName.classList.add("button_name");
    buttonName.innerHTML = this.name;
    button.append(buttonName);

    button.addEventListener("click", this.onClick);

    return button;
  }
}

export default Button;
