package com.example.stock.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter

public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_produto; 
    
    private String codigo_produto;

    private String nome_produto;
    private String comentario_produto;
    private String estado_produto;
    private String nome_usuario;
    private String sala;
    private String categoria;

    // @ManyToOne(fetch = FetchType.EAGER)
    // private Usuario usuario;
  
    // @ManyToOne(optional = true)
    // @JoinColumn(name = "sala_id", nullable = true)
    // private Sala sala;
}
