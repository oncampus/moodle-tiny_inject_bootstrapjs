# Inject Bootstrap

Dieses Plugin injiziert das Bootstrap-JS-Framework in den TinyMCE-Editor, sodass Bootstrap-Klassen direkt im Editor verwendet werden können. Dadurch können Inhalte bereits während der Bearbeitung mit Bootstrap-Komponenten und Utility-Klassen gestaltet werden.

## Funktionen
Das Bootstrap-JS wird in die TinyMCE-Editorumgebung eingebunden, wodurch Bootstrap-Klassen wie Layout-Utilities, Abstandshelfer und grundlegende Komponenten direkt im Editor verfügbar sind.

### Nutzung
Stellen Sie sicher, dass das Plugin unter  
Site administration > Plugins > Text editors > TinyMCE editor > Inject JS Bootstrap  
aktiviert ist.

Nach der Aktivierung steht Bootstrap automatisch im TinyMCE-Editor zur Verfügung.  
Anschließend können Bootstrap-Klassen (z. B. `container`, `row`, `col`, `alert`, `btn` usw.) direkt im Editorinhalt verwendet werden.

Eine weitere Konfiguration ist nicht erforderlich.

## Installation
Wählen Sie eine der folgenden Installationsmethoden:

### Installation über ZIP-Datei
1. Melden Sie sich als Administrator auf Ihrer Moodle-Seite an und gehen Sie zu  
   Site administration > Plugins > Install plugins.
2. Laden Sie die ZIP-Datei mit dem Plugin-Code hoch. Zusätzliche Angaben sind nur erforderlich, wenn der Plugin-Typ nicht automatisch erkannt wird.
3. Prüfen Sie den Plugin-Validierungsbericht und schließen Sie die Installation ab.

### Manuelle Installation
1. Installieren Sie das Plugin, indem Sie den Inhalt dieses Verzeichnisses in folgendes Verzeichnis kopieren:
   {your/moodle/dirroot}/lib/editor/tiny/plugins/injectjs_bootstrap
2. Melden Sie sich anschließend als Administrator auf Ihrer Moodle-Seite an und gehen Sie zu  
   Site administration > Notifications, um die Installation abzuschließen.
3. Alternativ können Sie im Moodle-Hauptverzeichnis folgenden Befehl ausführen:
   $ php admin/cli/upgrade.php

### Systemanforderungen und Abhängigkeiten
Dieses Plugin wurde bisher nur mit Moodle 4.5 getestet.

## Bekannte Einschränkungen
Dieses Plugin funktioniert ausschließlich mit dem **TinyMCE-Editor**.  
Es funktioniert nicht mit dem **Atto HTML-Editor** oder dem **Plain text area**.

## Sprachunterstützung
Es sind keine Übersetzungen erforderlich, da das Plugin lediglich das Bootstrap-Framework in den Editor einbindet.

## Lizenz
2026 oncampus GmbH <support@oncampus.de>

Dieses Programm ist freie Software: Sie können es unter den Bedingungen der  
GNU General Public License, wie von der Free Software Foundation veröffentlicht,  
weitergeben und/oder modifizieren – entweder gemäß Version 3 der Lizenz oder  
(nach Ihrer Wahl) jeder späteren Version.

Dieses Programm wird in der Hoffnung bereitgestellt, dass es nützlich sein wird,  
jedoch **ohne jede Gewährleistung**, sogar ohne die implizite Gewährleistung der  
Marktfähigkeit oder der Eignung für einen bestimmten Zweck. Weitere Details  
finden Sie in der GNU General Public License.

Eine Kopie der GNU General Public License sollte diesem Programm beiliegen.  
Falls nicht, siehe <https://www.gnu.org/licenses/>.
