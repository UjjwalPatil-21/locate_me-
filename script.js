document.addEventListener('DOMContentLoaded', () => {
    // --- DATASET OF PHYSIOTHERAPISTS ---
    // This dataset is synthetically generated for demonstration purposes.
    // Locations are realistic land-based coordinates in the Mumbai Metropolitan Region.
    const physioData = [
        { name: "Dr. Priya Sharma", location: { lat: 19.0760, lon: 72.8777 }, address: "123 Health St, Andheri (E)", contact: "+919876543210", rating: 4.8, specialties: ["Orthopedic", "Sports Injury"], hospital: "Mumbai General Hospital" },
        { name: "Dr. Rohan Verma", location: { lat: 19.0213, lon: 72.8424 }, address: "456 Wellness Ave, Dadar (W)", contact: "+919876543211", rating: 4.9, specialties: ["Neurological", "Pediatric"], hospital: null },
        { name: "Dr. Anjali Mehta", location: { lat: 18.9220, lon: 72.8347 }, address: "789 Cure Blvd, Colaba", contact: "+919876543212", rating: 4.7, specialties: ["Cardiopulmonary"], hospital: "St. George's Hospital" },
        { name: "Dr. Sameer Khan", location: { lat: 19.0543, lon: 72.8402 }, address: "101 Rehab Rd, Bandra (W)", contact: "+919876543213", rating: 4.6, specialties: ["Sports Injury", "Orthopedic"], hospital: "Lilavati Hospital" },
        { name: "Dr. Neha Desai", location: { lat: 19.1197, lon: 72.8464 }, address: "212 Mobility Ln, Vile Parle (E)", contact: "+919876543214", rating: 4.8, specialties: ["Geriatric"], hospital: null },
        { name: "Dr. Vikram Singh", location: { lat: 19.2183, lon: 72.9781 }, address: "333 Flex Ct, Thane (W)", contact: "+919876543215", rating: 4.5, specialties: ["Orthopedic"], hospital: "Jupiter Hospital" },
        { name: "Dr. Sunita Patil", location: { lat: 19.1363, lon: 72.8277 }, address: "444 Spine Aly, Juhu", contact: "+919876543216", rating: 4.9, specialties: ["Neurological"], hospital: null },
        { name: "Dr. Arjun Reddy", location: { lat: 19.0728, lon: 72.8846 }, address: "555 Joint Cir, Kurla", contact: "+919876543217", rating: 4.3, specialties: ["Sports Injury"], hospital: "City Hospital" },
        { name: "Dr. Aisha Kapoor", location: { lat: 19.0999, lon: 72.8548 }, address: "666 Movement Way, Santacruz (E)", contact: "+919876543218", rating: 4.7, specialties: ["Pediatric"], hospital: "Surya Hospital" },
        { name: "Dr. Rahul Joshi", location: { lat: 18.9437, lon: 72.8353 }, address: "777 Recovery Path, Marine Lines", contact: "+919876543219", rating: 4.6, specialties: ["Cardiopulmonary", "Orthopedic"], hospital: "Bombay Hospital" },
        { name: "Dr. Fatima Ali", location: { lat: 19.1762, lon: 72.8493 }, address: "888 Posture Pl, Malad (W)", contact: "+919876543220", rating: 4.4, specialties: ["Geriatric"], hospital: null },
        { name: "Dr. Karan Malhotra", location: { lat: 19.2292, lon: 72.8553 }, address: "999 Strength Sq, Borivali (W)", contact: "+919876543221", rating: 4.8, specialties: ["Orthopedic", "Sports Injury"], hospital: "Apex Hospital" },
        { name: "Dr. Sneha Iyer", location: { lat: 19.0330, lon: 73.0297 }, address: "111 Palm Beach Rd, Vashi", contact: "+919876543222", rating: 4.9, specialties: ["Neurological"], hospital: "Hiranandani Hospital" },
        { name: "Dr. Mohan Kumar", location: { lat: 19.1083, lon: 72.9090 }, address: "222 LBS Marg, Ghatkopar (W)", contact: "+919876543223", rating: 4.2, specialties: ["Orthopedic"], hospital: null },
        { name: "Dr. Diya Chatterjee", location: { lat: 19.0645, lon: 72.8313 }, address: "321 Linking Rd, Khar (W)", contact: "+919876543224", rating: 4.7, specialties: ["Sports Injury", "Pediatric"], hospital: "Hinduja Hospital" },
        { name: "Dr. Alok Gupta", location: { lat: 18.9600, lon: 72.8228 }, address: "432 Pedder Rd, Cumballa Hill", contact: "+919876543225", rating: 5.0, specialties: ["Orthopedic"], hospital: "Breach Candy Hospital" },
        { name: "Dr. Zara Baig", location: { lat: 19.1414, lon: 72.8784 }, address: "543 SEEPZ, Andheri (E)", contact: "+919876543226", rating: 4.5, specialties: ["Geriatric"], hospital: null },
        { name: "Dr. Ishan Trivedi", location: { lat: 18.9950, lon: 72.8200 }, address: "654 Parel St, Parel", contact: "+919876543227", rating: 4.6, specialties: ["Cardiopulmonary"], hospital: "KEM Hospital" },
        { name: "Dr. Ananya Rao", location: { lat: 19.2073, lon: 72.8697 }, address: "765 SV Road, Kandivali (W)", contact: "+919876543228", rating: 4.3, specialties: ["Neurological"], hospital: "Shatabdi Hospital" },
        { name: "Dr. Siddharth Menon", location: { lat: 19.0881, lon: 72.8838 }, address: "876 BKC Rd, Bandra Kurla Complex", contact: "+919876543229", rating: 4.8, specialties: ["Sports Injury"], hospital: "Asian Heart Institute" },
        { name: "Dr. Bhavna Shah", location: { lat: 19.1820, lon: 72.9615 }, address: "987 Eastern Express Hwy, Mulund (W)", contact: "+919876543230", rating: 4.5, specialties: ["Orthopedic"], hospital: "Fortis Hospital" },
        { name: "Dr. Farhan Akhtar", location: { lat: 19.0170, lon: 72.8570 }, address: "123 Matunga Cir, Matunga", contact: "+919876543231", rating: 4.4, specialties: ["Pediatric"], hospital: null },
        { name: "Dr. Geeta Iyengar", location: { lat: 19.0415, lon: 72.8722 }, address: "234 Sion-Trombay Rd, Chembur", contact: "+919876543232", rating: 4.6, specialties: ["Geriatric", "Orthopedic"], hospital: "Zenith Hospital" },
        { name: "Dr. Harish Patel", location: { lat: 19.2550, lon: 72.8648 }, address: "345 Dahisar Flyover, Dahisar (E)", contact: "+919876543233", rating: 4.1, specialties: ["Sports Injury"], hospital: null },
        { name: "Dr. Jiya Singh", location: { lat: 18.9750, lon: 72.8197 }, address: "456 Mahalaxmi Temple Rd, Mahalaxmi", contact: "+919876543234", rating: 4.7, specialties: ["Neurological"], hospital: "Wockhardt Hospital" },
        { name: "Dr. Kabir Bedi", location: { lat: 19.0600, lon: 72.8300 }, address: "567 Hill Road, Bandra (W)", contact: "+919876543235", rating: 4.8, specialties: ["Orthopedic", "Sports Injury"], hospital: "Holy Family Hospital" },
        { name: "Dr. Leela Samson", location: { lat: 19.1300, lon: 72.8350 }, address: "678 Versova Beach Rd, Versova", contact: "+919876543236", rating: 4.6, specialties: ["Geriatric"], hospital: null },
        { name: "Dr. Madhavan Nair", location: { lat: 19.0900, lon: 72.8650 }, address: "789 Nehru Road, Vile Parle (E)", contact: "+919876543237", rating: 4.7, specialties: ["Cardiopulmonary"], hospital: "Nanavati Hospital" },
        { name: "Dr. Nandita Das", location: { lat: 19.0500, lon: 72.8800 }, address: "890 Sion-Bandra Link Rd, Sion", contact: "+919876543238", rating: 4.4, specialties: ["Neurological"], hospital: "P. D. Hinduja National Hospital" },
        { name: "Dr. Omar Abdullah", location: { lat: 18.9300, lon: 72.8300 }, address: "901 Marine Drive, Nariman Point", contact: "+919876543239", rating: 4.9, specialties: ["Sports Injury"], hospital: null },
        { name: "Dr. Parineeti Chopra", location: { lat: 19.1170, lon: 72.8700 }, address: "112 JVLR, Andheri (E)", contact: "+919876543240", rating: 4.5, specialties: ["Pediatric"], hospital: "SevenHills Hospital" },
        { name: "Dr. Qasim Ali", location: { lat: 19.0100, lon: 72.8300 }, address: "223 Cadell Road, Mahim", contact: "+919876543241", rating: 4.3, specialties: ["Orthopedic"], hospital: "S. L. Raheja Hospital" },
        { name: "Dr. Raveena Tandon", location: { lat: 19.1000, lon: 72.8250 }, address: "334 Juhu Tara Road, Juhu", contact: "+919876543242", rating: 4.8, specialties: ["Geriatric", "Sports Injury"], hospital: null },
        { name: "Dr. Salman Rushdie", location: { lat: 18.9500, lon: 72.8250 }, address: "445 Breach Candy, Mumbai", contact: "+919876543243", rating: 4.9, specialties: ["Neurological"], hospital: "Jaslok Hospital" },
        { name: "Dr. Tabu", location: { lat: 19.1600, lon: 72.8550 }, address: "556 Link Road, Malad (W)", contact: "+919876543244", rating: 4.6, specialties: ["Cardiopulmonary"], hospital: "Thunga Hospital" },
        { name: "Dr. Urmila Matondkar", location: { lat: 19.2400, lon: 72.8600 }, address: "667 Western Express Hwy, Borivali (E)", contact: "+919876543245", rating: 4.7, specialties: ["Orthopedic"], hospital: "Karuna Hospital" },
        { name: "Dr. Vidya Balan", location: { lat: 19.0400, lon: 72.8500 }, address: "778 Turner Road, Bandra (W)", contact: "+919876543246", rating: 4.8, specialties: ["Pediatric"], hospital: null },
        { name: "Dr. Wasim Akram", location: { lat: 19.0200, lon: 72.8600 }, address: "889 Lady Jamshedji Rd, Mahim", contact: "+919876543247", rating: 4.5, specialties: ["Sports Injury"], hospital: "Hinduja Hospital" },
        { name: "Dr. Xavier Pinto", location: { lat: 19.0650, lon: 72.8250 }, address: "990 St. Martin's Road, Bandra (W)", contact: "+919876543248", rating: 4.4, specialties: ["Geriatric"], hospital: "Holy Family Hospital" },
        { name: "Dr. Yusuf Pathan", location: { lat: 19.1800, lon: 72.8450 }, address: "101 SV Road, Goregaon (W)", contact: "+919876543249", rating: 4.6, specialties: ["Orthopedic", "Sports Injury"], hospital: "Siddharth Hospital" },
        { name: "Dr. Zoya Akhtar", location: { lat: 19.1250, lon: 72.8200 }, address: "212 Lokhandwala Complex, Andheri (W)", contact: "+919876543250", rating: 4.9, specialties: ["Neurological"], hospital: null },
        { name: "Dr. Aamir Khan", location: { lat: 19.0550, lon: 72.8350 }, address: "323 Pali Hill, Bandra (W)", contact: "+919876543251", rating: 5.0, specialties: ["Sports Injury"], hospital: "Lilavati Hospital" },
        { name: "Dr. Bipasha Basu", location: { lat: 19.0670, lon: 72.8320 }, address: "434 Carter Road, Bandra (W)", contact: "+919876543252", rating: 4.7, specialties: ["Orthopedic"], hospital: null },
        { name: "Dr. Chitrangada Singh", location: { lat: 19.1100, lon: 72.8300 }, address: "545 Yari Road, Versova", contact: "+919876543253", rating: 4.5, specialties: ["Geriatric"], hospital: null },
        { name: "Dr. Dia Mirza", location: { lat: 19.0450, lon: 72.8400 }, address: "656 Waterfield Road, Bandra (W)", contact: "+919876543254", rating: 4.8, specialties: ["Pediatric"], hospital: "Surya Hospital" },
        { name: "Dr. Fardeen Khan", location: { lat: 19.1350, lon: 72.8500 }, address: "878 Juhu Lane, Andheri (W)", contact: "+919876543256", rating: 4.2, specialties: ["Sports Injury"], hospital: "Criticate Hospital" },
        { name: "Dr. Gracy Singh", location: { lat: 19.0850, lon: 72.8900 }, address: "989 Ghatkopar-Andheri Link Rd, Ghatkopar", contact: "+919876543257", rating: 4.6, specialties: ["Orthopedic", "Neurological"], hospital: "Sarvodaya Hospital" },
        { name: "Dr. Irrfan Khan", location: { lat: 19.1220, lon: 72.8280 }, address: "211 Oshiwara, Andheri (W)", contact: "+919876543259", rating: 5.0, specialties: ["Orthopedic"], hospital: "Kokilaben Dhirubhai Ambani Hospital" },
        { name: "Dr. Anita Raj", location: { lat: 19.1176, lon: 72.9060 }, address: "15 Wellness Road, Powai", contact: "+919876543260", rating: 4.7, specialties: ["Geriatric", "Orthopedic"], hospital: "Dr. L H Hiranandani Hospital" },
        { name: "Dr. John Abraham", location: { lat: 19.0632, lon: 72.9022 }, address: "303 Fitness First, Chembur", contact: "+919876543261", rating: 4.8, specialties: ["Sports Injury"], hospital: null }
    ];

    // --- DOM ELEMENT REFERENCES ---
    const listContainer = document.getElementById('physio-list');
    const nameFilter = document.getElementById('name-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const specialtyFilter = document.getElementById('specialty-filter');
    const mapElement = document.getElementById('map');

    // --- APPLICATION STATE ---
    let map = null;
    let userMarker = null;
    let physioMarkers = [];
    let userCoords = null;

    // --- CORE ALGORITHM: HAVERSINE FORMULA ---
    /**
     * Calculates the great-circle distance between two points on Earth.
     * @param {object} coords1 - The coordinates of the first point {lat, lon}.
     * @param {object} coords2 - The coordinates of the second point {lat, lon}.
     * @returns {number} The distance in kilometers.
     * The Haversine formula is used because it accurately calculates distances
     * on a sphere, which is essential for geographic data like GPS coordinates.
     * It is superior to simpler methods like the Pythagorean theorem, which
     * treats the Earth as a flat plane and would be highly inaccurate.
     */
    function getDistance(coords1, coords2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (coords2.lat - coords1.lat) * Math.PI / 180;
        const dLon = (coords2.lon - coords1.lon) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(coords1.lat * Math.PI / 180) * Math.cos(coords2.lat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    // --- MAP INITIALIZATION ---
    function initializeMap(center) {
        if (map) return;
        map = L.map(mapElement).setView(center, 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        if (userCoords) {
            userMarker = L.marker(userCoords).addTo(map)
                .bindPopup('Your Location')
                .openPopup();
        }
    }

    // --- UI RENDERING ---
    function renderData() {
        // 1. Clear previous state
        listContainer.innerHTML = 'Loading physiotherapists...';
        physioMarkers.forEach(marker => marker.remove());
        physioMarkers = [];

        // 2. Get filter values
        const nameQuery = nameFilter.value.toLowerCase();
        const minRating = parseFloat(ratingFilter.value);
        const specialtyQuery = specialtyFilter.value;

        // 3. Filter data
        let filteredData = physioData.filter(physio => {
            const nameMatch = physio.name.toLowerCase().includes(nameQuery);
            const ratingMatch = physio.rating >= minRating;
            const specialtyMatch = !specialtyQuery || physio.specialties.includes(specialtyQuery);
            return nameMatch && ratingMatch && specialtyMatch;
        });

        // 4. Calculate distances and sort
        if (userCoords) {
            filteredData.forEach(physio => {
                physio.distance = getDistance(userCoords, physio.location);
            });
            filteredData.sort((a, b) => a.distance - b.distance);
        }

        // 5. Render list and markers
        listContainer.innerHTML = ''; // Clear "Loading..."
        if (filteredData.length === 0) {
            listContainer.innerHTML = '<p>No physiotherapists match your criteria.</p>';
            return;
        }

        filteredData.forEach((physio, index) => {
            // Create list item
            const item = document.createElement('div');
            item.className = 'physio-item';
            item.dataset.index = index;

            // Add 'nearby' class if within 5km
            if (physio.distance && physio.distance <= 5) {
                item.classList.add('nearby');
            }

            item.innerHTML = `
                <h3>${physio.name} (${physio.rating} ★)</h3>
                <p>${physio.address}</p>
                ${physio.hospital ? `<p><strong>Hospital:</strong> ${physio.hospital}</p>` : ''}
                <p class="specialties"><em>Specialties: ${physio.specialties.join(', ')}</em></p>
                ${physio.distance ? `<p><strong>Distance:</strong> ${physio.distance.toFixed(2)} km away</p>` : ''}
                <div class="actions">
                    <a href="#" class="btn directions" data-location="${physio.location.lat},${physio.location.lon}">Get Directions</a>
                    <a href="tel:${physio.contact}" class="btn call">Call Now</a>
                </div>
            `;
            listContainer.appendChild(item);

            // Create map marker
            const marker = L.marker([physio.location.lat, physio.location.lon]).addTo(map)
                .bindPopup(`<b>${physio.name}</b><br>${physio.address}`);
            physioMarkers.push(marker);

            // --- Interactivity ---
            item.addEventListener('mouseenter', (event) => {
                // Don't open popup if a button is hovered
                if (event.target.classList.contains('btn')) return;
                marker.openPopup();
                item.classList.add('highlighted');
            });
            item.addEventListener('mouseleave', () => {
                marker.closePopup();
                item.classList.remove('highlighted');
            });
            marker.on('click', () => {
                document.querySelectorAll('.physio-item').forEach(el => el.classList.remove('highlighted'));
                item.classList.add('highlighted');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
    }

    // --- EVENT LISTENERS & DYNAMIC FILTERS ---
    function populateSpecialtyFilter() {
        const specialties = new Set();
        physioData.forEach(p => p.specialties.forEach(s => specialties.add(s)));
        specialties.forEach(s => {
            const option = document.createElement('option');
            option.value = s;
            option.textContent = s;
            specialtyFilter.appendChild(option);
        });
    }

    // --- INITIALIZATION LOGIC ---
    function init() {
        populateSpecialtyFilter();

        // Set up event listeners for filters
        [nameFilter, ratingFilter, specialtyFilter].forEach(el => {
            el.addEventListener('input', renderData);
            el.addEventListener('change', renderData);
        });

        // Event listener for action buttons (Get Directions)
        listContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('directions')) {
                e.preventDefault(); // Prevent default anchor behavior
                if (!userCoords) {
                    alert('Could not get your location to calculate directions.');
                    return;
                }
                const destination = e.target.dataset.location;
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lon}&destination=${destination}`;
                window.open(mapsUrl, '_blank');
            }
        });

        // Get user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    userCoords = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    initializeMap([userCoords.lat, userCoords.lon]);
                    renderData();
                },
                () => {
                    // Geolocation failed, use a default location
                    const defaultCenter = [19.0760, 72.8777]; // Mumbai
                    initializeMap(defaultCenter);
                    renderData();
                    alert("Could not get your location. Showing distances from central Mumbai is not possible. The map is centered on Mumbai.");
                }
            );
        } else {
            // Geolocation not supported
            const defaultCenter = [19.0760, 72.8777]; // Mumbai
            initializeMap(defaultCenter);
            renderData();
            alert("Geolocation is not supported by your browser. The map is centered on Mumbai.");
        }
    }

    // --- START THE APP ---
    init();
});
