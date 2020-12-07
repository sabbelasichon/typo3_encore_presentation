/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import { Controller } from 'stimulus';
import Swup from 'swup';
import SwupDebugPlugin from '@swup/debug-plugin';
import SwupFormsPlugin from '@swup/forms-plugin';
import SwupSlideTheme from '@swup/slide-theme';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';

export default class extends Controller {
    connect() {
        const options = {
            containers: ['#swup'],
            cache: this.element.hasAttribute('data-cache'),
            animateHistoryBrowsing: this.element.hasAttribute('data-animate-history-browsing'),
            plugins: [
                new SwupSlideTheme(),
                new SwupFormsPlugin(),
                new SwupScriptsPlugin(),
                new SwupProgressPlugin()
            ],
        };

        if (this.element.getAttribute('data-containers')) {
            options.containers = this.element.getAttribute('data-containers').split(' ');
        }

        if (this.element.getAttribute('data-link-selector')) {
            options.linkSelector = this.element.getAttribute('data-link-selector');
        }

        if (this.element.getAttribute('data-animation-selector')) {
            options.animationSelector = this.element.getAttribute('data-animation-selector');
        }

        if (this.element.hasAttribute('data-debug')) {
            options.plugins.push(new SwupDebugPlugin());
        }

        const swup = new Swup(options);

        this._dispatchEvent('swup:connect', { swup, options });
    }

    _dispatchEvent(name, payload = null, canBubble = false, cancelable = false) {
        const userEvent = document.createEvent('CustomEvent');
        userEvent.initCustomEvent(name, canBubble, cancelable, payload);

        this.element.dispatchEvent(userEvent);
    }
}
