package br.org.generation.geracaoeco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.geracaoeco.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository<Tema,Long>{

    public List <Tema> findAllByDescricaoContainingIgnoreCase (String descricao);
}