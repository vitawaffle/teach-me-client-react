import type { ChildrenProps } from '../../props';

type ErrorLayoutProps = ChildrenProps & {
  code: number,
  name: string,
  message: string,
};

export default ErrorLayoutProps;
