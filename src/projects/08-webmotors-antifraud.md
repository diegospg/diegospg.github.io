---
title: Prevenção de Fraude (Visa Cybersource)
summary: Redução do SLA de 48h para 2h e corte de 75% no esforço manual.
tags: Webmotors, Security, Visa Cybersource, Microservices, C#
---

## Oportunidade
Análise de risco manual demorada (48h), causando perdas operacionais e insatisfação do cliente.

## Solução
Implementação do motor de regras **Visa Cybersource** integrado ao fluxo de publicação em **C#** via microserviços na AWS.

### Trade-off
Modelo **"Post-Auth Review"**. Autorizamos o pagamento e analisamos o risco em background, aceitando um risco marginal de chargeback para garantir a entrega imediata do serviço.

## Resultados
*   Redução do SLA de **48h para 2h**.
*   Corte de **75%** no esforço manual de reembolso.
