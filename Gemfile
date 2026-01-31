source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"
gem "minimal-mistakes-jekyll"
gem "webrick" # <--- AÑADIR ESTA

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-include-cache"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-remote-theme" # <--- AÑADIR ESTA
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
