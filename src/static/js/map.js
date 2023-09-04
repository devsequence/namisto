function initMap() {

	if($(window).width() <= 992) {
		const zoomMap = 14;
		const mapLat = $('.mapLat').val();
		const mapLng = $('.mapLng').val();
		const myLatLng = { lat: Number(mapLat), lng: Number(mapLng)};
		const mapIcon = $('.mapPin').val();

		const styledMapType = new google.maps.StyledMapType(
			[
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 65
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": "50"
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "30"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "40"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#e9e9e9"
						},
						{
							"lightness": -25
						},
						{
							"saturation": -97
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"lightness": -25
						},
						{
							"saturation": -100
						}
					]
				}
			],
			{ name: "Styled Map" }
		);
		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: Number(zoomMap),
			// center: myLatLng,
			disableDefaultUI: true,

		});
		map.mapTypes.set("styled_map", styledMapType);
		map.setMapTypeId("styled_map");
		new google.maps.Marker({
			position: myLatLng,
		});

		const titleInfo  = $('.infoMapMarker').attr('data-title');
		const textInfo  = $('.infoMapMarker').attr('data-text');
		const linkInfo  = $('.infoMapMarker').attr('data-link');
		const positionLtInfo  = parseFloat($('.infoMapMarker').attr('data-positionLt'));
		const positionLdInfo  = parseFloat($('.infoMapMarker').attr('data-positionLd'));
		const text = [
			{
				title: titleInfo,
				text: textInfo,
				link: linkInfo,
			},
		];
		const features = [
			{
				position: new google.maps.LatLng(positionLtInfo,positionLdInfo),
				title: '<div class="map-title">'+text[0].title+'</div><div class="map-text">'+text[0].text+'</div><a class="map-link" target="_blank" href="'+text[0].link+'">На карті</a>',
			},
		];
		for (let i = 0; i < features.length; i++) {
			const marker = new google.maps.Marker({
				position: features[i].position,
				icon: mapIcon,
				map: map,
				title: features[i].title,
			});
			var infowindow = new google.maps.InfoWindow();

			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					infowindow.setContent(
						'<div class="map-title">'+text[i].title+'</div><div class="map-text">'+text[i].text+'</div><a class="map-link" target="_blank" href="'+text[i].link+'">На карті</a>'
					);
					infowindow.open(map, marker);
				}

			})(marker, i));
		};
	}else{
		const zoomMap = $('.zoom').val();
		const mapLat = $('.mapLat').val();
		const mapLng = $('.mapLng').val();
		const myLatLng = { lat: Number(mapLat), lng: Number(mapLng)};
		const mapIcon = $('.mapPin').val();

		const styledMapType = new google.maps.StyledMapType(
			[
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 65
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": "50"
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "30"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "40"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#e9e9e9"
						},
						{
							"lightness": -25
						},
						{
							"saturation": -97
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"lightness": -25
						},
						{
							"saturation": -100
						}
					]
				}
			],
			{ name: "Styled Map" }
		);
		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: Number(zoomMap),
			center: myLatLng,
			disableDefaultUI: true,

		});
		map.mapTypes.set("styled_map", styledMapType);
		map.setMapTypeId("styled_map");
		new google.maps.Marker({
			position: myLatLng,
		});

		const titleInfo  = $('.infoMapMarker').attr('data-title');
		const textInfo  = $('.infoMapMarker').attr('data-text');
		const linkInfo  = $('.infoMapMarker').attr('data-link');
		const positionLtInfo  = parseFloat($('.infoMapMarker').attr('data-positionLt'));
		const positionLdInfo  = parseFloat($('.infoMapMarker').attr('data-positionLd'));
		const text = [
			{
				title: titleInfo,
				text: textInfo,
				link: linkInfo,
			},
		];
		const features = [
			{
				position: new google.maps.LatLng(positionLtInfo,positionLdInfo),
				title: '<div class="map-title">'+text[0].title+'</div><div class="map-text">'+text[0].text+'</div><a class="map-link" target="_blank" href="'+text[0].link+'">На карті</a>',
			},
		];
		for (let i = 0; i < features.length; i++) {
			const marker = new google.maps.Marker({
				position: features[i].position,
				icon: mapIcon,
				map: map,
				title: features[i].title,
			});
			var infowindow = new google.maps.InfoWindow();

			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					infowindow.setContent(
						'<div class="map-title">'+text[i].title+'</div><div class="map-text">'+text[i].text+'</div><a class="map-link" target="_blank" href="'+text[i].link+'">На карті</a>'
					);
					infowindow.open(map, marker);
				}

			})(marker, i));
		};

	}



}