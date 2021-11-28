import React, {FormEvent, useState} from 'react'
import * as Styles from '../../assets/style';
import WelcomeTitle from './WelcomeTitle';
import axios from 'axios';
import { Promotion } from './types';
function Form() {
  const [data, setData] = useState({
    salary: 0.1,
    projects: 0,
    motivation: 0,
    relationship: 0,
    task_management: 0,
    communication: 0,
    total_rating: 0,
  });

  const [prediction, setPrediction] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const showResults = () => {
    let promotion: Promotion = 'fail'
    if(prediction > 80) {
      promotion = 'success';
    }
    return <Styles.ResultsText promotion={promotion}>
      {promotion === 'success' ? 'Yes!' : 'No...'} (Employee had {prediction}% chance)
    </Styles.ResultsText>
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setError('')
    e.preventDefault();
    axios.post(`http://localhost:5000/predict`, data).then((res) => {
      setPrediction(res.data.prediction)
    }).catch((err) => {
      setPrediction(-1);
      setError(err.message)
    }).finally(() => {
      setLoading(false);
    })
  }
    return (
        <>
          <WelcomeTitle />
          <Styles.Form onSubmit={(e) => handleSubmit(e)}>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="salary">Salary</label>
                <Styles.Select id='salary' value={data.salary} onChange={(e) => setData({...data, salary: +e.target.value})}>
                  <option value={0.1}>Low</option>
                  <option value={0.3}>Average</option>
                  <option value={0.5}>High</option>
                </Styles.Select>
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="projects">Projects</label>
                <input
                  required
                  value={data.projects}
                  type='number'
                  id='projects'
                  onChange={(e) => setData({...data, projects: +e.target.value})}
                />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="motivation">Motivation Rating: {data.motivation}</label>
                <input
                  required
                  value={data.motivation}
                  type='range'
                  id='motivation'
                  onChange={(e) => setData({...data, motivation: +e.target.value})}
                />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="relationship">Relationships Rating: {data.relationship}</label>
                <input
                  required
                  value={data.relationship}
                  type='range' 
                  id='relationship'
                  onChange={(e) => setData({...data, relationship: +e.target.value})}
                />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="task_management">Task Management Rating: {data.task_management}</label>
                <input
                  required
                  value={data.task_management}
                  type='range'
                  id='task_management'
                  onChange={(e) => setData({...data, task_management: +e.target.value})}
                />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="communication">Communication Rating: {data.communication}</label>
                <input
                  required
                  value={data.communication}
                  type='range'
                  id='communication'
                  onChange={(e) => setData({...data, communication: +e.target.value})}
                />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="total_rating">Total Rating: {data.total_rating}</label>
                <input
                  required
                  value={data.total_rating}
                  type='range'
                  id='total_rating'
                  onChange={(e) => setData({...data, total_rating: +e.target.value})}
                />
              </Styles.InputWrapper>
            </Styles.InputGroup>
            <Styles.Results>
              Should we promote this employee?
              {
              prediction >= 0 && showResults()
              }
            </Styles.Results>
            {
              error && <Styles.ResultsText promotion='fail'>
                {error}
              </Styles.ResultsText>
            }
            <Styles.SubmitButton type='submit'>
              {
                loading && <i className="fa fa-spinner fa-spin"></i>
              }
              {
                !loading && 'Get results'
              }
            </Styles.SubmitButton>
          </Styles.Form>
        </>  
    )
}

export default Form
