<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Priyansh Sinha - Robotics Engineer & Researcher</title>
    <!-- SEO Metadata -->
    <meta name="description" content="Priyansh Sinha | Robotics Engineer & Researcher specializing in Mobile Manipulation, Residual Learning, ROS, and AI-powered autonomous systems.">
    <meta name="keywords" content="Priyansh Sinha, Robotics, ROS, MoveIt, Sim2Real, Mobile Manipulation, Non-Prehensile Manipulation, Whole Body Control, Visual Odometry, Trajectory Optimization, Model Predictive Control, LLM Integration, ChargeKart, OpenDroid, IIIT Hyderabad, Machine Learning, Computer Vision, Autonomous Systems">
    <meta name="author" content="Priyansh Sinha">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Font: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons (e.g., sun/moon for dark mode toggle) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <style>
        :root {
            /* Light mode variables */
            --bg-color: #fcfbfb; /* Very light cream/off-white */
            --text-color: #262626; /* Dark charcoal */
            --header-gradient-from: #be185d; /* Rose 700 */
            --header-gradient-to: #a21287; /* Fuchsia 700 (darker for contrast) */
            --section-bg-light: #fdf2f8; /* Light pink for cards */
            --border-color: #e0e0e0;
            --link-color: #db2777; /* Rose 600 */
            --link-hover-color: #9d174d; /* Rose 800 */
            --button-bg: #db2777; /* Rose 600 */
            --button-hover-bg: #9d174d; /* Rose 800 */
            --scrollbar-thumb: #be185d; /* Rose 700 */
            --scrollbar-track: #fce7f3;
        }

        .dark {
            /* Dark mode variables */
            --bg-color: #1a202c; /* Dark charcoal */
            --text-color: #e2e8f0; /* Light gray */
            --header-gradient-from: #6d28d9; /* Violet 700 */
            --header-gradient-to: #4f46e5; /* Indigo 600 */
            --section-bg-light: #2d3748; /* Darker gray for cards */
            --border-color: #4a5568;
            --link-color: #8b5cf6; /* Violet 500 */
            --link-hover-color: #6d28d9; /* Violet 700 */
            --button-bg: #8b5cf6; /* Violet 500 */
            --button-hover-bg: #6d28d9; /* Violet 700 */
            --scrollbar-thumb: #8b5cf6; /* Violet 500 */
            --scrollbar-track: #2d3748;
        }

        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--scrollbar-track);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--link-hover-color);
        }

        /* Lift and shadow on hover for interactive elements */
        .lift-on-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.2);
            transition: all 0.3s ease-in-out;
        }

        /* Styles dependent on CSS variables */
        .bg-custom-gradient {
            background-image: linear-gradient(to bottom right, var(--header-gradient-from), var(--header-gradient-to));
        }
        .text-custom-gradient {
            background-image: linear-gradient(to right, var(--header-gradient-from), var(--header-gradient-to));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .section-card {
            background-color: var(--section-bg-light);
            border-color: var(--border-color);
        }
        .section-separator {
            border-bottom: 2px solid var(--border-color);
            margin-bottom: 2.5rem; /* Equivalent to mb-10 */
            padding-bottom: 1.5rem; /* Equivalent to pb-6 */
        }
        .link-style {
            color: var(--link-color);
        }
        .link-style:hover {
            color: var(--link-hover-color);
        }
        .button-style {
            background-color: var(--button-bg);
        }
        .button-style:hover {
            background-color: var(--button-hover-bg);
        }
    </style>
</head>
<body class="antialiased">
    <div class="min-h-screen flex flex-col items-center p-4">

        <!-- Fixed Navigation Bar -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md rounded-b-xl px-4 py-3 flex justify-center space-x-6 md:space-x-10 lg:space-x-12 mb-8">
            <a href="#about-me" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 font-medium transition duration-300 text-sm md:text-base">About</a>
            <a href="#experience" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 font-medium transition duration-300 text-sm md:text-base">Experience</a>
            <a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 font-medium transition duration-300 text-sm md:text-base">Projects</a>
            <a href="#publications" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 font-medium transition duration-300 text-sm md:text-base">Publications</a>
            <a href="#contact-me" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 font-medium transition duration-300 text-sm md:text-base">Contact</a>
            
            <!-- Dark Mode Toggle Button -->
            <button id="darkModeToggle" class="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-violet-400 text-lg transition duration-300">
                <i class="fas fa-moon" id="darkModeIcon"></i>
            </button>
        </nav>
        <div class="pt-20"></div> <!-- Spacer for fixed nav -->

        <!-- Main Content Area Wrapper -->
        <div class="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 mb-12 border border-gray-100 dark:border-gray-700 transition-colors duration-300">

            <!-- Hero/About Section -->
            <section id="about-me" class="text-center mb-10 md:mb-12">
                <div class="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-rose-400 dark:border-violet-400 shadow-lg lift-on-hover">
                    <img src="https://placehold.co/160x160/f0f9ff/1e293b?text=Priyansh" alt="Priyansh Sinha Profile" class="w-full h-full object-cover">
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-custom-gradient leading-tight mb-3">
                    Hi, I'm Priyansh Sinha.
                </h1>
                <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-4">
                    A Robotics Engineer & Researcher, passionate about intelligent autonomous systems.
                </p>
                <p class="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My work focuses on bridging theoretical concepts with practical applications, particularly in mobile manipulation, intelligent control, and robust navigation. I thrive on bringing impactful solutions to life.
                </p>
            </section>

            <!-- Education Section -->
            <section id="education" class="section-separator">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6 text-center">Education</h2>
                <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover mb-4">
                    <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-1">MS by Research in Computer Science (Robotics Specialization)</h3>
                    <p class="text-gray-600 dark:text-gray-400">IIIT Hyderabad, India (Jan 2023 - Present) &mdash; CGPA: 8.2</p>
                </div>
                <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                    <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-1">Bachelor of Technology in Mechatronics Engineering</h3>
                    <p class="text-gray-600 dark:text-gray-400">S.R.M Institute of Science and Technology, Chennai (2016-2020) &mdash; 78%</p>
                </div>
            </section>

            <!-- Experience Section -->
            <section id="experience" class="section-separator">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6 text-center">Experience Highlights</h2>
                <div class="grid grid-cols-1 gap-8">
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Co-founder, Robotics Head at ChargeKart</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-base mb-3">Hyderabad, Telangana, India (Jan 2023 - Jan 2024)</p>
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Led the development and prototyping of an autonomous mobile robot for E-vehicle charging, including robust ROS and NAV2 integration.
                        </p>
                        <div class="flex flex-wrap justify-center gap-4 mt-4">
                             <img src="https://placehold.co/200x280/D8BFD8/333333?text=ChargeKart+Robot+1" alt="ChargeKart Protoype 1" class="rounded-lg shadow-sm object-cover h-72 w-48">
                             <img src="https://placehold.co/200x280/D8BFD8/333333?text=ChargeKart+Robot+2" alt="ChargeKart Prototype 2" class="rounded-lg shadow-sm object-cover h-72 w-48">
                        </div>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Founding Team at OpenDroid</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-base mb-3">USA</p>
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Designed and developed a home-assistive mobile manipulator, integrating ROS for navigation & manipulation and LLM for natural language arm control (e.g., "Fetch an apple").
                        </p>
                        <div class="flex justify-center mt-4">
                            <img src="https://placehold.co/350x280/DDA0DD/333333?text=OpenDroid+ROS+Integration" alt="OpenDroid ROS Integration" class="rounded-lg shadow-sm object-cover h-72 w-96">
                        </div>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Machine Learning Intern at xLM Continuous Validation</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-base mb-3">PA, United States (Jan 2024 - Aug 2024)</p>
                        <p class="text-gray-700 dark:text-gray-300 text-base">
                            Integrated LLMs into web testing via Agentic frameworks (CrewAi, LaVague) and implemented RAG models for document generation and database querying.
                        </p>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Graduate Engineer Trainee at HERO MOTOCORP</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-base mb-3">Gurgaon, Haryana, India (Aug 2020 - Feb 2022)</p>
                        <p class="text-gray-700 dark:text-gray-300 text-base">
                            Optimized 7-DOF industrial robot programs (10% downtime reduction), debugged PLC-based AGVs, and integrated AI Vision Cameras (30% error rate reduction).
                        </p>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section id="projects" class="section-separator">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6 text-center">Selected Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Mobile Manipulation</h3>
                        <img src="https://placehold.co/300x200/F0F8FF/4B0082?text=Mobile+Manipulator" alt="10 D.O.F Mobile Manipulator" class="rounded-lg mb-4 object-cover w-full h-48">
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Developed whole-body control using ROS, navigation stack, and low-level controllers for mobile manipulators. Achieved non-prehensile tasks like door opening through optimization frameworks.
                        </p>
                        <img src="https://placehold.co/300x200/E6E6FA/4682B4?text=Door+Opening+Demo" alt="Door Opening" class="rounded-lg mb-4 object-cover w-full h-48">
                        <img src="https://placehold.co/300x200/FFE4E1/8B0000?text=Experiment+Setup" alt="Experiment" class="rounded-lg mb-4 object-cover w-full h-48">
                        <a href="#" class="text-rose-600 dark:text-violet-500 hover:text-rose-800 dark:hover:text-violet-700 font-medium transition duration-300 link-style">Learn More &rarr;</a>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Residual Learning for Manipulator Actions</h3>
                        <img src="https://placehold.co/300x200/DDA0DD/4B0082?text=Residual+Learning+Setup" alt="Experiment setup" class="rounded-lg mb-4 object-cover w-full h-48">
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Implemented Neural Networks for residual learning to bridge the sim-to-real gap in non-prehensile manipulator actions (e.g., striking), significantly reducing control errors.
                        </p>
                        <a href="#" class="text-rose-600 dark:text-violet-500 hover:text-rose-800 dark:hover:text-violet-700 font-medium transition duration-300 link-style">Learn More &rarr;</a>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Visual Odometry</h3>
                        <img src="https://placehold.co/300x200/AFEEEE/008B8B?text=Visual+Odometry" alt="Visual Odometry" class="rounded-lg mb-4 object-cover w-full h-48">
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Developed Visual Odometry using Stereo and RGBD cameras for indoor and outdoor environments, integrating Light Glue for enhanced feature matching accuracy.
                        </p>
                        <img src="https://placehold.co/500x300/ADD8E6/000080?text=Feature+Matching+Example" alt="Feature Matching" class="rounded-lg mb-4 object-cover w-full h-48">
                        <a href="#" class="text-rose-600 dark:text-violet-500 hover:text-rose-800 dark:hover:text-violet-700 font-medium transition duration-300 link-style">Learn More &rarr;</a>
                    </div>
                     <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Trajectory Optimization</h3>
                        <img src="https://placehold.co/300x200/F5DEB3/8B4513?text=Trajectory+Optimization" alt="Trajectory Optimization" class="rounded-lg mb-4 object-cover w-full h-48">
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Implemented sampling-based Model Predictive Control (MPC) for Robot Path Planning, utilizing the Model Predictive Path Integral Update Rule for time horizon optimization.
                        </p>
                        <a href="#" class="text-rose-600 dark:text-violet-500 hover:text-rose-800 dark:hover:text-violet-700 font-medium transition duration-300 link-style">Learn More &rarr;</a>
                    </div>
                    <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                        <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">Model-Based Controllers</h3>
                        <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                            Developed and implemented various control strategies on manipulators, including Gravity Compensation, Force-Torque, Hybrid-Force-Position, Null-Space, and Operational Space Controllers.
                        </p>
                        <div class="mt-4 text-center">
                            <h4 class="font-medium text-rose-700 dark:text-violet-400 mb-2">Live Demonstration:</h4>
                            <!-- The iframe will load a local file, ensure 'manipulator/index.html' is in the same directory -->
                            <iframe src="manipulator/index.html" width="100%" height="400" class="rounded-lg shadow-md" style="border:none;"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Publications & Thesis Section -->
            <section id="publications" class="section-separator">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6 text-center">Publications & Thesis</h2>
                <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover mb-4">
                    <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">📚 Thesis</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                        **Title:** Planning and Control Strategies for Contact-Rich, Non-Prehensile Mobile Manipulation
                    </p>
                </div>
                <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                    <h3 class="font-semibold text-xl text-rose-700 dark:text-violet-400 mb-2">📝 Publications</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">
                        **IEEE CASE 2024:** A Hybrid Manipulation Framework with Trajectory Optimization for Mobile Manipulators.
                        <br><small class="text-gray-500 dark:text-gray-400">Authors: Priyansh Sinha, Prakrut Kotecha, Dr. G. Nagamanikandan. (August 2024, Bari, Italy)</small>
                    </p>
                    <p>
                        <a href="https://ieeexplore.ieee.org/document/10711645" target="_blank" class="text-rose-600 dark:text-violet-500 hover:underline link-style">
                            📄 Read it here on IEEE Xplore &rarr;
                        </a>
                    </p>
                </div>
            </section>

            <!-- Courses Section -->
            <section id="courses" class="section-separator">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6 text-center">Key Courses</h2>
                <div class="section-card p-6 rounded-xl shadow-md border lift-on-hover">
                    <ul class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <li>Robotics Planning and Navigation</li>
                        <li>Computer Vision</li>
                        <li>Machine Learning</li>
                        <li>Mobile Robotics</li>
                        <li>Statistical Methods in Artificial Intelligence</li>
                        <li>Mechatronics Designs and Systems</li>
                    </ul>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact-me" class="text-center section-card p-8 rounded-xl shadow-md border lift-on-hover">
                <h2 class="text-3xl font-bold text-custom-gradient mb-6">Let's Build Tomorrow's Robotics.</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I'm eager to discuss how my expertise can contribute to your innovative team and projects. Feel free to reach out directly.
                </p>
                <a href="mailto:sinhapriyansh.15@gmail.com" class="inline-block button-style text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg lift-on-hover">
                    Connect with Priyansh
                </a>
                <div class="mt-6 text-gray-600 dark:text-gray-400 text-sm">
                    <p>Email: <a href="mailto:sinhapriyansh.15@gmail.com" class="link-style hover:underline">sinhapriyansh.15@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/priyansh-sinha-a4984b178/" target="_blank" class="link-style hover:underline">Priyansh Sinha</a></p>
                    <p class="mt-4">
                        <a href="/Priyansh_Resume.pdf" target="_blank" class="text-rose-600 dark:text-violet-500 hover:underline link-style">
                            📄 Download My Resume (PDF)
                        </a>
                    </p>
                </div>
            </section>

        </div>

        <!-- Footer -->
        <footer class="w-full max-w-4xl text-center text-gray-600 dark:text-gray-400 text-sm mt-8 pb-8">
            <p>&copy; 2025 Priyansh Sinha. All rights reserved.</p>
            <div class="mt-2 space-x-4">
                <a href="https://www.linkedin.com/in/priyansh-sinha-a4984b178/" target="_blank" class="hover:underline text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-violet-400">LinkedIn</a>
                <!-- Add GitHub or other social links if applicable -->
            </div>
        </footer>

    </div>

    <script>
        // Dark Mode Toggle Logic
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIcon = document.getElementById('darkModeIcon');
        const htmlElement = document.documentElement;

        // Check for saved theme preference or system preference
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                htmlElement.classList.add('dark');
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                htmlElement.classList.remove('dark');
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        }

        // Toggle theme on button click
        darkModeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            }
        });

        // Load theme when the page loads
        document.addEventListener('DOMContentLoaded', loadTheme);
    </script>
</body>
</html>
