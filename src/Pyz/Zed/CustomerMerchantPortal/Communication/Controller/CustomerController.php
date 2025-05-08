<?php


namespace Pyz\Zed\CustomerMerchantPortal\Communication\Controller;

use Spryker\Zed\Kernel\Communication\Controller\AbstractController;

class CustomerController extends AbstractController
{
    public function indexAction(): array
    {
        $customers = $this->getFacade()->getCustomerList();
        return ['customers' => $customers];
    }
}