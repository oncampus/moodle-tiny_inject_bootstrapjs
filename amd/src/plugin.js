// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Tiny tiny_inject_bootstrapjs for Moodle.
 *
 * @module      tiny_inject_bootstrapjs/plugin
 * @copyright   2026 oncampus GmbH <support@oncampus.de>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from './common';

const loadBootstrap = (doc) => {
    // Load RequireJS inside the TinyMCE iframe.
    const requireScript = doc.createElement('script');
    requireScript.src = M.cfg.wwwroot + '/lib/requirejs/require.js';
    doc.head.appendChild(requireScript);

    requireScript.onload = function() {
        const iframeRequire = doc.defaultView.require;

        if (!iframeRequire) {
            return;
        }

        // RequireJS config.
        const parentConfig = require.s.contexts._.config;
        iframeRequire.config({
            baseUrl: parentConfig.baseUrl,
            paths: parentConfig.paths,
            map: parentConfig.map || {}
        });

        // Load Bootstrap.
        iframeRequire(['jquery', 'popper', 'theme_boost/index'], function($) {
            activateBootstrapComponents(doc, $);
        });
    };
};

const activateBootstrapComponents = (doc, $) => {
    if (!$) {
        return;
    }
    // Tooltips
    $('[data-toggle="tooltip"]', doc).tooltip();

    // Popovers
    $('[data-toggle="popover"]', doc).popover();

    // Dropdowns
    $('.dropdown-toggle', doc).dropdown();

    // Collapse
    $('[data-toggle="collapse"]', doc).collapse();

    // Modal
    $('[data-toggle="modal"]', doc).modal({show: false});
};


// Setup the inject_bootstrapjs Plugin.
export default new Promise((resolve) => {
    // Note: The PluginManager.add function does not support asynchronous configuration.
    // Perform any asynchronous configuration here, and then call the PluginManager.add function.
    Promise.all([
        getTinyMCE(),
        getPluginMetadata(component, pluginName),
    ]).then(([tinyMCE, pluginMetadata]) => {
        // Reminder: Any asynchronous code must be run before this point.
        tinyMCE.PluginManager.add(pluginName, (editor) => {
            editor.on('init', () => {
                const doc = editor.getDoc();
                if (!doc) {
                    return;
                }
                loadBootstrap(doc);
                return pluginMetadata;
            });
            resolve(pluginName);
            // Return the pluginMetadata object. This is used by TinyMCE to display a help link for your plugin.
            return pluginMetadata;
        });

        resolve(pluginName);
    }).catch((error) => {
        window.console.error("Error during plugin setup:", error);
        resolve([pluginName]);
    });
});
