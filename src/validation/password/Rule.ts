type Rule = {
  isValid: (value: string) => boolean,
  getName: () => string,
};

export default Rule;
