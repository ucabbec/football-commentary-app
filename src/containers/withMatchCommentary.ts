import { compose, withProps } from 'recompose';

import MatchData from '../match_data/commentaryData';

// container that would make api call id it were getting data from a server

export const withMatchCommentary = compose(
    withProps({
       commentary: MatchData.commentary,
       keyEvents: MatchData.keyEvents
    })
);