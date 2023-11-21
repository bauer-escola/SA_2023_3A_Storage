package com.example.stock.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter

public class Sala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_sala;
    
    private String nome_sala;
    private Boolean status_sala;
}
