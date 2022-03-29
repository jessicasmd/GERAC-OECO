package br.org.generation.geracaoeco.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.geracaoeco.model.Postagem;
import br.org.generation.geracaoeco.repository.PostagemRepository;

@RestController
@RequestMapping("/postagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostagemController {

@Autowired
private PostagemRepository postagemRepository;

@GetMapping
public ResponseEntity<List<Postagem>> getAll(){
	return ResponseEntity.ok(postagemRepository.findAll());
}

@GetMapping("/{id}")
public ResponseEntity <Postagem> getById(@PathVariable Long id){
	return postagemRepository.findById(id)
	.map(resposta -> ResponseEntity.ok(resposta))
	.orElse(ResponseEntity.notFound().build());
}

@GetMapping("/texto/{texto}")
public ResponseEntity <List<Postagem>> getByTexto(@PathVariable String texto){
	return ResponseEntity.ok(postagemRepository.findAllByTextoContainingIgnoreCase(texto));
}

@PostMapping
public ResponseEntity <Postagem> postPostagem(@Valid @RequestBody Postagem postagem){
	return ResponseEntity.status(HttpStatus.CREATED).body(postagemRepository.save(postagem));
}

@PutMapping
public ResponseEntity <Postagem> putPostagem(@Valid @RequestBody Postagem postagem){
	return postagemRepository.findById(postagem.getId())
			.map(resposta -> ResponseEntity.ok(postagemRepository.save(postagem)))
			.orElse(ResponseEntity.notFound().build());
}

@DeleteMapping("/{id}")
public ResponseEntity <?> deletePostagem(@PathVariable Long id){
	return postagemRepository.findById(id)
	.map(resposta ->{
		postagemRepository.deleteById(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	})
	.orElse(ResponseEntity.notFound().build());
	}
}
