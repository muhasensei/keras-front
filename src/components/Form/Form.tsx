import React from 'react'
import * as Styles from '../../assets/style';
import WelcomeTitle from './WelcomeTitle';
function Form() {
    return (
        <>
          <WelcomeTitle />
          <Styles.Form>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="salary">Salary</label>
                <input id='salary' />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="projects">Projects</label>
                <input id='projects' />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="motivation">Motivation Rating</label>
                <input id='motivation' />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="relationship">Relationships Rating</label>
                <input id='relationship' />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="task_management">Task Management Rating</label>
                <input id='task_management' />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="communication">Communication Rating</label>
                <input id='communication' />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="total_rating">Total Rating</label>
                <input id='total_rating' />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.SubmitButton type='submit'>
              Get result
            </Styles.SubmitButton>
          </Styles.Form>
        </>  
    )
}

export default Form

/*

sample = {{   
    "salary(thousand kzt)": 0,
    "n_of_individual_projects": 2,
    "motivation_r": 1,
    "relationship_with_others_r": 0.1,
    "communication_skills_r": 0.1,
    "task_management_r": 0.8,
    "total_rating": 0.9,
}}

*/
