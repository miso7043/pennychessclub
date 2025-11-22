import React, { useMemo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// 1. 위치 데이터 타입 정의
interface Location {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

// 2. 컴포넌트 props 타입 정의
interface LocationsMapProps {
  locations: Location[];
  googleMapsApiKey: string; // API 키를 props로 받도록 추가
}

// 3. 지도 로드에 필요한 라이브러리 정의
const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = [
  "geometry", // 필요하다면 추가 (필수는 아님)
];

const LocationsMap: React.FC<LocationsMapProps> = ({
  locations,
  googleMapsApiKey,
}) => {
  // 4. Google Maps API 로더 사용
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries,
  });

  // 5. 지도의 초기 중앙 위치 계산 (모든 마커의 중심점)
  const center = useMemo(() => {
    // 모든 위치의 평균 위도/경도를 계산하여 지도의 중앙점으로 설정
    const avgLat =
      locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    const avgLng =
      locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
    return { lat: avgLat, lng: avgLng };
  }, [locations]);

  // 6. 지도 인스턴스를 저장하여 추가적인 제어를 위해 사용
  const [map, setMap] = useState<google.maps.Map | null>(null);
  console.log("map:", map);

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // 지도 로드 시 호출
  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();
    locations.forEach((loc) => bounds.extend({ lat: loc.lat, lng: loc.lng }));
    mapInstance.fitBounds(bounds);
    setMap(mapInstance);
  }, [locations]);

  // 지도 언로드 시 호출
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px", borderRadius: "1rem", boxShadow: "0 2px 16px rgba(0,0,0,0.12)" }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: true,
          disableDoubleClickZoom: false,
          draggable: true,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
            onClick={() => setSelectedLocation(location)}
          />
        ))}
      </GoogleMap>
      {/* 모달창 구현 */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setSelectedLocation(null)}>
          <div className="bg-slate-800 rounded-xl shadow-xl p-6 min-w-[280px] max-w-xs text-center relative " onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white hover:text-red-500 text-xl font-bold" onClick={() => setSelectedLocation(null)}>&times;</button>
            <h3 className="text-2xl font-bold mb-2 text-white">{selectedLocation.name}</h3>
            <div className="text-xl text-white mb-2">{selectedLocation.address}</div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsMap;