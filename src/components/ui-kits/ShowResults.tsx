import {Promotion} from '../Form/types';
import {ResultsText} from '../../assets/style';
import {IShowResults} from "./types";

const ALGORITHM_NAMES = {
    forest: "Random Forest",
    gradient: "Gradient Boosting",
    keras: "Keras Sequential"
}

export const ShowResults = ({prediction, algorithm}: IShowResults) => {
    let promotion: Promotion = 'fail'
    if(prediction > 0) {
      promotion = 'success';
    }
    return <ResultsText promotion={promotion}>
      {ALGORITHM_NAMES[algorithm]}: {promotion === 'success' ? 'Yes!' : 'No'}
    </ResultsText>
}