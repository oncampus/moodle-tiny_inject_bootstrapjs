[![Moodle Plugin CI](https://github.com/oncampus/moodle-tiny_inject_bootstrapjs/actions/workflows/moodle-plugin-ci.yml/badge.svg)](https://github.com/oncampus/moodle-tiny_inject_bootstrapjs/actions/workflows/moodle-plugin-ci.yml)
# Inject Bootstrap

This plugin injects the Bootstrap JS framework into the TinyMCE editor, allowing Bootstrap classes to be used directly within the editor. This enables content to be styled with Bootstrap components and utility classes while editing.

## Features
Bootstrap JS is integrated into the TinyMCE editor environment, making Bootstrap classes such as layout utilities, spacing helpers, and basic components available directly in the editor.

### Usage
Ensure the plugin is enabled under:  
**Site administration > Plugins > Text editors > TinyMCE editor > Inject Bootstrap JS**

Once activated, Bootstrap is automatically available in the TinyMCE editor. You can then use Bootstrap classes (e.g., `container`, `row`, `col`, `alert`, `btn`, etc.) directly in your editor content.

No further configuration is required.

## Installation
Choose one of the following installation methods:

### Install via ZIP file
1. Log in to your Moodle site as an administrator and go to Site administration > Plugins > Install plugins.
2. Upload the ZIP file containing the plugin code. You should only be prompted to add extra details if your plugin type is not automatically detected.
3. Check the plugin validation report and finish the installation.

### Manual Installation
1. You can also install the plugin by copying the contents of this directory to 
   ```
   {your/moodle/dirroot}/lib/editor/tiny/plugins/inject_bootstrapjs
   ```
2. Afterwards, log in to your Moodle site as an administrator and go to Site administration > Notifications to complete the installation.
3. Alternatively, run the following command in the Moodle root directory:
   ```
   $ php admin/cli/upgrade.php
   ```

## License
2026 oncampus GmbH <support@oncampus.de>

This program is free software: you can redistribute it and/or modify it under  
the terms of the GNU General Public License as published by the Free Software  
Foundation, either version 3 of the License, or (at your option) any later  
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY  
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A  
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with  
this program.  If not, see <https://www.gnu.org/licenses/>.

________________________________________________________________________________________________

# Inject Bootstrap

Dieses Plugin injiziert das Bootstrap-JS-Framework in den TinyMCE-Editor, sodass Bootstrap-Klassen direkt im Editor verwendet werden können. Dadurch können Inhalte bereits während der Bearbeitung mit Bootstrap-Komponenten und Utility-Klassen gestaltet werden.

## Funktionen
Das Bootstrap-JS wird in die TinyMCE-Editorumgebung eingebunden, wodurch Bootstrap-Klassen wie Layout-Utilities, Abstandshelfer und grundlegende Komponenten direkt im Editor verfügbar sind.

### Nutzung
Stellen Sie sicher, dass das Plugin unter  
Site administration > Plugins > Text editors > TinyMCE editor > Inject Bootstrap JS  
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
    ```
	{your/moodle/dirroot}/lib/editor/tiny/plugins/inject_bootstrapjs
	```
2. Melden Sie sich anschließend als Administrator auf Ihrer Moodle-Seite an und gehen Sie zu  
   Site administration > Notifications, um die Installation abzuschließen.
3. Alternativ können Sie im Moodle-Hauptverzeichnis folgenden Befehl ausführen:
   ```
   $ php admin/cli/upgrade.php
   ```

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
