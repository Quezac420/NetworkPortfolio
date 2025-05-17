// Technical Skills
export const technicalSkills = [
  {
    name: "Administration système",
    percentage: 90,
    color: "bg-red-500" // Couleur Deadpool
  },
  {
    name: "Administration réseau",
    percentage: 90,
    color: "bg-red-600" // Couleur Deadpool
  },
  {
    name: "Sécurité informatique",
    percentage: 85
  },
  {
    name: "Monitoring & Alerting",
    percentage: 85
  },
  {
    name: "Virtualisation & Conteneurisation",
    percentage: 80
  }
];

// Development Skills
export const developmentSkills = [
  {
    name: "Python",
    percentage: 80
  },
  {
    name: "Shell Script",
    percentage: 85
  },
  {
    name: "HTML/CSS",
    percentage: 70
  },
  {
    name: "SQL",
    percentage: 75
  }
];

// Certifications
export const certifications = [
  {
    title: "CCNA",
    issuer: "Cisco Certified Network Associate"
  },
  {
    title: "Stormshield Network Security",
    issuer: "Stormshield Certified Administrator"
  }
];

// Projects
export const projects = [
  {
    id: "reseau-entreprise",
    title: "Configuration d'un réseau d'entreprise",
    description: "Conception et implémentation d'une infrastructure réseau complète pour une PME, incluant la segmentation VLAN, le routage inter-VLAN et la mise en place de politiques de sécurité.",
    detailedDescription: `
      ## Objectif du projet

      Mettre en place une infrastructure réseau robuste, évolutive et sécurisée pour une entreprise de taille moyenne en pleine croissance.

      ## Réalisations

      - Audit complet de l'infrastructure existante et identification des points d'amélioration
      - Conception d'un nouveau schéma réseau avec redondance et haute disponibilité
      - Segmentation du réseau en VLANs distincts (Production, Administration, Invités, VoIP)
      - Mise en place du routage inter-VLAN avec QoS (Quality of Service)
      - Configuration de pare-feux et politiques de sécurité adaptées à chaque segment
      - Mise en œuvre d'un système de détection et prévention d'intrusion (IDS/IPS)
      - Documentation complète de l'infrastructure et formation des administrateurs

      ## Technologies utilisées

      - Équipements Cisco (routeurs, commutateurs, pare-feux)
      - Protocoles de routage dynamique (OSPF)
      - Techniques de redondance (HSRP, EtherChannel)
      - VLANs et 802.1Q
      - Stormshield Network Security
      - Port Security et 802.1X pour l'authentification
    `,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Cisco", "VLAN", "Sécurité"],
    link: "/project/reseau-entreprise"
  },
  {
    id: "surveillance-reseau",
    title: "Système de surveillance réseau",
    description: "Développement d'un système de monitoring pour surveiller les performances et détecter les anomalies sur un réseau, avec notifications en temps réel et tableau de bord interactif.",
    detailedDescription: `
      ## Objectif du projet

      Développer une solution de monitoring réseau complète permettant de visualiser les performances, détecter les anomalies et notifier les administrateurs en temps réel.

      ## Réalisations

      - Déploiement d'agents de surveillance sur l'ensemble de l'infrastructure
      - Développement de scripts de collecte de données personnalisés en Python
      - Configuration d'un système d'alerte multiniveau basé sur des seuils prédéfinis
      - Création de tableaux de bord Grafana pour visualiser les métriques clés
      - Intégration avec les systèmes de messagerie et d'incident management existants
      - Mise en place d'un système d'analyse prédictive pour anticiper les problèmes potentiels
      - Automatisation de la génération de rapports hebdomadaires et mensuels

      ## Technologies utilisées

      - Python pour les scripts de collecte et d'analyse
      - SNMP, Netflow pour la collecte de données
      - Prometheus comme base de données de métriques
      - Grafana pour les tableaux de bord
      - Alertmanager pour la gestion des alertes
      - API REST pour l'intégration avec d'autres systèmes
      - Docker pour le déploiement des composants
    `,
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Python", "SNMP", "Grafana"],
    link: "/project/surveillance-reseau"
  },
  {
    id: "solution-voip",
    title: "Déploiement d'une solution VoIP",
    description: "Installation et configuration d'un système de téléphonie IP basé sur Asterisk, incluant la mise en place d'un standard automatique et l'intégration avec l'infrastructure existante.",
    detailedDescription: `
      ## Objectif du projet

      Remplacer le système de téléphonie traditionnel par une solution VoIP moderne, flexible et économique basée sur Asterisk.

      ## Réalisations

      - Analyse des besoins téléphoniques spécifiques de chaque service de l'entreprise
      - Installation et configuration du serveur Asterisk sur une plateforme Linux
      - Mise en place d'un standard vocal interactif (IVR) personnalisé
      - Configuration des files d'attente et groupes d'appels selon les départements
      - Intégration avec l'annuaire LDAP existant pour la gestion des utilisateurs
      - Mise en place de trunks SIP pour la connexion avec les opérateurs téléphoniques
      - Configuration de la messagerie vocale avec notification par e-mail
      - Documentation du système et formation des utilisateurs finaux

      ## Technologies utilisées

      - Asterisk PBX
      - SIP, IAX2 et autres protocoles VoIP
      - FreePBX comme interface d'administration
      - Linux (Debian) comme système d'exploitation
      - Téléphones IP et softphones
      - Scripts personnalisés pour l'intégration avec les systèmes existants
      - VLAN dédié avec QoS pour le trafic VoIP
    `,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["VoIP", "Asterisk", "SIP"],
    link: "/project/solution-voip"
  },
  {
    id: "automatisation-sysadmin",
    title: "Automatisation des tâches sysadmin",
    description: "Création de scripts d'automatisation pour simplifier les tâches d'administration système récurrentes, incluant la sauvegarde, la gestion des utilisateurs et la surveillance des journaux.",
    detailedDescription: `
      ## Objectif du projet

      Automatiser les tâches d'administration système répétitives pour améliorer l'efficacité, réduire les erreurs humaines et permettre à l'équipe IT de se concentrer sur des projets à plus forte valeur ajoutée.

      ## Réalisations

      - Développement d'une bibliothèque de scripts Bash et Python pour les tâches courantes
      - Création de playbooks Ansible pour le déploiement et la configuration des serveurs
      - Mise en place d'un système de sauvegarde automatisé avec rotation et vérification d'intégrité
      - Développement d'un outil de gestion centralisée des utilisateurs et des droits d'accès
      - Automatisation de l'analyse des journaux système et génération de rapports
      - Configuration de jobs Cron pour l'exécution périodique des tâches de maintenance
      - Implémentation de tests automatisés pour vérifier l'état des services critiques
      - Documentation complète des outils et formation de l'équipe IT

      ## Technologies utilisées

      - Bash et Python pour les scripts d'automatisation
      - Ansible pour la gestion de configuration
      - Git pour le versionnement des scripts
      - Jenkins pour l'orchestration des tâches
      - Rsync et solutions de backup spécialisées
      - Outils d'analyse de logs (Logwatch, ELK Stack)
      - Cron et systemd pour la planification des tâches
    `,
    imageUrl: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Bash", "Python", "Ansible"],
    link: "/project/automatisation-sysadmin"
  }
];

// English version of the projects data
export const projectsEN = [
  {
    id: "reseau-entreprise",
    title: "Enterprise Network Configuration",
    description: "Design and implementation of a complete network infrastructure for an SME, including VLAN segmentation, inter-VLAN routing and security policy implementation.",
    detailedDescription: `
      ## Project Objective

      Set up a robust, scalable and secure network infrastructure for a growing medium-sized company.

      ## Achievements

      - Complete audit of the existing infrastructure and identification of improvement points
      - Design of a new network diagram with redundancy and high availability
      - Network segmentation into distinct VLANs (Production, Administration, Guests, VoIP)
      - Implementation of inter-VLAN routing with QoS (Quality of Service)
      - Configuration of firewalls and security policies adapted to each segment
      - Implementation of an intrusion detection and prevention system (IDS/IPS)
      - Complete infrastructure documentation and administrator training

      ## Technologies Used

      - Cisco equipment (routers, switches, firewalls)
      - Dynamic routing protocols (OSPF)
      - Redundancy techniques (HSRP, EtherChannel)
      - VLANs and 802.1Q
      - Stormshield Network Security
      - Port Security and 802.1X for authentication
    `,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Cisco", "VLAN", "Security"],
    link: "/project/reseau-entreprise"
  },
  {
    id: "surveillance-reseau",
    title: "Network Monitoring System",
    description: "Development of a monitoring system to track performance and detect anomalies on a network, with real-time notifications and an interactive dashboard.",
    detailedDescription: `
      ## Project Objective

      Develop a comprehensive network monitoring solution to visualize performance, detect anomalies and notify administrators in real time.

      ## Achievements

      - Deployment of monitoring agents across the entire infrastructure
      - Development of custom data collection scripts in Python
      - Configuration of a multi-level alert system based on predefined thresholds
      - Creation of Grafana dashboards to visualize key metrics
      - Integration with existing messaging and incident management systems
      - Implementation of a predictive analysis system to anticipate potential problems
      - Automation of weekly and monthly report generation

      ## Technologies Used

      - Python for collection and analysis scripts
      - SNMP, Netflow for data collection
      - Prometheus as a metrics database
      - Grafana for dashboards
      - Alertmanager for alert management
      - REST API for integration with other systems
      - Docker for component deployment
    `,
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Python", "SNMP", "Grafana"],
    link: "/project/surveillance-reseau"
  },
  {
    id: "solution-voip",
    title: "VoIP Solution Deployment",
    description: "Installation and configuration of an Asterisk-based IP telephony system, including the setup of an automated attendant and integration with existing infrastructure.",
    detailedDescription: `
      ## Project Objective

      Replace the traditional telephone system with a modern, flexible and cost-effective VoIP solution based on Asterisk.

      ## Achievements

      - Analysis of the specific telephone needs of each company department
      - Installation and configuration of the Asterisk server on a Linux platform
      - Implementation of a customized interactive voice response (IVR)
      - Configuration of call queues and call groups according to departments
      - Integration with the existing LDAP directory for user management
      - Setting up SIP trunks for connection with telephone operators
      - Configuration of voicemail with email notification
      - System documentation and end-user training

      ## Technologies Used

      - Asterisk PBX
      - SIP, IAX2 and other VoIP protocols
      - FreePBX as administration interface
      - Linux (Debian) as operating system
      - IP phones and softphones
      - Custom scripts for integration with existing systems
      - Dedicated VLAN with QoS for VoIP traffic
    `,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["VoIP", "Asterisk", "SIP"],
    link: "/project/solution-voip"
  },
  {
    id: "automatisation-sysadmin",
    title: "Sysadmin Task Automation",
    description: "Creation of automation scripts to simplify recurring system administration tasks, including backup, user management and log monitoring.",
    detailedDescription: `
      ## Project Objective

      Automate repetitive system administration tasks to improve efficiency, reduce human error, and allow the IT team to focus on higher-value projects.

      ## Achievements

      - Development of a library of Bash and Python scripts for common tasks
      - Creation of Ansible playbooks for server deployment and configuration
      - Implementation of an automated backup system with rotation and integrity verification
      - Development of a centralized user and access rights management tool
      - Automation of system log analysis and report generation
      - Configuration of Cron jobs for periodic execution of maintenance tasks
      - Implementation of automated tests to verify the status of critical services
      - Complete documentation of tools and IT team training

      ## Technologies Used

      - Bash and Python for automation scripts
      - Ansible for configuration management
      - Git for script versioning
      - Jenkins for task orchestration
      - Rsync and specialized backup solutions
      - Log analysis tools (Logwatch, ELK Stack)
      - Cron and systemd for task scheduling
    `,
    imageUrl: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Bash", "Python", "Ansible"],
    link: "/project/automatisation-sysadmin"
  }
];
