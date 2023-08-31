import Botao from '../Botao/Index'
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const times = [
    'Innovation & Technology',
    'Procurement',
    'Physical Supply Chain'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
}

const Formulario = () => {
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens = {times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario