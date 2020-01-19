import React from 'react';
import currencyFormatter from 'currency-formatter';


export default props => {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, { locale: 'pt-BR' })}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button
                        className="btn btn-success"
                        onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}
                        type="button"
                        title="Efetivar">
                        <i className="pi pi-check"></i>
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}
                        type="button"
                        title="Cancelar">
                        <i className="pi pi-times"></i>
                    </button>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={e => props.deleteAction(lancamento)}
                        title="Deletar">
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}