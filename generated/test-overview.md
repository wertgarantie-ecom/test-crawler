
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
|496|2020-03-13T10:32:41.981Z|72|72|0|[https://496-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://496-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|485|2020-03-12T13:26:45.315Z|67|67|0|[https://485-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://485-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|484|2020-03-12T13:16:15.747Z|37|36|1|[-]|[https://484-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|483|2020-03-12T13:12:22.308Z|37|36|1|[-]|[https://483-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|480|2020-03-12T12:10:26.900Z|66|66|0|[https://480-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://480-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|479|2020-03-12T12:07:56.433Z|36|36|0|[-]|[https://479-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|475|2020-03-12T09:04:36.798Z|66|66|0|[https://475-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://475-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|469|2020-03-10T13:43:33.119Z|66|66|0|[https://469-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://469-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|466|2020-03-10T12:59:02.953Z|66|66|0|[-]|[-]|

h2. bifrost-components Builds
||Build||Start Zeit||Tests||Success||Failures||uiTests Report||
|676|2020-03-19T13:21:12.390Z|7|7|0|[https://676-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|671|2020-03-19T13:17:25.480Z|7|7|0|[https://671-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|659|2020-03-16T18:32:12.330Z|7|7|0|[https://659-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|658|2020-03-16T18:31:10.450Z|7|3|0|[https://658-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|650|2020-03-16T17:08:35.892Z|7|7|0|[https://650-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|649|2020-03-16T17:07:28.491Z|7|7|0|[https://649-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|639|2020-03-11T08:56:08.191Z|7|7|0|[https://639-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|635|2020-03-11T08:42:58.600Z|7|7|0|[-]|
|631|2020-03-11T08:23:40.806Z|7|7|0|[-]|
