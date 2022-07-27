import React, { useEffect, useState } from 'react'
import { queData } from '../../Data/QueData'
import Accordion from 'react-bootstrap/Accordion';
import { Controller, useForm } from "react-hook-form";
import { ISubDataType, TResult } from '../../Models/Model';
import { Header } from '../Header/Header';
import "./Questions.css"


export const QuestionComp: React.FC = () => {

    const [marks, setMarks] = useState<number>()
    const [ansStatus, setAnsStatus] = useState<string[]>([])
    const [checkBoxMarks,setCheckBoxMarks]=useState<number>(0)
    const [wrongCheckBoxMarks,setWrongCheckBoxMarks]=useState<number>(0)

    const [flag, setFlag] = useState(false)

    const { register, handleSubmit, control, formState: { errors } } = useForm<any>({
        defaultValues: {
        }
    });

    const checkAnswers = (ans: string[]) => {
        const { questions } = queData
        // const demoAns = JSON.stringify(ans)
        //correct answers
        const answers = questions.filter((e: ISubDataType, index) => {
            if (JSON.stringify(ans[index]) === "null" || ans[index].length === 0 || JSON.stringify(ans
            [index]) === "false") {
                setAnsStatus((preVal) => { return preVal.concat("skipped") })
            } else if (JSON.stringify(e.answer) === JSON.stringify(ans[index])) {
                setAnsStatus((preVal) => { return preVal.concat("rightAnswer") })
            }
            else  if (e.answer?.toString().includes(ans[index])) {
                setAnsStatus((preVal) => { return preVal.concat("addAnotherOption") })
            }
            else {
                setAnsStatus((preVal) => { return preVal.concat("wrongAnswer")})
            }
            
            if (e.type ==="radioQue"){
                return ans[index] === e.answer.toString()
            }
            else{
                if (ans[index].length===0){
                    return false
                }
                else if (!e.answer.toString().includes(ans[index].toString())){
                    console.log("wrong")
                    setWrongCheckBoxMarks((preVal) => preVal+1)
                }
                if (e.answer.toString().includes(ans[index].toString())){
                    const matchOptions = e.answer.filter((option) => {
                        return ans[index].toString().includes(option)
                    })
                    const singleOptionMark = parseFloat((1 / e.answer.length).toFixed(2))
                    // if(singleOptionMark!==1){
                    //     setAnsStatus((preVal) => { return preVal.concat("skipped") })
                    //     fruits.splice(1, 1, "Lemon");
                    // }
                    
                    let loopDefaultValue = 0
                    for (let i = 0.00; i < matchOptions.length; i++) {
                        loopDefaultValue = loopDefaultValue + singleOptionMark
                    }
                    setCheckBoxMarks((preVal)=>preVal+loopDefaultValue)

                    // return e.answer.toString().includes(ans[index].toString())
                }
            }
        })
        console.log("answers",answers)
        

        // const givenAnswers = wrongAnswers.length - skipQuestions.length
        const givenAnswers = ans.filter((e: string |string[] | boolean) => {
            return e !== null && e !== false && typeof e === "string"
        })
        console.log("givenAnswers",givenAnswers)

        //ans that didn't answered
        const skipQuestions = ans.filter((e: any) => {
            return e === null || e === false || e.length === 0
        })

        const negativeMarking = (givenAnswers.length- answers.length) * 1.25

        const result = givenAnswers.length - negativeMarking
        setMarks(result)
    }

    const onSubmit = (data: TResult) => {
        setCheckBoxMarks(0)
        setWrongCheckBoxMarks(0)
        setAnsStatus([])
        const array = Object.keys(data).map(function (key) {
            return data[key];
        });
        setFlag(true)
        checkAnswers(array)
    }

    return (
        <>
            <Header marks={marks} flag={flag} checkBoxMarks={checkBoxMarks} wrongCheckBoxMarks={wrongCheckBoxMarks*1.25}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Accordion defaultActiveKey="1">
                    {/* <ul>  */}
                    {queData.questions.map((e, index: number) => {
                        // <li className='liBullet'>
                        return <Accordion.Item key={e.id} eventKey={e.id}>
                            <Accordion.Button className={ansStatus && ansStatus[index]}>{e.que}
                                {errors[e.queName] && <span className="text-danger"><div className='bullet'></div></span>}<br />
                            </Accordion.Button>
                            <Accordion.Body>
                                {e.type === "radioQue" ? <Controller
                                    name={e.queName}
                                    control={control}
                                    render={({ field }) => <>
                                        <ol>
                                            {e.options.map((a, index) => {
                                                return <li key={`key${e.id}${index}`}>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" id={`inlineRadio${e.id}${index}`} type="radio"  {...register(e.queName)} value={a} />
                                                        <label className="form-check-label" htmlFor={`inlineRadio${e.id}${index}`}>{a}</label>
                                                    </div>
                                                </li>
                                            })}
                                        </ol>
                                    </>}
                                /> : <>
                                    <Controller name={e.queName} control={control} render={() => <>
                                        {e.options.map((a, index) => {
                                            return <div key={`key${e.id}${index}`} className="form-check form-check-inline">
                                                <input className="form-check-input" {...register(e.queName)} type="checkbox" id={`question${e.id}${index}`} value={a} />
                                                <label className="form-check-label" htmlFor={`question${e.id}${index}`}>{a}</label>
                                            </div>
                                        })}

                                    </>}
                                    /><br />
                                </>
                                }
                                {errors[e.queName] && <span className="text-danger">Please Answer this question</span>}

                            </Accordion.Body>
                        </Accordion.Item>
                        // </li>
                    })}
                    {/* </ul> */}
                </Accordion>
                <button type='submit' className="btn btn-primary my-5">Submit Answers</button>
            </form>
        </>
    )
}
