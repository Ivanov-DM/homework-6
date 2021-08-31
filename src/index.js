import "./styles/style.css";

const someText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing " +
  "elit. Ab consectetur debitis est fugit harum in " +
  "incidunt molestiae necessitatibus, numquam perferendis " +
  "porro quasi qui quibusdam quidem repellat, repudiandae " +
  "rerum tempore ullam";

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const mainLeftSection = document.createElement("section");
mainLeftSection.classList.add("main-left-section");
const mainRightSection = document.createElement("section");
mainRightSection.classList.add("main-right-section");
const mainCenterSection = document.createElement("section");
mainCenterSection.classList.add("main-center-section");

function createHeaderContent() {
  const logo = document.createElement("img");
  logo.src = "https://www.ph4.ru/DL/LOGO/o/otus_.gif";
  logo.alt = "Some logo";
  const headerBlock = document.createElement("p");
  headerBlock.innerText = someText;
  header.appendChild(logo);
  header.appendChild(headerBlock);
}

function createMainCenterSectionContent(blockCount) {
  for (let i = 0; i < blockCount; i++) {
    const mainContentArticle = document.createElement("article");
    mainContentArticle.classList.add("main-content-article");
    const mainContentArticleHeader = document.createElement("header");
    const mainContentArticleH2 = document.createElement("h2");
    const mainContentArticleText = document.createElement("p");
    mainContentArticleText.innerText = someText;
    mainContentArticleH2.innerText = `Block: ${i + 1}`;
    mainContentArticleHeader.appendChild(mainContentArticleH2);
    mainContentArticle.appendChild(mainContentArticleHeader);
    mainContentArticle.appendChild(mainContentArticleText);
    mainCenterSection.appendChild(mainContentArticle);
  }
}

function createMainSectionContent(sectionName, blockCount) {
  for (let i = 0; i < blockCount; i++) {
    const mainContentArticle = document.createElement("article");
    const mainContentArticleText = document.createElement("p");
    mainContentArticle.classList.add("main-content-article");
    mainContentArticleText.innerText = someText;
    mainContentArticle.appendChild(mainContentArticleText);
    sectionName.appendChild(mainContentArticle);
  }
}

function createFooterContent(blockCount) {
  for (let i = 0; i < blockCount; i++) {
    const footerBlock = document.createElement("div");
    footerBlock.classList.add("footer-block");
    footerBlock.innerText = someText;
    footer.appendChild(footerBlock);
  }
}

createHeaderContent();
createMainCenterSectionContent(12);
createMainSectionContent(mainLeftSection, 2);
createMainSectionContent(mainRightSection, 1);
createFooterContent(4);

main.appendChild(mainLeftSection);
main.appendChild(mainCenterSection);
main.appendChild(mainRightSection);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
