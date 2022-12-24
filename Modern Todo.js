// eslint-disable-next-line max-classes-per-file
const Icons = {
  Home: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" stroke="#F9F9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.75 16.5V9H11.25V16.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
  Users: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.25 15.7499V14.2499C17.2495 13.5852 17.0283 12.9395 16.621 12.4141C16.2138 11.8888 15.6436 11.5136 15 11.3474" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 2.34741C12.6453 2.51264 13.2173 2.88794 13.6257 3.41414C14.0342 3.94035 14.2559 4.58753 14.2559 5.25366C14.2559 5.91979 14.0342 6.56697 13.6257 7.09318C13.2173 7.61939 12.6453 7.99469 12 8.15991" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
  Job: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5.25H3C2.17157 5.25 1.5 5.92157 1.5 6.75V14.25C1.5 15.0784 2.17157 15.75 3 15.75H15C15.8284 15.75 16.5 15.0784 16.5 14.25V6.75C16.5 5.92157 15.8284 5.25 15 5.25Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 15.75V3.75C12 3.35218 11.842 2.97064 11.5607 2.68934C11.2794 2.40804 10.8978 2.25 10.5 2.25H7.5C7.10218 2.25 6.72064 2.40804 6.43934 2.68934C6.15804 2.97064 6 3.35218 6 3.75V15.75" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
  Sport: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 1.5L2.25 10.5H9L8.25 16.5L15.75 7.5H9L9.75 1.5Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
  Logo: (size = "54px") =>
    `<svg width=${size} height=${size} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_852_138)">
    <rect width="54" height="54" rx="12" fill="#29A19C"/>
    <g clip-path="url(#clip1_852_138)">
    <path d="M39.25 11.25H31.935C31.2 9.22 29.275 7.75 27 7.75C24.725 7.75 22.8 9.22 22.065 11.25H14.75C12.825 11.25 11.25 12.825 11.25 14.75V39.25C11.25 41.175 12.825 42.75 14.75 42.75H39.25C41.175 42.75 42.75 41.175 42.75 39.25V14.75C42.75 12.825 41.175 11.25 39.25 11.25ZM27 11.25C27.9625 11.25 28.75 12.0375 28.75 13C28.75 13.9625 27.9625 14.75 27 14.75C26.0375 14.75 25.25 13.9625 25.25 13C25.25 12.0375 26.0375 11.25 27 11.25ZM30.5 35.75H18.25V32.25H30.5V35.75ZM35.75 28.75H18.25V25.25H35.75V28.75ZM35.75 21.75H18.25V18.25H35.75V21.75Z" fill="#F9F9F9"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_852_138">
    <rect width="54" height="54" fill="white"/>
    </clipPath>
    <clipPath id="clip1_852_138">
    <rect width="42" height="42" fill="white" transform="translate(6 6)"/>
    </clipPath>
    </defs>
    </svg>
    `,
  Statistics: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 15V7.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 15V3" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.5 15V10.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  Compare: (size = "18px", color = "#F9F9F9") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.25 4.5L10.125 11.625L6.375 7.875L0.75 13.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.75 4.5H17.25V9" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  Add: (size = "18px", color = "#29A19C") =>
    `<svg width=${size} height=${size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke="#29A19C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 6V12" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 9H12" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
};

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
const CategoriesObj = [
  {
    id: 0,
    name: "Дом",
    icon: Icons.Home(),
    isActive: false,
  },
  {
    id: 1,
    name: "Семья",
    icon: Icons.Users(),
    isActive: false,
  },
  {
    id: 2,
    name: "Работа",
    icon: Icons.Job(),
    isActive: false,
  },
  {
    id: 3,
    name: "Спорт",
    icon: Icons.Sport(),
    isActive: false,
  },
];

const categories = new LinkList({
  name: "Категории",
  links: CategoriesObj,
  selector: ".sidebar_content_categories",
});
categories.render();

const logo = new Link({ icon: Icons.Logo(54), name: `Tasks Book` });
const logoHTML = document.querySelector(".sidebar_logo");
logoHTML.prepend(logo.render());

const informationObj = [
  {
    id: 0,
    name: "Статистика",
    icon: Icons.Statistics(),
    isActive: false,
  },
  {
    id: 1,
    name: "Сравнить",
    icon: Icons.Compare(),
    isActive: false,
  },
];

informationObj.forEach((item) => {
  const information = new Link({ ...item, onClick: this.handleClick });
  const informationHTML = document.querySelector(
    ".sidebar_content_information"
  );
  informationHTML.append(information.render());
});

const addNewCategories = new Link({
  icon: Icons.Add(),
  name: "Добавить",
  onClick: this.handleClick,
});
const addNewCategoriesHTML = document.querySelector(
  ".sidebar_content_categories_add-new"
);
addNewCategoriesHTML.append(addNewCategories.render());
