package br.org.generation.geracaoeco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.geracaoeco.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {

public List<Postagem> findAllByTextoContainingIgnoreCase( String texto);
}
