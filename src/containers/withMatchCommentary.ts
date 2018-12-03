import { compose, withProps } from 'recompose';

import MatchData from '../match_data/commentaryData';

export const withMatchCommentary = compose<{}, {}>(
    withProps({
       commentary: MatchData.commentary,
       keyEvents: MatchData.keyEvents
    })
);