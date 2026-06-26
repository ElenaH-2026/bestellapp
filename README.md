# ![Bestellapp Logo](/assets/icons/logo-symbol-40px.png) BestellAPP

<div align="center">
        
![agiles Projektmanagement](https://img.shields.io/badge/agiles_Projektmanagement-Trelloboard_mit_Kanbanprozess-0055cc?style=for-the-badge)
<img width="12" />
![Lernprojekt](https://img.shields.io/badge/Lernprojekt-Frontend-00939b?style=for-the-badge)
<img width="12" />
![Projektstatus](https://img.shields.io/badge/Projektstatus-abgeschlossen_im_April_2026-009600?style=for-the-badge)

</div>

<div align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" height="40" alt="trello logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
        <img width="12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
</div>
<img/>
<div align="center">
        
Die BestellApp ist eine vollständig responsive Frontend-Webanwendung für das fiktive Restaurant "BurgerHouse", mit der Nutzer dynamisch generierte Gerichte intuitiv auswählen können. Herzstück des nach Clean-Code-Prinzipien entwickelten Projekts ist ein interaktiver Warenkorb, der sich nahtlos an alle Endgeräte anpasst – vom "sticky" Desktop-Menü bis hin zum funktionalen mobilen Dialogfenster. Dank automatischer Preisberechnung und einem interaktiven Bestellabschluss bietet die App eine realitätsnahe und sehr nutzerfreundliche Bedienung.

</div>
        
![Screenshot der BestellAPP](/assets/img/screenshot-readme.jpg)


<div align="center">
        
🌐 Live-Ansicht meines Projekts: 👉 [BestellAPP](https://elenah-2026.github.io/bestellapp/)

</div>

## 👩‍💻 Entwicklerin

<div align="center">

### ![Avatar Elena](/assets/icons/elena-avatar-80px.png) Elena Hiener

</div>

<div align="center">    
        
📊 agiles Projektmanagement: Trello-Board mit Kanban-Prozess  
        
</div>

<div align="center">
      
📧 Email: [hiener.elena@web.de](mailto:hiener.elena@web.de)
<img width="12" />
🔗 LinkedIn: [elena-hiener](https://de.linkedin.com/in/elena-hiener)
<img width="12" />
🐙 GitHub: [ElenaH-2026](https://github.com/ElenaH-2026)

</div>


## 📑 Inhaltsverzeichnis

⚙️ [Voraussetzungen](#️-voraussetzungen)
- 💻 [Laufzeitumgebung](#-laufzeitumgebung)
- 🎨 [Frontend-Technologien (UI)](#-frontend-technologien-ui)
- 💾 [Datenquelle / Schnittstelle](#-datenquelle--schnittstelle)

🚀 [Quickstart](#-quickstart)

🛠️ [Usage](#️-usage)
- 🗂️ [Projektstruktur](#-projektstruktur)
- 🌟 [Features](#-features)

📝 [Lizenz](#-lizenz)


## ⚙️ Voraussetzungen

### 💻 Laufzeitumgebung

*Für dieses Projekt ist keine spezielle Laufzeitumgebung erforderlich.*

### 🎨 Frontend-Technologien (UI)
<div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
</div>

| Technologie | Aufgabe |
| --- | --- |
| HTML5 | Struktur der App |
| CSS3+ | Design und die visuelle Gestaltung |
| JavaScript ES6+ | Dynamik und Interaktivität |

### 💾 Datenquelle / Schnittstelle

Bilder --> assets/img/ (von der Developer Akademie zur Verfügung gestellt)

Gerichte-Informationen --> als Objekt in scripts\database-all-dishes.js


## 🚀 Quickstart

1. Repository klonen:

```bash
git clone https://github.com/ElenaH-2026/bestellapp.git
```

2. In das Verzeichnis wechseln:

```bash
cd bestellapp
```

3. Starte deinen lokalen Entwicklungsserver:
```text
z.B. Live Server in VS Code
```

4. Öffne danach die URL im Browser auf deinem Computer:
```text
http://localhost:<live-server-port>
```

5. Oder öffne die URL im Browser auf deiner virtuellen Maschine:
```text
http://<deine_ip>:<live-server-port>
```


## 🛠️ Usage

### 📁 Projektstruktur

```text
.
│   .gitignore
│   README.md
│   LICENSE.md
│   index.html
│   script.js
│   style.css
│   
├───assets/
│   ├───fonts/
│   ├───icons/
│   ├───img/
│           
├───scripts/
│       templates.js
│       database-all-dishes.js
│       
└───styles/
        assets.css
        basket.css
        fonts.css
        standard.css
```

### 🌟 Features

| Feature | Zusatzinformation |
| --- | --- |
| 📐 Figma-konformes Wireframe-Layout | *Die grundlegende Struktur und das Layout der App halten sich an die Vorgaben des Figma-Wireframes.* |
| 🏗️ Clean Code & Modularität | *Strikte Einhaltung von camelCase, eine Begrenzung auf maximal 14 Zeilen pro Funktion sowie die Auslagerung von HTML-Templates.* |
| 🍲 Dynamische Gerichte-Generierung | *Die angebotenen Gerichte werden komplett dynamisch über JavaScript aus einem Daten-Objekt geladen und auf der Seite gerendert.* |
| ➕ Intuitiver Warenkorb-Zulauf | *Nutzer können Gerichte unkompliziert per Klick auf das Plus-Symbol direkt in den Warenkorb legen.* |
| 🛒 Vollständige Warenkorb-Verwaltung | *Mengen einzelner Speisen lassen sich im Warenkorb flexibel erhöhen oder verringern sowie komplett löschen.* |
| 🧮 Automatische Preisberechnung | *Die Gesamtsumme der Bestellung wird dynamisch kalkuliert, inklusive Zwischensumme und Lieferkosten.* |
| 🏁 Interaktiver Bestell-Abschluss | *Ein Klick auf den Button leert den Warenkorb und gibt eine nutzerfreundliche Testbestellungs-Meldung aus (kein Standard-Alert).* |
| 🎨 Authentisches Design | *Ein großflächiges Hero-Bild bildet den Kopfbereich, während das Restaurant-Logo stilvoll halb über dem Bild platziert ist.* |
| 📱 Vollständig Responsive | *Die gesamte App ist für alle gängigen Bildschirmbreiten (320px bis 1440px+) optimiert.* |
| 📌 Fixierter Desktop-Warenkorb | *Der seitliche Warenkorb verhält sich „sticky“ und scrollt mit, außer der Nutzer befindet sich ganz oben oder unten auf der Seite.* |
| 🎯 Mobiler Warenkorb-Dialog | *Auf Mobilgeräten ist der seitliche Warenkorb ausgeblendet; ein zentrierter Button am unteren Rand öffnet ihn als Dialog.* |
| ⚙️ Volle Mobile Funktionalität | *Der responsive Warenkorb-Dialog bietet exakt dieselben Interaktionen wie das Desktop-Pendant (Mengen ändern, löschen, bestellen).* |


## 📝 Lizenz

> [!NOTE] 
> Dieses Projekt ist ein reines Übungsprojekt und ist zu Lernzwecken im Zuge meiner Weiterbildung bei der [Developer Akademie](https://developerakademie.com) entstanden.
> <br>Bilder und Icons wurden von der Developer Akademie zur Verfügung gestellt.

> [!IMPORTANT]
> Details zur Lizenz findest du in der [LICENSE.md](https://github.com/ElenaH-2026/bestellapp?tab=License-1-ov-file).
