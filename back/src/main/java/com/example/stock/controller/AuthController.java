package com.example.stock.controller;

import com.example.stock.model.Usuario;
import com.example.stock.repository.UsuarioRepository;
import java.util.List;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class AuthController {
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public AuthController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/login")
    public Boolean login(@RequestBody Usuario usuario) {
        List<Usuario> usuarios = usuarioRepository.findAll();
        for (Usuario u : usuarios) {
            if (u.getNome_usuario().equals(usuario.getNome_usuario()) && u.getSenha().equals(usuario.getSenha())) {
                return true;
            }
        }
        return false;
    }

}