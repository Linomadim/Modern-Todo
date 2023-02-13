import LinkList from "./components/LinkList/LinkList.js";
import Link from "./components/Link/Link.js";
import Icons from "./utils/icons.js";

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
