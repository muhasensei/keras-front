import {Promotion} from '../Form/types';
import {ResultsText} from '../../assets/style';
import {IShowResults} from "./types";

export const ShowResults = ({prediction, algorithm}: IShowResults) => {
    let promotion: Promotion = 'fail'
    if(prediction > 0) {
      promotion = 'success';
    }
    return <ResultsText promotion={promotion}>
      {promotion === 'success' ? 'Yes!' : 'No'} ({algorithm})
    </ResultsText>
}