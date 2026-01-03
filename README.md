# AAPT - Association Actions Pour Tous 🇹🇩

Bienvenue sur le dépôt officiel du site web de l'**Association Actions Pour Tous (AAPT)**. Une organisation basée à N'Djamena, Tchad, œuvrant pour la cohésion sociale, l'égalité et l'avenir de la jeunesse.

![AAPT Banner](/public/assets/images/facebook/logo.png)

## ✨ Fonctionnalités Clés

- **🎨 Design Moderne & Épuré** : Interface utilisateur soignée avec effets de "Glassmorphism" et typographie professionnelle.
- **🌗 Mode Sombre & Clair** : Thème dynamique respectant les préférences système et utilisateur (persistant).
- **📱 100% Responsive** : Expérience fluide sur mobile, tablette et desktop.
- **⚡ Performance** : Chargement rapide, animations fluides (60fps) et optimisation des images.
- **🔍 Contenu Dynamique** :
  - **Notre Équipe** : Présentation interactive du bureau exécutif.
  - **Nos Actions** : Système de filtrage pour explorer les projets par catégorie (Santé, Éducation, Social).
  - **Statistiques** : Compteurs animés pour présenter l'impact de l'association.

## 🛠 Stack Technique

Ce projet utilise les dernières technologies du développement web :

- **Framework** : [React 19](https://react.dev/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icones** : [Lucide React](https://lucide.dev/)
- **Routing** : [React Router v7](https://reactrouter.com/)

## 🚀 Installation & Démarrage

Suivez ces étapes pour lancer le projet localement :

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/aapt-web.git
cd aapt-web
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`.

### 4. Construire pour la production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist`.

## 📂 Structure du Projet

```bash
/src
├── /assets        # Images et polices locales
├── /components    # Composants réutilisables (Navbar, Footer, UI...)
├── /context       # Contexte global (Thème, État)
├── /pages         # Pages de l'application (Accueil, À propos...)
└── /styles        # Configuration Tailwind et CSS global
```

## 🌍 Déploiement

Le projet est configuré pour être déployé facilement sur **Vercel** ou **Netlify**.

1. Poussez votre code sur GitHub.
2. Connectez votre dépôt à Vercel/Netlify.
3. Les paramètres de build (`vite build`) sont détectés automatiquement.

---

**Association Actions Pour Tous** - *Ensemble pour un avenir meilleur.*
Contact : contact@aapt-tchad.org
