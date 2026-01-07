---
title: Migração SQL Server para AWS Cloud
summary: Redução de 25% no TCO e +35% de performance com refatoração para .NET Core e ECS.
tags: Linktou, AWS RDS, Docker, ECS, .NET Core
---

## Desafio
Silos de dados on-premise limitavam a escalabilidade e geravam latência excessiva em aplicações críticas.

## Solução
Migração para AWS RDS com replicação multi-AZ. Refatoração da camada de aplicação em **C# (.NET Core)** e encapsulamento em containers **Docker** orquestrados por **Amazon ECS**.

### Trade-off
Optamos pelo **Replatforming (Refatoração)** em vez do Lift & Shift. O tempo de entrega foi maior, mas eliminamos custos de licenciamento legado e garantimos portabilidade futura.

## Resultados
*   **+35%** em performance de leitura.
*   **-25%** nos custos de manutenção (TCO).
