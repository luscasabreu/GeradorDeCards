import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const times = [
    'Supply Chain Improvement',
    'IT BH',
    'IT ATN',
    'IT MVV'
]

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do hero</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens = {times}/>
            </form>
        </section>
    )
}

export default Formulario