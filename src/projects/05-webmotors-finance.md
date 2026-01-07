---
title: Eficiência Financeira & Migração de Adquirentes
summary: Redução de 15% nos custos transacionais com refatoração do checkout e múltiplos gateways.
tags: Webmotors, Fintech, C#, REST APIs, Payments
---

## Oportunidade
Elevados custos transacionais (MDR) e taxas de antecipação que impactavam diretamente a margem líquida.

## Solução
Refatoração da camada de checkout em **C#** para suportar abstração de múltiplos gateways e roteamento inteligente via APIs REST.

### Trade-off
Construção de uma **Camada de Abstração interna** em vez de usar um hub pronto. Maior esforço inicial de engenharia em troca de independência total e taxa zero de intermediários.

## Resultados
*   **-15%** nos custos transacionais.
*   Otimização significativa do fluxo de caixa.
