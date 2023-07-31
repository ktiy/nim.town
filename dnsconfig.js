// if you need help, read through https://stackexchange.github.io/dnscontrol/providers/cloudflare

var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// alphabetical order please
D("nim.town", REG_NONE, DnsProvider(CLOUDFLARE),
    A("@", "144.202.127.8"),
    AAAA("@", "2001:19f0:6001:3d76:5400:03ff:fe99:fa79"),

    CNAME("deser", "gabbhack.github.io."),
    CNAME("gemi", "prunariu.space-nomad.com."),
    CNAME("hayago", "liquidev.github.io."),
    CNAME("loco", "moigagoo.github.io."),
    CNAME("moigagoo", "moigagoo.github.io."),
    CNAME("norman", "moigagoo.github.io."),
    CNAME("norm", "moigagoo.github.io."),
    CNAME("karkas", "moigagoo.github.io."),
    CNAME("rwstudio", "ourstorycomic.github.io."),
    CNAME("xidoc", "pages.sr.ht.")
);
