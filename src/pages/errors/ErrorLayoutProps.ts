import type { WithChildrenProps } from '../../props';

type ErrorLayoutProps = WithChildrenProps & {
  code: number,
  name: string,
  message: string,
};

export default ErrorLayoutProps;
