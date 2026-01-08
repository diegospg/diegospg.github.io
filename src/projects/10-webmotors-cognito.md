---
title: Modernização de Identidade: Refatoração com AWS Cognito [Webmotors]
summary: Refatoração completa do fluxo de identidade e acesso utilizando AWS Cognito, implementando MFA e OAuth 2.0.
tags: AWS Cognito, OAuth 2.0, Security, MFA
---

### Oportunidade
Sistema de autenticação legado com alto custo de manutenção, limitações para escalabilidade em picos de tráfego e dificuldade para implementar padrões modernos de segurança (como MFA) de forma nativa.

### Solução
Refatoração completa do fluxo de identidade e acesso utilizando AWS Cognito (User Pools). Implementação de protocolos OAuth 2.0 e OIDC, permitindo uma gestão centralizada de sessões e integração facilitada entre o ecossistema de microserviços.

### Trade-off
Escolha pelo modelo de Serviço Gerenciado vs. Desenvolvimento Interno. Decidimos pela migração para o Cognito para reduzir o esforço de engenharia com segurança básica e conformidade (GDPR/LGPD), aceitando as limitações de customização visual da interface nativa em troca de uma robustez de nível bancário.

### Resultados
Implementação nativa de MFA (Multi-Factor Authentication), redução de 24% nos custos de infraestrutura dedicada à identidade e eliminação de vulnerabilidades em fluxos de password reset e signup.
