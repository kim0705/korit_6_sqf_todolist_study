import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/Dashboard/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtom';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ yearList, setYearList ] = useState([]);
    const [ monthList, setMonthList ] = useState([]);
    const [ todolistAll ] = useRecoilState(todolistAtom);

    useEffect(() => {
        const preYears = todolistAll.todolist.map(todo => todo.todoDateTime.slice(0, 4));
    }, [todolistAll]);

    return (
        <div>
            <PageAnimationLayout isShow={isShow} setShow={setShow}>
                <MainContainer>
                    <BackButtonTop setShow={setShow} />
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                </MainContainer>
            </PageAnimationLayout>
        </div>
    );
}

export default TodoAll;