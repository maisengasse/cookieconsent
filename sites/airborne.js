// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.disableCategory("targeting");
cfg.setLogo("/static/airborne/img/logo.svg");
//cfg.addGoogleAnalytics();
cfg.addMatomoAnalytics();
cc.run(cfg.getConfig());
