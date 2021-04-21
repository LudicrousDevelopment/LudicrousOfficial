import os
import time

file1 = open("sfiles/run.txt","r+")
data = file1.read()
num = len(data)

if num == 0:
  print("You Have not Previously run the Server, Redirecting to Setup...")
  os.system('python sfiles/setup.py')
else:
  print("Server Starting...")
  time.sleep(5)
  os.system('python ludicrous-bot.py')