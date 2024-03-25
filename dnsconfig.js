// if you need help, read through https://stackexchange.github.io/dnscontrol/providers/cloudflare

var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// alphabetical order please
D("nim.town", REG_NONE, DnsProvider(CLOUDFLARE),
    CNAME("deser", "gabbhack.github.io."),
    CNAME("gemi", "prunariu.space-nomad.com."),
    CNAME("hayago", "liquidev.github.io."),
    CNAME("karkas", "moigagoo.github.io."),
    CNAME("loco", "moigagoo.github.io."),
    CNAME("moigagoo", "moigagoo.github.io."),
    CNAME("norman", "moigagoo.github.io."),
    CNAME("norm", "moigagoo.github.io."),
    CNAME("nova", "neroist.github.io."),
    CNAME("rwstudio", "ourstorycomic.github.io."),
    CNAME("uing", "neroist.github.io."),
    CNAME("xidoc", "pages.sr.ht."),

    A("@", "185.199.108.153"),
    A("@", "185.199.109.153"),
    A("@", "185.199.110.153"),
    A("@", "185.199.111.153"),
    AAAA("@", "2606:50c0:8000::153"),
    AAAA("@", "2606:50c0:8001::153"),
    AAAA("@", "2606:50c0:8002::153"),
    AAAA("@", "2606:50c0:8003::153")
);
