const isBlank = (str: string | null | undefined): boolean => str === undefined
  || str === null
  || str === '';

export default isBlank;
