import { EndpointData, EndpointKey } from '@/src/types/endpoint';

export const ENDPOINTS_DATA: Record<EndpointKey, EndpointData> = {
  about: {
    id: 'about',
    path: '/about',
    description: 'Informações gerais, foco de atuação e perfil profissional',
    response: {
      name: "João Victor Moura Barbosa",
      role: "Back-end Engineer (Java & TypeScript)",
      location: "Esperança, PB - Brasil",
      education: "Análise e Desenvolvimento de Sistemas (Tecnólogo) - IFPB",
      certifications: [
        "AWS Certified Cloud Practitioner (CLF-C02)",
        "EF SET English Certificate (C1 Advanced)"
      ],
      focus: ["Java 21 / Spring Boot", "TypeScript / Node.js & NestJS", "Microservices & Distributed Systems"],
      lookingFor: "Backend Engineer Roles (Java / Spring Boot | TypeScript / Node.js)",
      status: "Open to Work / Available for Back-end Roles"
    }
  },
  experience: {
    id: 'experience',
    path: '/experience',
    description: 'Histórico profissional e responsabilidades técnicas',
    response: {
      company: "UOL - Universo Online",
      role: "Back-end Developer Intern",
      period: "May 2025 - Oct 2025",
      responsibilities: [
        "Desenvolvimento e manutenção de microsserviços em ambiente corporativo",
        "Criação de REST APIs robustas com Spring Boot e ecossistema Java",
        "Gerenciamento de containers e ambientes com Docker e Docker Compose",
        "Adoção rigorosa de versionamento com Git Flow e boas práticas de código"
      ]
    }
  },
  projects: {
    id: 'projects',
    path: '/projects',
    description: 'Projetos em destaque, cases técnicos e arquitetura de software',
    response: [
      {
        id: "event-manager",
        title: "EventManager",
        category: "Architecture Lab",
        context: "🔬 Lab de Estudo & Arquitetura",
        tagline: "Sistema Distribuído de Gestão de Eventos e Venda de Ingressos",
        architecture: "Hexagonal Architecture & Clean Architecture",
        stack: ["Java 21", "Spring Boot 3.4.3", "Spring Cloud Gateway", "Keycloak", "Kafka", "MongoDB", "Redis", "Docker"],
        highlights: [
          "API Gateway centralizado com Rate Limiting (Redis) e autenticação JWT via Keycloak",
          "Comunicação híbrida: REST para chamadas síncronas e Kafka para eventos assíncronos",
          "Ambiente 100% conteinerizado com Docker Compose"
        ],
        github: "https://github.com/0xJotave/EventManager"
      },
      {
        id: "beworke-payment-api",
        title: "Beworke Payment API",
        category: "Technical Challenge",
        context: "Case Técnico de Seleção",
        tagline: "API REST de Processamento de Pagamentos e Webhooks Idempotentes",
        architecture: "Layered Modular Architecture (Domain-driven)",
        stack: ["TypeScript", "Node.js (Express 5)", "Prisma ORM", "PostgreSQL", "Redis", "Zod", "Vitest", "Docker", "Swagger"],
        highlights: [
          "Garantia de idempotência no webhook com $transaction impedindo race conditions (409 Conflict)",
          "Cache de leitura com Redis e invalidação automática em mutations",
          "Suíte de 18 testes automatizados unitários e de integração com Vitest",
          "Documentação interativa Swagger/OpenAPI integradas"
        ],
        github: "https://github.com/0xJotave/beworke-payment-api"
      },
      {
        id: "pwnned",
        title: "PWNNED",
        category: "Architecture Lab",
        context: "🛡️ Projeto Pessoal / CyberSec",
        tagline: "Plataforma EdTech para Hacking Ético e CyberSecurity",
        architecture: "Hexagonal Architecture (Ports & Adapters)",
        stack: ["Java 21", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Docker"],
        highlights: [
          "Persistência poliglota isolando o domínio com regras puras de negócio",
          "Estratégia de caching com Redis para consultas de alta performance"
        ],
        github: "Private Repository"
      }
    ]
  },
  stack: {
    id: 'stack',
    path: '/stack',
    description: 'Competências técnicas, bancos de dados e infraestrutura',
    response: {
      coreLanguages: ["Java 21", "TypeScript", "SQL"],
      runtimesAndFrameworks: ["Spring Boot (Security, Data, Cloud)", "Node.js (Express 5)", "NestJS", "Prisma ORM"],
      architectureAndMessaging: ["Hexagonal (Ports & Adapters)", "Clean Architecture", "Microservices", "Apache Kafka", "RESTful APIs"],
      databasesAndCaching: ["PostgreSQL", "MongoDB", "Redis (Cache & Rate Limit)"],
      infrastructureAndTooling: ["Docker / Docker Compose", "AWS (CCP Certified)", "Keycloak (OAuth2/OIDC)", "Linux", "Git / Git Flow"]
    }
  },
  contact: {
    id: 'contact',
    path: '/contact',
    description: 'Canais de comunicação e redes profissionais',
    response: {
      github: "https://github.com/0xJotave",
      linkedin: "https://linkedin.com/in/0xjotave",
      email: "joaovmb15@gmail.com",
      portfolio: "https://0xjotave.me",
      status: "Open To Work"
    }
  }
};