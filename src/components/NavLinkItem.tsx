import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  to: string;
  title: string;
}

export const NavLinkItem: FC<Props> = ({
  to,
  title,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      {
        'has-background-grey-lighter': isActive,
      },
    )}
  >
    {title}
  </NavLink>
);