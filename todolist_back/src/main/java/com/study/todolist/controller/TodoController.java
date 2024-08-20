package com.study.todolist.controller;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqAddTodoDto dto) {
        int successCount = todoService.addTodo(dto);
        return ResponseEntity.created(null).body(successCount); // created: 201
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getAll() {
        log.info("getAll 호출");
        return ResponseEntity.ok().body(todoService.getTodo());
    }

    @GetMapping("/todo/counts")
    public ResponseEntity<?> getCounts() {
        return ResponseEntity.ok().body(todoService.getTodoCounts());
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> changeStatus(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.changeStatus(todoId));
    }

    /**
     * ReqModifyTodoDto
     * modifyTodoByTodoId(todoMapper)
     * modifyTodo(todoService)
     */

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modify(@RequestBody ReqModifyTodoDto reqModifyTodoDto) {
        log.info("{}", reqModifyTodoDto);
        return ResponseEntity.ok().body(todoService.modifyTodo(reqModifyTodoDto));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> delete(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

}
