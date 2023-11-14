'use client'
import React, { useState } from "react";
import Image from 'next/image';
import "./chamado.css"
import Link from 'next/link'

export default function CadastroChamado() {
    const [nome, setnome] = useState('');
    const [placa, setplaca] = useState('');
    const [veiculo, setveiculo] = useState('');
    const [local, setlocal] = useState('');
    const [descricao, setdescricao] = useState('');

    const cadastrarChamado = () => {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('placa', placa);
        formData.append('veiculo', veiculo);
        formData.append('local', local);
        formData.append('descricao', descricao);
        alert("Formulário preenchido com sucesso!");

        fetch("http://localhost:1808/cadastro", {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Erro ao cadastrar o produto:', error);
        });
    };

    return (
        <>
            <body>
                <article id="logo">
                    <div>
                        <Image src="/img/logonovo2.jpeg" width={400} height={45}></Image>
                    </div>
                </article>
                <div id="texto-principal">
                    <h2>Cadastro de Chamado</h2>
                </div>
                <form action="/cadastro">
                    <section id="container1">
                        <section id="coluna1">
                            <div>
                                <input type="text" placeholder="Coloque aqui o Nome" value={nome} onChange={(e) => setnome(e.target.value)} />
                                <input type="text" placeholder="Coloque aqui a Placa" value={placa} onChange={(e) => setplaca(e.target.value)} />
                                <input type="text" placeholder="Coloque aqui o tipo de Veiculo" value={veiculo} onChange={(e) => setveiculo(e.target.value)} />
                                <input type="text" placeholder="Coloque aqui o Local" value={local} onChange={(e) => setlocal(e.target.value)} />
                                <input type="text" placeholder="Coloque aqui a Descrição" value={descricao} onChange={(e) => setdescricao(e.target.value)} />
                                <button id="container-botao" className="submit" onClick={cadastrarChamado}><Link href="/api/tabela">Cadastrar Chamado</Link></button>
                            </div>
                        </section>        
                    </section>
                </form>
            </body>
        </>
    );
}
