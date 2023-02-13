class Link {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.icon = props.icon;
    this.onclick = props.onClick;
    this.isActive = props.isActive;
  }

  render() {
    const link = document.createElement("div");
    link.classList.add("link");
    link.dataset.id = this.id;
    if (this.isActive) {
      link.classList.add("link_active");
    }

    const icon = document.createElement("div");
    icon.classList.add("link_icon");
    icon.innerHTML = this.icon;

    const name = document.createElement("div");
    name.classList.add("link_name");
    name.innerHTML = this.name;

    link.append(icon);
    link.append(name);
    link.addEventListener("click", this.onclick);
    return link;
  }
}

export default Link;
