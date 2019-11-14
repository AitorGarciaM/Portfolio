<!--home-->

<!Doctype html>
<html lang = "en">	
	<head>
		<Title>Aitor Garcia Miñana - Portfolio</Title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<link rel ="stylesheet" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>		
		<script src="typewriterEffect.js"></script>
	</head>	
	<body data-spy="scroll">
		
		<?php include 'Menu.php'?>
		
		<div id="section1" class="container-fluid">
			<div class="container">
				<h1 class="typewriter">
					<p href="" class="typewrite" data-period="2000" data-type='["hi, i am aitor garcia.", "i am a game programmer.", "i love video games." ," and i love to develop."]'>
						<span class="wrap"></span>
					</p>
				</h1>
			</div>
		</div>
		
		<div id="section2" class="container-fluid">
		
			<div class="container-fluid">
				<div class="row">
					<div class="col">
						<h1>About me</h1>
						
						<p>
							<h4 class="Header">
								Hello, my name is Aitor Garcia. Game Developer <br/> and studient of Software Engineering.
							</h4>
						</p>
						
						<p>
							<h5>
								I did a degree in multimedia application <br/>
								development specialized in video games and digital leisure from September 2017 <br/>
								until 2019,	when I finished the course. I did the 317 hours of <br/>
								internship at Dolores Entertainment and ViOD Games Studio.
							</h5>
						</p>
						<p>
							<h5>
								I am fluent in C++, C#, Java, php and javascript.<br/>
								I have also worked with MySQL databases, Unity and <br/>
								Unreal Engine and currently I'm making my own graphic engine <br/>
								with OpenGL and SDL2 libraries.
							</h5>
						<p>
					</div>	
				
					<div class="col col-lg-4">
						<div class="content text-right">
							<table class="table">
								<tbody>
								  <tr>
									<td>Full name<span class="dotsName">:</span></td>
									<td>Aitor Garcia Miñana</td>
								  </tr>
								  <tr>
									<td>Age<span class="dotsAge">:</span></td>
									<td>22</td>
								  </tr>
								  <tr>
									<td>Address<span class="dotsAddress">:</span></td>
									<td>14 c.Puig-Oriol, Palau-solita i Plegamans, Barcelona, Spain</td>
								  </tr>
								  <tr>
									<td>Email<span class="dotsEmail">:</span></td>
									<td>jgaitor@msn.com</td>
								  </tr>
								  <tr>
									<td>Phone<span class="dotsPhone">:</span></td>
									<td>+(34)652280798</td>
								  <tr>
								</tbody>
							</table>	
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="section3" class="container-fluid">
			<h1>Projects</h1>
			<div class="card" style="width: 18rem; margin-top:3%">
				<div class="card-body">
					<h4 class="Card-title" style="margin-left:20%">Owl Engine</h4>
					<img class="card-img-top" src="Logo/OwlEngineLogo256x256.png" alt="Owl Engine Logo">
					<p class="card-text">My own Game Engine using OpenGl and SDL2 in C++. Actually I'm working on it</p>
					<a download href="https://github.com/AitorGarciaM/OwlEngine/archive/master.zip" class="btn btn-primary" style="margin-left:20%">Download Zip</a>
				</div>
			</div>
		</div>		
		
		<div id="section4" class="container-fluid">
			<h1>Contact me</h1>
		</div>

	</body>
</html>