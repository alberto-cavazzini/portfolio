import { useEffect } from "react";

const VWO: React.FC = () => {
  useEffect(() => {
    // VWO SmartCode
    const loadVWO = () => {
      if (window._vwo_code) return;

      window._vwo_code = (function () {
        var account_id = 1114013,
          version = 1.5,
          settings_tolerance = 2000,
          library_tolerance = 2500,
          use_existing_jquery = false,
          is_spa = 1,
          hide_element = "body",
          hide_element_style =
            "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;",
          f = false,
          d = document,
          code = {
            use_existing_jquery: function () {
              return use_existing_jquery;
            },
            library_tolerance: function () {
              return library_tolerance;
            },
            hide_element_style: function () {
              return "{" + hide_element_style + "}";
            },
            finish: function () {
              if (!f) {
                f = true;
                var e = d.getElementById("_vis_opt_path_hides");
                if (e) e.parentNode.removeChild(e);
              }
            },
            finished: function () {
              return f;
            },
            load: function (e) {
              var t = d.createElement("script");
              t.src = e;
              t.type = "text/javascript";
              d.getElementsByTagName("head")[0].appendChild(t);
            },
            getVersion: function () {
              return version;
            },
            getAccount: function () {
              return account_id;
            },
            init: function () {
              window.settings_timer = setTimeout(function () {
                _vwo_code.finish();
              }, settings_tolerance);

              var e = d.createElement("style"),
                t = hide_element
                  ? hide_element + "{" + hide_element_style + "}"
                  : "",
                n = d.getElementsByTagName("head")[0];

              e.setAttribute("id", "_vis_opt_path_hides");
              e.setAttribute("type", "text/css");

              if (e.styleSheet) {
                e.styleSheet.cssText = t;
              } else {
                e.appendChild(d.createTextNode(t));
              }

              n.appendChild(e);

              var i = this.load(
                "https://visualwebsiteoptimizer.com/j.php?a=" +
                  account_id +
                  "&u=" +
                  encodeURIComponent(d.URL) +
                  "&vn=" +
                  version
              );
              return i;
            },
          };

        window._vwo_settings_timer = code.init();
        return code;
      })();
    };

    // Load VWO after a short delay to ensure DOM is ready
    const timer = setTimeout(loadVWO, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default VWO;
