
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
|559|2020-04-03T06:33:00.380Z|69|69|0|[https://559-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://559-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|556|2020-04-02T19:45:04.218Z|69|69|0|[https://556-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://556-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|549|2020-04-01T17:07:42.725Z|69|69|0|[https://549-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://549-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|542|2020-04-01T07:21:44.980Z|69|69|0|[https://542-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://542-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|539|2020-04-01T07:13:13.939Z|69|69|0|[https://539-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://539-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|535|2020-03-31T09:53:09.401Z|69|69|0|[https://535-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://535-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|530|2020-03-30T09:57:49.785Z|69|69|0|[https://530-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://530-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|527|2020-03-29T13:14:59.594Z|69|69|0|[https://527-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://527-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|518|2020-03-26T12:04:27.976Z|69|69|0|[https://518-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://518-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|512|2020-03-25T07:08:59.290Z|69|69|0|[https://512-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://512-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|509|2020-03-24T10:41:34.497Z|73|73|0|[https://509-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://509-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
|506|2020-03-24T09:26:51.835Z|73|73|0|[https://506-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-integration.html]|[https://506-215040663-gh.circle-artifacts.com/0/reports/html/bifrost-unit.html]|
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
|859|2020-04-02T10:32:52.188Z|7|7|0|[https://859-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|857|2020-04-02T08:16:27.625Z|7|3|0|[https://857-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|855|2020-04-02T07:25:35.500Z|7|3|0|[https://855-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|850|2020-04-01T20:04:57.670Z|7|7|0|[https://850-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|845|2020-04-01T19:52:10.250Z|7|7|0|[https://845-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|840|2020-04-01T19:45:42.990Z|7|7|0|[https://840-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|836|2020-04-01T19:44:28.494Z|7|7|0|[https://836-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|829|2020-04-01T12:19:03.449Z|7|7|0|[https://829-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|828|2020-04-01T12:17:27.232Z|7|3|0|[https://828-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|820|2020-04-01T11:32:50.564Z|7|7|0|[https://820-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|819|2020-04-01T11:32:31.067Z|7|7|0|[https://819-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|813|2020-04-01T10:10:55.402Z|7|7|0|[https://813-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|808|2020-04-01T09:09:45.603Z|7|7|0|[https://808-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|800|2020-03-31T12:49:53.646Z|7|7|0|[https://800-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|799|2020-03-31T12:49:21.916Z|7|7|0|[https://799-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|792|2020-03-31T12:03:03.987Z|7|7|0|[https://792-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|787|2020-03-31T11:14:51.240Z|7|7|0|[https://787-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|782|2020-03-31T09:55:49.146Z|7|7|0|[https://782-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|776|2020-03-30T20:47:58.869Z|7|7|0|[https://776-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|771|2020-03-30T20:42:28.511Z|7|7|0|[https://771-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|765|2020-03-30T17:51:49.001Z|7|7|0|[https://765-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|760|2020-03-29T13:45:40.637Z|7|7|0|[https://760-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|748|2020-03-26T12:12:30.328Z|7|7|0|[https://748-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|742|2020-03-25T15:46:19.508Z|7|7|0|[https://742-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|737|2020-03-25T11:51:13.722Z|7|7|0|[https://737-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|732|2020-03-25T09:57:31.238Z|7|7|0|[https://732-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|728|2020-03-25T09:55:37.942Z|7|7|0|[https://728-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|718|2020-03-25T08:08:18.039Z|7|7|0|[https://718-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|717|2020-03-25T08:08:17.911Z|7|7|0|[https://717-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|707|2020-03-24T10:17:46.388Z|7|7|0|[https://707-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|706|2020-03-24T10:17:47.167Z|7|7|0|[https://706-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|703|2020-03-24T09:57:53.923Z|7|4|3|[https://703-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|702|2020-03-24T09:56:58.921Z|7|4|3|[https://702-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|697|2020-03-20T08:58:39.091Z|7|7|0|[https://697-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|692|2020-03-20T08:33:54.891Z|7|7|0|[https://692-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|687|2020-03-20T08:29:26.667Z|7|7|0|[https://687-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|682|2020-03-20T08:03:18.291Z|7|7|0|[https://682-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|681|2020-03-20T07:57:36.547Z|7|6|1|[https://681-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|676|2020-03-19T13:21:12.390Z|7|7|0|[https://676-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|671|2020-03-19T13:17:25.480Z|7|7|0|[https://671-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|659|2020-03-16T18:32:12.330Z|7|7|0|[https://659-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|658|2020-03-16T18:31:10.450Z|7|3|0|[https://658-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|650|2020-03-16T17:08:35.892Z|7|7|0|[https://650-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|649|2020-03-16T17:07:28.491Z|7|7|0|[https://649-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|639|2020-03-11T08:56:08.191Z|7|7|0|[https://639-214986153-gh.circle-artifacts.com/0/reports/report.html]|
|635|2020-03-11T08:42:58.600Z|7|7|0|[-]|
|631|2020-03-11T08:23:40.806Z|7|7|0|[-]|