from flask import Flask, render_template, request, jsonify
import requests  # Adicione esta importação

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message')
    instruction = "Você é um assistente personal trainer que me ajuda com respostas sobre exercícios físicos"  # Adicione a instruction aqui

    # Enviar a mensagem para o servidor do LM Studio no endpoint correto
    response = requests.post('http://localhost:1234/v1/chat/completions', json={
        'messages': [
            {'role': 'system', 'content': instruction},
            {'role': 'user', 'content': user_message}
        ],
        'temperature': 0.7
    })
    
    # Verifica se a resposta foi bem-sucedida
    if response.status_code == 200:
        ai_response = response.json().get('choices', [{}])[0].get('message', {}).get('content', 'Desculpe, não consegui obter uma resposta.')
    else:
        ai_response = 'Desculpe, não consegui obter uma resposta.'

    return jsonify({'response': ai_response})

if __name__ == '__main__':
    app.run(debug=True)
