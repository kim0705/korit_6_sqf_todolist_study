/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/Dashboard/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtom';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import { modifyTodoAtom, selectedCalendarTodoAtom } from '../../atoms/calendarAtoms';
import ConfirmButtonTop from '../../components/ConfirmButtonTop/ConfirmButtonTop';
import SubPageContainer from '../../components/SubPageContainer/SubPageContainer';

function TodoImportant(props) {
    const [isShow, setShow] = useState(true);
    const [todolistAll] = useRecoilState(todolistAtom);
    const [selectedTodo, setSelectedTodo] = useRecoilState(selectedCalendarTodoAtom);
    const [calendarData, setCalendarData] = useState({});
    const [modifyTodo, setModifyTodo] = useRecoilState(modifyTodoAtom);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    useEffect(() => {
        let preTodo = {
            ...(todolistAll.todolist.filter(todo =>
                todo.todoId === modifyTodo?.todoId)[0])
        };

        preTodo = {
            ...preTodo,
            todoDateTime: preTodo?.todoDateTime?.replaceAll(" ", "T")
        };
        
        const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo) || !modifyTodo?.title?.trim(); // JSON 문자열로 바꿔서 문자열 비교
        setSubmitButtonDisabled(disabled);
    }, [modifyTodo]);

    useEffect(() => {
        const obj = {
            "a": {
                "test1": 10,
                "test2": 20,
                "test3": 30,
                "test4": 40,
            },
            "b": {
                "test5": 50,
                "test6": 60,
                "test7": 70,
                "test8": 80,
            },
        }

        // console.log(Object.entries(obj));
        const objList = Object.entries(obj); // 객체를 배열로 만듬

        for (let o of objList) {
            const key = o[0];
            const value = Object.entries(o[1]);

            // console.log("key: " + key);
            // console.log("value: " + value);

            for (let e of value) {
                const key2 = e[0];
                const value2 = e[1];

                // console.log("key2: " + key2);
                // console.log("value2: " + value2);
            }
        }

    }, []);

    useEffect(() => {
        const tempCalendarData = {};

        for (let todo of todolistAll.todolist) {
            if(todo.status !== 1) {
                continue;
            }
            
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);
            const date = dateTime.slice(0, 10);

            if (!tempCalendarData[year]) {
                tempCalendarData[year] = {};
            }
            if (!tempCalendarData[year][month]) {
                tempCalendarData[year][month] = {};
            }
            if (!tempCalendarData[year][month][date]) {
                tempCalendarData[year][month][date] = [];
            }

            tempCalendarData[year][month][date].push(todo);
        }

        setCalendarData(tempCalendarData);

    }, [todolistAll]);

    const modifyCancel = () => {
        setSelectedTodo(0);
    }

    const modifySubmit = () => {
        console.log(modifyTodo);
        setSelectedTodo(0);
    }

    return (
        <div>
            <PageAnimationLayout isShow={isShow} setShow={setShow}>
                <SubPageContainer>
                    <div css={s.layout}>
                        {
                            selectedTodo === 0
                                ? <BackButtonTop setShow={setShow} />
                                : <ConfirmButtonTop onCancel={modifyCancel} onSubmit={modifySubmit} disabled={submitButtonDisabled} />
                        }
                        <PageTitle title={MENUS.important.title} color={MENUS.important.color} />
                        <TodoCalendar calendarData={calendarData} />
                        <RegisterTodoButton />
                    </div>
                </SubPageContainer>
            </PageAnimationLayout>
        </div>
    );
}

export default TodoImportant;