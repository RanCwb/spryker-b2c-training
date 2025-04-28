<?php

namespace Pyz\Yves\AntelopePage\Controller;

use Pyz\Yves\AntelopePage\AntelopePageFactory;
use Spryker\Yves\Kernel\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AntelopeController extends AbstractController
{
    /**
     * 
     * task 2
     * @var \Pyz\Yves\AntelopePage\AntelopePageFactory
     */
    protected $factory;

    public function __construct()
    {
        $this->factory = new AntelopePageFactory();
    }

    /**
     *
     * @param \Symfony\Component\HttpFoundation\Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request): Response
    {
        // Fetch antelope data from the Zed module
        $antelopes = $this->factory->getAntelopeClient()->getAntelopeList();

        // Pass the data to the view
        return $this->viewResponse([
            'antelopes' => $antelopes,
        ]);
    }
}
