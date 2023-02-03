type Rule = {
  getName: () => string,
  isValid: (value: string) => boolean,
};

export default Rule;
