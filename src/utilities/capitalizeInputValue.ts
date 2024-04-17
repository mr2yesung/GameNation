function capitalizeInputValue(input: HTMLInputElement) {
  const inputValue = input.value;

  const capitalizedInputValue =
    inputValue.charAt(0).toLocaleUpperCase() +
    inputValue.slice(1).toLocaleLowerCase();

  input.value = capitalizedInputValue;
}

export { capitalizeInputValue };
