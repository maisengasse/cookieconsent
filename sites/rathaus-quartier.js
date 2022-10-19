// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/schadenbauer/img/rathaus/rathaus.svg");
cfg.disableCategory("targeting");
cfg.disableCategory("analytics");
cc.run(cfg.getConfig());
