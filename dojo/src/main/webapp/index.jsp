<!DOCTYPE html>
<html>
<head>
	<title>Integration Testing with Dojo</title>
	<script src="javascript/dojo-1.7.2/dojo/dojo.js"></script>
<% if ("true".equals(request.getParameter("debug"))) { %>
	<!-- Debug -->
	<script type="text/javascript" src="javascript/debug/closure-library/closure/goog/base.js"></script>
	<script type="text/javascript" src="javascript/debug/output/assert/DojoExample-1.0-SNAPSHOT-assert.js"></script>
	<script type="text/javascript" src="javascript/debug/output/assertRequires/DojoExample-1.0-SNAPSHOT-assert-requires.js"></script>
<% } else { %>
	<!-- Production -->
	<script type="text/javascript" src="javascript/compiled/DojoExample-1.0-SNAPSHOT-min.js"></script>
<% } %>
	<script type="text/javascript">
		dojo.ready(function(){
			var para = dojo.byId("para");
			dojo.connect(para, 'onclick', com.github.ClosureFrameworkDojoExample.rotateColorFunction);
		});
	</script>

</head>

<body>
	<body><p id="para">If you click on me, I will change colors.</p></body>
</html>
