package com.example.stock.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;
    private String nome_usuario;
    private String sobrenome_usuario;
    private String email_usuario;
    private String senha_usuario;
    
}
