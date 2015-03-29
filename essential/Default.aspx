<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset='utf-8' />

    <title>Borui Home Page</title>

    <link rel="stylesheet" href="css/default.css" />
</head>
<body>
    <div class="pad">
        <form id="form1" runat="server">
            <div class="content">
                <ul class="master_navigation">
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>                    
                </ul>
                <hr />
                <div class="profile row">
                    <div class="col-1">&nbsp;</div>
                    <div class="left_content col-4">
                        <div id="profile_picture">
                            
                        </div>
                    </div>
                    <div class="right_content col-6">
                        <div id="about_me">
                            <p>Hi! I'm Borui Gu, a student at Northeastern University. I'm pursuing my Master's degree in Computer Science. </p>
                        </div>
                        <div class="my_links">
                            <a class="my_link" href="story/index.htm?../experiments/story.txt" target="_blank">Experiments</a>
                            <a class="my_link" href="https://github.com/BoruiGu/CS5610-borui" target="_blank">Git</a>
                            <div class="seperator">&nbsp;</div>
                            <a href="blog/" target="_blank">Blog</a>
                        </div>
                    </div>
                    <div class="col-1">&nbsp;</div>
                    <div class="clear"></div>
                </div>
            </div>
        </form>
    </div>
</body>
</html>
