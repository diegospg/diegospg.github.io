---
title: Integração SAP & WMS de Missão Crítica
summary: Sincronização de estoque com 99,9% de acuracidade usando microserviços e AWS SQS.
tags: Linktou, C# .NET, AWS SQS, SAP, Microservices
---

## Oportunidade
Falta de sincronia em tempo real entre o faturamento e a operação de armazém, causando divergências de estoque.

## Solução
Desenvolvimento de um Middleware em **C# (.NET Framework)** utilizando microserviços e mensageria (**AWS SQS**) para garantir resiliência nas transações.

## Trade-off
Implementação de **Consistência Eventual**. Aceitamos um atraso milimétrico na sincronia em troca de uma operação que nunca trava, mesmo se o SAP oscilar.

## Resultados
*   **99.9%** de acuracidade no estoque.
*   **-30%** no tempo de expedição.
*   Alta resiliência operacional.

## Fluxo de Integração

```mermaid
graph LR
    subgraph WMS ["WMS Lynchros"]
        A[Coletor de Dados] -->|Separação/Picking| B[Sistema WMS]
        B -->|Movimentação Concluída| C{Exportar?}
    end

    subgraph Middleware ["Middleware de Integração"]
        C -->|JSON| D[API Middleware]
        D -->|Queue| E[AWS SQS - StockMov]
        E -->|Trigger| F[Lambda Function]
    end

    subgraph SAP ["ERP SAP"]
        F -->|RFC Call| G[SAP BAPI_GOODSMVT_CREATE]
        G -->|Success/Error| H[(SAP HANA DB)]
        G -.->|Return Status| D
    end
```
```
