payload_pagamento = {
  "id_transacao": "tx_99823",
  "cliente": "Marcos Silva",
  "valor_total": 150.00,
  "moeda": "BRL"
  # Note que a chave "cupom_desconto" não veio neste envio.
}

nome_cliente = payload_pagamento["cliente"]
print(nome_cliente)

cupom = payload_pagamento.get("cupom_desconto", "NENHUM")
print(cupom)

# forma 1 colchetes
payload_pagamento["status_servidor"] = "Processado com sucesso"
print(payload_pagamento)

# forma 2 update()
payload_pagamento.update({"status_servidor": "Processado com sucesso"})
print(payload_pagamento)

# forma 3 setdefault()
payload_pagamento.setdefault('status_servidor', "Processado com sucesso")
print(payload_pagamento)