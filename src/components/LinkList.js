import Link from "./Link.js";

class LinkList {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.links = props.links;
    this.selector = props.selector;

    this.activeLink = props.activeLink || props.links[0].name;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { id } = e.currentTarget.dataset;
    const link = this.links.find((item) => item.id === +id);
    this.activeLink = link.name;
    this.render();
  }

  render() {
    const list = document.createElement("div");
    list.classList.add("list");
    const listName = document.createElement("div");
    listName.classList.add("list_name");
    listName.classList.add("title");
    listName.innerHTML = this.name;
    list.append(listName);

    this.links.forEach((item) => {
      const isActive = this.activeLink === item.name;
      const link = new Link({ ...item, onClick: this.handleClick, isActive });
      list.append(link.render());
    });
    if (this.selector) {
      const elem = document.querySelector(this.selector);
      elem.innerHTML = "";
      elem.append(list);
    }
    return list;
  }
}

export default LinkList;
