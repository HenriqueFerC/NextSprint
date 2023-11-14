import Image from 'next/image'
import './globals.css' 

export default function Notfound(){
    return(
        
        <body>
        <div>
                <h1>Página Não Encontrada!  Error 404!</h1>
           <section> 
                <Image src="/img/notfound.avif" alt="carro batida" width={700} height={500}></Image> 
           </section>      
        </div>
        </body>
        
    )
}