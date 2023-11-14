'use client'
import React, { useEffect, useState } from "react";
import './tabela.css'
import Link from 'next/link'

export default function Chamados() {
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1808/chamados")
            .then((response) => response.json())
            .then((data) => {
                setChamados(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar os chamados:', error);
            });
    }, []);

    return (
        <div>
            <h1 id="id-chamados">Chamados</h1>
            <table id="container">
                <thead>
                    <tr id="alternado">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Placa</th>
                        <th>Veículo</th>
                        <th>Local</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map((chamado) => (
                        <tr key={chamado.id} id="alternado">
                            <td>{chamado.id}</td>
                            <td>{chamado.nome}</td>
                            <td>{chamado.placa}</td>
                            <td>{chamado.veiculo}</td>
                            <td>{chamado.local}</td>
                            <td>{chamado.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
