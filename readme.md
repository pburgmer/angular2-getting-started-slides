# Angular 2 - Getting Started

Dieses Repository enthält die Präsentation zu meinem Vortrag 'Angular 2 - Getting Started'. Eine PDF-Datei mit den Folien zum Vortrag liegt unter ```etc/pdf```.


## Zusammenfassung

AngularJS ist eines der derzeit am meisten verwendeten Frameworks für Single-Page-Webandwendunge. Zurecht, vereint es doch viele bereits seit Jahren in der Native-Richt-Client Entwicklung etablierte Techniken wie Dependency Injection und Data-Binding. Doch auch AngularJS hat seine Schwächen und eine steile Lernkurve. Um diese Situation zu verbessern, wird derzeit an Angular 2.0 gearbeitet. Eine Alpha Version ist bereits verfügbar. Was bietet sich da mehr an, als gemeinsam die ersten Schritte zu wagen.

In diesem Talk wird anhand einer Demo-Anwendung der Aufbau einer Angular-2.0-Anwendung gezeigt und auf die Unterschiede zu AngularJS 1.x eingegangen.


## Kurz-Bio

Philipp Burgmer ist ein Web-Native. Seit 15 Jahren in der Web-Programmierung unterwegs, gibt er sein angesammeltes und ständig aufgefrischtes Wissen gerne in [Schulungen](https://www.thecodecampus.de), Vorträgen bei Konferenzen und Blog-Einträgen weiter. Er arbeitet als Entwickler, Berater und Trainer für die [w11k GmbH](http://w11k.de) und beschäftigt sich mit der Gestaltung und Optimierung von Benutzeroberflächen. Philipp bloggt zusammen mit seinen Kollegen unter [blog.thecodecampus.de](blog.thecodecampus.de). Privat interessiert er sich für Klettern und DJing.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```

# Notizen

* Konzepte
  * Komponenten
    * Grundlagen
    * Data-Binding
    * Inputs, Outputs, Events, Property-Bindings, Class- & Style-Bindings
    * Style Encapsulation
    * Smart vs Dump
  * Module
    * Gleicher Fehler noch mal?
    * ES6 vs NG
    * NgModule Aufbau (Echte Kapselung)
  * Services + DI
    * Service: Grundsätzliches Konzept
    * DI: Grundsätzliches Konzept
    * Provider an Modulen
    * Hierarchischer Injektor
    * Http als Beispiel
      * Observable statt Promise
  * Routing
    * verwendet RX
  * Formulare & Validierung
  * Pipes
  * Testen
    * grundsätzlich gleiche Tools wie bei ng1: Karma, Jasmine
    * TestBed
