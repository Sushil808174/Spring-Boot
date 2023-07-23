package com.skumar.restfull.webservices.todo;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    private int id;
    private String username;
    private String description;
    private LocalDate targetDate;
    private boolean done;
}
