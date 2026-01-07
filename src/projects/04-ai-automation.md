---
title: Automação de Atendimento com IA (Claude)
summary: Redução do TTR de 24h para 2h com integração da LLM Claude via AWS Lambda.
tags: Linktou, Webmotors, AI/LLM, Claude, Node.js, Serverless
---

## Oportunidade
Tempo médio de resposta inicial de 24 horas, sobrecarregando o suporte e degradando a experiência do cliente.

## Solução
Integração da LLM **Claude (Anthropic)** via API utilizando **Node.js** e **AWS Lambda** para triagem automática e resposta inteligente.

### Trade-off
Uso de **Arquitetura Serverless (Lambda)**. Escolha baseada na economia de custos em períodos de baixa demanda, aceitando o risco de cold start (mitigado com otimização do runtime).

## Resultados
*   **TTR (Time to Response)** reduzido de 24h para menos de 2h.
*   Triagem inteligente e escalável.
