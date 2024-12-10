# AI Training - Instruções

## Requisitos

- Python

## Instalação

1. Criação do ambiente virtual:
    ```
    python -m venv .venv
    ```

2. Ativação do ambiente virtual:
    ```
    .venv\Scripts\activate
    ```

3. Instalação das dependências:
    ```
    pip install -r requirements.txt
    ```

4. Baixar 'unsloth.Q8_0.gguf'
    ```
    https://huggingface.co/Larryareis/aitraining_Finetune_Llama3.2_v1/tree/main
    ```
    > **Pasta:** ..\lm-studio\models\Publisher\aitraining_Finetune_Llama3.2_v1\

5. Configurar Servidor LM Studio:
    ```
    Configurado na porta 1234, se alterar a porta no LM Studio, deve alterar em app.py
    ```
    ```
    CORS e Servir na Rede Local Habilitado
    ```

## Uso

Para iniciar o projeto, execute:

```
python app.py ou flask run
```
Para visualizar o projeto, abra o navegador e acesse:

```
https://localhost:5000
```

