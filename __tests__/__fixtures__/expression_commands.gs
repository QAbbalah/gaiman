echo* (get "https://jcubic.pl/file.txt"), 100
echo "<white>" + (ask "? ") + "</white>"

import gaiman
import name from "file.js"

let x = ask "? ", lambda(name)
  return name != ""
end

let x = ask* "? ", 0, lambda(name)
  return name != ""
end

echo* <<<TEXT
this is <red>Text</red>
TEXT, 50

echo get ask "?"

echo (get (ask "? ").toLowerCase()).replace(/engine/, "Engine")
echo (get ask "? ").toUpperCase().replace(/engine/, "Engine")

echo* *["hello", 100]

clear
echo "Hello"
clear
clear 
echo* "message.", 50
echo(
    ask "?"
)

async do
  exec* "hello, world", 0
end
