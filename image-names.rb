require 'set'

files = Dir["public/images/v1/cards/*"]
keys = Set.new

def build_key(key, keys)
  if keys.include?(key)
    loop do
      key = "#{key}1"
      break if !keys.include?(key)
    end
    key
  else
    key
  end
end

files.sort.each do |file|
  file['public/images/v1/cards/'] = ''
  file['.png'] = ''
  key = file[0..2].downcase
  key = build_key(key, keys)
  puts "{key: '#{key}', name: '#{file}'},"
  keys << key
end
