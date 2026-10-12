# 1. Importamos a ferramenta fastAPI
from fastapi import FastAPI
# Importamos a ferramenta de CORS do FastAPI
from fastapi.middleware.cors import CORSMiddleware
# 2. Inicializando o aplicativo (O nosso "garçom")
app = FastAPI()

# Configuramos o porteiro do servidor (O Middleware)
# Isso diz ao Python: "Aceite requisições vindo de qualquer origem, com qualquer método"
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"], # O asteritico significa "Permitir qualquer endereço"
  allow_credentials=True,
  allow_methods=["*"], # Permite get, post, put, delete
  allow_headers=["*"],
)

# 3. Criamos um "Rota" (O endereço que o frontend vai chamar)
# @app.get("/") significa que se alguém acessar a raiz do nosso servidor, esta função será executada.
@app.get("/")
def rota_principal():
  # Em Python, retornamos um dicionário (que será convertido automaticamente para JSON)
  return {"mensagem": "Servidor Python rodando com sucesso!", "status": "Ativo"}

@app.get("/ia")
def rota_ia():
  return {"IA": "Sistema de inteligencia artificial aguardando comando."}