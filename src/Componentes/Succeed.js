export default function Succeed({ tiltle, selectseat }) {
    return (
        <div>
            <h1>Pedido feito com sucesso</h1>
            <div className="container-filme">
                <h2>Filme e sessão</h2>
                <h3>{tiltle}</h3>
                {selectseat.map((element) => <h3>Assento {element}</h3>)}
            </div>

        </div>
    )
}