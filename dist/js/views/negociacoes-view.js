import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tboby>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formataData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tboby>
            </table>
        `;
    }
    formataData(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
