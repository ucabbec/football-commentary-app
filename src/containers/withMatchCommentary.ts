import { compose, withProps } from 'recompose';

const data = [1,2,4];

export const withMenuItemsContainer = compose<{}, {}>(
    withProps({
       ...data
    })
);