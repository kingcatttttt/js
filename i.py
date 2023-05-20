from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/api/chatgpt', methods=['POST'])
def chatgpt():
    input_text = request.json['text']
    response = openai.Completion.create(
        engine='davinci',
        prompt=input_text,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return jsonify(response.choices[0].text)

if __name__ == '__main__':
    app.run(debug=True)
