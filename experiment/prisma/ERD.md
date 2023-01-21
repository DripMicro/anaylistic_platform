```mermaid
erDiagram

        loginhistory_type {
            admin admin
manager manager
affiliate affiliate
advertiser advertiser
        }
    


        permissionprofile_defaultViewForDealType {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
CPA CPA
DCPA DCPA
CPL CPL
REV REV
None None
        }
    


        pixel_monitor_type {
            lead lead
account account
sale sale
qftd qftd
        }
    


        payments_details_status {
            approved approved
pending pending
canceled canceled
        }
    


        pixel_monitor_method {
            post post
get get
client client
        }
    


        postback_logs_flag {
            red red
yellow yellow
green green
        }
    


        chart_data_level {
            admin admin
manager manager
affiliate affiliate
advertiser advertiser
        }
    


        permissionsdescription_type {
            reports reports
fields fields
        }
    


        affiliates_deals_dealType {
            dcpa dcpa
min_cpa min_cpa
cpa cpa
revenue revenue
cpl cpl
cpc cpc
cpm cpm
tier tier
positions_rev_share positions_rev_share
revenue_spread revenue_spread
lots lots
pnl pnl
cpi cpi
        }
    


        merchants_type {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
binary binary
forex forex
sportbook sportbook
casino casino
        }
    


        products_affiliates_deals_dealType {
            dcpa dcpa
min_deposit min_deposit
cpa cpa
cplaccount cplaccount
cpllead cpllead
cpc cpc
cpi cpi
        }
    


        users_firewall_type {
            traffic traffic
login login
all all
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    


        apicredentials_type {
            spot spot
fxglobe fxglobe
tf tf
        }
    


        documents_type {
            Passport_Driving_Licence Passport_Driving_Licence
Company_Verification Company_Verification
Address_Verification Address_Verification
Agreement Agreement
Invoice Invoice
        }
    


        admins_level {
            admin admin
merchant merchant
manager manager
advertiser advertiser
        }
    


        documents_doc_status {
            not_reviewed not_reviewed
disapproved disapproved
approved approved
        }
    


        affiliates_tickets_status {
            open open
proccess proccess
waiting waiting
close close
        }
    


        traders_tag_status {
            revenue revenue
pending pending
fraud fraud
chargeback chargeback
duplicates duplicates
withdrawal withdrawal
other other
        }
    


        sub_banners_type {
            flash flash
image image
        }
    


        affiliates_deals_tier_type {
            ftd_amount ftd_amount
ftd_count ftd_count
cpl_count cpl_count
rev_share rev_share
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    


        affiliates_notes_status {
            open open
inprocess inprocess
closed closed
        }
    


        merchants_creative_type {
            flash flash
image image
link link
widget widget
script script
mail mail
mobilesplash mobilesplash
mobileleader mobileleader
content content
coupon coupon
html5 html5
        }
    


        products_affiliates_deals_tier_type {
            ftd_amount ftd_amount
ftd_count ftd_count
cpl_count cpl_count
rev_share rev_share
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    


        data_install_type {
            install install
uninstall uninstall
        }
    


        data_reg_type {
            lead lead
demo demo
real real
installation installation
        }
    


        data_sales_type {
            deposit deposit
positions positions
revenue revenue
bonus bonus
withdrawal withdrawal
volume volume
chargeback chargeback
PNL PNL
static static
        }
    


        data_sales_pending_type {
            deposit deposit
positions positions
revenue revenue
bonus bonus
withdrawal withdrawal
volume volume
chargeback chargeback
PNL PNL
        }
    


        data_stats_type {
            bets bets
wins wins
jackpot jackpot
bonuses bonuses
removed_bonuses removed_bonuses
bonuses_count bonuses_count
removed_bonuses_count removed_bonuses_count
Player_loss Player_loss
Player_profit Player_profit
Gross_income Gross_income
Redeemed_bonuses Redeemed_bonuses
House_correction_revenue House_correction_revenue
House_correction_loss House_correction_loss
sportsbookcancelledbets sportsbookcancelledbets
static static
sport_bonuses sport_bonuses
position position
        }
    


        data_sales_status {
            won won
lost lost
closed closed
open open
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    


        data_sales_pending_status {
            won won
lost lost
closed closed
open open
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    


        traffic_bannerType {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
flash flash
image image
text text
        }
    


        traffic2_bannerType {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
flash flash
image image
text text
        }
    


        traffic_type {
            sub sub
traffic traffic
product product
        }
    


        traffic2_type {
            sub sub
traffic traffic
product product
        }
    


        data_stats_currency {
            USD USD
AUD AUD
CAD CAD
CHF CHF
CNY CNY
EUR EUR
GBP GBP
ILS ILS
JPY JPY
NOK NOK
NZD NZD
RUB RUB
SEK SEK
ZAR ZAR
        }
    


        admins_userType {
            default default
top top
sys sys
restricted restricted
        }
    


        affiliates_gender {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
male male
female female
        }
    


        traffic_platform {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
desktop desktop
tablet tablet
mobile mobile
        }
    


        traffic2_platform {
            EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
desktop desktop
tablet tablet
mobile mobile
        }
    


        data_sales_pending_currency {
            USD USD
AUD AUD
CAD CAD
CHF CHF
CNY CNY
EUR EUR
GBP GBP
ILS ILS
JPY JPY
NOK NOK
NZD NZD
RUB RUB
SEK SEK
ZAR ZAR
        }
    


        data_sales_currency {
            USD USD
AUD AUD
CAD CAD
CHF CHF
CNY CNY
EUR EUR
GBP GBP
ILS ILS
JPY JPY
NOK NOK
NZD NZD
RUB RUB
SEK SEK
ZAR ZAR
        }
    


        affiliates_paymentMethod {
            bank bank
skrill skrill
paypal paypal
neteller neteller
webmoney webmoney
chinaunionpay chinaunionpay
        }
    


        settings_qualify_type {
            trades trades
volume volume
        }
    


        affiliates_qualify_type {
            trades trades
volume volume
default default
totalmd totalmd
lots lots
        }
    


        affiliates_type {
            Affiliate Affiliate
IB IB
WhileLabel WhileLabel
PortfolioManager PortfolioManager
        }
    


        merchants_qualify_type {
            trades trades
volume volume
totalmd totalmd
lots lots
EMPTY_ENUM_VALUE EMPTY_ENUM_VALUE
        }
    
  admins {
    Int id  
    Int notifyOnAffReg  
    DateTime rdate  
    String ip  
    String chk_ip  
    Int valid  
    String lang  
    admins_level level  
    String username  
    String password  
    String first_name  
    String last_name  
    String email  
    DateTime lastactive  
    Int logged  
    Int group_id  
    String phone  
    String IMUserType  
    String IMUser  
    String zopimChat  
    String bigPic  
    String relatedMerchantID  
    String preferedCurrency  
    admins_userType userType  
    Boolean showAdditionalLink  
    String additionalLinkText  
    String additionalLinkUrl  
    }
  

  admins_notes {
    Int id  
    DateTime rdate  
    Int valid  
    Int admin_id  
    Int edited_by  
    Int admins_id  
    String notes  
    }
  

  affiliate_messages_approval {
    Int id PK 
    Int affiliate_id  
    Int message_id  
    DateTime approval_date  
    }
  

  affiliates {
    Int id  
    DateTime rdate  
    DateTime udate  
    DateTime lastvisit  
    DateTime lastactive  
    Int valid  
    String lang  
    Int language_id  
    String ip  
    Int group_id  
    Int refer_id  
    Int refer_banner_id  
    String username  
    String password  
    String first_name  
    String last_name  
    String mail  
    String website  
    String website2  
    String website3  
    String phone  
    String street  
    String postalCode  
    String city  
    affiliates_gender gender  
    String company  
    String country  
    String marketInfo  
    Int newsletter  
    String IMUser  
    String IMUserType  
    Int logged  
    affiliates_paymentMethod paymentMethod  
    String pay_firstname  
    String pay_lastname  
    String pay_mail  
    String pay_account  
    String account_name  
    String account_number  
    String pay_info  
    String pay_bank  
    String pay_swift  
    String pay_iban  
    String pay_branch  
    String pay_email  
    String pay_address1  
    String pay_address2  
    String pay_city  
    String pay_state  
    String pay_zip  
    Int pay_country  
    String pay_company  
    String preferredCurrency  
    String merchants  
    Float credit  
    Float sub_com  
    Int showDeposit  
    Int com_alert  
    Int show_credit  "nullable"
    String manager_private_note  
    Int status_id  
    String accounts_pixel_params_replacing  
    String sales_pixel_params_replacing  
    String apiAccessType  
    String apiToken  
    String apiStaticIP  
    Boolean isIB  
    Float qualify_amount  "nullable"
    affiliates_qualify_type qualify_type  "nullable"
    Int profilePermissionID  
    affiliates_type type  
    String products  
    String optinGuid  
    Int emailVerification  
    Int pendingDepositExclude  
    Int selected_language_id  
    Int blockNewTraffic  
    Boolean isDefaultAffiliate  
    String regReferUrl  
    }
  

  affiliates_campaigns_relations {
    Int id PK 
    String name  
    String campID  
    Int affiliateID  
    Int advertiserID  
    Int profile_id  
    Boolean isDefaultCamp  
    Int merchantid  
    }
  

  affiliates_deals {
    Int id  
    DateTime rdate  
    Int admin_id  
    Int merchant_id  
    Int affiliate_id  
    affiliates_deals_dealType dealType  
    Float amount  "nullable"
    Boolean valid  
    String tier_amount  
    Float tier_pcpa  
    affiliates_deals_tier_type tier_type  
    String geo  
    }
  

  affiliates_msgs {
    Int id  
    DateTime rdate  
    Int valid  
    Int admin_id  
    Int group_id  
    Int affiliate_id  
    Int advertiser_id  
    String title  
    String text  
    Int status_id  
    Int display_approval_popup  
    }
  

  affiliates_notes {
    Int id  
    DateTime rdate  
    Int valid  
    Int admin_id  
    Int edited_by  
    Int affiliate_id  
    Int group_id  
    String notes  
    DateTime issue_date  
    DateTime closed_date  
    affiliates_notes_status status  
    }
  

  affiliates_profiles {
    Int id  
    DateTime rdate  
    Int valid  
    Int affiliate_id  
    String name  
    String url  
    String description  
    String source_traffic  
    }
  

  affiliates_static_data {
    Int id PK 
    Int affiliate_id  
    Int merchant_id  
    DateTime rdate  
    String key_name  
    Float key_value  
    DateTime created_on  
    }
  

  affiliates_status {
    Int id  
    DateTime rdate  
    Int valid  
    String title  
    Int created_by_admin_id  
    }
  

  affiliates_tickets {
    Int id PK 
    DateTime rdate  
    DateTime last_update  
    Int ticket_id  
    Int affiliate_id  
    Int admin_id  
    String reply_email  
    Int group_id  
    affiliates_tickets_status status  
    String subject  
    String text  
    Int readed  
    Int merchantID  
    Boolean aff_readed  
    }
  

  affiliates_traffic {
    Int id  
    DateTime rdate  
    String ip  
    Int affiliate_id  
    Int profile_id  
    Int merchant_id  
    String refer_url  
    Int visits  
    String uid  
    }
  

  apicredentials {
    Int id PK 
    Int merchant_id  
    Boolean valid  
    String user  
    String password  
    String url  
    apicredentials_type type  
    }
  

  chart_data {
    Int id PK 
    DateTime lastUpdate  
    DateTime fulldate  
    chart_data_level level  
    Int member_id  
    String month  
    Int year  
    Int accounts  
    Int ftds  
    Int val1  
    Int val2  
    }
  

  commissions {
    Int merchantID PK 
    Int affiliateID PK 
    String traderID PK 
    String transactionID PK 
    DateTime Date PK 
    String Type PK 
    Float Amount PK 
    String DealType  
    Float Commission  
    String DealTypeCondition  
    Int level  "nullable"
    Int subAffiliateID  "nullable"
    Int status  "nullable"
    DateTime updated  "nullable"
    }
  

  config_api_n_feeds {
    Int id PK 
    String apiStaticIP  
    String apiAccessType  
    String apiToken  
    Int status  
    Int createdByUserID  
    DateTime rdate  
    String outputType  
    }
  

  countries {
    Int id  
    String title  
    Boolean valid  
    String code  
    Int spotCode PK 
    }
  

  cron_logs {
    Int id  
    DateTime lastscan  
    Int month  
    Int year  
    Int merchant_id  
    String merchant_name  
    Int success  
    Int reg_total  
    Int sales_total  
    String type  
    }
  

  cronjobvariables {
    String Name PK 
    DateTime Date  
    String Value  
    }
  

  dashboard {
    DateTime Date PK 
    Int MerchantID PK 
    Int AffiliateID PK 
    Int Impressions  
    Int Clicks  
    Int Install  
    Int Leads  
    Int Demo  
    Int RealAccount  
    Int FTD  
    Float FTDAmount  
    Int RawFTD  
    Float RawFTDAmount  
    Int Deposits  
    Float DepositsAmount  
    Float Bonus  
    Float Withdrawal  
    Float ChargeBack  
    Float NetDeposit  
    Float PNL  
    Int ActiveTrader  
    Float Commission  
    Int PendingDeposits  
    Float PendingDepositsAmount  
    Int TotalMicroPayments  
    Float MicroPaymentsAmount  
    Float Volume  
    }
  

  data_install {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int profile_id  
    Int product_id  
    String country  
    String trader_id  
    String phone  
    String trader_alias  
    data_install_type type  
    String freeParam  
    String freeParam2  
    String freeParam3  
    String freeParam4  
    String freeParam5  
    Int merchant_id  
    String status  
    DateTime lastUpdate  
    String platform  
    String uid  
    String email  
    String couponName  
    String campaign_id  "nullable"
    DateTime currentDate  
    }
  

  data_recycle {
    Int id PK 
    Int trader_id  
    String tranz_id  
    DateTime recordRdate  
    Int merchant_id  
    Int admin_id  
    DateTime rdate  
    String data_table  
    String fields  
    }
  

  data_reg {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int profile_id  
    Int product_id  
    String country  
    String trader_id  
    Int sub_trader_id  
    String phone  
    String trader_alias  
    data_reg_type type  
    String freeParam  
    String freeParam2  
    String freeParam3  
    String freeParam4  
    String freeParam5  
    Int merchant_id  
    String status  
    DateTime lastUpdate  
    String platform  
    String uid  
    String saleStatus  
    String lastSaleNote  
    DateTime lastSaleNoteDate  
    DateTime lastTimeActive  
    DateTime initialftddate  
    String initialftdtranzid  
    Boolean isSelfDeposit  
    Float ftdamount  
    DateTime FTDqualificationDate  
    Float traderVolume  
    Int traderTrades  
    DateTime lastStatsRecordDate  
    Float traderValue  
    DateTime lastDepositRecordDate  
    String email  
    String couponName  
    String campaign_id  "nullable"
    Int dummySource  
    DateTime currentDate  
    }
  

  data_sales {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int product_id  
    Int profile_id  
    String country  
    String tranz_id  
    String trader_id  
    Int sub_trader_id  
    String trader_alias  
    data_sales_type type  
    data_sales_status status  
    Float amount  
    Float original_amount  
    Float positionSum  
    String freeParam  
    String freeParam2  
    String freeParam3  
    String freeParam4  
    String freeParam5  
    Int merchant_id  
    String uid  
    String campaign_id  "nullable"
    data_sales_currency currency  
    Int pendingRelationRecord  
    Int created_by_admin_id  
    Float spread  "nullable"
    Float pnl  "nullable"
    Float turnover  "nullable"
    Int dummySource  
    DateTime currentDate  
    Boolean isSelfDeposit  
    }
  

  data_sales_pending {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int product_id  
    Int profile_id  
    String country  
    String tranz_id  
    Int trader_id  
    Int sub_trader_id  
    String trader_alias  
    data_sales_pending_type type  
    data_sales_pending_status status  
    Float amount  
    Float original_amount  
    Float positionSum  
    String freeParam  
    String freeParam2  
    String freeParam3  
    String freeParam4  
    String freeParam5  
    Int merchant_id  
    String uid  
    data_sales_pending_currency currency  
    Int campaign_id  
    Int pendingRelationRecord  
    Int created_by_admin_id  
    Boolean isSelfDeposit  
    Float spread  "nullable"
    Float pnl  "nullable"
    Float turnover  "nullable"
    }
  

  data_stats {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int product_id  
    Int profile_id  
    String country  
    String tranz_id  
    String trader_id  
    Int sub_trader_id  
    String trader_alias  
    data_stats_type type  
    Float amount  
    String freeParam  
    String freeParam2  
    String freeParam3  
    String freeParam4  
    String freeParam5  
    Int merchant_id  
    String uid  
    data_stats_currency currency  "nullable"
    String campaign_id  "nullable"
    Float spread  "nullable"
    Float pnl  "nullable"
    Float turnover  "nullable"
    }
  

  documents {
    BigInt id PK 
    DateTime rdate  
    String name  
    String path  
    Int affiliate_id  
    Int valid  
    documents_type type  
    documents_doc_status doc_status  
    String general_text  "nullable"
    String identity_document_text  "nullable"
    String address_verification_text  "nullable"
    String company_verification_text  "nullable"
    Int uploaded_by_admin_id  
    }
  

  exchange_rates {
    Int id  
    String currKey PK 
    String fromCurr  
    String toCurr  
    Float val  
    Float rate  
    DateTime lastUpdate  
    DateTime lastCheck  
    Boolean valid  
    }
  

  fieldssortorder {
    Int id PK 
    String name  
    String fieldName  
    String productType  
    Int defaultPos  
    Int newPos  
    }
  

  groups {
    Int id  
    DateTime rdate  
    Int valid  
    String title  
    String language_id  
    Boolean makedefault  
    }
  

  ip2country {
    Int ipFROM PK 
    Int ipTO PK 
    String countrySHORT  
    String countryLONG  
    }
  

  languages {
    Int id  
    DateTime rdate  
    Int valid  
    String lngCode  
    String title  
    String displayText  
    String textDirection  
    }
  

  leads_files {
    Int id PK 
    Int admin_id  
    Int affiliate_id  
    Int merchant_id  
    DateTime create_date  
    DateTime update_date  
    Int status  
    Int count  
    Int errors  
    String filename  
    String filename_original  
    String description  
    }
  

  loginhistory {
    Int id PK 
    loginhistory_type type  
    Int error  
    String username  
    Int password  
    Int affiliate_id  
    Int login_as_affiliate_by_user_id  
    Boolean affiliate_valid  
    Int admin_id_force_allow  
    Boolean failureLogin  
    String ip  
    String refe  
    String HTTP_USER_AGENT  
    String REMOTE_ADDR  
    DateTime rdate  
    String attempt  
    }
  

  logs {
    Int id PK 
    String title  
    String description  
    String var1  
    String var2  
    String var3  
    DateTime rdate  
    String flag  
    Int merchant_id  
    String text  
    String ip  
    String url  
    }
  

  mail_sent {
    Int id PK 
    Int valid  
    DateTime rdate  
    String trackingCode  
    Int affiliate_id  
    Int admin_id  
    Int mail_id  
    String mailCode  
    Int opened  
    DateTime opened_time  
    }
  

  mail_templates {
    Int id PK 
    String ip  
    DateTime rdate  
    Int admin_id  
    Int language_id  
    Boolean is_advertiser_related  
    Int valid  
    String title  
    String mailCode  
    String text  
    String trigger_name  
    }
  

  merchants {
    Int id  
    DateTime rdate  
    Int valid  
    Int pos  
    String name  
    merchants_type type  
    String website  
    String address  
    String zipCode  
    String manager  
    String country  
    String email  
    String contract  
    String name_1  
    String mail_1  
    String phone_1  
    String name_2  
    String mail_2  
    String phone_2  
    String name_3  
    String mail_3  
    String phone_3  
    String name_4  
    String mail_4  
    String phone_4  
    String name_5  
    String mail_5  
    String phone_5  
    Float cpa_amount  
    Float dcpa_amount  
    Float revenue_amount  
    Float cpl_amount  
    Float cpi_amount  
    Float cpc_amount  
    Float pnl_amount  
    Float cpm_amount  
    Float min_cpa_amount  
    Boolean tier_amount  
    Float default_commissions  
    String params  
    String incomingParam  
    String incomingParamAlternative  
    String flashTag  
    String cron_file  
    String producttype  
    String campaignparamname  
    String campaignid  
    Boolean campaignispartofparams  
    String LogoURL  
    String StylingURL  
    Boolean toAutoRelateCampToAff  
    String apiType  
    Int defaultAffiliateID  
    String APIurl  
    String APIuser  
    String APIpass  
    String api_token2  
    String API_whiteLabelId  
    String apiToken  
    String extraMemberParamName  
    String extraMemberParamValue  
    String isMustField  
    String mustFields  
    DateTime showDataForAffiliateSince  
    String PaymentColors  
    DateTime lastSaleStatusUpade  "nullable"
    DateTime lastSaleStatusUpdate  
    String rev_formula  
    Int wallet_id  
    Float revenue_spread_amount  
    Float positions_rev_share  
    Float lots_amount  
    Float qualify_amount  "nullable"
    merchants_qualify_type qualify_type  "nullable"
    String subbrandof  
    Boolean showLeadsNdemo  
    Float lowestAmountPendingDeposit  
    String postbackIPlimit  
    String randomKey  
    String subbrands  
    Int isSelfManaged  
    String cronjoburl  
    }
  

  merchants_affiliate_level {
    Int id PK 
    DateTime rdate  
    Int admin_id  
    Int merchant_id  
    Int affiliate_id  
    Int level  
    Decimal amount  
    }
  

  merchants_creative {
    Int id  
    DateTime rdate  
    DateTime last_update  
    Int valid  
    Int admin_id  
    Int merchant_id  
    Int product_id  
    Int language_id  
    Int promotion_id  
    String title  
    merchants_creative_type type  
    Int width  
    Int height  
    String file  
    String url  
    String iframe_url  
    String alt  
    String scriptCode  
    Int affiliate_id  
    Int category_id  
    Int featured  
    Int affiliateReady  
    Boolean isOverrideTrackingLink  
    }
  

  merchants_creative_categories {
    Int id PK 
    String categoryname  
    Boolean valid  
    Int merchant_id  
    Int created_by_user_id  
    }
  

  merchants_creative_stats {
    DateTime Date PK 
    Int AffiliateID PK 
    Int MerchantID PK 
    Int BannerID PK 
    Int Impressions  
    Int Clicks  
    }
  

  merchants_promotions {
    Int id  
    DateTime rdate  
    Int valid  
    Int merchant_id  
    Int affiliate_id  
    String title  
    Int group_id  
    }
  

  network_bonus {
    Int id PK 
    Int valid  
    String title  
    Int group_id  
    Int min_ftd  
    Float bonus_amount  
    Int merchant_id  
    DateTime rdate  
    }
  

  payments_details {
    Int id  
    DateTime rdate  
    payments_details_status status  
    String reportType  
    String month  
    String year  
    String paymentID  
    Int merchant_id  
    Int affiliate_id  
    String trader_id  
    Float amount  
    Float deposit  
    Float withdrawal  
    String reason  
    }
  

  payments_paid {
    Int id  
    DateTime rdate  
    String month  
    String year  
    Int affiliate_id  
    Int paid  
    String paymentID  
    String transaction_id  
    String notes  
    String extras  
    Float total  
    Int sentMail  
    Float usedCredit  
    Float creditLeft  
    Float amount_gap_from_previous_month  
    Float credit_gap_from_previous_month  
    }
  

  permissionprofile {
    Int id PK 
    permissionprofile_defaultViewForDealType defaultViewForDealType  
    String name  
    DateTime rdate  
    Int affiliate_id  
    String reportsPermissions  
    String fieldsPermissions  
    Boolean valid  
    Int created_by_admin_id  
    }
  

  permissionsdescription {
    Int id PK 
    String key  
    String description  
    permissionsdescription_type type  
    Boolean valid  
    }
  

  pixel_logs {
    Int id PK 
    DateTime dateTime  
    String firedUrl  
    Int pixelCode  
    String pixelResponse  
    Int product_id  
    }
  

  pixel_monitor {
    Int id PK 
    pixel_monitor_type type  
    pixel_monitor_method method  
    DateTime rdate  
    Int valid  
    Int affiliate_id  
    Int merchant_id  
    String pixelCode  
    Int totalFired  
    Int product_id  
    Int banner_id  
    }
  

  postback_logs {
    Int id PK 
    DateTime rdate  
    postback_logs_flag flag  
    Int merchant_id  
    String text  
    String ip  
    String url  
    }
  

  products_affiliates_deals {
    Int id  
    DateTime rdate  
    Int admin_id  
    Int product_id  
    Int affiliate_id  
    products_affiliates_deals_dealType dealType  
    Float amount  "nullable"
    Boolean valid  
    String tier_amount  
    Float tier_pcpa  
    products_affiliates_deals_tier_type tier_type  
    }
  

  products_cats {
    Int id PK 
    DateTime rdate  
    Int valid  
    String title  
    Int parent_id  
    }
  

  products_items {
    Int id PK 
    DateTime rdate  
    Int valid  
    Int cat_id  
    Int merchant_id  
    Int affiliate_id  
    String title  
    String text  
    String url  
    Float cplaccount  
    Float cpi  
    Float cpc  
    Float cpa  
    Float cpllead  
    String languages  
    String image  
    String randomKey  
    String postbackIPlimit  
    String param  
    String productAPICode  
    String exportUniqueIdWithName  
    Float min_deposit  
    String terms  
    Int featured  
    String countries_allowed  
    String terms_and_conditions  
    Boolean isRTL  
    String type  
    Boolean ignoreOtherInternalParameters  
    }
  

  producttitles {
    Int id PK 
    String source  
    String Casino  
    String SportsBetting  
    String BinaryOption  
    String Forex  
    String Download  
    String Gaming  
    String Mobile  
    String Ecommerce  
    String Dating  
    String Rummy  
    String Bingo  
    }
  

  reportreferral {
    DateTime Date PK 
    String ReferUrlHash PK 
    String ReferUrl  
    Int MerchantID PK 
    String LastClickIp  
    String LastClickCountry  
    Int AffiliateID PK 
    Int ProfileID  
    Int AllTimeClicks  
    Int AllTimeViews  
    Int Leads  
    Int Demo  
    Int Accounts  
    Int FTD  
    Decimal FTDAmount  
    Int RawFTD  
    Decimal RawFTDAmount  
    Int TotalDeposits  
    Decimal DepositsAmount  
    Decimal Volume  
    Decimal BonusAmount  
    Decimal WithdrawalAmount  
    Decimal ChargebackAmount  
    Decimal PNL  
    Decimal Commissions  
    }
  

  reports_fields {
    Int id PK 
    String userlevel  
    Int user_id  
    DateTime rdate  
    String location  
    String removed_fields  
    }
  

  reporttraders {
    DateTime Date  
    String TraderID PK 
    String CampaignID  
    String TraderAlias  
    String Email  
    String RegistrationDate  
    String TraderStatus  
    String Country  
    Int AffiliateID PK 
    String AffiliateUsername  
    Int MerchantID PK 
    String MerchantName  
    Int CreativeID  "nullable"
    String CreativeName  
    String Type  
    String CreativeLanguage  
    String ProfileID  
    String ProfileName  
    String Param  "nullable"
    String Param2  "nullable"
    String Param3  
    String Param4  
    String Param5  
    String TransactionID  
    String FirstDeposit  
    String FTDAmount  
    String SelfDeposit  
    String TotalNextDeposits  
    String NextDeposits  
    String TotalMicroPayments  
    String MicroPaymentsAmount  
    String TotalDeposits  
    String DepositAmount  
    String Volume  
    String BonusAmount  
    String WithdrawalAmount  
    String ChargeBackAmount  
    String NetDeposit  
    String Trades  
    String QualificationDate  
    String PNL  
    String SaleStatus  
    String LastTimeActive  
    String Commission  
    String AdminNotes  
    String ClickDetails  
    }
  

  settings {
    Int id  
    Boolean showGroupValuesOnAffReg  
    String showGroupsLanguages  
    Boolean qrcode  
    Boolean facebookshare  
    String webTitle  
    String webMail  
    String mail_server  
    String mail_replyTo  
    String mail_username  
    String mail_password  
    String fromName  
    Int pending  
    Int creative_iframe  
    Int creative_mobile_leader  
    Int creative_mobile_splash  
    Int creative_email  
    Boolean creative_html5  
    Int deal_cpl  
    Int deal_cpm  
    Boolean deal_pnl  
    Int deal_cpc  
    Int deal_tier  
    Int deal_revshare_spread  
    Int deal_revshare  
    Int export  
    String terms_link  
    Int multi  
    String multi_languages  
    Int sub_com  
    Int show_deposit  
    String revenue_formula  
    settings_qualify_type qualify_type  
    Int qualify_amount  
    String analyticsCode  
    Int isNetwork  
    String reportsToHide  
    Int showMiminumDepositOnAffAccount  
    String defaultTimeFrameForAffiliate  
    String defaultTimeFrameForAffiliateReports  
    Boolean multiMerchantsPerTrader  
    Boolean hideNetRevenueForNonRevDeals  
    Boolean hideFTDamountForCPADeals  
    String SMTPSecure  
    Boolean SMTPAuth  
    Int mail_Port  
    String availablePayments  
    String availableQualifications  
    Boolean autoRelateSubAffiliate  
    String dashBoardMainTitle  
    Boolean showRealFtdToAff  
    Int show_credit_as_default_for_new_affiliates  "nullable"
    Boolean showCreditForAM  
    Boolean blockAffiliateLogin  "nullable"
    Boolean showAllCreativesToAffiliate  
    Boolean showVolumeForAffiliate  
    Boolean showAffiliateRiskForAffiliate  
    String newsletterCheckboxCaption  
    Boolean affiliateNewsletterCheckboxValue  
    String utmtags  
    Boolean showDCPAonAffiliateComStruc  
    Boolean hideWithdrawalAmountForCPADeals  
    Boolean hideBonusAmountForCPADeals  
    Boolean hideDepositAmountForCPADeals  
    Boolean hideTotalDepositForCPADeals  
    Boolean showDealTypeHistoryToAM  
    Boolean hideFrozenOnCPAdeals  
    Boolean AllowDealChangesByManager  
    Int autoRelateNewAffiliateToAllMerchants  
    String emailFooterImageURL  
    String emailHeaderImageURL  
    Int rowsNumberAfterSearch  
    String emailSignature  
    Int hideDrillDownOnInvoiceForAffiliatesWithNonRevDeals  
    Int showPositionsRevShareDeal  
    String dateOfMonthlyPayment  
    String extraAgreement2Name  
    String extraAgreement2Link  
    String extraAgreement3Name  
    String extraAgreement3Link  
    String availableCurrencies  
    String forceParamsForTracker  
    Boolean showDocumentsModule  
    Boolean showRequierdDocsOnAffiliateDash  
    Boolean AskDocTypeCompany  
    Boolean AskDocTypeAddress  
    Boolean AskDocTypePassport  
    String AskDocSentence  
    Boolean hideMarketingSectionOnAffiliateRegPage  
    Boolean hideInvoiceSectionOnAffiliateRegPage  
    String affiliateLoginImage  
    String adminLoginImage  
    Boolean AllowAffiliateDuplicationOnCampaignRelation  
    Boolean ShowIMUserOnAffiliatesList  
    Boolean introducingBrokerInterface  
    String hideCountriesOnRegistration  
    Boolean ShowEmailsOnTraderReportForAffiliate  
    Boolean ShowEmailsOnTraderReportForAdmin  
    Boolean blockAccessForManagerAndAdmins  
    Boolean allowCapthaOnMerchantReset  
    Boolean allowCapthaOnMerchantReg  
    Boolean allowCapthaOnReg  
    Boolean allowCapthaOnReset  
    String combinedPixelOption  
    Boolean CouponTrackerIsStrongerThanCtag  
    String apiAccessType  
    String apiStaticIP  
    String apiToken  
    Boolean ShowGraphOnDashBoards  
    String affiliateRegistrationPixel  
    Boolean def_qualify_type_for_affiliates  
    Boolean showTitleOnLoginPage  
    String secondaryPoweredByLogo  
    String secondaryPoweredByLogoHrefUrl  
    Boolean hidePoweredByABLogo  
    String brandsPoweredbyText  
    String logoPath  
    String billingLogoPath  
    String faviconPath  
    String exportAffiliateIDonTrackerFieldName  
    String exportProfileNameToTrackerFieldName  
    Int numberOfFailureLoginsAttempts  
    String sitebaseurl  
    Boolean isSmtpDebugMode  
    Boolean showParamTwoOnReports  
    Int isOffice365  
    String chartTheme  
    Boolean hideBrandsDescriptionfromAffiliateFooter  
    Boolean hideCommissionOnTraderReportForRevDeal  
    String defaultTrackingUrl  
    String paidStatusBGColor  
    String pendingStatusBGColor  
    Boolean allowDeleteCRMnoteForManager  
    String exportCreativeNameWithParam  
    Boolean isBasicVer  
    String cronUrls  
    String mustFields  
    Int login_session_duration  
    Boolean exportLangCreativeNameWithParam  
    Boolean displayLastMessageFieldsOnReports  
    String IBpushLeadOnRegistrationUrl  
    Boolean def_profilePermissionsForAffiliate  
    Int cronRecordsTimeDif  
    Boolean ShowAffiliateTypes  
    DateTime lastClicksCronJobRunningDate  "nullable"
    Boolean qualifiedCommissionOnCPAonly  
    Int hidePendingProcessHighAmountDeposit  
    Boolean AllowManagerEditrCreative  
    Boolean showAgreementsModule  
    Int showInvoiceModule  
    Int pendingDepositsAmountLimit  
    Boolean showProductsPlace  
    Int BlockLoginUntillEmailVerification  
    Boolean ShowNextDepositsColumn  
    Int showCampaignOnTraderReport  
    Boolean AllowSecuredTrackingCode  
    Int captureAffiliatesRegistration  
    Int affiliateStaticReportMonths  
    String currency  
    Int ShowOnlyFeaturedCreativesWhenGotSome  
    Int showProductsPlaceToManager  
    Int hideSubAffiliation  
    Boolean showDeskNameOnAffiliateDashboard  
    Boolean writeFinalTrackingUrlToLog  
    String systemCompanyDetails  
    String merchants_terms_link  
    Boolean ShowPhonesOnTraderReportForAdmin  
    Boolean deal_geoLocation  
    String pnlTable  
    Boolean ShowQualificationOnChart  
    DateTime ShowQualificationOnChartSince  
    Boolean hasContinuousyCommissionType  
    }
  

  short_urls {
    Int id PK 
    String long_url  
    Bytes short_code  
    DateTime short_urls  
    Int counter  
    }
  

  stats_banners {
    Int id  
    DateTime rdate  
    String ctag  
    Int affiliate_id  
    Int group_id  
    Int merchant_id  
    Int banner_id  
    Int profile_id  
    Int views  
    Int clicks  
    }
  

  sub_banners {
    Int id  
    DateTime rdate  
    DateTime last_update  
    Int valid  
    Int admin_id  
    Int merchant_id  
    Int language_id  
    Int promotion_id  
    String title  
    sub_banners_type type  
    Int width  
    Int height  
    String file  
    String url  
    String alt  
    }
  

  sub_stats {
    Int id  
    DateTime rdate  
    String ctag  
    Int banner_id  
    Int affiliate_id  
    Int profile_id  
    Int views  
    Int clicks  
    }
  

  trackerconversion {
    Int id PK 
    Int affiliate_id  
    String uid  
    String DynamicTracker  
    DateTime rdate  
    }
  

  traders_tag {
    Int id  
    Int valid  
    Int added_by  
    DateTime rdate  
    Int merchant_id  
    Int trader_id  
    Float revenue  
    Float admin_revenue  
    traders_tag_status status  
    String notes  
    Int calReport  
    }
  

  traffic {
    Int id PK 
    DateTime rdate  
    Int unixRdate  
    String ctag  
    String uid  
    String ip  
    Int admin_id  
    Int affiliate_id  
    Int group_id  
    Int banner_id  
    Int merchant_id  
    Int profile_id  
    Int language_id  
    Int promotion_id  
    DateTime last_update  
    Boolean valid  
    String title  
    traffic_bannerType bannerType  
    traffic_type type  
    Int width  
    Int height  
    String file  
    String url  
    String alt  
    traffic_platform platform  
    String os  
    String osVersion  
    String browser  
    String broswerVersion  
    String userAgent  
    String country_id  
    String refer_url  
    String param  
    String param2  
    String param3  
    String param4  
    String param5  
    Int views  
    Int clicks  
    Int product_id  
    }
  

  translate {
    Int id PK 
    DateTime rdate  
    String source  
    String langENG  
    String langRUS  
    String langGER  
    String langFRA  
    String langITA  
    String langESP  
    String langHEB  
    String langARA  
    String langCHI  
    String langPOR  
    String langJAP  
    }
  

  users_firewall {
    Int id PK 
    DateTime rdate  "nullable"
    Int set_by_user_id  
    String IPs  
    Int valid  
    users_firewall_type type  
    String comment  
    }
  

  users_reports {
    Int id PK 
    DateTime rdate  "nullable"
    String level  
    String report_name  
    String url  
    String report  
    Int user_id  
    }
  
    admins o|--|| admins_level : "enum:level"
    admins o|--|| admins_userType : "enum:userType"
    affiliates o|--|| affiliates_gender : "enum:gender"
    affiliates o|--|| affiliates_paymentMethod : "enum:paymentMethod"
    affiliates o|--|o affiliates_qualify_type : "enum:qualify_type"
    affiliates o|--|| affiliates_type : "enum:type"
    affiliates_deals o|--|| affiliates_deals_dealType : "enum:dealType"
    affiliates_deals o|--|| affiliates_deals_tier_type : "enum:tier_type"
    affiliates_notes o|--|| affiliates_notes_status : "enum:status"
    affiliates_tickets o|--|| affiliates_tickets_status : "enum:status"
    apicredentials o|--|| apicredentials_type : "enum:type"
    chart_data o|--|| chart_data_level : "enum:level"
    data_install o|--|| data_install_type : "enum:type"
    data_reg o|--|| data_reg_type : "enum:type"
    data_sales o|--|| data_sales_type : "enum:type"
    data_sales o|--|| data_sales_status : "enum:status"
    data_sales o|--|| data_sales_currency : "enum:currency"
    data_sales_pending o|--|| data_sales_pending_type : "enum:type"
    data_sales_pending o|--|| data_sales_pending_status : "enum:status"
    data_sales_pending o|--|| data_sales_pending_currency : "enum:currency"
    data_stats o|--|| data_stats_type : "enum:type"
    data_stats o|--|o data_stats_currency : "enum:currency"
    documents o|--|| documents_type : "enum:type"
    documents o|--|| documents_doc_status : "enum:doc_status"
    loginhistory o|--|| loginhistory_type : "enum:type"
    merchants o|--|| merchants_type : "enum:type"
    merchants o|--|o merchants_qualify_type : "enum:qualify_type"
    merchants_creative o|--|| merchants_creative_type : "enum:type"
    payments_details o|--|| payments_details_status : "enum:status"
    permissionprofile o|--|| permissionprofile_defaultViewForDealType : "enum:defaultViewForDealType"
    permissionsdescription o|--|| permissionsdescription_type : "enum:type"
    pixel_monitor o|--|| pixel_monitor_type : "enum:type"
    pixel_monitor o|--|| pixel_monitor_method : "enum:method"
    postback_logs o|--|| postback_logs_flag : "enum:flag"
    products_affiliates_deals o|--|| products_affiliates_deals_dealType : "enum:dealType"
    products_affiliates_deals o|--|| products_affiliates_deals_tier_type : "enum:tier_type"
    settings o|--|| settings_qualify_type : "enum:qualify_type"
    sub_banners o|--|| sub_banners_type : "enum:type"
    traders_tag o|--|| traders_tag_status : "enum:status"
    traffic o|--|| traffic_bannerType : "enum:bannerType"
    traffic o|--|| traffic_type : "enum:type"
    traffic o|--|| traffic_platform : "enum:platform"
    users_firewall o|--|| users_firewall_type : "enum:type"
```
