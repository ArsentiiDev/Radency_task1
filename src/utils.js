export  function clearFields(form) {
    form.elements.name.value = "";
    form.elements.category.options[0].selected = true;
    form.elements.content.value = "";
  }