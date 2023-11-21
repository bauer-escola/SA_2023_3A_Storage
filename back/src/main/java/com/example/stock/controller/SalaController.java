package com.example.stock.controller;

import com.example.stock.model.Sala;
import com.example.stock.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = {"http://localhost:5173","http://localhost:19006"})
@RestController

@RequestMapping("/salas")

public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @GetMapping
    public List<Sala> listarSalas() {
        return salaRepository.findAll();
    }

    @PostMapping
    public Sala criarSala(@RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @DeleteMapping("/{id_sala}")
    public ResponseEntity<String> deletarSala(@PathVariable Long id_sala) {
        if (salaRepository.existsById(id_sala)) {
            salaRepository.deleteById(id_sala);
            return ResponseEntity.ok("Sala deletada com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_sala}")
    public ResponseEntity<Sala> atualizarSala(@PathVariable Long id_sala, @RequestBody Sala salaAtualizada) {
        if (salaRepository.existsById(id_sala)) {
            Sala sala = salaRepository.findById(id_sala).get();
            sala.setNome_sala(salaAtualizada.getNome_sala());
            sala.setStatus_sala(salaAtualizada.getStatus_sala());

            Sala salaAtualizadaBD = salaRepository.save(sala);
            return ResponseEntity.ok(salaAtualizadaBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
