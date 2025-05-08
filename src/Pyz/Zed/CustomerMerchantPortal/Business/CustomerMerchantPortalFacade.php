
<?php

namespace Pyz\Zed\CustomerMerchantPortal\Business;

use Generated\Shared\Transfer\CustomerTransfer;

class CustomerMerchantPortalFacade implements CustomerMerchantPortalFacadeInterface
{
    public function getCustomerList(): array
    {
        return $this->getFactory()
            ->createCustomerReader()
            ->getCustomerList();
    }
}


