// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/maisengasse/img/maisengasse-cc.svg");
cfg.disableCategory("targeting");
cfg.addGoogleAnalytics();
cfg.addMatomoAnalytics();
cc.run(cfg.getConfig());
