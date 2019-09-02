$(function() {
  const btnName = "Я кнопка";
  const elType = 'button';
  const element = buildElement('div');
  const container = $("#container");

  appendElement(container, element);

  function addButton() {
  
		const button = buildElement(elType);
		appendElement(element, button);
    addNewClass(button, elType);
    setTextContent(button, btnName);
	
		addListener(button, 'click', addButton);
	};
	addButton();
  
  /**
   * Назначает css класс объекту DOM
   * @param {Object} htmlObj
   * @param {string} className
   */
  function addNewClass(htmlObj, className) {
    $(htmlObj).addClass(className);
  }
  
	/**
   * Назначает текст в элемент
   * @param {Object} htmlObj 
   * @param {string} text 
   */
  function setTextContent(htmlObj, text) {
    $(htmlObj).text(text);
  }

  /**
   * 
   * @param {Object} htmlObj 
   * @param {string} element 
   */
  function appendElement(htmlObj, element) {
    $(htmlObj).append(element);
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
		$(htmlObj).on(event, func); 
	}
	
});
