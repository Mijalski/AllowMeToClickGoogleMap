function createButton(el) {
    const button = document.createElement('button');

    button.textContent = 'Open map';

    button.style.position = 'absolute';
    button.style.zIndex = '9999';
    button.style.top = '10px';
    button.style.left = '10px';
    button.style.alignItems = "center";
    button.style.backgroundColor = "#FFFFFF";
    button.style.border = "1px solid rgba(0, 0, 0, 0.1)";
    button.style.borderRadius = ".25rem";
    button.style.boxShadow = "rgba(0, 0, 0, 0.02) 0 1px 3px 0";
    button.style.boxSizing = "border-box";
    button.style.color = "rgba(0, 0, 0, 0.85)";
    button.style.cursor = "pointer";
    button.style.display = "inline-flex";
    button.style.fontFamily = "system-ui,-apple-system,system-ui,'Helvetica Neue',Helvetica,Arial,sans-serif";
    button.style.fontSize = "16px";
    button.style.fontWeight = "600";
    button.style.justifyContent = "center";
    button.style.lineHeight = "1.25";
    button.style.margin = "0";
    button.style.minHeight = "3rem";
    button.style.padding = "calc(.875rem - 1px) calc(1.5rem - 1px)";
    button.style.textDecoration = "none";
    button.style.transition = "all 250ms";
    button.style.userSelect = "none";
    button.style.webkitUserSelect = "none";
    button.style.touchAction = "manipulation";
    button.style.verticalAlign = "baseline";
    button.style.width = "auto";

    button.addEventListener("mouseover", function() {
        button.style.borderColor = "rgba(0, 0, 0, 0.15)";
        button.style.boxShadow = "rgba(0, 0, 0, 0.1) 0 4px 12px";
        button.style.color = "rgba(0, 0, 0, 0.65)";
        button.style.transform = "translateY(-1px)";
    });

    button.addEventListener('mouseleave', function() {
        button.style.borderColor = "none";
        button.style.boxShadow = "rgba(0, 0, 0, 0.02) 0 1px 3px 0";
        button.style.color = "rgba(0, 0, 0, 0.85)";
        button.style.transform = "none";
    });

      button.addEventListener("focus", function() {
        button.style.borderColor = "rgba(0, 0, 0, 0.15)";
        button.style.boxShadow = "rgba(0, 0, 0, 0.1) 0 4px 12px";
        button.style.color = "rgba(0, 0, 0, 0.65)";
        button.style.transform = "translateY(-1px)";
    });

    button.addEventListener("mousedown", function() {
        button.style.backgroundColor = "#F0F0F1";
        button.style.borderColor = "rgba(0, 0, 0, 0.15)";
        button.style.boxShadow = "rgba(0, 0, 0, 0.06) 0 2px 4px";
        button.style.color = "rgba(0, 0, 0, 0.65)";
        button.style.transform = "translateY(0)";
    });

    button.addEventListener("mouseup", function(e) {
        var e = e || window.event;
        var btnCode;

        btnCode = e.button;

        switch (btnCode) {
          case 0:
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('q');
            if (query) {
                window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
            } else {
                window.location.href = `https://www.google.com/maps/`;
            }
            break;
        }
    });

    el.appendChild(button);
}

function checkForMap() {
    // const elements = document.querySelectorAll('[data-attrid="TravelAttractionFeedback"]');
    // if (elements !== undefined && elements.length > 0) {
    //     createButton(elements[0]);
    //     observer.disconnect();
    // }

    // var links = document.getElementsByTagName("a");
    // for (var i = 0; i < links.length; i++) {
    //     if (links[i].href.endsWith("terms_maps.html")) {
    //         createButton(links[i].parentElement);
    //         observer.disconnect();
    //     }
    // }

    var elements = document.querySelectorAll('[data-stm]');
    if (elements !== undefined && elements.length > 0) {
        createButton(elements[0]);
        observer.disconnect();
    }
}

const observer = new MutationObserver(function(mutations) {
    checkForMap();
});

const config = {
    attributes: true,
    childList: true,
    subtree: true
};

const targetNode = document;

observer.observe(targetNode, config);
