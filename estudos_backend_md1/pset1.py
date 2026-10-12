emails_capturados = ["marcos@ia.com", "joao@teste.com", "marcos@ia.com", "maria@tech.com", "joao@teste.com"]
coordenadas_evento = [40.7128, -74.0060]

meu_set = set(emails_capturados)
convert = tuple(coordenadas_evento)
banco_de_dados = {
  "evento": "Feira de IA",
  "cordenadas": convert,
  "emails_validos": meu_set
}
print(meu_set)
print(convert)
print(banco_de_dados)