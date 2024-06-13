import './App.css'
import Card from './components/Card/Card'

function App() {

  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }
  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }
  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }
  // const itens = [item1, item2, item3]

  // Promise significa um processo executado ao mesmo tempo
  // Esse processo pode levar um tempo, então precisamos aguardá-lo
  // Assim que processo terminar, a variável 'response' receberá a reposta da API
  // Fetch é o pacote que usamos para acessar o conteúdo de URLs que estão em algum lugar da internet

  const itens = [] //lista vazia para o código não 'quebrar'

  async function loadData(){
    const apiUrl = 'https://rickandmortyapi.com/api/character' 

    const response = await fetch(apiUrl) //requisição da API usando fetch

    const body = await response.json()

    console.log(body)

  }

  loadData();
  

  return (
    <>
    <div className="cards"> 
    {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}


    </div>


    </>

  )

}

export default App