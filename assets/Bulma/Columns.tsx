import React, {FC, HTMLAttributes, memo} from 'react';

export interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
    mobile?: boolean;
    desktop?: boolean;
    variable?: boolean;
    multiline?: boolean;
    gapless?: boolean;
    vcentered?: boolean;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'multiline';
}

const Columns: FC<ColumnsProps> = (props) => {
    const {
        mobile,
        desktop,
        variable,
        gapless,
        gap,
        className,
        children,
        multiline,
        vcentered,
        ...other
    } = props;

    const classes = ['columns'];

    if (mobile) classes.push('is-mobile');
    if (desktop) classes.push('is-desktop');
    if (variable) classes.push(`is-variable is-${gap || 1}`);
    if (className) classes.push(className);
    if (multiline) classes.push('is-multiline');
    if (gapless) classes.push('is-gapless');
    if (vcentered) classes.push('is-vcentered');

    return (
        <div className={classes.join(' ')} {...other}>
            {children}
        </div>
    );
};

export default memo(Columns);
