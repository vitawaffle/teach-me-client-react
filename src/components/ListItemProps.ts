import type { WithChildrenProps } from '../props';

type ListItemProps = WithChildrenProps & {
  onClick?: () => void,
};

export default ListItemProps;
