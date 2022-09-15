// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.disableCategory("targeting");
//cfg.setLogo("/static/abbag/img/content/logo/logomit.svg");

cfg.setCookieTable("analytics", [
    {
      col1: "^_ga",
      col2: top.location.host,
      col3: "2 Jahre",
      col4: "Enthält eine zufallsgenerierte User-ID. Anhand dieser ID kann Google Analytics wiederkehrende User auf dieser Website wiedererkennen und die Daten von früheren Besuchen zusammenführen.",
      is_regex: true,
    },
    {
      col1: "_gcl_au",
      col2: top.location.host,
      col3: "90 Tage",
      col4: "Enthält eine zufallsgenerierte User-ID.",
      is_regex: false,
    },
    {
      col1: "^_pk_id",
      col2: top.location.host,
      col3: "13 Monate",
      col4: "Wird verwendet, um einige Details über den Benutzer zu speichern, wie z. B. die eindeutige Besucher-ID.",
      is_regex: true,
    },
    {
      col1: "^_pk_ses",
      col2: top.location.host,
      col3: "30 Minuten",
      col4: "Kurzlebige Cookies, die verwendet werden, um Daten für den Besuch vorübergehend zu speichern",
      is_regex: true,
    },
  ]);

cc.run(cfg.getConfig());
