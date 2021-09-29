// if you need help, read through https://stackexchange.github.io/dnscontrol/providers/cloudflare

var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// alphabetical order please
D("nim.town", REG_NONE, DnsProvider(CLOUDFLARE),
    A("@", "207.246.105.83"),
    AAAA("@", "2001:19f0:6001:1acf:5400:03ff:fe24:2896"),

    CNAME("deser", "gabbhack.github.io."),
    CNAME("gemi", "prunariu.space-nomad.com."),
    CNAME("hayago", "liquidev.github.io."),
    CNAME("loco", "moigagoo.github.io."),
    CNAME("moigagoo", "moigagoo.github.io."),
    CNAME("norman", "moigagoo.github.io."),
    CNAME("norm", "moigagoo.github.io."),
    CNAME("xidoc", "xigoi.github.io."),
);
