import React, {FormEvent, useEffect, useState} from 'react'
import * as Styles from '../../assets/style';
import WelcomeTitle from './WelcomeTitle';
import axios from 'axios';
import {SubmitButton} from "../ui-kits/SubmitButton";
import {ShowResults} from "../ui-kits/ShowResults";
import {Algorithm} from '../ui-kits/types';

const SERVER_URL = 'https://muhasensei.loca.lt/';

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

    const [predictions, setPredictions] = useState({
        forest: -1,
        gradient: -1,
        keras: -1,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setPredictions({
            forest: -1,
            gradient: -1,
            keras: -1,
        });
    }, [data]);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('')
        const requests = [
            axios.post(`${SERVER_URL}predict/gradient`, data),
            axios.post(`${SERVER_URL}predict/forest`, data),
            axios.post(`${SERVER_URL}predict/keras`, data)
        ];
        Promise.all(requests)
            .then(response => {
                const predictedValues = response.map((el) => +el.data.prediction.toString().replace(/[[\]']+/g, ''))
                setPredictions({
                    gradient: predictedValues[0],
                    forest: predictedValues[1],
                    keras: predictedValues[2] > 80 ? 1 : 0
                })
            })
            .catch(error => {
                console.log(error)
                setError(error)
            }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <>
            <WelcomeTitle/>
            <Styles.Form>
                <Styles.InputGroup>
                    <Styles.InputWrapper>
                        <label htmlFor="salary">Salary</label>
                        <Styles.Select id='salary' value={data.salary}
                                       onChange={(e) => setData({...data, salary: +e.target.value})}>
                            <option value={0.1}>Low</option>
                            <option value={0.3}>Average</option>
                            <option value={0.5}>High</option>
                        </Styles.Select>
                    </Styles.InputWrapper>
                    <Styles.InputWrapper>
                        <label htmlFor="projects">Projects/tasks completed:</label>
                        <input
                            required
                            value={data.projects}
                            inputMode='numeric'
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
                        Object.entries(predictions).map((pred) => {
                            if (pred[1] >= 0) {
                                return <ShowResults key={pred[0]} prediction={pred[1]}
                                                    algorithm={pred[0] as Algorithm}/>
                            }
                            return <p key={pred[0]}></p>
                        })
                    }
                </Styles.Results>
                {
                    error && <Styles.ResultsText promotion='fail'>
                        {error}
                  </Styles.ResultsText>
                }
                <SubmitButton
                    label='Get results'
                    loading={loading}
                    handleSubmit={handleSubmit}
                />
            </Styles.Form>
        </>
    )
}

export default Form
