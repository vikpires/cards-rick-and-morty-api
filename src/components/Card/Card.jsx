export default function Card(props) {
    const item = props.item //espaço para variáveis e funções
    return ( //Somente jsx - exibir os componentes
        <div className='card'>
            <h2>{item.name}</h2>
            <div className="tags">
                <div>Status: Vivo</div>
                <div>Espécie: Humana</div>
                <div>Origem: Terra C-137</div>
            </div>
            <img src={item.image}></img>
        </div>
    )
}
