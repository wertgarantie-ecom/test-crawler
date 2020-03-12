
Wir haben folgende Projekte die produktiv beim Kunden eingesetzt werden:
- bifrost
- bifrost-components

Wir unterscheiden folgende Testarten (nicht jedes Projekt benutzt alle aufgeführten Testarten):
- Unit Tests:
    Schnelle Tests zum Testen einer einzelnen Funktionalität ohne gestartete Anwendung oder Kommunikation mit Umsystemen wie Datenbanken
- Integrations Tests
    Tests den ganzheitlichen Prozess mit gestarteter Anwendung und Datenbank. Fremdsysteme werden "gemockt" (simuliert).
- UI-Tests
    Testen von UI-Komponenten innerhalb eines geöffneten Browsers (aktuell Chrome).

Alle unsere Projekte werden automatisch gebaut, getestet und deployed, sobald ein neuer Commit auf dem master registriert ist.
Anbei eine Liste aller Builds und Tests für das jeweilige Projekt:

h2. bifrost Builds
||Build||Start Zeit||Tests||Success||Failures||integrationTests Report||unitTests Report||
|475|2020-03-12T09:04:36.798Z|66|66|0|[https://475-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://475-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|469|2020-03-10T13:43:33.119Z|66|66|0|[https://469-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://469-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|466|2020-03-10T12:59:02.953Z|66|66|0|[-]|[-]|

h2. bifrost-components Builds
||Build||Start Zeit||Tests||Success||Failures||uiTests Report||
|639|2020-03-11T08:56:08.191Z|7|7|0|[https://639-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|635|2020-03-11T08:42:58.600Z|7|7|0|[-]|
|631|2020-03-11T08:23:40.806Z|7|7|0|[-]|
