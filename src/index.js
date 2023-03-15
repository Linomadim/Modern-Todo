import LinkList from "./components/LinkList/LinkList.js";
import Link from "./components/Link/Link.js";
import Icons from "./utils/icons.js";
import Button from "./components/Buttons/Buttons.js";

const categoriesObj = [
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
  links: categoriesObj,
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
  const information = new Link({
    ...item,
    onClick: () => true,
  });
  const informationHTML = document.querySelector(
    ".sidebar_content_information"
  );
  informationHTML.append(information.render());
});

const addNewCategories = new Link({
  icon: Icons.Add(),
  name: "Добавить",
  onClick: () => true,
});
const addNewCategoriesHTML = document.querySelector(
  ".sidebar_content_categories_add-new"
);
addNewCategoriesHTML.append(addNewCategories.render());

const exit = new Link({
  icon: Icons.Exit(),
  name: "Выйти",
  onClick: () => true,
});
const exitHTML = document.querySelector(".sidebar_exit");
exitHTML.append(exit.render());

const Type = {
  Primary: "Primary",
  Secondary: "Secondary",
};

const State = {
  None: "None",
  Warning: "Warning",
  Error: "Error",
};

const button1 = new Button({
  name: "Primary, None  ",
  type: Type.Primary,
  state: State.None,
  onClick: () => true,
});
const button2 = new Button({
  name: "Primary, Error",
  type: Type.Primary,
  state: State.Error,
  onClick: () => true,
});
const button3 = new Button({
  name: "Primary, Warning",
  type: Type.Primary,
  state: State.Warning,
  onClick: () => true,
});

const button4 = new Button({
  name: "Secondary , Warning",
  type: Type.Secondary,
  state: State.Warning,
  onClick: () => true,
});

const button5 = new Button({
  name: "Secondary, None",
  type: Type.Secondary,
  state: State.None,
  onClick: () => true,
});

const button6 = new Button({
  icon: Icons.Button,
  name: "C иконкой, Primary, None",
  type: Type.Primary,
  state: State.None,
  onClick: () => true,
});

const button7 = new Button({
  icon: Icons.Button,
  name: "C иконкой, Primary, Warning",
  type: Type.Primary,
  state: State.Warning,
  onClick: () => true,
});

const button8 = new Button({
  icon: Icons.Button,
  name: "C иконкой, Secondary, None",
  type: Type.Secondary,
  state: State.None,
  onClick: () => true,
});

const button9 = new Button({
  icon: Icons.Button,
  name: "C иконкой, Secondary, Warning",
  type: Type.Secondary,
  state: State.Warning,
  onClick: () => true,
});

const domContent = document.querySelector(".content");

domContent.append(button1.render());
domContent.append(button2.render());
domContent.append(button3.render());
domContent.append(button4.render());
domContent.append(button5.render());
domContent.append(button6.render());
domContent.append(button7.render());
domContent.append(button8.render());
domContent.append(button9.render());
