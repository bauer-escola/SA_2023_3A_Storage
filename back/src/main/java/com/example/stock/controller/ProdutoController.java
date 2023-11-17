package com.example.stock.controller;

import com.example.stock.model.Produto;
import com.example.stock.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.EmptyResultDataAccessException;

@CrossOrigin(origins = {"http://localhost:5173","http://localhost:19006"}) // Endereco do front app e web
@RestController

@RequestMapping("/produtos")

public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    @PostMapping
    public Produto criarProduto(@RequestBody Produto produto) {
        return produtoRepository.save(produto);
    }

    @DeleteMapping("/{id_produto}")
    public ResponseEntity<String> deletarProduto(@PathVariable Long id_produto) {
        try {
            produtoRepository.deleteById(id_produto);
            return ResponseEntity.ok("produto deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_produto}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable Long id_produto, @RequestBody Produto produtoAtualizado) {
        if (produtoRepository.existsById(id_produto)) {
            Produto produto = produtoRepository.findById(id_produto).get();
            produto.setCodigo_produto(produtoAtualizado.getCodigo_produto());
            produto.setNome_produto(produtoAtualizado.getNome_produto());
            produto.setComentario_produto(produtoAtualizado.getComentario_produto());
            produto.setEstado_produto(produtoAtualizado.getEstado_produto());
            produto.setNome_usuario(produtoAtualizado.getNome_usuario());
            produto.setSala(produtoAtualizado.getSala());
            produto.setCategoria(produtoAtualizado.getCategoria());

            Produto produtoAtualizadoBD = produtoRepository.save(produto);
            return ResponseEntity.ok(produtoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
