package com.example.stock.controller;

import com.example.stock.model.Categoria;
import com.example.stock.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173","http://localhost:19006"})
@RestController

@RequestMapping("/categorias")

public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping
    public List<Categoria> listarCategorias() {
        return categoriaRepository.findAll();
    }

    @PostMapping
    public Categoria criarCategoria(@RequestBody Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @DeleteMapping("/{id_categoria}")
    public ResponseEntity<String> deletarCategoria(@PathVariable Long id_categoria) {
        if (categoriaRepository.existsById(id_categoria)) {
            categoriaRepository.deleteById(id_categoria);
            return ResponseEntity.ok("Categoria deletada com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_categoria}")
    public ResponseEntity<Categoria> atualizarCategoria(@PathVariable Long id_categoria, @RequestBody Categoria categoriaAtualizada) {
        if (categoriaRepository.existsById(id_categoria)) {
            Categoria categoria = categoriaRepository.findById(id_categoria).get();
            categoria.setNome_categoria(categoriaAtualizada.getNome_categoria());

            Categoria categoriaAtualizadaBD = categoriaRepository.save(categoria);
            return ResponseEntity.ok(categoriaAtualizadaBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
