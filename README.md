### Getting started

Directions to get my project up and running:

1. Install node dependencies for Grunt and run Grunt, which minifies, uglifies,
and optimizes all images used in the project:

	'''bash
	$> npm install
	$> grunt
	'''

2. Run a local server for the website using python:

  	```bash
  	$> python -m SimpleHTTPServer 8080
  	```

3. Run ngrok so that you can access the server remotely:

  ``` bash
  $> ngrok 8080
  ```

4. Copy the public URL ngrok gives you and running it through PageSpeed Insights

### Optimizations made

1. I optimized the *updatePositions()* function by storing the scrollTop value
in a variable called *cachedScrollTop*, which means we don't need to look up
the scrollTop value for every single item in the for loop, eliminating forced
synchronous layout and reducing the Javascript bottleneck

2. I optimized the *changePizzaSizes()* function by getting rid of the call to
*determineDx*, which is useless, and moving the basic functionality of
determining the change in width outside of the for loop in *changePizzaSizes*.
This further reduces the Javascript performance bottleneck. After this, the
majority of the time per frame is spent Compositing layers and painting.

3. I changed the number of pizzas initially loaded from 200 to 40, which I felt
reduced the number of objects and thus layers that needed to be composited.

* Additionally, I attempted to optimize paint, but the solutions I tried
didn't seem to have much of an effect on the performance of the website.