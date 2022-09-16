<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div>
			<p>Dear Frontiers Men and Women,</p>
			<p>Here is your confirmation for our next Frontier Works project: The 3D Printed Frontier. This 3D printed experience will give Oakland artists and creators a place to collaborate, celebrate - and push the boundaries of craft, technology, art, gastronomy, and of course, cocktails.</p>
            <p>More details below:</p>
			<p>
                Date: {{ $date }}<br>
                Time: {{ $time }}<br>
                Location: {{ $event->location }}<br>
            </p>
			<p><b>Confirmation #: {{ $confirmation }}</b></p>
			<p>Please be sure to bring this email with you when you come.</p>
			<p>See you soon,</p>
			<p>Bulleit</p>
			<p></p>
			<p><small>If you would like to unsubscribe from future mailing. Click on <a href="https://guests.bulleit.com/unsubscribe">this link</a> or navigate to https://guests.bulleit.com/unsubscribe.</small></p>
		</div>
	</body>
</html>
