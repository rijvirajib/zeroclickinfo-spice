function ddg_spice_github(re) {    
    var query = decodeURIComponent(rq);
    query = query.replace(/^\s*github\s+/, "");

    var content = '';
    re = re.repositories;
    blah = re;
    for (i = 0; i < re.length; i++) {
        content += "<a href='" + re[i].url + "'>" + re[i].name + '</a>'
                +  ": " + re[i].description
                +  "<br>";
        //if (i == 5) break;
    }
    if (re.length == 1) {
        re = re[0];
        console.log(re);
        var url = re.homepage.replace(/^(?!https?:\/\/)/, "http://");
        content += "<i>Author</i>: " + re.owner + "<br>"
                +  "<i>Homepage</i>: " + "<a href='"
                +  url + "'>" + re.homepage + "</a><br>"
                +  "<i>" + re.watchers + " watching, "
                +  re.forks + "<a href='"
                +  re.url + "/network'> forks</a>, "
                +  re.open_issues + "<a href='" + re.url
                +  "/issues'> issues</a></i>"
                +  "<br>";
    }

    items = new Array();
    items[0] = new Array();
    items[0]["a"] = content;
    items[0]["h"] = query + ' (github)';
    items[0]["s"] = "github";
    items[0]["u"] = "http://www.github.com";
    items[0]["force_big_header"] = true;
        
    nra(items);
};