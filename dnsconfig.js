// if you need help, read through https://stackexchange.github.io/dnscontrol/providers/cloudflare

var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI", {"manage_redirects": true});

// alphabetical order please
D("nim.town", REG_NONE, DnsProvider(CLOUDFLARE),
    A("@", "207.246.105.83", CF_PROXY_ON),
    AAAA("@", "2001:19f0:6001:1acf:5400:03ff:fe24:2896", CF_PROXY_ON),

    CNAME("deser", "gabbhack.github.io."),
    CNAME("hayago", "liquidev.github.io."),
    CNAME("loco", "moigagoo.github.io."),
    CNAME("moigagoo", "moigagoo.github.io."),
    CNAME("norman", "moigagoo.github.io."),
    CNAME("norm", "moigagoo.github.io."),

    // except keep these at the bottom
    CF_REDIRECT("packages.nim.town", "https://nimble.directory"),
    CF_REDIRECT("docs.nim.town", "https://nim-lang.org/documentation.html"),
    CF_REDIRECT("doc.nim.town", "https://nim-lang.org/documentation.html")
)
