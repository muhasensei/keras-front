import {StyledButton} from '../../assets/style';
import {ISubmitButton} from "./types";
export const SubmitButton = ({label, loading, handleSubmit}: ISubmitButton) => {
    return (
        <StyledButton onClick={handleSubmit}>
          {
            loading ? <i className="fa fa-spinner fa-spin"></i> : label
          }
        </StyledButton>
    )
}