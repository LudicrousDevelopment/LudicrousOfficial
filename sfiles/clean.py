import os

file1 = open("sfiles/run.txt","r+")
file1.truncate(0)
file1.close()

file2 = open("config.json", "w")
file2.write("{}")
os.remove( "config.json" )
file2 = open("config.json", "w")
file2.write("{}")