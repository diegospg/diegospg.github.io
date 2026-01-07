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
*   **R$ 75 bi/ano** processados (TPV).
*   **Zero downtime** durante Black Friday.

## Fluxo e Arquitetura

```mermaid
graph TD
    subgraph Users ["Jornada do Usuário"]
        A[Cliente Webmotors] -->|Escolhe Veículo| B(Checkout)
        B -->|Pagamento via PIX| C{Gerar QR Code}
    end

    subgraph AWS ["AWS & Backend"]
        C -->|Request| D[API Gateway]
        D -->|Event| E[Lambda - PIX Service]
        E -->|Publish| F[SNS Topic: Transaction]
        F -->|Subscribe| G[SQS Queue]
        G -->|Process| H[Worker .NET Core]
        H <-->|Persist| I[(DynamoDB)]
    end

    subgraph Bank ["Integração Bancária"]
        H -->|PSP API| J[Banco Central / PSP]
        J -->|Webhook Status| D
    end
```
```
