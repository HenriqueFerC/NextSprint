"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {
  return (
    <>
  <body>
	
    <nav class="caixa1">
     	<div class="conteudo-titulo">
     		<span class="titulo"><a href="">EQUIPE PORTO CHAMADOS</a>             </span>
        <p>
        <Link href="/chamado" id="linkChamado">ABRIR CHAMADO</Link>
        </p>
     	</div>
    </nav>

	  <div id="cards">
		  <section class="card">
			  <Image src="/img/fusco.jpg" width={720} height={580} class="img-card" alt="Foto do Victor Fusco"></Image>
			  <figcaption>
			  Victor Fusco Martins - RM552399</figcaption>		
		  </section>  

		  <section class="card">
			  <Image src="/img/lucas.jpeg" width={720} height={580} class="img-card" alt="Foto do Lucas"></Image>
			  <figcaption>
			  Lucas de Lavor Andrade - RM552426
			  </figcaption>		
		  </section>  
		
		
		  <section class="card">
			  <Image src="/img/matheus.jpg" width={720} height={580} class="img-card" alt="Foto do Matheus"></Image>
			  <figcaption>
			  Matheus da Silva Ferreira - RM552431
			  </figcaption>			
		  </section>    

		  <section class="card">
			  <Image src="/img/henrique.jpeg" width={720} height={580} class="img-card" alt="Foto do Henrique"></Image>
			  <figcaption>
				  Henrique Ferreira Cardoso - RM552325	
			  </figcaption>			
		  </section>   
		
	  </div>


    <div class="container">
     	<h1 class="texto-conteudo">Desafio</h1>
     	<p>A Porto Seguro, uma empresa reconhecida por sua inovação e compromisso com a excelência em serviços, lançou um desafio ambicioso: desenvolver um sistema 100% digital que simplificasse a escolha do modal de maneira eficiente e incorporasse um cálculo mais detalhado, eliminando qualquer interferência humana no processo.</p>

		  <p>Este desafio surge em um contexto em que a logística e o transporte estão evoluindo rapidamente, impulsionados por avanços tecnológicos e mudanças nas demandas do mercado. A Porto Seguro está empenhada em liderar essa transformação, oferecendo aos seus clientes uma experiência mais ágil, precisa e personalizada.</p>

		  <h1 class="texto-conteudo">Solução</h1>
		  <p>
      solução proposta para o desafio da Porto Seguro envolve a criação de uma plataforma web totalmente digital, projetada para simplificar o processo de escolha do modal de maneira eficaz e sem intervenção humana. A plataforma oferece uma abordagem intuitiva e eficiente, permitindo que os clientes acessem facilmente o serviço de guincho quando necessário.		  
      </p>

		  <p>
      O processo começa com um formulário simples, acessível por meio da plataforma web. Neste formulário, os clientes inserem informações essenciais, como localização atual, placa do veículo, modelo do veículo, nome do motorista, e outros. Esse formulário serve como base para o sistema realizar cálculos detalhados e fornecer recomendações precisas.		  
      </p>

		  <p>
      Após o preenchimento do formulário, o cliente simplesmente clica em "Abrir Chamado". Neste momento, o sistema entra em ação automaticamente, processando os dados fornecidos e utilizando algoritmos avançados para determinar o modal mais adequado. No contexto do serviço de guincho, a plataforma identifica o guincho mais próximo e apropriado para atender às necessidades específicas do cliente.		  
      </p>
		
		  <p>	
      Uma vez que o guincho ideal é selecionado, o sistema automatizado realiza o chamado para o motorista do guincho correspondente. Esse processo ocorre em tempo real, proporcionando uma resposta rápida e eficiente para o cliente. Além disso, a comunicação entre a plataforma e o motorista do guincho é contínua, permitindo uma coordenação eficaz e transparente durante todo o processo.		  
      </p>
    </div>

  </body>
    </>
  );
}
