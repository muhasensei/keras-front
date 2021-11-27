import React, {FormEvent, useState} from 'react'
import * as Styles from '../../assets/style';
import WelcomeTitle from './WelcomeTitle';
import axios from 'axios';
function Form() {
  const [data, setData] = useState({
    salary: 100,
    projects: 0,
    motivation: 0,
    relationship: 0,
    task_management: 0,
    communication: 0,
    total_rating: 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/predict`, data).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
    return (
        <>
          <WelcomeTitle />
          <Styles.Form onSubmit={(e) => handleSubmit(e)}>
            <Styles.InputGroup>
              <Styles.InputWrapper>
                <label htmlFor="salary">Salary (thousand kzt)</label>
                <input
                  required
                  value={data.salary}
                  type='number'
                  id='salary'
                  onChange={(e) => setData({...data, salary: +(e.target.value)})}
                />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="projects">Projects</label>
                <input
                  required
                  value={data.projects}
                  type='number'
                  id='projects'
                  onChange={(e) => setData({...data, projects: +(e.target.value)})}
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
                  onChange={(e) => setData({...data, motivation: +(e.target.value)})}
                />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="relationship">Relationships Rating: {data.relationship}</label>
                <input
                  required
                  value={data.relationship}
                  type='range' 
                  id='relationship'
                  onChange={(e) => setData({...data, relationship: +(e.target.value)})}
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
                  onChange={(e) => setData({...data, task_management: +(e.target.value)})}
                />
              </Styles.InputWrapper>
              <Styles.InputWrapper>
                <label htmlFor="communication">Communication Rating: {data.communication}</label>
                <input
                  required
                  value={data.communication}
                  type='range'
                  id='communication'
                  onChange={(e) => setData({...data, communication: +(e.target.value)})}
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
                  onChange={(e) => setData({...data, total_rating: +(e.target.value)})}
                />
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
