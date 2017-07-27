<template>
    <div class="dashboard">
        <div id="wrapper">

            <navigation></navigation>

            <div id="page-wrapper">

                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                            <ol class="breadcrumb">
                                <li class="active">
                                    <i class="fa fa-dashboard"></i> Dashboard
                                </li>
                            </ol>
                        </div>
                    </div>
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="alert alert-info alert-dismissable">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                <i class="fa fa-info-circle"></i> <strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" class="alert-link">SB Admin 2</a> for additional features!
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-3">
                                            <i class="fa fa-comments fa-5x"></i>
                                        </div>
                                        <div class="col-xs-9 text-right">
                                            <div class="huge">26</div>
                                            <div>New Comments!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div class="panel-footer">
                                        <span class="pull-left">View Details</span>
                                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                        <div class="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="panel panel-green">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-3">
                                            <i class="fa fa-tasks fa-5x"></i>
                                        </div>
                                        <div class="col-xs-9 text-right">
                                            <div class="huge">12</div>
                                            <div>New Tasks!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div class="panel-footer">
                                        <span class="pull-left">View Details</span>
                                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                        <div class="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="panel panel-yellow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-3">
                                            <i class="fa fa-shopping-cart fa-5x"></i>
                                        </div>
                                        <div class="col-xs-9 text-right">
                                            <div class="huge">124</div>
                                            <div>New Orders!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div class="panel-footer">
                                        <span class="pull-left">View Details</span>
                                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                        <div class="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="panel panel-red">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-3">
                                            <i class="fa fa-support fa-5x"></i>
                                        </div>
                                        <div class="col-xs-9 text-right">
                                            <div class="huge">13</div>
                                            <div>Support Tickets!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div class="panel-footer">
                                        <span class="pull-left">View Details</span>
                                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                        <div class="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                                </div>
                                <div class="panel-body">
                                    <div id="morris-area-chart" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                        <svg height="347" version="1.1" width="1042" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;">
                                            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with RaphaÃ«l 2.1.2</desc>
                                            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                                            <text x="50.5" y="313" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>
                                            </text>
                                            <path fill="none" stroke="#aaaaaa" d="M63,313H1017" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="50.5" y="241" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7,500</tspan>
                                            </text>
                                            <path fill="none" stroke="#aaaaaa" d="M63,241H1017" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="50.5" y="169" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15,000</tspan>
                                            </text>
                                            <path fill="none" stroke="#aaaaaa" d="M63,169H1017" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="50.5" y="97.00000000000003" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal">
                                                <tspan dy="4.000000000000028" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22,500</tspan>
                                            </text>
                                            <path fill="none" stroke="#aaaaaa" d="M63,97.00000000000003H1017" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="50.5" y="25" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30,000</tspan>
                                            </text>
                                            <path fill="none" stroke="#aaaaaa" d="M63,25H1017" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="1016.9999999999999" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012-06</tspan>
                                            </text>
                                            <text x="946.2904009720534" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012-04</tspan>
                                            </text>
                                            <text x="840.8055893074119" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012-01</tspan>
                                            </text>
                                            <text x="770.0959902794654" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011-11</tspan>
                                            </text>
                                            <text x="699.3863912515188" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011-09</tspan>
                                            </text>
                                            <text x="627.5176184690158" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011-07</tspan>
                                            </text>
                                            <text x="556.8080194410693" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011-05</tspan>
                                            </text>
                                            <text x="486.0984204131227" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011-03</tspan>
                                            </text>
                                            <text x="381.77278250303766" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010-12</tspan>
                                            </text>
                                            <text x="311.06318347509114" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010-10</tspan>
                                            </text>
                                            <text x="240.35358444714458" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010-08</tspan>
                                            </text>
                                            <text x="169.64398541919803" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010-06</tspan>
                                            </text>
                                            <text x="98.93438639125151" y="325.5" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;" font-size="12px" font-family="sans-serif" font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010-04</tspan>
                                            </text>
                                            <path fill="#7cb47c" stroke="none" d="M63,261.9952C89.66099635479951,256.7152,142.9829890643985,245.758,169.64398541919803,240.8752C196.30498177399755,235.9924,249.62697448359654,229.61712786885246,276.28797083839606,222.93280000000001C302.6591737545565,216.32112786885247,355.40157958687723,189.66403977900552,381.77278250303766,187.6912C407.85419198055894,185.74003977900554,460.01701093560143,205.80194285714288,486.0984204131227,207.23680000000002C512.7594167679222,208.70354285714288,566.0814094775212,198.32080000000002,592.7424058323207,199.29760000000002C619.4034021871203,200.2744,672.7253948967193,232.39063606557377,699.3863912515188,215.0512C725.7575941676791,197.90023606557378,778.5,69.70240000000001,804.8712029161603,61.33600000000001C831.2424058323207,52.96960000000001,883.9848116646415,135.85260327868852,910.3560145808019,148.12C937.0170109356014,160.52220327868852,990.3390036452004,157.04080000000002,1016.9999999999999,160.01440000000002L1016.9999999999999,313L63,313Z" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                                            <path fill="none" stroke="#4da74d" d="M63,261.9952C89.66099635479951,256.7152,142.9829890643985,245.758,169.64398541919803,240.8752C196.30498177399755,235.9924,249.62697448359654,229.61712786885246,276.28797083839606,222.93280000000001C302.6591737545565,216.32112786885247,355.40157958687723,189.66403977900552,381.77278250303766,187.6912C407.85419198055894,185.74003977900554,460.01701093560143,205.80194285714288,486.0984204131227,207.23680000000002C512.7594167679222,208.70354285714288,566.0814094775212,198.32080000000002,592.7424058323207,199.29760000000002C619.4034021871203,200.2744,672.7253948967193,232.39063606557377,699.3863912515188,215.0512C725.7575941676791,197.90023606557378,778.5,69.70240000000001,804.8712029161603,61.33600000000001C831.2424058323207,52.96960000000001,883.9848116646415,135.85260327868852,910.3560145808019,148.12C937.0170109356014,160.52220327868852,990.3390036452004,157.04080000000002,1016.9999999999999,160.01440000000002" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <circle cx="63" cy="261.9952" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="169.64398541919803" cy="240.8752" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="276.28797083839606" cy="222.93280000000001" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="381.77278250303766" cy="187.6912" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="486.0984204131227" cy="207.23680000000002" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="592.7424058323207" cy="199.29760000000002" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="699.3863912515188" cy="215.0512" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="804.8712029161603" cy="61.33600000000001" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="910.3560145808019" cy="148.12" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="1016.9999999999999" cy="160.01440000000002" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <path fill="#a7b3bc" stroke="none" d="M63,287.4064C89.66099635479951,281.632,142.9829890643985,269.3668,169.64398541919803,264.3088C196.30498177399755,259.2508,249.62697448359654,249.70782950819674,276.28797083839606,246.94240000000002C302.6591737545565,244.20702950819674,355.40157958687723,244.5294187845304,381.77278250303766,242.30560000000003C407.85419198055894,240.1062187845304,460.01701093560143,232.33412747252746,486.0984204131227,229.2496C512.7594167679222,226.09652747252747,566.0814094775212,217.22440000000003,592.7424058323207,217.35520000000002C619.4034021871203,217.48600000000002,672.7253948967193,243.66103606557377,699.3863912515188,230.296C725.7575941676791,217.07623606557377,778.5,118.85440000000001,804.8712029161603,111.01600000000002C831.2424058323207,103.17760000000001,883.9848116646415,159.3600131147541,910.3560145808019,167.58880000000002C937.0170109356014,175.9080131147541,990.3390036452004,174.8032,1016.9999999999999,177.208L1016.9999999999999,313L63,313Z" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                                            <path fill="none" stroke="#7a92a3" d="M63,287.4064C89.66099635479951,281.632,142.9829890643985,269.3668,169.64398541919803,264.3088C196.30498177399755,259.2508,249.62697448359654,249.70782950819674,276.28797083839606,246.94240000000002C302.6591737545565,244.20702950819674,355.40157958687723,244.5294187845304,381.77278250303766,242.30560000000003C407.85419198055894,240.1062187845304,460.01701093560143,232.33412747252746,486.0984204131227,229.2496C512.7594167679222,226.09652747252747,566.0814094775212,217.22440000000003,592.7424058323207,217.35520000000002C619.4034021871203,217.48600000000002,672.7253948967193,243.66103606557377,699.3863912515188,230.296C725.7575941676791,217.07623606557377,778.5,118.85440000000001,804.8712029161603,111.01600000000002C831.2424058323207,103.17760000000001,883.9848116646415,159.3600131147541,910.3560145808019,167.58880000000002C937.0170109356014,175.9080131147541,990.3390036452004,174.8032,1016.9999999999999,177.208" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <circle cx="63" cy="287.4064" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="169.64398541919803" cy="264.3088" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="276.28797083839606" cy="246.94240000000002" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="381.77278250303766" cy="242.30560000000003" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="486.0984204131227" cy="229.2496" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="592.7424058323207" cy="217.35520000000002" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="699.3863912515188" cy="230.296" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="804.8712029161603" cy="111.01600000000002" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="910.3560145808019" cy="167.58880000000002" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="1016.9999999999999" cy="177.208" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <path fill="#2577b5" stroke="none" d="M63,287.4064C89.66099635479951,287.1376,142.9829890643985,289.0264,169.64398541919803,286.3312C196.30498177399755,283.636,249.62697448359654,267.03808524590164,276.28797083839606,265.8448C302.6591737545565,264.66448524590163,355.40157958687723,279.1269834254143,381.77278250303766,276.8368C407.85419198055894,274.57178342541437,460.01701093560143,249.88250549450552,486.0984204131227,247.62400000000002C512.7594167679222,245.3153054945055,566.0814094775212,256.18,592.7424058323207,258.568C619.4034021871203,260.95599999999996,672.7253948967193,278.0732590163935,699.3863912515188,266.728C725.7575941676791,255.50605901639346,778.5,175.33960000000002,804.8712029161603,168.2992C831.2424058323207,161.2588,883.9848116646415,202.47914754098363,910.3560145808019,210.40480000000002C937.0170109356014,218.41754754098363,990.3390036452004,226.6408,1016.9999999999999,232.0528L1016.9999999999999,313L63,313Z" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                                            <path fill="none" stroke="#0b62a4" d="M63,287.4064C89.66099635479951,287.1376,142.9829890643985,289.0264,169.64398541919803,286.3312C196.30498177399755,283.636,249.62697448359654,267.03808524590164,276.28797083839606,265.8448C302.6591737545565,264.66448524590163,355.40157958687723,279.1269834254143,381.77278250303766,276.8368C407.85419198055894,274.57178342541437,460.01701093560143,249.88250549450552,486.0984204131227,247.62400000000002C512.7594167679222,245.3153054945055,566.0814094775212,256.18,592.7424058323207,258.568C619.4034021871203,260.95599999999996,672.7253948967193,278.0732590163935,699.3863912515188,266.728C725.7575941676791,255.50605901639346,778.5,175.33960000000002,804.8712029161603,168.2992C831.2424058323207,161.2588,883.9848116646415,202.47914754098363,910.3560145808019,210.40480000000002C937.0170109356014,218.41754754098363,990.3390036452004,226.6408,1016.9999999999999,232.0528" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <circle cx="63" cy="287.4064" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="169.64398541919803" cy="286.3312" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="276.28797083839606" cy="265.8448" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="381.77278250303766" cy="276.8368" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="486.0984204131227" cy="247.62400000000002" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="592.7424058323207" cy="258.568" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="699.3863912515188" cy="266.728" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="804.8712029161603" cy="168.2992" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="910.3560145808019" cy="210.40480000000002" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                            <circle cx="1016.9999999999999" cy="232.0528" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                                        </svg>
                                        <div class="morris-hover morris-default-style" style="left: 113.144px; top: 177px; display: none;">
                                            <div class="morris-hover-row-label">2010 Q2</div>
                                            <div class="morris-hover-point" style="color: #0b62a4">
                                                iPhone: 2,778
                                            </div>
                                            <div class="morris-hover-point" style="color: #7A92A3">
                                                iPad: 2,294
                                            </div>
                                            <div class="morris-hover-point" style="color: #4da74d">
                                                iPod Touch: 2,441
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>
                                </div>
                                <div class="panel-body">
                                    <div id="morris-donut-chart">
                                        <svg height="347" version="1.1" width="306" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;">
                                            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with RaphaÃ«l 2.1.2</desc>
                                            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                                            <path fill="none" stroke="#0b62a4" d="M153,271.3333333333333A95.33333333333333,95.33333333333333,0,0,0,243.10368304650171,207.1411423345388" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>
                                            <path fill="#0b62a4" stroke="#ffffff" d="M153,274.3333333333333A98.33333333333333,98.33333333333333,0,0,0,245.93911363188113,208.12110835205925L283.4298069274535,221.0784368059408A138,138,0,0,1,153,314Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <path fill="none" stroke="#3980b5" d="M243.10368304650171,207.1411423345388A95.33333333333333,95.33333333333333,0,0,0,67.48942206387726,133.85281141671817" stroke-width="2" opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"></path>
                                            <path fill="#3980b5" stroke="#ffffff" d="M245.93911363188113,208.12110835205925A98.33333333333333,98.33333333333333,0,0,0,64.79852975120207,132.52650128647502L24.734133095815878,112.77921712507725A143,143,0,0,1,288.1555245697525,222.71171350180822Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <path fill="none" stroke="#679dc6" d="M67.48942206387726,133.85281141671817A95.33333333333333,95.33333333333333,0,0,0,152.97005015052835,271.33332862882196" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>
                                            <path fill="#679dc6" stroke="#ffffff" d="M64.79852975120207,132.52650128647502A98.33333333333333,98.33333333333333,0,0,0,152.96910767274778,274.3333284807779L152.9566460220935,313.999993189973A138,138,0,0,1,29.218953616941192,114.98973400881582Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                                            <text x="153" y="166" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: 800; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" font-size="15px" font-weight="800" transform="matrix(1.4793,0,0,1.4793,-73.3345,-84.8379)" stroke-width="0.675990675990676">
                                                <tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">In-Store Sales</tspan>
                                            </text>
                                            <text x="153" y="186" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Arial;" font-size="14px" transform="matrix(1.9861,0,0,1.9861,-150.875,-175.5278)" stroke-width="0.5034965034965035">
                                                <tspan dy="5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan>
                                            </text>
                                        </svg>
                                    </div>
                                    <div class="text-right">
                                        <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item">
                                            <span class="badge">just now</span>
                                            <i class="fa fa-fw fa-calendar"></i> Calendar updated
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">4 minutes ago</span>
                                            <i class="fa fa-fw fa-comment"></i> Commented on a post
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">23 minutes ago</span>
                                            <i class="fa fa-fw fa-truck"></i> Order 392 shipped
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">46 minutes ago</span>
                                            <i class="fa fa-fw fa-money"></i> Invoice 653 has been paid
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">1 hour ago</span>
                                            <i class="fa fa-fw fa-user"></i> A new user has been added
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">2 hours ago</span>
                                            <i class="fa fa-fw fa-check"></i> Completed task: "pick up dry cleaning"
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">yesterday</span>
                                            <i class="fa fa-fw fa-globe"></i> Saved the world
                                        </a>
                                        <a href="#" class="list-group-item">
                                            <span class="badge">two days ago</span>
                                            <i class="fa fa-fw fa-check"></i> Completed task: "fix error on sales page"
                                        </a>
                                    </div>
                                    <div class="text-right">
                                        <a href="#">View All Activity <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Transactions Panel</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Order #</th>
                                                    <th>Order Date</th>
                                                    <th>Order Time</th>
                                                    <th>Amount (USD)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3326</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:29 PM</td>
                                                    <td>$321.33</td>
                                                </tr>
                                                <tr>
                                                    <td>3325</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:20 PM</td>
                                                    <td>$234.34</td>
                                                </tr>
                                                <tr>
                                                    <td>3324</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:03 PM</td>
                                                    <td>$724.17</td>
                                                </tr>
                                                <tr>
                                                    <td>3323</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:00 PM</td>
                                                    <td>$23.71</td>
                                                </tr>
                                                <tr>
                                                    <td>3322</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:49 PM</td>
                                                    <td>$8345.23</td>
                                                </tr>
                                                <tr>
                                                    <td>3321</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:23 PM</td>
                                                    <td>$245.12</td>
                                                </tr>
                                                <tr>
                                                    <td>3320</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:15 PM</td>
                                                    <td>$5663.54</td>
                                                </tr>
                                                <tr>
                                                    <td>3319</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:13 PM</td>
                                                    <td>$943.45</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="text-right">
                                        <a href="#">View All Transactions <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- /#page-wrapper -->

        </div>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue';
    export default {
        name: 'hello',
        components: {
            Navigation
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>