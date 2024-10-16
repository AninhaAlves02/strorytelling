import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = https;//github.com/AninhaAlves02/strorytelling
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociis com mais usuarios',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome da redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Bilhoes de usuarios ativos',
            font: {
               color: getCSS('--secondary-color')
            }
        }
    }   
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
plotly.newplot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()