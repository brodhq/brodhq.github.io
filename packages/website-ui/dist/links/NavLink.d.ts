import React from 'react';
import { LinkProps as NextLinkProps } from 'next/link';
export interface NavLinkProps extends NextLinkProps {
    className?: string;
    exact?: boolean;
    match?: string;
    reverse?: boolean;
}
export declare const NavLink: React.FC<NavLinkProps>;
//# sourceMappingURL=NavLink.d.ts.map