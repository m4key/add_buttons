(function() {
  const btnName = "Я кнопка";
  const elType = 'button';
  const element = buildElement('div');
  const container = document.querySelector("#container");

  appendElement(container, element);

  function addButton() {
  
		const button = buildElement(elType);
		appendElement(element, button);
    addClass(button, elType);
    setTextContent(button, btnName);
	
		addListener(button, 'click', addButton);
	};
	addButton();
  
  /**
   * Назначает css класс объекту DOM
   * @param {Object} htmlObj
   * @param {string} className
   */
  function addClass(htmlObj, className) {
    htmlObj.classList.add(className);
  }
  
	/**
   * Назначает текст в элемент
   * @param {Object} htmlObj 
   * @param {string} text 
   */
  function setTextContent(htmlObj, text) {
    htmlObj.textContent = text;
  }

  /**
   * 
   * @param {Object} htmlObj 
   * @param {string} element 
   */
  function appendElement(htmlObj, element) {
    htmlObj.appendChild(element);
  }
  
	/**
   * Создает элемент 
   * @param {string} type 
   */
	function buildElement(type) {
		return document.createElement(type);
  }

  /**
   * Добавляет следующую кнопку
   * @param {Object} htmlObj 
   * @param {string} event 
   * @param {Function} func 
   */
  function addListener(htmlObj, event, func) {
		htmlObj.addEventListener(event, func); 
	}
	
})();
