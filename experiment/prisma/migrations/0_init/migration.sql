-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notifyOnAffReg` INTEGER NOT NULL DEFAULT 0,
    `rdate` DATETIME(0) NOT NULL,
    `ip` VARCHAR(15) NOT NULL,
    `chk_ip` VARCHAR(15) NOT NULL,
    `valid` INTEGER NOT NULL,
    `lang` VARCHAR(3) NOT NULL,
    `level` ENUM('admin', 'merchant', 'manager', 'advertiser') NOT NULL,
    `username` VARCHAR(254) NOT NULL,
    `password` CHAR(32) NOT NULL,
    `first_name` VARCHAR(254) NOT NULL,
    `last_name` VARCHAR(254) NOT NULL,
    `email` VARCHAR(254) NOT NULL,
    `lastactive` DATETIME(0) NOT NULL,
    `logged` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `phone` VARCHAR(254) NOT NULL,
    `IMUserType` VARCHAR(50) NOT NULL,
    `IMUser` VARCHAR(254) NOT NULL,
    `zopimChat` TEXT NOT NULL,
    `bigPic` VARCHAR(254) NOT NULL,
    `relatedMerchantID` VARCHAR(20) NOT NULL,
    `preferedCurrency` VARCHAR(3) NOT NULL DEFAULT 'USD',
    `userType` ENUM('default', 'top', 'sys', 'restricted') NOT NULL DEFAULT 'default',
    `showAdditionalLink` BOOLEAN NOT NULL DEFAULT false,
    `additionalLinkText` VARCHAR(80) NOT NULL,
    `additionalLinkUrl` VARCHAR(90) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `username`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admins_notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `edited_by` INTEGER NOT NULL,
    `admins_id` INTEGER NOT NULL,
    `notes` TEXT NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`admins_id`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliate_messages_approval` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `affiliate_id` INTEGER NOT NULL,
    `message_id` INTEGER NOT NULL,
    `approval_date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `udate` DATETIME(0) NOT NULL,
    `lastvisit` DATETIME(0) NOT NULL,
    `lastactive` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `lang` VARCHAR(3) NOT NULL,
    `language_id` INTEGER NOT NULL,
    `ip` VARCHAR(15) NOT NULL,
    `group_id` INTEGER NOT NULL,
    `refer_id` INTEGER NOT NULL,
    `refer_banner_id` INTEGER NOT NULL,
    `username` VARCHAR(254) NOT NULL,
    `password` VARCHAR(254) NOT NULL,
    `first_name` VARCHAR(254) NOT NULL,
    `last_name` VARCHAR(254) NOT NULL,
    `mail` VARCHAR(254) NOT NULL,
    `website` VARCHAR(254) NOT NULL,
    `website2` VARCHAR(254) NOT NULL,
    `website3` VARCHAR(254) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `street` VARCHAR(254) NOT NULL,
    `postalCode` VARCHAR(254) NOT NULL,
    `city` VARCHAR(254) NOT NULL,
    `gender` ENUM('', 'male', 'female') NOT NULL,
    `company` VARCHAR(254) NOT NULL,
    `country` VARCHAR(254) NOT NULL,
    `marketInfo` VARCHAR(254) NOT NULL,
    `newsletter` INTEGER NOT NULL,
    `IMUser` VARCHAR(254) NOT NULL,
    `IMUserType` VARCHAR(254) NOT NULL,
    `logged` INTEGER NOT NULL,
    `paymentMethod` ENUM('bank', 'skrill', 'paypal', 'neteller', 'webmoney', 'chinaunionpay') NOT NULL,
    `pay_firstname` VARCHAR(254) NOT NULL,
    `pay_lastname` VARCHAR(254) NOT NULL,
    `pay_mail` VARCHAR(254) NOT NULL,
    `pay_account` VARCHAR(254) NOT NULL,
    `account_name` VARCHAR(50) NOT NULL,
    `account_number` VARCHAR(50) NOT NULL,
    `pay_info` VARCHAR(254) NOT NULL,
    `pay_bank` VARCHAR(254) NOT NULL,
    `pay_swift` VARCHAR(254) NOT NULL,
    `pay_iban` VARCHAR(254) NOT NULL,
    `pay_branch` VARCHAR(254) NOT NULL,
    `pay_email` VARCHAR(254) NOT NULL,
    `pay_address1` VARCHAR(254) NOT NULL,
    `pay_address2` VARCHAR(254) NOT NULL,
    `pay_city` VARCHAR(254) NOT NULL,
    `pay_state` VARCHAR(254) NOT NULL,
    `pay_zip` VARCHAR(254) NOT NULL,
    `pay_country` INTEGER NOT NULL,
    `pay_company` VARCHAR(100) NOT NULL,
    `preferredCurrency` VARCHAR(3) NOT NULL DEFAULT 'USD',
    `merchants` VARCHAR(100) NOT NULL,
    `credit` DOUBLE NOT NULL,
    `sub_com` DOUBLE NOT NULL,
    `showDeposit` INTEGER NOT NULL,
    `com_alert` INTEGER NOT NULL,
    `show_credit` TINYINT NULL,
    `manager_private_note` VARCHAR(350) NOT NULL,
    `status_id` INTEGER NOT NULL DEFAULT 0,
    `accounts_pixel_params_replacing` VARCHAR(500) NOT NULL DEFAULT '',
    `sales_pixel_params_replacing` VARCHAR(500) NOT NULL DEFAULT '',
    `apiAccessType` VARCHAR(12) NOT NULL DEFAULT 'none',
    `apiToken` VARCHAR(40) NOT NULL,
    `apiStaticIP` VARCHAR(120) NOT NULL,
    `isIB` BOOLEAN NOT NULL DEFAULT false,
    `qualify_amount` FLOAT NULL DEFAULT 0,
    `qualify_type` ENUM('trades', 'volume', 'default', 'totalmd', 'lots') NULL,
    `profilePermissionID` INTEGER NOT NULL DEFAULT 0,
    `type` ENUM('Affiliate', 'IB', 'WhileLabel', 'PortfolioManager') NOT NULL DEFAULT 'Affiliate',
    `products` VARCHAR(100) NOT NULL,
    `optinGuid` VARCHAR(64) NOT NULL,
    `emailVerification` TINYINT NOT NULL DEFAULT 0,
    `pendingDepositExclude` TINYINT NOT NULL DEFAULT 0,
    `selected_language_id` INTEGER NOT NULL DEFAULT 1,
    `blockNewTraffic` TINYINT NOT NULL DEFAULT 0,
    `isDefaultAffiliate` BOOLEAN NOT NULL DEFAULT false,
    `regReferUrl` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `group_id`(`group_id`),
    INDEX `mail`(`mail`),
    INDEX `password`(`password`),
    INDEX `username`(`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_campaigns_relations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL DEFAULT '',
    `campID` VARCHAR(20) NOT NULL,
    `affiliateID` INTEGER NOT NULL DEFAULT 0,
    `advertiserID` INTEGER NOT NULL DEFAULT 0,
    `profile_id` INTEGER NOT NULL DEFAULT 0,
    `isDefaultCamp` BOOLEAN NOT NULL DEFAULT false,
    `merchantid` INTEGER NOT NULL DEFAULT 0,

    INDEX `campID`(`campID`, `affiliateID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_deals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `dealType` ENUM('dcpa', 'min_cpa', 'cpa', 'revenue', 'cpl', 'cpc', 'cpm', 'tier', 'positions_rev_share', 'revenue_spread', 'lots', 'pnl', 'cpi') NOT NULL,
    `amount` DOUBLE NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `tier_amount` VARCHAR(100) NOT NULL,
    `tier_pcpa` DOUBLE NOT NULL,
    `tier_type` ENUM('ftd_amount', 'ftd_count', 'cpl_count', 'rev_share', '') NOT NULL DEFAULT '',
    `geo` VARCHAR(2) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `dealType`(`dealType`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_msgs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL DEFAULT -1,
    `advertiser_id` INTEGER NOT NULL DEFAULT -1,
    `title` VARCHAR(254) NOT NULL,
    `text` TEXT NOT NULL,
    `status_id` INTEGER NOT NULL DEFAULT 0,
    `display_approval_popup` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `group_id`(`group_id`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `edited_by` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `notes` TEXT NOT NULL,
    `issue_date` DATETIME(0) NOT NULL,
    `closed_date` DATETIME(0) NOT NULL,
    `status` ENUM('open', 'inprocess', 'closed') NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `name` VARCHAR(254) NOT NULL,
    `url` VARCHAR(254) NOT NULL,
    `description` TEXT NOT NULL,
    `source_traffic` VARCHAR(254) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_static_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `affiliate_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL,
    `key_name` VARCHAR(15) NOT NULL,
    `key_value` DOUBLE NOT NULL,
    `created_on` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `af_mer_date`(`affiliate_id`, `merchant_id`, `rdate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `created_by_admin_id` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `title`(`title`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `last_update` DATETIME(0) NOT NULL,
    `ticket_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `reply_email` VARCHAR(254) NOT NULL,
    `group_id` INTEGER NOT NULL,
    `status` ENUM('open', 'proccess', 'waiting', 'close') NOT NULL,
    `subject` VARCHAR(254) NOT NULL,
    `text` TEXT NOT NULL,
    `readed` INTEGER NOT NULL,
    `merchantID` INTEGER NOT NULL,
    `aff_readed` BOOLEAN NOT NULL DEFAULT true,

    INDEX `admin_id`(`admin_id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `merchantID`(`merchantID`),
    INDEX `ticket_id`(`ticket_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `affiliates_traffic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `ip` VARCHAR(15) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL DEFAULT 0,
    `merchant_id` INTEGER NOT NULL,
    `refer_url` VARCHAR(255) NOT NULL,
    `visits` INTEGER NOT NULL,
    `uid` VARCHAR(35) NOT NULL DEFAULT '0',

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `forClicksSum`(`refer_url`, `affiliate_id`, `profile_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `refer_url_2`(`refer_url`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `apicredentials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `merchant_id` INTEGER NOT NULL,
    `valid` BOOLEAN NOT NULL,
    `user` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `url` VARCHAR(100) NOT NULL,
    `type` ENUM('spot', 'fxglobe', 'tf') NOT NULL,

    INDEX `merchant_id`(`merchant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chart_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastUpdate` DATETIME(0) NOT NULL,
    `fulldate` DATE NOT NULL,
    `level` ENUM('admin', 'manager', 'affiliate', 'advertiser') NOT NULL,
    `member_id` INTEGER NOT NULL,
    `month` VARCHAR(2) NOT NULL,
    `year` YEAR NOT NULL,
    `accounts` INTEGER NOT NULL,
    `ftds` INTEGER NOT NULL,
    `val1` INTEGER NOT NULL,
    `val2` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `DATE`(`year`, `month`),
    INDEX `level`(`level`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commissions` (
    `merchantID` INTEGER NOT NULL,
    `affiliateID` INTEGER NOT NULL,
    `traderID` VARCHAR(30) NOT NULL,
    `transactionID` VARCHAR(80) NOT NULL,
    `Date` TIMESTAMP(0) NOT NULL,
    `Type` VARCHAR(255) NOT NULL,
    `Amount` DOUBLE NOT NULL,
    `DealType` VARCHAR(255) NOT NULL,
    `Commission` DOUBLE NOT NULL,
    `DealTypeCondition` VARCHAR(255) NOT NULL,
    `level` INTEGER NULL,
    `subAffiliateID` INTEGER NULL,
    `status` INTEGER NULL,
    `updated` DATETIME(0) NULL,

    INDEX `Date`(`Date`),
    INDEX `DealType`(`DealType`),
    INDEX `subAffiliateID`(`subAffiliateID`),
    PRIMARY KEY (`merchantID`, `affiliateID`, `traderID`, `transactionID`, `Type`, `Amount`, `Date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_api_n_feeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `apiStaticIP` VARCHAR(120) NOT NULL,
    `apiAccessType` VARCHAR(15) NOT NULL,
    `apiToken` VARCHAR(120) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `createdByUserID` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `outputType` VARCHAR(5) NOT NULL DEFAULT 'XML',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `countries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `code` VARCHAR(5) NOT NULL,
    `spotCode` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`spotCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cron_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastscan` DATETIME(0) NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `merchant_name` VARCHAR(254) NOT NULL,
    `success` INTEGER NOT NULL,
    `reg_total` INTEGER NOT NULL DEFAULT 0,
    `sales_total` INTEGER NOT NULL DEFAULT 0,
    `type` VARCHAR(6) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `merchant_id`(`merchant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cronjobvariables` (
    `Name` VARCHAR(128) NOT NULL,
    `Date` DATETIME(0) NOT NULL,
    `Value` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`Name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dashboard` (
    `Date` DATE NOT NULL,
    `MerchantID` INTEGER NOT NULL,
    `AffiliateID` INTEGER NOT NULL,
    `Impressions` INTEGER NOT NULL,
    `Clicks` INTEGER NOT NULL,
    `Install` INTEGER NOT NULL,
    `Leads` INTEGER NOT NULL,
    `Demo` INTEGER NOT NULL,
    `RealAccount` INTEGER NOT NULL,
    `FTD` INTEGER NOT NULL,
    `FTDAmount` DOUBLE NOT NULL,
    `RawFTD` INTEGER NOT NULL,
    `RawFTDAmount` DOUBLE NOT NULL,
    `Deposits` INTEGER NOT NULL,
    `DepositsAmount` DOUBLE NOT NULL,
    `Bonus` DOUBLE NOT NULL,
    `Withdrawal` DOUBLE NOT NULL,
    `ChargeBack` DOUBLE NOT NULL,
    `NetDeposit` DOUBLE NOT NULL,
    `PNL` DOUBLE NOT NULL,
    `ActiveTrader` INTEGER NOT NULL,
    `Commission` DOUBLE NOT NULL,
    `PendingDeposits` INTEGER NOT NULL,
    `PendingDepositsAmount` DOUBLE NOT NULL,
    `TotalMicroPayments` INTEGER NOT NULL DEFAULT 0,
    `MicroPaymentsAmount` FLOAT NOT NULL DEFAULT 0,
    `Volume` FLOAT NOT NULL DEFAULT 0,

    INDEX `AffiliateID`(`AffiliateID`),
    INDEX `Date`(`Date`),
    INDEX `MerchantID`(`MerchantID`),
    PRIMARY KEY (`Date`, `MerchantID`, `AffiliateID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_install` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ctag` CHAR(254) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `trader_id` VARCHAR(30) NOT NULL,
    `phone` VARCHAR(16) NOT NULL,
    `trader_alias` VARCHAR(254) NOT NULL,
    `type` ENUM('install', 'uninstall') NOT NULL,
    `freeParam` VARCHAR(254) NOT NULL,
    `freeParam2` VARCHAR(150) NOT NULL,
    `freeParam3` VARCHAR(170) NOT NULL,
    `freeParam4` VARCHAR(170) NOT NULL,
    `freeParam5` VARCHAR(170) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `lastUpdate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `platform` VARCHAR(30) NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `couponName` VARCHAR(30) NOT NULL,
    `campaign_id` VARCHAR(50) NULL DEFAULT '',
    `currentDate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `UID`(`uid`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `mer_non_froz_non_dem`(`merchant_id`, `status`, `type`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `profile_id`(`profile_id`),
    INDEX `rdate`(`rdate`),
    INDEX `trader_alias`(`trader_alias`),
    INDEX `trader_id`(`trader_id`),
    INDEX `type`(`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_recycle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trader_id` INTEGER NOT NULL,
    `tranz_id` VARCHAR(40) NOT NULL,
    `recordRdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `merchant_id` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_table` VARCHAR(10) NOT NULL,
    `fields` VARCHAR(400) NOT NULL,

    INDEX `trader_id`(`trader_id`, `merchant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_reg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ctag` CHAR(254) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `trader_id` VARCHAR(30) NOT NULL,
    `sub_trader_id` INTEGER NOT NULL,
    `phone` VARCHAR(16) NOT NULL,
    `trader_alias` VARCHAR(254) NOT NULL,
    `type` ENUM('lead', 'demo', 'real', 'installation') NOT NULL,
    `freeParam` VARCHAR(254) NOT NULL,
    `freeParam2` VARCHAR(150) NOT NULL,
    `freeParam3` VARCHAR(170) NOT NULL,
    `freeParam4` VARCHAR(170) NOT NULL,
    `freeParam5` VARCHAR(170) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `lastUpdate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `platform` VARCHAR(30) NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `saleStatus` VARCHAR(50) NOT NULL,
    `lastSaleNote` VARCHAR(200) NOT NULL,
    `lastSaleNoteDate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `lastTimeActive` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `initialftddate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `initialftdtranzid` VARCHAR(40) NOT NULL,
    `isSelfDeposit` BOOLEAN NOT NULL DEFAULT false,
    `ftdamount` DOUBLE NOT NULL DEFAULT 0,
    `FTDqualificationDate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `traderVolume` DOUBLE NOT NULL,
    `traderTrades` INTEGER NOT NULL,
    `lastStatsRecordDate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `traderValue` DOUBLE NOT NULL,
    `lastDepositRecordDate` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `email` VARCHAR(40) NOT NULL,
    `couponName` VARCHAR(30) NOT NULL,
    `campaign_id` VARCHAR(50) NULL DEFAULT '',
    `dummySource` INTEGER NOT NULL,
    `currentDate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `FTDqualificationDate`(`FTDqualificationDate`),
    INDEX `UID`(`uid`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `mer_non_froz_non_dem`(`merchant_id`, `status`, `type`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `profile_id`(`profile_id`),
    INDEX `rdate`(`rdate`),
    INDEX `sub_trader_id`(`sub_trader_id`),
    INDEX `trader_alias`(`trader_alias`),
    INDEX `trader_id`(`trader_id`),
    INDEX `type`(`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ctag` CHAR(254) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `tranz_id` VARCHAR(80) NOT NULL,
    `trader_id` VARCHAR(30) NOT NULL,
    `sub_trader_id` INTEGER NOT NULL,
    `trader_alias` VARCHAR(254) NOT NULL,
    `type` ENUM('deposit', 'positions', 'revenue', 'bonus', 'withdrawal', 'volume', 'chargeback', 'PNL', 'static') NOT NULL,
    `status` ENUM('won', 'lost', 'closed', 'open', '') NOT NULL DEFAULT '',
    `amount` DOUBLE NOT NULL,
    `original_amount` DOUBLE NOT NULL,
    `positionSum` FLOAT NOT NULL DEFAULT 0,
    `freeParam` VARCHAR(254) NOT NULL,
    `freeParam2` VARCHAR(150) NOT NULL,
    `freeParam3` VARCHAR(170) NOT NULL,
    `freeParam4` VARCHAR(170) NOT NULL,
    `freeParam5` VARCHAR(170) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `campaign_id` VARCHAR(50) NULL DEFAULT '',
    `currency` ENUM('USD', 'AUD', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'ILS', 'JPY', 'NOK', 'NZD', 'RUB', 'SEK', 'ZAR') NOT NULL DEFAULT 'USD',
    `pendingRelationRecord` TINYINT NOT NULL DEFAULT 0,
    `created_by_admin_id` INTEGER NOT NULL,
    `spread` DOUBLE NULL,
    `pnl` DOUBLE NULL,
    `turnover` DOUBLE NULL,
    `dummySource` INTEGER NOT NULL,
    `currentDate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isSelfDeposit` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `mer_trader_id`(`merchant_id`, `trader_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `rdate`(`rdate`),
    INDEX `sub_trader_id`(`sub_trader_id`),
    INDEX `trader_alias`(`trader_alias`),
    INDEX `trader_id`(`trader_id`),
    INDEX `tranz_id`(`tranz_id`),
    INDEX `type`(`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_sales_pending` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ctag` CHAR(254) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `tranz_id` VARCHAR(254) NOT NULL,
    `trader_id` INTEGER NOT NULL,
    `sub_trader_id` INTEGER NOT NULL,
    `trader_alias` VARCHAR(254) NOT NULL,
    `type` ENUM('deposit', 'positions', 'revenue', 'bonus', 'withdrawal', 'volume', 'chargeback', 'PNL') NOT NULL,
    `status` ENUM('won', 'lost', 'closed', 'open', '') NOT NULL DEFAULT '',
    `amount` DOUBLE NOT NULL,
    `original_amount` DOUBLE NOT NULL,
    `positionSum` FLOAT NOT NULL DEFAULT 0,
    `freeParam` VARCHAR(254) NOT NULL,
    `freeParam2` VARCHAR(150) NOT NULL,
    `freeParam3` VARCHAR(170) NOT NULL,
    `freeParam4` VARCHAR(170) NOT NULL,
    `freeParam5` VARCHAR(170) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `uid` VARCHAR(35) NOT NULL DEFAULT '0',
    `currency` ENUM('USD', 'AUD', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'ILS', 'JPY', 'NOK', 'NZD', 'RUB', 'SEK', 'ZAR') NOT NULL DEFAULT 'USD',
    `campaign_id` INTEGER NOT NULL,
    `pendingRelationRecord` TINYINT NOT NULL DEFAULT 0,
    `created_by_admin_id` INTEGER NOT NULL,
    `isSelfDeposit` BOOLEAN NOT NULL DEFAULT false,
    `spread` DOUBLE NULL,
    `pnl` DOUBLE NULL,
    `turnover` DOUBLE NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `mer_trader_id`(`merchant_id`, `trader_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `rdate`(`rdate`),
    INDEX `trader_alias`(`trader_alias`),
    INDEX `trader_id`(`trader_id`),
    INDEX `tranz_id`(`tranz_id`),
    INDEX `type`(`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ctag` CHAR(254) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `tranz_id` VARCHAR(80) NOT NULL,
    `trader_id` VARCHAR(30) NOT NULL,
    `sub_trader_id` INTEGER NOT NULL,
    `trader_alias` VARCHAR(254) NOT NULL,
    `type` ENUM('bets', 'wins', 'jackpot', 'bonuses', 'removed_bonuses', 'bonuses_count', 'removed_bonuses_count', 'Player_loss', 'Player_profit', 'Gross_income', 'Redeemed_bonuses', 'House_correction_revenue', 'House_correction_loss', 'sportsbookcancelledbets', 'static', 'sport_bonuses', 'position') NOT NULL,
    `amount` DOUBLE NOT NULL,
    `freeParam` VARCHAR(254) NOT NULL,
    `freeParam2` VARCHAR(150) NOT NULL,
    `freeParam3` VARCHAR(170) NOT NULL,
    `freeParam4` VARCHAR(170) NOT NULL,
    `freeParam5` VARCHAR(170) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `currency` ENUM('USD', 'AUD', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'ILS', 'JPY', 'NOK', 'NZD', 'RUB', 'SEK', 'ZAR') NULL DEFAULT 'USD',
    `campaign_id` VARCHAR(50) NULL DEFAULT '',
    `spread` DOUBLE NULL,
    `pnl` DOUBLE NULL,
    `turnover` DOUBLE NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `rdate`(`rdate`),
    INDEX `sub_trader_id`(`sub_trader_id`),
    INDEX `trader_alias`(`trader_alias`),
    INDEX `trader_id`(`trader_id`),
    INDEX `tranz_id`(`tranz_id`),
    INDEX `type`(`type`),
    INDEX `type_2`(`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `valid` TINYINT NOT NULL,
    `type` ENUM('Passport_Driving_Licence', 'Company_Verification', 'Address_Verification', 'Agreement', 'Invoice') NOT NULL,
    `doc_status` ENUM('not_reviewed', 'disapproved', 'approved') NOT NULL DEFAULT 'not_reviewed',
    `general_text` MEDIUMTEXT NULL,
    `identity_document_text` MEDIUMTEXT NULL,
    `address_verification_text` MEDIUMTEXT NULL,
    `company_verification_text` MEDIUMTEXT NULL,
    `uploaded_by_admin_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exchange_rates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currKey` VARCHAR(6) NOT NULL,
    `fromCurr` VARCHAR(3) NOT NULL,
    `toCurr` VARCHAR(3) NOT NULL,
    `val` DOUBLE NOT NULL,
    `rate` DOUBLE NOT NULL DEFAULT 0,
    `lastUpdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `lastCheck` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `valid` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`currKey`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fieldssortorder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `fieldName` VARCHAR(50) NOT NULL,
    `productType` VARCHAR(20) NOT NULL,
    `defaultPos` INTEGER NOT NULL,
    `newPos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `language_id` VARCHAR(14) NOT NULL DEFAULT '1',
    `makedefault` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `language_id`(`language_id`),
    INDEX `title`(`title`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ip2country` (
    `ipFROM` INTEGER NOT NULL DEFAULT 0,
    `ipTO` INTEGER NOT NULL DEFAULT 0,
    `countrySHORT` CHAR(2) NOT NULL DEFAULT '',
    `countryLONG` VARCHAR(255) NOT NULL DEFAULT ' ',

    PRIMARY KEY (`ipFROM`, `ipTO`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `languages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `lngCode` CHAR(3) NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `displayText` VARCHAR(35) NOT NULL,
    `textDirection` VARCHAR(3) NOT NULL DEFAULT 'LTR',

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `lngCode`(`lngCode`),
    INDEX `lngCode_2`(`lngCode`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leads_files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `admin_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `create_date` DATETIME(0) NOT NULL,
    `update_date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,
    `errors` INTEGER NOT NULL,
    `filename` VARCHAR(255) NOT NULL,
    `filename_original` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loginhistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('admin', 'manager', 'affiliate', 'advertiser') NOT NULL,
    `error` TINYINT NOT NULL,
    `username` VARCHAR(40) NOT NULL,
    `password` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `login_as_affiliate_by_user_id` INTEGER NOT NULL,
    `affiliate_valid` BOOLEAN NOT NULL,
    `admin_id_force_allow` TINYINT NOT NULL,
    `failureLogin` BOOLEAN NOT NULL DEFAULT false,
    `ip` VARCHAR(26) NOT NULL,
    `refe` VARCHAR(80) NOT NULL,
    `HTTP_USER_AGENT` VARCHAR(150) NOT NULL,
    `REMOTE_ADDR` VARCHAR(26) NOT NULL,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `attempt` VARCHAR(9) NOT NULL,

    INDEX `error`(`error`, `affiliate_id`, `affiliate_valid`, `rdate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `var1` VARCHAR(50) NOT NULL,
    `var2` VARCHAR(50) NOT NULL,
    `var3` VARCHAR(50) NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `flag` VARCHAR(10) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `text` TEXT NOT NULL,
    `ip` VARCHAR(20) NOT NULL,
    `url` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mail_sent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valid` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL,
    `trackingCode` TEXT NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `mail_id` INTEGER NOT NULL,
    `mailCode` VARCHAR(254) NOT NULL,
    `opened` INTEGER NOT NULL,
    `opened_time` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mail_templates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(15) NOT NULL,
    `rdate` DATETIME(0) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `language_id` INTEGER NOT NULL DEFAULT 1,
    `is_advertiser_related` BOOLEAN NOT NULL DEFAULT false,
    `valid` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `mailCode` VARCHAR(254) NOT NULL,
    `text` TEXT NOT NULL,
    `trigger_name` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `language_id`(`language_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `pos` INTEGER NOT NULL,
    `name` VARCHAR(254) NOT NULL,
    `type` ENUM('', 'binary', 'forex', 'sportbook', 'casino') NOT NULL,
    `website` VARCHAR(254) NOT NULL,
    `address` VARCHAR(254) NOT NULL,
    `zipCode` VARCHAR(254) NOT NULL,
    `manager` VARCHAR(254) NOT NULL,
    `country` VARCHAR(254) NOT NULL,
    `email` VARCHAR(254) NOT NULL,
    `contract` VARCHAR(254) NOT NULL,
    `name_1` VARCHAR(254) NOT NULL,
    `mail_1` VARCHAR(254) NOT NULL,
    `phone_1` VARCHAR(254) NOT NULL,
    `name_2` VARCHAR(254) NOT NULL,
    `mail_2` VARCHAR(254) NOT NULL,
    `phone_2` VARCHAR(254) NOT NULL,
    `name_3` VARCHAR(254) NOT NULL,
    `mail_3` VARCHAR(254) NOT NULL,
    `phone_3` VARCHAR(254) NOT NULL,
    `name_4` VARCHAR(254) NOT NULL,
    `mail_4` VARCHAR(254) NOT NULL,
    `phone_4` VARCHAR(254) NOT NULL,
    `name_5` VARCHAR(254) NOT NULL,
    `mail_5` VARCHAR(254) NOT NULL,
    `phone_5` VARCHAR(254) NOT NULL,
    `cpa_amount` DOUBLE NOT NULL,
    `dcpa_amount` DOUBLE NOT NULL,
    `revenue_amount` DOUBLE NOT NULL,
    `cpl_amount` DOUBLE NOT NULL,
    `cpi_amount` DOUBLE NOT NULL,
    `cpc_amount` DOUBLE NOT NULL,
    `pnl_amount` DOUBLE NOT NULL,
    `cpm_amount` DOUBLE NOT NULL,
    `min_cpa_amount` DOUBLE NOT NULL,
    `tier_amount` BOOLEAN NOT NULL DEFAULT false,
    `default_commissions` DOUBLE NOT NULL DEFAULT 0,
    `params` VARCHAR(254) NOT NULL,
    `incomingParam` VARCHAR(20) NOT NULL,
    `incomingParamAlternative` VARCHAR(20) NOT NULL,
    `flashTag` VARCHAR(254) NOT NULL,
    `cron_file` VARCHAR(254) NOT NULL,
    `producttype` VARCHAR(50) NOT NULL,
    `campaignparamname` VARCHAR(25) NOT NULL DEFAULT 'campaignid',
    `campaignid` VARCHAR(30) NOT NULL,
    `campaignispartofparams` BOOLEAN NOT NULL DEFAULT false,
    `LogoURL` VARCHAR(120) NOT NULL,
    `StylingURL` VARCHAR(120) NOT NULL,
    `toAutoRelateCampToAff` BOOLEAN NOT NULL DEFAULT false,
    `apiType` VARCHAR(15) NOT NULL,
    `defaultAffiliateID` INTEGER NOT NULL,
    `APIurl` VARCHAR(200) NOT NULL,
    `APIuser` VARCHAR(40) NOT NULL,
    `APIpass` VARCHAR(40) NOT NULL,
    `api_token2` VARCHAR(60) NOT NULL,
    `API_whiteLabelId` VARCHAR(10) NOT NULL,
    `apiToken` VARCHAR(16) NOT NULL,
    `extraMemberParamName` VARCHAR(30) NOT NULL,
    `extraMemberParamValue` VARCHAR(50) NOT NULL,
    `isMustField` VARCHAR(150) NOT NULL,
    `mustFields` VARCHAR(150) NOT NULL,
    `showDataForAffiliateSince` DATETIME(0) NOT NULL,
    `PaymentColors` VARCHAR(40) NOT NULL,
    `lastSaleStatusUpade` TIMESTAMP(0) NULL,
    `lastSaleStatusUpdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `rev_formula` VARCHAR(100) NOT NULL DEFAULT '{deposits}-({bonus}+{withdrawals}+{chargebacks})',
    `wallet_id` TINYINT NOT NULL,
    `revenue_spread_amount` DOUBLE NOT NULL,
    `positions_rev_share` DOUBLE NOT NULL DEFAULT 0,
    `lots_amount` DOUBLE NOT NULL,
    `qualify_amount` FLOAT NULL DEFAULT 0,
    `qualify_type` ENUM('trades', 'volume', 'totalmd', 'lots', '') NULL,
    `subbrandof` VARCHAR(20) NOT NULL,
    `showLeadsNdemo` BOOLEAN NOT NULL DEFAULT true,
    `lowestAmountPendingDeposit` FLOAT NOT NULL,
    `postbackIPlimit` VARCHAR(90) NOT NULL,
    `randomKey` VARCHAR(6) NOT NULL,
    `subbrands` VARCHAR(20) NOT NULL,
    `isSelfManaged` TINYINT NOT NULL DEFAULT 0,
    `cronjoburl` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `name_2`(`name`),
    INDEX `cpa_amount`(`cpa_amount`),
    INDEX `cpc_amount`(`cpc_amount`),
    INDEX `cpl_amount`(`cpl_amount`),
    INDEX `cron_file`(`cron_file`),
    INDEX `min_cpa_amount`(`min_cpa_amount`),
    INDEX `name`(`name`),
    INDEX `params`(`params`),
    INDEX `revenue_amount`(`revenue_amount`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants_affiliate_level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `amount` DECIMAL(10, 4) NOT NULL,

    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `merchant_id`(`merchant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants_creative` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `last_update` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `language_id` INTEGER NOT NULL,
    `promotion_id` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `type` ENUM('flash', 'image', 'link', 'widget', 'script', 'mail', 'mobilesplash', 'mobileleader', 'content', 'coupon', 'html5') NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `file` VARCHAR(254) NOT NULL,
    `url` VARCHAR(254) NOT NULL,
    `iframe_url` VARCHAR(254) NOT NULL,
    `alt` VARCHAR(254) NOT NULL,
    `scriptCode` LONGTEXT NOT NULL,
    `affiliate_id` INTEGER NOT NULL DEFAULT 0,
    `category_id` INTEGER NOT NULL,
    `featured` TINYINT NOT NULL DEFAULT 0,
    `affiliateReady` TINYINT NOT NULL DEFAULT 0,
    `isOverrideTrackingLink` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    INDEX `category_id`(`category_id`),
    INDEX `language_id`(`language_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `promotion_id`(`promotion_id`),
    INDEX `type`(`type`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants_creative_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryname` VARCHAR(25) NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `merchant_id` INTEGER NOT NULL,
    `created_by_user_id` INTEGER NOT NULL,

    INDEX `merchant_id`(`merchant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants_creative_stats` (
    `Date` DATE NOT NULL,
    `AffiliateID` INTEGER NOT NULL,
    `MerchantID` INTEGER NOT NULL,
    `BannerID` INTEGER NOT NULL,
    `Impressions` INTEGER NOT NULL DEFAULT 0,
    `Clicks` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`Date`, `AffiliateID`, `MerchantID`, `BannerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `merchants_promotions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `group_id` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `network_bonus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valid` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `group_id` INTEGER NOT NULL,
    `min_ftd` INTEGER NOT NULL,
    `bonus_amount` DOUBLE NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `status` ENUM('approved', 'pending', 'canceled') NOT NULL,
    `reportType` VARCHAR(254) NOT NULL,
    `month` VARCHAR(2) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `paymentID` VARCHAR(50) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `trader_id` VARCHAR(254) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `deposit` DOUBLE NOT NULL,
    `withdrawal` DOUBLE NOT NULL,
    `reason` VARCHAR(254) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `month_3`(`month`),
    INDEX `paymentID`(`paymentID`),
    INDEX `trader_id`(`trader_id`),
    INDEX `year`(`year`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments_paid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `month` VARCHAR(2) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `paid` INTEGER NOT NULL,
    `paymentID` VARCHAR(50) NOT NULL,
    `transaction_id` VARCHAR(254) NOT NULL,
    `notes` TEXT NOT NULL,
    `extras` TEXT NOT NULL,
    `total` DOUBLE NOT NULL,
    `sentMail` INTEGER NOT NULL,
    `usedCredit` DOUBLE NOT NULL,
    `creditLeft` DOUBLE NOT NULL,
    `amount_gap_from_previous_month` DOUBLE NOT NULL DEFAULT 0,
    `credit_gap_from_previous_month` DOUBLE NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `paymentID`(`paymentID`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `month`(`month`),
    INDEX `paid`(`paid`),
    INDEX `year`(`year`),
    UNIQUE INDEX `month_2`(`month`, `year`, `affiliate_id`, `paymentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissionprofile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `defaultViewForDealType` ENUM('', 'CPA', 'DCPA', 'CPL', 'REV', 'None') NOT NULL DEFAULT '',
    `name` VARCHAR(18) NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `affiliate_id` INTEGER NOT NULL DEFAULT 0,
    `reportsPermissions` VARCHAR(300) NOT NULL,
    `fieldsPermissions` VARCHAR(300) NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `created_by_admin_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissionsdescription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(15) NOT NULL,
    `description` VARCHAR(60) NOT NULL,
    `type` ENUM('reports', 'fields') NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pixel_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateTime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `firedUrl` VARCHAR(550) NOT NULL,
    `pixelCode` INTEGER NOT NULL,
    `pixelResponse` VARCHAR(150) NOT NULL DEFAULT '',
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pixel_monitor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('lead', 'account', 'sale', 'qftd') NOT NULL,
    `method` ENUM('post', 'get', 'client') NOT NULL DEFAULT 'post',
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `valid` INTEGER NOT NULL DEFAULT 1,
    `affiliate_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `pixelCode` TEXT NOT NULL,
    `totalFired` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postback_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `flag` ENUM('red', 'yellow', 'green') NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `text` TEXT NOT NULL,
    `ip` VARCHAR(20) NOT NULL,
    `url` VARCHAR(300) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_affiliates_deals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `dealType` ENUM('dcpa', 'min_deposit', 'cpa', 'cplaccount', 'cpllead', 'cpc', 'cpi') NOT NULL,
    `amount` DOUBLE NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `tier_amount` VARCHAR(254) NOT NULL,
    `tier_pcpa` DOUBLE NOT NULL,
    `tier_type` ENUM('ftd_amount', 'ftd_count', 'cpl_count', 'rev_share', '') NOT NULL DEFAULT '',

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `dealType`(`dealType`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_cats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `parent_id` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `cat_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL DEFAULT 0,
    `affiliate_id` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `text` TEXT NOT NULL,
    `url` VARCHAR(254) NOT NULL,
    `cplaccount` DOUBLE NOT NULL,
    `cpi` DOUBLE NOT NULL,
    `cpc` DOUBLE NOT NULL,
    `cpa` DOUBLE NOT NULL,
    `cpllead` DOUBLE NOT NULL,
    `languages` VARCHAR(254) NOT NULL,
    `image` VARCHAR(254) NOT NULL,
    `randomKey` VARCHAR(5) NOT NULL,
    `postbackIPlimit` VARCHAR(90) NOT NULL,
    `param` VARCHAR(20) NOT NULL,
    `productAPICode` VARCHAR(30) NOT NULL,
    `exportUniqueIdWithName` VARCHAR(15) NOT NULL,
    `min_deposit` DOUBLE NOT NULL DEFAULT 0,
    `terms` VARCHAR(40) NOT NULL,
    `featured` TINYINT NOT NULL DEFAULT 0,
    `countries_allowed` VARCHAR(900) NOT NULL,
    `terms_and_conditions` VARCHAR(100) NOT NULL,
    `isRTL` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(30) NOT NULL,
    `ignoreOtherInternalParameters` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producttitles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `source` VARCHAR(254) NOT NULL,
    `Casino` VARCHAR(25) NOT NULL,
    `SportsBetting` VARCHAR(25) NOT NULL,
    `BinaryOption` VARCHAR(25) NOT NULL,
    `Forex` VARCHAR(25) NOT NULL,
    `Download` VARCHAR(25) NOT NULL,
    `Gaming` VARCHAR(25) NOT NULL,
    `Mobile` VARCHAR(25) NOT NULL,
    `Ecommerce` VARCHAR(25) NOT NULL,
    `Dating` VARCHAR(25) NOT NULL,
    `Rummy` VARCHAR(25) NOT NULL,
    `Bingo` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reportreferral` (
    `Date` DATE NOT NULL,
    `ReferUrlHash` VARCHAR(32) NOT NULL,
    `ReferUrl` VARCHAR(512) NOT NULL,
    `MerchantID` INTEGER NOT NULL,
    `LastClickIp` VARCHAR(128) NOT NULL,
    `LastClickCountry` VARCHAR(2) NOT NULL,
    `AffiliateID` INTEGER NOT NULL,
    `ProfileID` INTEGER NOT NULL,
    `AllTimeClicks` INTEGER NOT NULL,
    `AllTimeViews` INTEGER NOT NULL,
    `Leads` INTEGER NOT NULL,
    `Demo` INTEGER NOT NULL,
    `Accounts` INTEGER NOT NULL,
    `FTD` INTEGER NOT NULL,
    `FTDAmount` DECIMAL(10, 2) NOT NULL,
    `RawFTD` INTEGER NOT NULL,
    `RawFTDAmount` DECIMAL(10, 2) NOT NULL,
    `TotalDeposits` INTEGER NOT NULL,
    `DepositsAmount` DECIMAL(10, 2) NOT NULL,
    `Volume` DECIMAL(10, 2) NOT NULL,
    `BonusAmount` DECIMAL(10, 2) NOT NULL,
    `WithdrawalAmount` DECIMAL(10, 2) NOT NULL,
    `ChargebackAmount` DECIMAL(10, 2) NOT NULL,
    `PNL` DECIMAL(10, 2) NOT NULL,
    `Commissions` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`Date`, `ReferUrlHash`, `MerchantID`, `AffiliateID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reports_fields` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userlevel` VARCHAR(10) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `location` VARCHAR(40) NOT NULL,
    `removed_fields` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reporttraders` (
    `Date` DATE NOT NULL,
    `TraderID` VARCHAR(60) NOT NULL,
    `CampaignID` VARCHAR(60) NOT NULL,
    `TraderAlias` VARCHAR(80) NOT NULL,
    `Email` VARCHAR(250) NOT NULL,
    `RegistrationDate` VARCHAR(20) NOT NULL,
    `TraderStatus` VARCHAR(30) NOT NULL,
    `Country` VARCHAR(60) NOT NULL,
    `AffiliateID` INTEGER NOT NULL,
    `AffiliateUsername` VARCHAR(250) NOT NULL,
    `MerchantID` INTEGER NOT NULL,
    `MerchantName` VARCHAR(250) NOT NULL,
    `CreativeID` INTEGER NULL,
    `CreativeName` VARCHAR(250) NOT NULL,
    `Type` VARCHAR(80) NOT NULL,
    `CreativeLanguage` VARCHAR(80) NOT NULL,
    `ProfileID` VARCHAR(80) NOT NULL,
    `ProfileName` VARCHAR(250) NOT NULL,
    `Param` VARCHAR(250) NULL,
    `Param2` VARCHAR(250) NULL,
    `Param3` VARCHAR(250) NOT NULL,
    `Param4` VARCHAR(250) NOT NULL,
    `Param5` VARCHAR(250) NOT NULL,
    `TransactionID` VARCHAR(250) NOT NULL,
    `FirstDeposit` VARCHAR(20) NOT NULL,
    `FTDAmount` VARCHAR(80) NOT NULL,
    `SelfDeposit` VARCHAR(80) NOT NULL,
    `TotalNextDeposits` VARCHAR(80) NOT NULL,
    `NextDeposits` VARCHAR(80) NOT NULL,
    `TotalMicroPayments` VARCHAR(80) NOT NULL,
    `MicroPaymentsAmount` VARCHAR(80) NOT NULL,
    `TotalDeposits` VARCHAR(80) NOT NULL,
    `DepositAmount` VARCHAR(80) NOT NULL,
    `Volume` VARCHAR(80) NOT NULL,
    `BonusAmount` VARCHAR(80) NOT NULL,
    `WithdrawalAmount` VARCHAR(80) NOT NULL,
    `ChargeBackAmount` VARCHAR(80) NOT NULL,
    `NetDeposit` VARCHAR(80) NOT NULL,
    `Trades` VARCHAR(80) NOT NULL,
    `QualificationDate` VARCHAR(20) NOT NULL,
    `PNL` VARCHAR(80) NOT NULL,
    `SaleStatus` VARCHAR(250) NOT NULL,
    `LastTimeActive` VARCHAR(250) NOT NULL,
    `Commission` VARCHAR(60) NOT NULL,
    `AdminNotes` VARCHAR(250) NOT NULL,
    `ClickDetails` VARCHAR(80) NOT NULL,

    INDEX `AffiliateID`(`AffiliateID`),
    INDEX `CampaignID`(`CampaignID`),
    INDEX `Country`(`Country`),
    INDEX `CreativeID`(`CreativeID`),
    INDEX `Date`(`Date`),
    INDEX `Email`(`Email`),
    INDEX `MerchantID`(`MerchantID`),
    INDEX `Param`(`Param`),
    INDEX `Param2`(`Param2`),
    INDEX `TraderAlias`(`TraderAlias`),
    INDEX `TraderID`(`TraderID`),
    PRIMARY KEY (`TraderID`, `AffiliateID`, `MerchantID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `showGroupValuesOnAffReg` BOOLEAN NOT NULL DEFAULT false,
    `showGroupsLanguages` VARCHAR(15) NOT NULL,
    `qrcode` BOOLEAN NOT NULL DEFAULT true,
    `facebookshare` BOOLEAN NOT NULL DEFAULT true,
    `webTitle` VARCHAR(254) NOT NULL,
    `webMail` VARCHAR(254) NOT NULL,
    `mail_server` VARCHAR(254) NOT NULL,
    `mail_replyTo` VARCHAR(50) NOT NULL,
    `mail_username` VARCHAR(254) NOT NULL,
    `mail_password` VARCHAR(254) NOT NULL,
    `fromName` VARCHAR(25) NOT NULL,
    `pending` INTEGER NOT NULL,
    `creative_iframe` INTEGER NOT NULL,
    `creative_mobile_leader` INTEGER NOT NULL,
    `creative_mobile_splash` INTEGER NOT NULL,
    `creative_email` INTEGER NOT NULL,
    `creative_html5` BOOLEAN NOT NULL DEFAULT true,
    `deal_cpl` INTEGER NOT NULL,
    `deal_cpm` INTEGER NOT NULL,
    `deal_pnl` BOOLEAN NOT NULL DEFAULT false,
    `deal_cpc` INTEGER NOT NULL,
    `deal_tier` INTEGER NOT NULL,
    `deal_revshare_spread` INTEGER NOT NULL,
    `deal_revshare` INTEGER NOT NULL,
    `export` INTEGER NOT NULL,
    `terms_link` VARCHAR(254) NOT NULL,
    `multi` INTEGER NOT NULL,
    `multi_languages` VARCHAR(254) NOT NULL,
    `sub_com` INTEGER NOT NULL,
    `show_deposit` INTEGER NOT NULL,
    `revenue_formula` VARCHAR(254) NOT NULL,
    `qualify_type` ENUM('trades', 'volume') NOT NULL,
    `qualify_amount` INTEGER NOT NULL,
    `analyticsCode` TEXT NOT NULL,
    `isNetwork` INTEGER NOT NULL DEFAULT 0,
    `reportsToHide` VARCHAR(100) NOT NULL,
    `showMiminumDepositOnAffAccount` INTEGER NOT NULL DEFAULT 1,
    `defaultTimeFrameForAffiliate` VARCHAR(15) NOT NULL,
    `defaultTimeFrameForAffiliateReports` VARCHAR(15) NOT NULL,
    `multiMerchantsPerTrader` BOOLEAN NOT NULL DEFAULT false,
    `hideNetRevenueForNonRevDeals` BOOLEAN NOT NULL DEFAULT false,
    `hideFTDamountForCPADeals` BOOLEAN NOT NULL DEFAULT false,
    `SMTPSecure` VARCHAR(10) NOT NULL,
    `SMTPAuth` BOOLEAN NOT NULL DEFAULT true,
    `mail_Port` INTEGER NOT NULL DEFAULT 25,
    `availablePayments` VARCHAR(120) NOT NULL,
    `availableQualifications` VARCHAR(120) NOT NULL,
    `autoRelateSubAffiliate` BOOLEAN NOT NULL DEFAULT false,
    `dashBoardMainTitle` VARCHAR(50) NOT NULL,
    `showRealFtdToAff` BOOLEAN NOT NULL DEFAULT false,
    `show_credit_as_default_for_new_affiliates` TINYINT NULL,
    `showCreditForAM` BOOLEAN NOT NULL DEFAULT true,
    `blockAffiliateLogin` BOOLEAN NULL DEFAULT false,
    `showAllCreativesToAffiliate` BOOLEAN NOT NULL DEFAULT false,
    `showVolumeForAffiliate` BOOLEAN NOT NULL DEFAULT true,
    `showAffiliateRiskForAffiliate` BOOLEAN NOT NULL DEFAULT true,
    `newsletterCheckboxCaption` VARCHAR(150) NOT NULL DEFAULT 'Yes, I would like to receive the Affiliate newsletter',
    `affiliateNewsletterCheckboxValue` BOOLEAN NOT NULL DEFAULT false,
    `utmtags` VARCHAR(150) NOT NULL,
    `showDCPAonAffiliateComStruc` BOOLEAN NOT NULL DEFAULT true,
    `hideWithdrawalAmountForCPADeals` BOOLEAN NOT NULL DEFAULT true,
    `hideBonusAmountForCPADeals` BOOLEAN NOT NULL DEFAULT true,
    `hideDepositAmountForCPADeals` BOOLEAN NOT NULL DEFAULT true,
    `hideTotalDepositForCPADeals` BOOLEAN NOT NULL DEFAULT true,
    `showDealTypeHistoryToAM` BOOLEAN NOT NULL DEFAULT true,
    `hideFrozenOnCPAdeals` BOOLEAN NOT NULL DEFAULT false,
    `AllowDealChangesByManager` BOOLEAN NOT NULL DEFAULT true,
    `autoRelateNewAffiliateToAllMerchants` TINYINT NOT NULL DEFAULT 0,
    `emailFooterImageURL` VARCHAR(255) NOT NULL,
    `emailHeaderImageURL` VARCHAR(255) NOT NULL,
    `rowsNumberAfterSearch` INTEGER NOT NULL,
    `emailSignature` VARCHAR(1000) NOT NULL,
    `hideDrillDownOnInvoiceForAffiliatesWithNonRevDeals` INTEGER NOT NULL DEFAULT 0,
    `showPositionsRevShareDeal` INTEGER NOT NULL DEFAULT 0,
    `dateOfMonthlyPayment` VARCHAR(10) NOT NULL DEFAULT '15th',
    `extraAgreement2Name` VARCHAR(30) NOT NULL,
    `extraAgreement2Link` VARCHAR(100) NOT NULL,
    `extraAgreement3Name` VARCHAR(30) NOT NULL,
    `extraAgreement3Link` VARCHAR(100) NOT NULL,
    `availableCurrencies` VARCHAR(50) NOT NULL,
    `forceParamsForTracker` VARCHAR(50) NOT NULL,
    `showDocumentsModule` BOOLEAN NOT NULL DEFAULT false,
    `showRequierdDocsOnAffiliateDash` BOOLEAN NOT NULL DEFAULT true,
    `AskDocTypeCompany` BOOLEAN NOT NULL DEFAULT false,
    `AskDocTypeAddress` BOOLEAN NOT NULL DEFAULT false,
    `AskDocTypePassport` BOOLEAN NOT NULL DEFAULT false,
    `AskDocSentence` VARCHAR(150) NOT NULL,
    `hideMarketingSectionOnAffiliateRegPage` BOOLEAN NOT NULL DEFAULT false,
    `hideInvoiceSectionOnAffiliateRegPage` BOOLEAN NOT NULL DEFAULT false,
    `affiliateLoginImage` VARCHAR(100) NOT NULL,
    `adminLoginImage` VARCHAR(100) NOT NULL,
    `AllowAffiliateDuplicationOnCampaignRelation` BOOLEAN NOT NULL DEFAULT false,
    `ShowIMUserOnAffiliatesList` BOOLEAN NOT NULL DEFAULT false,
    `introducingBrokerInterface` BOOLEAN NOT NULL DEFAULT false,
    `hideCountriesOnRegistration` VARCHAR(900) NOT NULL,
    `ShowEmailsOnTraderReportForAffiliate` BOOLEAN NOT NULL DEFAULT false,
    `ShowEmailsOnTraderReportForAdmin` BOOLEAN NOT NULL DEFAULT false,
    `blockAccessForManagerAndAdmins` BOOLEAN NOT NULL DEFAULT false,
    `allowCapthaOnMerchantReset` BOOLEAN NOT NULL DEFAULT false,
    `allowCapthaOnMerchantReg` BOOLEAN NOT NULL DEFAULT false,
    `allowCapthaOnReg` BOOLEAN NOT NULL DEFAULT false,
    `allowCapthaOnReset` BOOLEAN NOT NULL DEFAULT false,
    `combinedPixelOption` VARCHAR(50) NOT NULL DEFAULT '-lead|account|sale',
    `CouponTrackerIsStrongerThanCtag` BOOLEAN NOT NULL DEFAULT true,
    `apiAccessType` VARCHAR(40) NOT NULL,
    `apiStaticIP` VARCHAR(20) NOT NULL,
    `apiToken` VARCHAR(30) NOT NULL,
    `ShowGraphOnDashBoards` BOOLEAN NOT NULL DEFAULT true,
    `affiliateRegistrationPixel` VARCHAR(800) NOT NULL,
    `def_qualify_type_for_affiliates` BOOLEAN NOT NULL DEFAULT false,
    `showTitleOnLoginPage` BOOLEAN NOT NULL DEFAULT true,
    `secondaryPoweredByLogo` VARCHAR(90) NOT NULL,
    `secondaryPoweredByLogoHrefUrl` VARCHAR(90) NOT NULL,
    `hidePoweredByABLogo` BOOLEAN NOT NULL DEFAULT false,
    `brandsPoweredbyText` VARCHAR(220) NOT NULL,
    `logoPath` VARCHAR(80) NOT NULL,
    `billingLogoPath` VARCHAR(80) NOT NULL,
    `faviconPath` VARCHAR(80) NOT NULL DEFAULT '/images/favicon.ico',
    `exportAffiliateIDonTrackerFieldName` VARCHAR(12) NOT NULL DEFAULT '',
    `exportProfileNameToTrackerFieldName` VARCHAR(15) NOT NULL DEFAULT '',
    `numberOfFailureLoginsAttempts` INTEGER NOT NULL,
    `sitebaseurl` VARCHAR(80) NOT NULL,
    `isSmtpDebugMode` BOOLEAN NOT NULL DEFAULT false,
    `showParamTwoOnReports` BOOLEAN NOT NULL DEFAULT false,
    `isOffice365` TINYINT NOT NULL DEFAULT 0,
    `chartTheme` VARCHAR(15) NOT NULL,
    `hideBrandsDescriptionfromAffiliateFooter` BOOLEAN NOT NULL DEFAULT false,
    `hideCommissionOnTraderReportForRevDeal` BOOLEAN NOT NULL DEFAULT true,
    `defaultTrackingUrl` VARCHAR(100) NOT NULL,
    `paidStatusBGColor` VARCHAR(15) NOT NULL,
    `pendingStatusBGColor` VARCHAR(15) NOT NULL,
    `allowDeleteCRMnoteForManager` BOOLEAN NOT NULL DEFAULT true,
    `exportCreativeNameWithParam` VARCHAR(12) NOT NULL,
    `isBasicVer` BOOLEAN NOT NULL DEFAULT false,
    `cronUrls` VARCHAR(200) NOT NULL,
    `mustFields` VARCHAR(150) NOT NULL,
    `login_session_duration` INTEGER NOT NULL,
    `exportLangCreativeNameWithParam` BOOLEAN NOT NULL DEFAULT true,
    `displayLastMessageFieldsOnReports` BOOLEAN NOT NULL DEFAULT true,
    `IBpushLeadOnRegistrationUrl` VARCHAR(180) NOT NULL,
    `def_profilePermissionsForAffiliate` BOOLEAN NOT NULL DEFAULT false,
    `cronRecordsTimeDif` INTEGER NOT NULL DEFAULT 0,
    `ShowAffiliateTypes` BOOLEAN NOT NULL DEFAULT false,
    `lastClicksCronJobRunningDate` TIMESTAMP(0) NULL,
    `qualifiedCommissionOnCPAonly` BOOLEAN NOT NULL DEFAULT false,
    `hidePendingProcessHighAmountDeposit` TINYINT NOT NULL DEFAULT 1,
    `AllowManagerEditrCreative` BOOLEAN NOT NULL DEFAULT true,
    `showAgreementsModule` BOOLEAN NOT NULL DEFAULT false,
    `showInvoiceModule` INTEGER NOT NULL DEFAULT 0,
    `pendingDepositsAmountLimit` INTEGER NOT NULL DEFAULT 0,
    `showProductsPlace` BOOLEAN NOT NULL DEFAULT false,
    `BlockLoginUntillEmailVerification` TINYINT NOT NULL DEFAULT 0,
    `ShowNextDepositsColumn` BOOLEAN NOT NULL DEFAULT true,
    `showCampaignOnTraderReport` TINYINT NOT NULL DEFAULT 0,
    `AllowSecuredTrackingCode` BOOLEAN NOT NULL DEFAULT false,
    `captureAffiliatesRegistration` TINYINT NOT NULL DEFAULT 0,
    `affiliateStaticReportMonths` INTEGER NOT NULL DEFAULT 2,
    `currency` VARCHAR(3) NOT NULL DEFAULT '$',
    `ShowOnlyFeaturedCreativesWhenGotSome` TINYINT NOT NULL DEFAULT 0,
    `showProductsPlaceToManager` TINYINT NOT NULL DEFAULT 0,
    `hideSubAffiliation` TINYINT NOT NULL DEFAULT 0,
    `showDeskNameOnAffiliateDashboard` BOOLEAN NOT NULL DEFAULT true,
    `writeFinalTrackingUrlToLog` BOOLEAN NOT NULL DEFAULT false,
    `systemCompanyDetails` VARCHAR(500) NOT NULL,
    `merchants_terms_link` VARCHAR(254) NOT NULL,
    `ShowPhonesOnTraderReportForAdmin` BOOLEAN NOT NULL DEFAULT false,
    `deal_geoLocation` BOOLEAN NOT NULL DEFAULT false,
    `pnlTable` VARCHAR(20) NOT NULL,
    `ShowQualificationOnChart` BOOLEAN NOT NULL DEFAULT true,
    `ShowQualificationOnChartSince` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
    `hasContinuousyCommissionType` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `id`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `short_urls` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `long_url` VARCHAR(610) NOT NULL,
    `short_code` VARBINARY(6) NOT NULL,
    `short_urls` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `counter` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    INDEX `short_code`(`short_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stats_banners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATE NOT NULL,
    `ctag` CHAR(15) NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `clicks` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`),
    INDEX `creative_id`(`banner_id`),
    INDEX `ctag`(`ctag`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `profile_id`(`profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_banners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `last_update` DATETIME(0) NOT NULL,
    `valid` INTEGER NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `language_id` INTEGER NOT NULL,
    `promotion_id` INTEGER NOT NULL,
    `title` VARCHAR(254) NOT NULL,
    `type` ENUM('flash', 'image') NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `file` VARCHAR(254) NOT NULL,
    `url` VARCHAR(254) NOT NULL,
    `alt` VARCHAR(254) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `language_id`(`language_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `promotion_id`(`promotion_id`),
    INDEX `type`(`type`),
    INDEX `valid`(`valid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL,
    `ctag` VARCHAR(255) NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `clicks` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_id`(`banner_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trackerconversion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `affiliate_id` INTEGER NOT NULL,
    `uid` VARCHAR(55) NOT NULL,
    `DynamicTracker` VARCHAR(200) NOT NULL,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `affiliate_id`(`affiliate_id`, `uid`),
    INDEX `uid`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traders_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valid` INTEGER NOT NULL,
    `added_by` INTEGER NOT NULL,
    `rdate` DATETIME(0) NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `trader_id` INTEGER NOT NULL,
    `revenue` DOUBLE NOT NULL,
    `admin_revenue` DOUBLE NOT NULL,
    `status` ENUM('revenue', 'pending', 'fraud', 'chargeback', 'duplicates', 'withdrawal', 'other') NOT NULL,
    `notes` TEXT NOT NULL,
    `calReport` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `merchant_id_2`(`merchant_id`),
    INDEX `trader_id`(`trader_id`),
    UNIQUE INDEX `merchant_id`(`merchant_id`, `trader_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traffic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `unixRdate` INTEGER NOT NULL,
    `ctag` VARCHAR(85) NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `ip` VARCHAR(35) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `language_id` INTEGER NOT NULL,
    `promotion_id` INTEGER NOT NULL,
    `last_update` DATETIME(0) NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `title` VARCHAR(254) NOT NULL,
    `bannerType` ENUM('', 'flash', 'image', 'text') NOT NULL,
    `type` ENUM('sub', 'traffic', 'product') NOT NULL DEFAULT 'traffic',
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `file` VARCHAR(100) NOT NULL,
    `url` VARCHAR(200) NOT NULL,
    `alt` VARCHAR(100) NOT NULL,
    `platform` ENUM('', 'desktop', 'tablet', 'mobile') NOT NULL,
    `os` VARCHAR(100) NOT NULL,
    `osVersion` VARCHAR(50) NOT NULL,
    `browser` VARCHAR(40) NOT NULL,
    `broswerVersion` VARCHAR(20) NOT NULL,
    `userAgent` VARCHAR(100) NOT NULL,
    `country_id` VARCHAR(2) NOT NULL,
    `refer_url` VARCHAR(254) NOT NULL,
    `param` VARCHAR(254) NOT NULL,
    `param2` VARCHAR(254) NOT NULL,
    `param3` VARCHAR(170) NOT NULL,
    `param4` VARCHAR(170) NOT NULL,
    `param5` VARCHAR(170) NOT NULL,
    `views` INTEGER NOT NULL,
    `clicks` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `affiliate_id`(`affiliate_id`),
    INDEX `banner_merchant`(`merchant_id`, `banner_id`),
    INDEX `merchant_id`(`merchant_id`),
    INDEX `product_id`(`product_id`),
    INDEX `rdate`(`rdate`),
    INDEX `uid`(`uid`),
    INDEX `unixRdate`(`unixRdate`),
    INDEX `unixdate`(`unixRdate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traffic2` (
    `id` INTEGER NOT NULL DEFAULT 0,
    `rdate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `unixRdate` INTEGER NOT NULL,
    `ctag` VARCHAR(85) NOT NULL,
    `uid` VARCHAR(35) NOT NULL,
    `ip` VARCHAR(35) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `affiliate_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,
    `merchant_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `language_id` INTEGER NOT NULL,
    `promotion_id` INTEGER NOT NULL,
    `last_update` DATETIME(0) NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `title` VARCHAR(254) NOT NULL,
    `bannerType` ENUM('', 'flash', 'image', 'text') NOT NULL,
    `type` ENUM('sub', 'traffic', 'product') NOT NULL DEFAULT 'traffic',
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `file` VARCHAR(100) NOT NULL,
    `url` VARCHAR(200) NOT NULL,
    `alt` VARCHAR(100) NOT NULL,
    `platform` ENUM('', 'desktop', 'tablet', 'mobile') NOT NULL,
    `os` VARCHAR(100) NOT NULL,
    `osVersion` VARCHAR(50) NOT NULL,
    `browser` VARCHAR(40) NOT NULL,
    `broswerVersion` VARCHAR(20) NOT NULL,
    `userAgent` VARCHAR(100) NOT NULL,
    `country_id` VARCHAR(2) NOT NULL,
    `refer_url` VARCHAR(254) NOT NULL,
    `param` VARCHAR(254) NOT NULL,
    `param2` VARCHAR(254) NOT NULL,
    `param3` VARCHAR(170) NOT NULL,
    `param4` VARCHAR(170) NOT NULL,
    `param5` VARCHAR(170) NOT NULL,
    `views` INTEGER NOT NULL,
    `clicks` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `translate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `source` VARCHAR(254) NOT NULL,
    `langENG` VARCHAR(254) NOT NULL,
    `langRUS` VARCHAR(254) NOT NULL,
    `langGER` VARCHAR(254) NOT NULL,
    `langFRA` VARCHAR(254) NOT NULL,
    `langITA` VARCHAR(254) NOT NULL,
    `langESP` VARCHAR(254) NOT NULL,
    `langHEB` VARCHAR(254) NOT NULL,
    `langARA` VARCHAR(254) NOT NULL,
    `langCHI` VARCHAR(254) NOT NULL,
    `langPOR` VARCHAR(254) NOT NULL,
    `langJAP` VARCHAR(254) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `source`(`source`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_firewall` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `set_by_user_id` INTEGER NOT NULL,
    `IPs` VARCHAR(254) NOT NULL,
    `valid` TINYINT NOT NULL DEFAULT 0,
    `type` ENUM('traffic', 'login', 'all', '') NOT NULL,
    `comment` VARCHAR(254) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_reports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rdate` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `level` VARCHAR(15) NOT NULL,
    `report_name` VARCHAR(50) NOT NULL,
    `url` TEXT NOT NULL,
    `report` VARCHAR(15) NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `level`(`level`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

