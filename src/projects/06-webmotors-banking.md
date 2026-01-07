---
title: Integração Core Banking Santander
summary: Aumento de 25% na conversão com simulação de crédito assíncrona em Golang.
tags: Webmotors, Santander, Golang, mTLS, SQS
---

## Oportunidade
Alta fricção no funil de vendas; o usuário abandonava o portal para simular crédito em sites externos.

## Solução
Integração segura via mTLS com o Core Banking. Utilização de **Golang** para o motor de simulação e **Amazon SQS** para gestão assíncrona.

## Trade-off
Decisão por **Processamento Assíncrono**. O feedback é dado em etapas, evitando o bloqueio da interface (UI) durante as pesadas validações bancárias.

## Resultados
*   **+25%** na conversão de propostas de financiamento.
*   Segurança reforçada com mTLS.
