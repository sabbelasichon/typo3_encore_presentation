<?php
declare(strict_types=1);


namespace Ssch\SitePackage\ViewHelpers\Address;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use FriendsOfTYPO3\TtAddress\Domain\Model\Address;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper;

final class AddressToMarkersViewHelper extends AbstractTagBasedViewHelper
{
    /**
     * @var bool
     */
    protected $escapeChildren = false;

    /**
     * @var string
     */
    protected $tagName = 'script';

    /**
     * Initialize arguments
     */
    public function initializeArguments(): void
    {
        $this->registerUniversalTagAttributes();
        $this->registerTagAttribute('type', 'string', '', false, 'application/json');
        $this->registerArgument('addresses', 'mixed', 'The incoming addresses');
        $this->registerArgument('parseFuncTSPath', 'string', ' path to TypoScript parseFunc setup.', false, 'lib.parseFunc_RTE');
    }

    public function render(): string
    {
        /** @var Address[] $addresses */
        $addresses = $this->arguments['addresses'];

        $locations = [];

        $parseFuncTSPath = $this->arguments['parseFuncTSPath'];
        $contentObject   = GeneralUtility::makeInstance(ContentObjectRenderer::class);
        $contentObject->start([]);
        foreach ($addresses as $address) {
            if ($address->getLongitude() && $address->getLatitude()) {
                $locations[] = [
                    'marker' => [
                        'position' => [
                            'lat' => $address->getLatitude(),
                            'lng' => $address->getLongitude(),
                        ],
                        'infoWindow' => $contentObject->parseFunc($address->getDescription(), [], '< '.$parseFuncTSPath),
                    ],
                ];
            }
        }
        $jsonArray['locations'] = $locations;

        $this->tag->forceClosingTag(true);
        $this->tag->setContent(json_encode($jsonArray));

        return $this->tag->render();
    }
}
