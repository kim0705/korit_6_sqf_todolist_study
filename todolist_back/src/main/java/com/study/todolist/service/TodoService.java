package com.study.todolist.service;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.entity.Todo;
import com.study.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public int addTodo(ReqAddTodoDto dto) {

        return todoMapper.save(dto.toEntity());
    }

    public List<RespTodoDto> getTodo() {
        List<Todo> todoList = todoMapper.findAll();
        List<RespTodoDto> dtoList = new ArrayList<>();

        for(Todo todo : todoList) { // 가져온 리스트를 dto 타입으로 바꾸기
            dtoList.add(todo.toTodoDto());
        }

        return dtoList;
    }

    public RespTodoCountsDto getTodoCounts() {
        return todoMapper.getTodoCounts().toDto();
    }

    public int changeStatus(int todoId) {
        return todoMapper.changeStatus(todoId);
    }

    public int modifyTodo(ReqModifyTodoDto reqModifyTodoDto) {
        return todoMapper.modifyTodoByTodoId(reqModifyTodoDto.toEntity());
    }

    public int deleteTodo(int todoId) {
        return todoMapper.deleteByTodoId(todoId);
    }
}
