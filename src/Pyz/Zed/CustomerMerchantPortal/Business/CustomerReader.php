<?php

namespace Pyz\Zed\CustomerMerchantPortal\Business;

use Orm\Zed\Customer\Persistence\Map\SpyCustomerTableMap;

class CustomerReader implements CustomerReaderInterface
{
    public function getCustomerList(): array
    {
        $query = SpyCustomerQuery::create()
            ->select([
                SpyCustomerTableMap::COL_ID_CUSTOMER,
                SpyCustomerTableMap::COL_EMAIL,
                SpyCustomerTableMap::COL_FIRST_NAME,
                SpyCustomerTableMap::COL_LAST_NAME,
                SpyCustomerTableMap::COL_CREATED_AT,
            ]);
        return $query->find()->toArray();
    }
}