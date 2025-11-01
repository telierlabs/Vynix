        // Movie data (Data dummy untuk film)
        const movies = {
            'The Dark Knight': {
                title: 'The Dark Knight',
                year: '2008',
                duration: '2h 32m',
                genre: 'Action, Crime, Drama',
                rating: '9.0',
                description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                banner: 'https://placehold.co/1920x1080/111111/c0c0c0?text=The+Dark+Knight'
            },
            'Inception': {
                title: 'Inception',
                year: '2010',
                duration: '2h 28m',
                genre: 'Action, Sci-Fi, Thriller',
                rating: '8.8',
                description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
                banner: 'https://placehold.co/1920x1080/222222/c0c0c0?text=Inception'
            },
            'Interstellar': {
                title: 'Interstellar',
                year: '2014',
                duration: '2h 49m',
                genre: 'Adventure, Drama, Sci-Fi',
                rating: '8.6',
                description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                banner: 'https://placehold.co/1920x1080/333333/c0c0c0?text=Interstellar'
            },
            'Parasite': {
                title: 'Parasite',
                year: '2019',
                duration: '2h 12m',
                genre: 'Comedy, Drama, Thriller',
                rating: '8.5',
                description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
                banner: 'https://placehold.co/1920x1080/444444/c0c0c0?text=Parasite'
            },
            'Stranger Things': {
                title: 'Stranger Things',
                year: '2016-2022',
                duration: 'Season 4',
                genre: 'Drama, Fantasy, Horror',
                rating: '8.7',
                description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
                banner: 'https://placehold.co/1920x1080/555555/c0c0c0?text=Stranger+Things'
            },
            'The Last of Us': {
                title: 'The Last of Us',
                year: '2023',
                duration: 'Season 1',
                genre: 'Action, Adventure, Drama',
                rating: '8.8',
                description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
                banner: 'https://placehold.co/1920x1080/666666/c0c0c0?text=The+Last+of+Us'
            },
            'Succession': {
                title: 'Succession',
                year: '2018-2023',
                duration: 'Season 4',
                genre: 'Comedy, Drama',
                rating: '8.9',
                description: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.',
                banner: 'https://placehold.co/1920x1080/777777/c0c0c0?text=Succession'
            },
            'The Bear': {
                title: 'The Bear',
                year: '2022-2023',
                duration: 'Season 2',
                genre: 'Comedy, Drama',
                rating: '8.6',
                description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
                banner: 'https://placehold.co/1920x1080/888888/c0c0c0?text=The+Bear'
            },
            'Pulp Fiction': {
                title: 'Pulp Fiction',
                year: '1994',
                duration: '2h 34m',
                genre: 'Crime, Drama',
                rating: '8.9',
                description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                banner: 'https://placehold.co/1920x1080/999999/c0c0c0?text=Pulp+Fiction'
            },
            'The Matrix': {
                title: 'The Matrix',
                year: '1999',
                duration: '2h 16m',
                genre: 'Action, Sci-Fi',
                rating: '8.7',
                description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                banner: 'https://placehold.co/1920x1080/aaaaaa/c0c0c0?text=The+Matrix'
            },
            'Fight Club': {
                title: 'Fight Club',
                year: '1999',
                duration: '2h 19m',
                genre: 'Drama',
                rating: '8.8',
                description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
                banner: 'https://placehold.co/1920x1080/bbbbbb/c0c0c0?text=Fight+Club'
            },
            'Goodfellas': {
                title: 'Goodfellas',
                year: '1990',
                duration: '2h 26m',
                genre: 'Biography, Crime, Drama',
                rating: '8.7',
                description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
                banner: 'https://placehold.co/1920x1080/cccccc/c0c0c0?text=Goodfellas'
            },
            'Forrest Gump': {
                title: 'Forrest Gump',
                year: '1994',
                duration: '2h 22m',
                genre: 'Drama, Romance',
                rating: '8.8',
                description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
                banner: 'https://placehold.co/1920x1080/dddddd/c0c0c0?text=Forrest+Gump'
            },
            'The Shawshank Redemption': {
                title: 'The Shawshank Redemption',
                year: '1994',
                duration: '2h 22m',
                genre: 'Drama',
                rating: '9.3',
                description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                banner: 'https://placehold.co/1920x1080/eeeeee/c0c0c0?text=Shawshank+Redemption'
            },
            'House of the Dragon': {
                title: 'House of the Dragon',
                year: '2022',
                duration: 'Season 1',
                genre: 'Action, Adventure, Drama',
                rating: '8.5',
                description: 'The story of the House Targaryen set 200 years before the events of Game of Thrones.',
                banner: 'https://placehold.co/1920x1080/ffffff/c0c0c0?text=House+of+the+Dragon'
            }
        };

        // Page navigation state
        let currentPage = 'home';
        const backStack = [];
        let currentMovie = null; 
        let isPlaying = false; 

        // CAROUSEL BARU STATE
        let currentSlide = 0;
        let slideInterval;
        const totalSlides = 3; 
        const slideDuration = 10000; // 10 detik
        // Akhir CAROUSEL STATE


        // Utility function to hide all content pages
        function hideAllPages() {
            document.querySelectorAll('.page-content').forEach(page => {
                page.style.display = 'none';
            });
            // Pastikan header dan footer ditampilkan kembali
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('main-footer').classList.remove('hidden');
        }

        // ---------- FUNGSI BARU UNTUK CAROUSEL HERO BANNER ----------

        function updateCarousel(index) {
            const carouselContent = document.getElementById('hero-carousel-content');
            const dots = document.querySelectorAll('.dot');
            
            if (!carouselContent) return; 

            // Hitung pergeseran yang dibutuhkan (misalnya index 1 = -100%)
            const offset = -index * 100; 
            carouselContent.style.transform = `translateX(${offset}%)`;
            currentSlide = index;

            // Update dots
            dots.forEach((dot, idx) => {
                dot.classList.remove('active');
                if (idx === index) {
                    dot.classList.add('active');
                }
            });
        }

        function startAutoSlide() {
            // Hentikan interval lama jika ada
            clearInterval(slideInterval); 
            
            // Atur interval baru
            slideInterval = setInterval(() => {
                let nextSlide = (currentSlide + 1) % totalSlides;
                updateCarousel(nextSlide);
            }, slideDuration);
        }

        function initializeHeroCarousel() {
            const carouselContent = document.getElementById('hero-carousel-content');
            const dotsContainer = document.getElementById('carousel-dots');
            
            if (!carouselContent || !dotsContainer) return;
            
            // 1. Atur dots agar bisa diklik
            dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('dot')) {
                    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                    updateCarousel(slideIndex);
                    // Reset timer setelah interaksi manual
                    startAutoSlide(); 
                }
            });
            
            // 2. Tambahkan event listener untuk scroll manual (geser)
            let isScrolling;
            carouselContent.addEventListener('scroll', () => {
                // Hapus timer lama
                window.clearTimeout(isScrolling); 
                
                // Set timer baru. Setelah scrolling berhenti, hitung slide saat ini.
                isScrolling = setTimeout(() => {
                    const scrollLeft = carouselContent.scrollLeft;
                    // Ambil lebar tampilan satu slide (misalnya 1/3 dari total lebar carousel content)
                    const containerWidth = carouselContent.scrollWidth / totalSlides; 
                    
                    // Hitung indeks slide terdekat
                    const newIndex = Math.round(scrollLeft / containerWidth);
                    
                    // Panggil updateCarousel untuk sinkronisasi dots
                    // Note: Karena CSS menggunakan scroll-snap, ini harusnya akurat
                    updateCarousel(newIndex); 
                    
                    // Restart interval otomatis
                    startAutoSlide();
                }, 150); // Jeda 150ms setelah scroll berhenti
            }, false);

            // 3. Mulai geser otomatis
            startAutoSlide();
        }

        // ---------- Navigasi Umum ----------
        
        function showHomePage() {
            // Pastikan auto slide berjalan saat kembali ke home
            initializeHeroCarousel();
            
            hideAllPages();
            document.getElementById('home-page').style.display = 'block';
            updateActiveNav('Beranda');
            currentPage = 'home';
            // Clear back stack saat di Home
            backStack.length = 0; 
            updateBackButton();
            // Reset state video
            isPlaying = false;
        }

        function showPage(page) {
            // Hentikan auto slide saat pindah dari Home
            clearInterval(slideInterval);
            
            if (currentPage !== page && currentPage !== 'movie-detail') {
                backStack.push(currentPage);
            }
            
            hideAllPages();
            
            const pageMap = {
                'movies': ['movies-page', 'Film'],
                'series': ['series-page', 'Serial'],
                'mylist': ['mylist-page', 'Daftar Saya'],
                'subscription': ['subscription-page', 'Langganan'] 
            };
            
            const [pageId, navName] = pageMap[page] || [];

            if (pageId) {
                document.getElementById(pageId).style.display = 'flex'; 
                updateActiveNav(navName);
                currentPage = page;
            } else {
                showHomePage(); 
            }
            
            updateBackButton();
            isPlaying = false;
        }

        function updateActiveNav(activePage) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.textContent.trim() === activePage) {
                    link.classList.add('active');
                }
            });
        }

        // ---------- Halaman Detail Film ----------

        function showMovieDetail(movieTitle) {
            // Hentikan auto slide
            clearInterval(slideInterval);
            
            const movie = movies[movieTitle];
            if (!movie) return;

            if (currentPage !== 'movie-detail' && currentPage !== 'video-page') {
                backStack.push(currentPage);
            }
            
            currentMovie = movie;

            document.getElementById('movie-title-large').textContent = movie.title;
            document.getElementById('movie-year').textContent = movie.year;
            document.getElementById('movie-duration').textContent = movie.duration;
            document.getElementById('movie-genre').textContent = movie.genre;
            document.getElementById('movie-rating').textContent = movie.rating;
            document.getElementById('movie-description').textContent = movie.description;
            document.getElementById('movie-poster-large').textContent = movie.title;

            hideAllPages();
            document.getElementById('movie-detail').style.display = 'block';
            
            currentPage = 'movie-detail';
            updateBackButton();
            updateActiveNav('');
            isPlaying = false;
        }

        // ---------- Halaman Video Player (Kontrol Diperbaiki) ----------

        function updateVideoControls(isPlay) {
            const videoPlayer = document.getElementById('video-player-display');
            const mainPlayIcon = document.getElementById('main-play-icon');
            const centerPlayIcon = document.getElementById('center-play-icon');

            if (isPlay) {
                isPlaying = true;
                videoPlayer.classList.remove('paused');
                mainPlayIcon.className = 'fas fa-pause';
                centerPlayIcon.className = 'fas fa-pause';
            } else {
                isPlaying = false;
                videoPlayer.classList.add('paused');
                mainPlayIcon.className = 'fas fa-play';
                centerPlayIcon.className = 'fas fa-play';
            }
        }
        
        function togglePlayPause() {
            updateVideoControls(!isPlaying); 
        }
        
        function toggleMute() {
            const volumeIcon = document.getElementById('volume-icon');
            const volumeSlider = document.getElementById('volume-slider');

            if (volumeIcon.classList.contains('fa-volume-up')) {
                volumeIcon.className = 'fas fa-volume-mute';
                volumeSlider.value = 0;
            } else {
                volumeIcon.className = 'fas fa-volume-up';
                volumeSlider.value = 50; 
            }
        }

        function openVideoPlayer(movieTitle) {
            // Hentikan auto slide
            clearInterval(slideInterval);

            const movie = movies[movieTitle];
            if (!movie) return;

            if (currentPage !== 'video-page') {
                backStack.push(currentPage);
            }

            currentMovie = movie;
            
            document.getElementById('playing-video-title').textContent = movie.title;
            document.getElementById('video-synopsis-text').textContent = movie.description;
            document.getElementById('video-views').textContent = `${(Math.random() * 10).toFixed(1)}M Tampilan`;
            document.getElementById('video-date').textContent = `Dirilis ${movie.year}`;
            document.getElementById('current-video-name').textContent = movie.title;

            // Load Rekomendasi
            const sidebar = document.getElementById('video-recommendations-sidebar');
            sidebar.innerHTML = '<h3 class="sidebar-title">Film Lanjutan</h3>';

            Object.values(movies).forEach(recMovie => {
                if (recMovie.title !== movieTitle) {
                    const recItem = document.createElement('div');
                    recItem.className = 'recommendation-item';
                    recItem.onclick = () => openVideoPlayer(recMovie.title);
                    
                    recItem.innerHTML = `
                        <div class="rec-poster">${recMovie.title}</div>
                        <div class="rec-info">
                            <p class="rec-title">${recMovie.title}</p>
                            <p class="rec-meta">${recMovie.rating} · ${recMovie.genre.split(',')[0]}</p>
                        </div>
                    `;
                    sidebar.appendChild(recItem);
                }
            });

            hideAllPages();
            document.getElementById('video-page').style.display = 'flex';
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('main-footer').classList.add('hidden');
            
            currentPage = 'video-page';
            updateBackButton();
            
            updateVideoControls(false); 
        }

        function addVideoComment() {
            const commentInput = document.getElementById('video-comment-input');
            const comment = commentInput.value.trim();
            
            if (comment) {
                const commentList = document.getElementById('video-comment-list');
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `
                    <div class="comment-header"><span>Anda</span><span>Baru saja</span></div>
                    <div class="comment-content">${comment}</div>
                `;
                commentList.insertBefore(newComment, commentList.firstChild);
                commentInput.value = '';
            }
        }

        // ---------- Fungsi GO BACK DIPERBAIKI ----------

        function goBack() {
            if (backStack.length === 0) {
                showHomePage(); 
                return; 
            }

            const previousPage = backStack.pop();
            
            if (previousPage === 'home') {
                showHomePage(); 
            } else if (['movies', 'series', 'mylist', 'subscription'].includes(previousPage)) {
                showPage(previousPage); 
            } else {
                showHomePage(); 
            }
        }

        function updateBackButton() {
            const backButton = document.getElementById('back-button');
            if (currentPage === 'home') {
                backButton.classList.remove('show');
            } else {
                backButton.classList.add('show');
            }
        }

        // Comments (for Movie Detail Page)
        function addComment() {
            const commentInput = document.getElementById('comment-input');
            const comment = commentInput.value.trim();
            
            if (comment) {
                const commentList = document.getElementById('comment-list');
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `
                    <div class="comment-header"><span>Anda</span><span>Baru saja</span></div>
                    <div class="comment-content">${comment}</div>
                `;
                commentList.insertBefore(newComment, commentList.firstChild);
                commentInput.value = '';
            }
        }

        // ---------- AI Assistant Functions ----------

        function openAIAssistant() {
            document.getElementById('ai-modal').style.display = 'block';
        }

        function closeAIAssistant() {
            document.getElementById('ai-modal').style.display = 'none';
        }

        function sendAIQuestion() {
            const aiInput = document.getElementById('ai-input');
            const question = aiInput.value.trim();
            
            if (question) {
                const aiChat = document.getElementById('ai-chat');
                
                const userMessage = document.createElement('div');
                userMessage.className = 'ai-message ai-user-message';
                userMessage.textContent = question;
                aiChat.appendChild(userMessage);
                
                aiChat.scrollTop = aiChat.scrollHeight;
                
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'ai-message ai-bot-message';
                    
                    if (question.toLowerCase().includes('rekomendasi') || question.toLowerCase().includes('recommend')) {
                        botMessage.textContent = 'Berdasarkan riwayat tontonan Anda, saya merekomendasikan "The Dark Knight" dan "Inception". Keduanya memiliki rating tinggi dan genre yang Anda sukai!';
                    } else if (question.toLowerCase().includes('rating') || question.toLowerCase().includes('score')) {
                        botMessage.textContent = '"The Shawshank Redemption" memiliki rating tertinggi di platform kami dengan skor 9.3/10. Ini adalah film drama terbaik sepanjang masa!';
                    } else if (question.toLowerCase().includes('jam') || question.toLowerCase().includes('waktu')) {
                        botMessage.textContent = 'Film "Interstellar" berdurasi 2 jam 49 menit. Sempurna untuk malam yang tenang!';
                    } else if (question.toLowerCase().includes('horor') || question.toLowerCase().includes('horror')) {
                        botMessage.textContent = 'Kami memiliki koleksi film horor terbaik! Coba "Hereditary" atau "The Conjuring" untuk pengalaman menegangkan.';
                    } else {
                        botMessage.textContent = 'Terima kasih atas pertanyaan Anda! Saya adalah asisten AI dummy. Dalam versi nyata, saya akan memberikan informasi yang lebih akurat tentang film dan rekomendasi.';
                    }
                    
                    aiChat.appendChild(botMessage);
                    aiChat.scrollTop = aiChat.scrollHeight; 
                }, 1000);
                
                aiInput.value = '';
            }
        }

        function handleAIKeyPress(event) {
            if (event.key === 'Enter') {
                sendAIQuestion();
            }
        }
        
        // ---------- Fungsi Langganan ----------

        function startSubscription(planName) {
            console.log(`Simulasi Langganan: Pengguna memilih ${planName}`);
            alert(`Anda memilih ${planName}. Fitur ini adalah dummy. Di versi nyata, Anda akan diarahkan ke halaman pembayaran.`);
        }
        
        // ---------- Fungsi Lain (Dummy) ----------
        function openSearch() {
            console.log('Fungsi Pencarian: Saat ini dummy.');
            alert('Fungsi Pencarian belum diimplementasikan. Silakan gunakan Beranda.');
        }

        function openUserProfile() {
            console.log('Fungsi Profil Pengguna: Saat ini dummy.');
            alert('Mohon maaf, halaman Profil Pengguna sedang dalam pengembangan.');
        }

        // Initialize (Jalankan saat dokumen selesai dimuat)
        document.addEventListener('DOMContentLoaded', () => {
            initializeHeroCarousel();
            showHomePage();
        });
