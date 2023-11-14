from flask import Flask,jsonify,request
from flask_cors import CORS
from bd import Chamado

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)

@app.route('/chamados',methods=['GET'])
def chamados():
    return jsonify(Chamado)



@app.route('/cadastro',methods=['POST'])
def cadastrar_chamados():
    global id_counter
    nome = request.form.get('nome')
    placa = request.form.get('placa')
    veiculo = request.form.get('veiculo')
    local = request.form.get('local')
    descricao = request.form.get('descricao')

    dados = {
        'id': id_counter,
        'nome': nome,
        'placa': placa,
        'veiculo': veiculo,
        'local': local,
        'descricao': descricao
    }

    Chamado.append(dados)
    id_counter += 1
    return "Cadastrado com sucesso!"

id_counter = max(chamado['id'] for chamado in Chamado) + 1
app.run(port=1808)

