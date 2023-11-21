package com.example.stock.controller;

import com.example.stock.model.Requisitar;
import com.example.stock.repository.RequisitarRepository;
// other imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.EmptyResultDataAccessException;

@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:19006" }) // Endereco do front app e web
@RestController

@RequestMapping("/requisitar")

public class RequisitarController {
    @Autowired
    private RequisitarRepository requisitarRepository;

    @GetMapping
    public List<Requisitar> listarProdutos() {
        return requisitarRepository.findAll();
    }

    @PostMapping
    public Requisitar criarRequisitar(@RequestBody Requisitar requisitar) {
        return requisitarRepository.save(requisitar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarRequisitar(@PathVariable Long id) {
        try {
            requisitarRepository.deleteById(id);
            return ResponseEntity.ok("requisitar deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Requisitar> atualizarRequisitar(@PathVariable Long id,
            @RequestBody Requisitar requisitarAtualizado) {
        if (requisitarRepository.existsById(id)) {
            Requisitar requisitar = requisitarRepository.findById(id).get();
            requisitar.setNome(requisitarAtualizado.getNome());
            requisitar.setAtividade(requisitarAtualizado.getAtividade());
            requisitar.setCategoria(requisitarAtualizado.getCategoria());
            requisitar.setSala(requisitarAtualizado.getSala());
            requisitar.setObservacao(requisitarAtualizado.getObservacao());

            Requisitar requisitarAtualizadoBD = requisitarRepository.save(requisitar);
            return ResponseEntity.ok(requisitarAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
