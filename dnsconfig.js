var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// alphabetical order please
D("nim.town", REG_NONE, DnsProvider(CLOUDFLARE),
    CNAME("deser", "gabbhack.github.io."),
    CNAME("hayago", "liquidev.github.io."),
    CNAME("loco", "moigagoo.github.io."),
    CNAME("moigagoo", "moigagoo.github.io."),
    CNAME("norman", "moigagoo.github.io."),
    CNAME("norm", "moigagoo.github.io."),
)
