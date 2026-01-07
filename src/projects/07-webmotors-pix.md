---
title: Implementação Estratégica do PIX
summary: Adoção imediata de 40% e liquidez instantânea com arquitetura Event-Driven.
tags: Webmotors, PIX, C#, Event-Driven, NetSuite
---

## Oportunidade
Necessidade de reduzir dependência de boletos (baixa liquidez) e taxas de cartão.

## Solução
Jornada de pagamento PIX integrada ao checkout e faturamento no NetSuite, utilizando **C#** e arquitetura baseada em eventos (**Event-Driven**).

## Trade-off
Foco em **Idempotência**. Implementamos travas rigorosas na cadeia de eventos para evitar bitributação ou liberações duplicadas em cenários de instabilidade de rede.

## Resultados
*   **40% de adoção** já no primeiro mês.
*   Liquidez imediata para a companhia.
