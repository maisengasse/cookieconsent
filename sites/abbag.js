// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.disableCategory("targeting");
cfg.addGoogleAnalytics();
cfg.addMatomoAnalytics();
cc.run(cfg.getConfig());
