app.controller('MainController', ['$scope', ($scope) => {
  $scope.programs = [
  {
  series: "Sherlock",
  series_img: "img/sherlock.jpg",
  genre: "Crime drama",
  season: 3,
  episode: "The Empty Hearse",
  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
  datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
  likes: 0,
  dislikes: 0
}, 
 {
  series: "Breaking Bad",
  series_img: "https://i.pinimg.com/736x/6a/c5/08/6ac508230512a6a2f3a2e5d80f84d6c2.jpg",
  genre: "Crime, Drama",
  season: 5,
  episode: "My Baby Blue",
  description: "School teacher chemist goes crazy and cooks methaphetamine the best in the whole world",
  datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
  likes: 0,
  dislikes: 0
}

];
	
	$scope.plusOne = (index) => {
		$scope.programs[index].likes++;
	}

$scope.minusOne = (index) => {
		$scope.programs[index].dislikes++;
	}
}]);