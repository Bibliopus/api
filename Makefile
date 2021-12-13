up:
	docker-compose up -d

down:
	docker-compose down

build: down
	docker-compose build

shell:
	docker exec -it --privileged biblopus-api sh

clean-data: down
	sudo rm -rf data