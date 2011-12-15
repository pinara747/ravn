//So I wanted to focus on search functionality and was looking around for a fast client side search engine in javascript. 
//I came across filter.js which is a low level client side search filtering that uses JSON and jQuery. See filter.js in my scripts folder
//Well in order to run a search engine you need data, hence the following..

            //<![CDATA[
              var services = [{"service":{"title":"Yoga","total_reviews":0,"estimated_duration":0.0,"thumbnail":"images/layout/city.png","amount":453.0,"donated_amount":null,"booked_seats":0,"id":1,"user_id":3,"is_public":true,"service_categories":[{"to_param":"1","category_id":33}],"end_date":"2011-07-30","type_id":15,"status":"active","start_time":null,"type":{"name":"Prenatal"}}},
			  
			  {"service":{"title":"Bungee Jumping","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":201.0,"donated_amount":null,"booked_seats":0,"id":2,"user_id":3,"is_public":true,"service_categories":[{"to_param":"2","category_id":33}],"end_date":"2011-09-03","type_id":16,"status":"active","start_time":null,"type":{"name":"Bungee Jumping"}}},
			  
			  {"service":{"title":"Indoor Skydiving","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":500.0,"donated_amount":null,"booked_seats":0,"id":3,"user_id":3,"is_public":true,"service_categories":[{"to_param":"3","category_id":27}],"end_date":"2011-08-16","type_id":15,"status":"active","start_time":null,"type":{"name":"Indoor Skydiving"}}},
			  
			  {"service":{"title":"Arts Festival","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":28.0,"donated_amount":null,"booked_seats":0,"id":4,"user_id":3,"is_public":true,"service_categories":[{"to_param":"4","category_id":32}],"end_date":"2011-08-14","type_id":18,"status":"active","start_time":null,"type":{"name":"Arts Festival"}}},
			  
			  {"service":{"title":"Snowboarding","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":200.0,"donated_amount":null,"booked_seats":0,"id":5,"user_id":3,"is_public":true,"service_categories":[{"to_param":"5","category_id":29}],"end_date":"2011-08-19","type_id":5,"status":"active","start_time":null,"type":{"name":"Snowboarding"}}},
			  
			  {"service":{"title":"Press Club","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":271.0,"donated_amount":null,"booked_seats":0,"id":6,"user_id":3,"is_public":true,"service_categories":[{"to_param":"6","category_id":34}],"end_date":"2011-07-31","type_id":6,"status":"active","start_time":null,"type":{"name":"Corporate reservations"}}},
			  
			  
			  {"service":{"title":"Dancing","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":551.0,"donated_amount":null,"booked_seats":0,"id":9,"user_id":3,"is_public":true,"service_categories":[{"to_param":"9","category_id":35}],"end_date":"2011-08-27","type_id":5,"status":"active","start_time":null,"type":{"name":"Ballet"}}},
			  
			  {"service":{"title":"Dancing","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":535.0,"donated_amount":null,"booked_seats":0,"id":10,"user_id":3,"is_public":true,"service_categories":[{"to_param":"10","category_id":38}],"end_date":"2011-08-05","type_id":13,"status":"active","start_time":null,"type":{"name":"Ballroom"}}},
			  
			  {"service":{"title":"Dancing","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":449.0,"donated_amount":null,"booked_seats":0,"id":11,"user_id":3,"is_public":true,"service_categories":[{"to_param":"11","category_id":31}],"end_date":"2011-08-21","type_id":14,"status":"active","start_time":null,"type":{"name":"Waltz"}}},
			  
			  {"service":{"title":"SF Philharmonic Orchestra","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":262.0,"donated_amount":null,"booked_seats":0,"id":12,"user_id":3,"is_public":true,"service_categories":[{"to_param":"12","category_id":28}],"end_date":"2011-08-28","type_id":1,"status":"active","start_time":null,"type":{"name":"SF Philharmonic Orchestra"}}},
			  
			  {"service":{"title":"Music","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":231.0,"donated_amount":null,"booked_seats":0,"id":13,"user_id":3,"is_public":true,"service_categories":[{"to_param":"13","category_id":39}],"end_date":"2011-08-25","type_id":9,"status":"active","start_time":null,"type":{"name":"Music"}}},
			  
			  {"service":{"title":"Sushi","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":214.0,"donated_amount":null,"booked_seats":0,"id":14,"user_id":3,"is_public":true,"service_categories":[{"to_param":"14","category_id":29}],"end_date":"2011-08-17","type_id":4,"status":"active","start_time":null,"type":{"name":"Japanese"}}},
			  
			  {"service":{"title":"Mexican Grill","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":250.0,"donated_amount":null,"booked_seats":0,"id":15,"user_id":3,"is_public":true,"service_categories":[{"to_param":"15","category_id":37}],"end_date":"2011-08-17","type_id":8,"status":"active","start_time":null,"type":{"name":"Mexican"}}},
			  
			  {"service":{"title":"ItalianCooking Lesson","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":195.0,"donated_amount":null,"booked_seats":0,"id":16,"user_id":3,"is_public":true,"service_categories":[{"to_param":"16","category_id":27}],"end_date":"2011-08-25","type_id":1,"status":"active","start_time":null,"type":{"name":"Italian"}}},
			  
			  
			  {"service":{"title":"Cacophony Christmas","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":18,"user_id":3,"is_public":true,"service_categories":[{"to_param":"18","category_id":35}],"end_date":"2011-08-21","type_id":12,"status":"active","start_time":null,"type":{"name":"Cacophony Christmas"}}},
			  
			  {"service":{"title":"2nd Annual Claus Crawl","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":19,"user_id":3,"is_public":true,"service_categories":[{"to_param":"19","category_id":31}],"end_date":"2011-08-25","type_id":12,"status":"active","start_time":null,"type":{"name":"2nd Annual Claus Crawl"}}},
			  
			  {"service":{"title":"Christmas Boat Parade","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":20,"user_id":3,"is_public":true,"service_categories":[{"to_param":"20","category_id":33}],"end_date":"2011-08-28","type_id":10,"status":"active","start_time":null,"type":{"name":"Christmas Boat Parade"}}},
			  
			  {"service":{"title":"Renegade Craft Fair","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":21,"user_id":3,"is_public":true,"service_categories":[{"to_param":"21","category_id":38}],"end_date":"2011-08-07","type_id":12,"status":"active","start_time":null,"type":{"name":"Renegade Craft Fair"}}},
			  
			  {"service":{"title":"Boombox Christmas Parade","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":22,"user_id":3,"is_public":true,"service_categories":[{"to_param":"22","category_id":32}],"end_date":"2011-09-02","type_id":6,"status":"active","start_time":null,"type":{"name":"Boombox Christmas Parade"}}},
			  
			  {"service":{"title":"Ornament Fest","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":23,"user_id":3,"is_public":true,"service_categories":[{"to_param":"23","category_id":38}],"end_date":"2011-08-01","type_id":8,"status":"active","start_time":null,"type":{"name":" Ornament Fest"}}},
			  
			  {"service":{"title":"SantaCon 2011","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":24,"user_id":3,"is_public":true,"service_categories":[{"to_param":"24","category_id":38}],"end_date":"2011-08-21","type_id":16,"status":"active","start_time":null,"type":{"name":"SantaCon 2011"}}},
			  
			  {"service":{"title":"Jack London State Park","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":25,"user_id":3,"is_public":true,"service_categories":[{"to_param":"25","category_id":33}],"end_date":"2011-08-22","type_id":3,"status":"active","start_time":null,"type":{"name":"Jack London State Park"}}},
			  
			  {"service":{"title":"Lands End","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":0.0,"donated_amount":null,"booked_seats":0,"id":26,"user_id":3,"is_public":true,"service_categories":[{"to_param":"26","category_id":33}],"end_date":"2011-07-30","type_id":4,"status":"active","start_time":null,"type":{"name":"Lands End"}}},
			  
			  {"service":{"title":"Castle Rock","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":50.0,"donated_amount":null,"booked_seats":0,"id":27,"user_id":3,"is_public":true,"service_categories":[{"to_param":"27","category_id":34}],"end_date":"2011-08-12","type_id":18,"status":"active","start_time":null,"type":{"name":"Castle Rock"}}},
			  
			  {"service":{"title":"Capoeira Class","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":20.0,"donated_amount":null,"booked_seats":0,"id":33,"user_id":3,"is_public":true,"service_categories":[{"to_param":"33","category_id":40}],"end_date":"2011-08-14","type_id":16,"status":"active","start_time":null,"type":{"name":"Morning Capoeira Class"}}},
			  
			  {"service":{"title":"Capoeira Class","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":89.0,"donated_amount":null,"booked_seats":0,"id":34,"user_id":3,"is_public":true,"service_categories":[{"to_param":"34","category_id":35}],"end_date":"2011-08-03","type_id":17,"status":"active","start_time":null,"type":{"name":"Capoeira Fundamental Class"}}},
			  
			  {"service":{"title":"RocketBoat Adventure","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":465.0,"donated_amount":null,"booked_seats":0,"id":35,"user_id":3,"is_public":true,"service_categories":[{"to_param":"35","category_id":27}],"end_date":"2011-08-30","type_id":13,"status":"active","start_time":null,"type":{"name":"RocketBoat Ultimate High Speed Adventure"}}},
			  
			  {"service":{"title":"Zumba Class","total_reviews":0,"estimated_duration":0.0,"thumbnail":"/images/category/cat_image_thumb.jpg","amount":40.0,"donated_amount":null,"booked_seats":0,"id":36,"user_id":3,"is_public":true,"service_categories":[{"to_param":"36","category_id":34}],"end_date":"2011-08-24","type_id":8,"status":"active","start_time":null,"type":{"name":"Zumba Fitness Class"}}}];
            //]]>