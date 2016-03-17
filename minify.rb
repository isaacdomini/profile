require "rest_client"
js_files = ["js/all.js","js/headerbg.js"]
js_min_files = ["js/all.min.js","js/headerbg.min.js"]
for i in 0..js_files.length-1
  response = RestClient.post "https://javascript-minifier.com/raw", {:input => File.open(js_files[i]).read}
  File.open(js_min_files[i], "w").write(response)
  puts "#{js_files[i]} converted to #{js_min_files[i]}"
end

css_files = ["css/styles.css"]
css_min_files = ["css/styles.min.css"]
for i in 0..css_files.length-1
  response = RestClient.post "https://cssminifier.com/raw", {:input => File.open(css_files[i]).read}
  File.open(css_min_files[i], "w").write(response)
  puts "#{css_files[i]} converted to #{css_min_files[i]}"
end
