package com.study.todolist.entity;

import com.study.todolist.dto.response.todo.RespTodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder // builder안에 AllArgsConstructor 때문에 NoArgsConstructor 사용을 못해서 둘 다 사용
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Todo {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private LocalDateTime todoDateTime; // 컬럼명

    public RespTodoDto toTodoDto() {
        return RespTodoDto.builder()
                .todoId(todoId)
                .userId(userId)
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .status(status)
                .todoDateTime(todoDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))) // String 타입으로 바꾸기
                .build();
    }
}
