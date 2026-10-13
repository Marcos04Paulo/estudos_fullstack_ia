nomes_sujos = ["  mArcos ", "jOao", " MARIA  ", "  aNa"]
nomes_limpos_for = []
# 1. O metodo tradicional
for nome_individual in nomes_sujos:
  # Primeiro , limpamos o dado e guardamos em uma variavel
  nome_tratado = nome_individual.strip().capitalize()

  # Depois, apenas adicionamos  à lista (sem printar a ação)
  nomes_limpos_for.append(nome_tratado)

# Imprimimos a lista pronta no final
print("O resultado do FOR:", nomes_limpos_for)

# 2. A engenharia pythonica (list comprehension)
# Lê-se: "Limpe e capitalize o 'nome' dentro de 'nomes_sujos'"
nomes_limpos_comprehension = [nome.strip().capitalize() for nome in nomes_sujos]
print("Resultado da Comprehension:", nomes_limpos_comprehension)