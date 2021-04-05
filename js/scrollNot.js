window.disableScroll = function () {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  const headElem = document.querySelector('.container');
  document.body.dbscrollY = window.scrollY;
  headElem.style.cssText = `padding-right: ${widthScroll}px;`;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    padding-right: ${widthScroll}px;
  `;
};

window.enableScroll = function () {
  const headElem = document.querySelector('.container');
  headElem.style.cssText = ``;
  document.body.style.cssText = ``;
  window.scroll({
    top: document.body.dbscrollY
  });
};