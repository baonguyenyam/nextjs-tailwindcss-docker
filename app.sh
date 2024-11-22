# Show menu to select the app to run

echo "\033[1;32mSelect the app to run\033[0m"
select app in "Run DEV" "Format" "Build" "Update NPM" "Compress" "ADD Key" "Docker" "Exit"
do
  case $app in
	"Run DEV")
	echo "\033[1;32mRunning DEV app\033[0m"
	  sh cmd/dev.sh
	  break
	  ;;
	"Exit")
	  echo "Exiting..."
	  sh app.sh
	  break
	  ;;
	""Format"")
	echo "\033[1;32mRunning Format app\033[0m"
	  sh cmd/format.sh
	  ;;
	"Build")
	echo "\033[1;32mRunning BUILD app\033[0m"
	  sh cmd/build.sh
	  ;;
	"Update NPM")
	echo "\033[1;32mRunning UPDATE NPM app\033[0m"
	  npx npm-check-updates 
	  ;;
	"Compress")
	echo "\033[1;32mRunning COMPRESS app\033[0m"
	  sh cmd/compress.sh
	  ;;
	"ADD Key")
	echo "\033[1;32mRunning ADD Key app\033[0m"
	  sh cmd/key.sh
	  ;;
	"Docker")
	echo "\033[1;32mRunning Docker app\033[0m"
	  sh cmd/docker.sh
	  ;;
	*)
	  # Return to the main menu
	  echo "Invalid option $REPLY"
	  sh app.sh
	  break
	;;

  esac
done