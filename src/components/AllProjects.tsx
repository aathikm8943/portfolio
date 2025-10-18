import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import agentGif from "../assets/project-gifs/Robot Futuristic Ai animated.gif"

const allProjects = {
    "AI Projects": [
        {
            title: "Simple MCP Server Setup and Exploration",
            stack: "Python, MCP, FastAPI, REST APIs",
            image: "/mcp_server_setup.png",
            description: "A foundational project demonstrating how to set up and explore a Modular Communication Protocol (MCP) server. It includes a simple backend implementation that handles message passing between agents and clients. The project serves as a learning base for understanding server communication, request routing, and API integration in multi-agent systems.",
            repoUrl: "https://github.com/aathikm8943/simple-mcp-server-setup-and-exploration",
        },
        {
            title: "Multi-Agent RAG System",
            stack: "Python, LangChain, OpenAI API, Retrieval-Augmented Generation",
            image: "/mcp_server_setup.png",
            description: "An advanced AI system that employs multiple autonomous agents collaborating within a Retrieval-Augmented Generation (RAG) framework. Each agent specializes in tasks like document retrieval, reasoning, and summarization. The project demonstrates multi-agent orchestration, memory sharing, and context-driven responses, enhancing the intelligence of RAG-based architectures.",
            repoUrl: "https://github.com/aathikm8943/multi-agent-rag",
        },
        {
            title: "Agentic RAG Pipeline",
            stack: "Python, LangChain, FAISS, OpenAI API, Streamlit",
            image: "/agentic_rag_pipeline.png",
            description: "A modular Retrieval-Augmented Generation (RAG) pipeline that integrates intelligent agents capable of reasoning, retrieving, and generating contextually rich answers. This project focuses on building an agentic workflow where multiple agents communicate to improve accuracy and relevance in knowledge-grounded QA systems. It highlights advanced RAG design patterns and scalable architecture.",
            repoUrl: "https://github.com/aathikm8943/AgenticRAG-pipeline",
        },
        {
            title: "QA Chatbot using RAG",
            stack: "Python, LangChain, OpenAI API, Streamlit",
            image: "/qa_chatbot_rag.png",
            description: "A question-answering chatbot built using the Retrieval-Augmented Generation (RAG) framework. The chatbot retrieves relevant documents from a vector store and generates informed responses using GPT-based models. It features contextual awareness, memory retention, and interactive user interface built with Streamlit, ideal for domain-specific knowledge assistants.",
            repoUrl: "https://github.com/aathikm8943/QA-chatbot-using-RAG",
        },

    ],
    "ML Projects": [
        {
            title: "Gym Exercise Pose Detection",
            stack: "Python, OpenCV, MediaPipe, TensorFlow",
            image: "/gym_pose_detection.png",
            description: "A computer vision project that detects and tracks human body keypoints during gym workouts in real time. Using MediaPipe and OpenCV, the system recognizes poses such as squats, push-ups, and lunges, providing visual feedback and angle analysis for form correction. Ideal for fitness tracking, motion analysis, and AI-powered virtual trainers.",
            repoUrl: "https://github.com/aathikm8943/gym_exercise_pose_detection",
        },
        {
            title: "Gym Exercises Classification",
            stack: "Python, TensorFlow, OpenCV, Deep Learning",
            image: "/gym_exercises_classification.png",
            description: "A deep learning-based classification model that identifies different gym exercises from video or image input. Leveraging CNN architectures, the project can classify movements like push-ups, sit-ups, and jumping jacks. This can be integrated into smart gym systems, exercise tracking apps, or virtual personal trainers to monitor workout performance automatically.",
            repoUrl: "https://github.com/aathikm8943/gym_exercises-classification",
        },
        {
            title: "Diamond Price Prediction",
            stack: "Python, Scikit-learn, Pandas, Machine Learning",
            image: "/diamond_price_prediction.png",
            description: "A machine learning regression project aimed at predicting diamond prices based on attributes such as carat, cut, color, and clarity. The project includes data preprocessing, feature engineering, and multiple regression model evaluations. It demonstrates skills in data analysis, model optimization, and real-world price forecasting applications in the jewelry industry.",
            repoUrl: "https://github.com/aathikm/diamondPricePrediction",
        },
        {
            title: "OCT Image Classification",
            stack: "Python, TensorFlow, Keras, VGG16",
            image: "/oct_classification.png",
            description: "An advanced deep learning model for classifying retinal OCT (Optical Coherence Tomography) images into categories such as normal, CNV, DME, and drusen. The project applies transfer learning with pre-trained CNN models like InceptionV3 and VGG16 to achieve high accuracy. It showcases medical imaging analysis techniques used in early detection of retinal diseases.",
            repoUrl: "https://github.com/aathikm/OCT-optical-coherence-tomography---Classification/blob/main/oct-classification-inc-vgg16%20(1).ipynb",
        },
        {
            title: "Mammography Classification",
            stack: "Python, TensorFlow, Keras, Deep Learning",
            image: "/mammography_classification.png",
            description: "A deep learning project for breast cancer detection using mammography image datasets. The model classifies images into benign or malignant categories using CNN-based architectures. This project demonstrates image preprocessing, model fine-tuning, and performance evaluation, highlighting the power of AI in medical diagnostics and healthcare automation.",
            repoUrl: "https://www.kaggle.com/code/aathikm/mammography-classification/edit",
        }
    ],

    "Data Engineering and ETL": [
        {
            title: "Car Sales – End-to-End Pipeline",
            stack: "Python, Pandas, SQL, ETL, Dashboarding",
            image: "/car_sales.png",
            description: "A full lifecycle data project that ingests raw car sales data, performs cleaning and transformation, constructs analytics-ready datasets, and builds visual dashboards for business insights. It applies techniques in data engineering and analytics to turn raw CSVs into structured insights about sales trends, market segments, and forecasting.",
            repoUrl: "https://github.com/aathikm8943/car_sales",
        },
        {
            title: "1mg Medicine Feature Engineering & EDA",
            stack: "Python, Pandas, Seaborn, Scikit-learn",
            image: "/1mg_medicine_eda.png",
            description: "A data science notebook that conducts exploratory data analysis (EDA) and feature engineering on the 1mg medicines order-dataset. It uncovers patterns in product order history, pack sizes, pricing, and customer behavior, then creates engineered features for downstream modelling to enhance predictive performance.",
            repoUrl: "https://www.kaggle.com/code/aathikm/1mg-medicine-featureengineering-eda",
        },
        {
            title: "Wine Quality — EDA, Data Visualization & Model Creation",
            stack: "Python, Pandas, Matplotlib/Seaborn, Scikit-learn",
            image: "/wine_quality_eda.png",
            description: "A comprehensive project analyzing the wine quality dataset through detailed visualizations, statistical summaries, and feature analysis. It then builds machine learning models to predict wine quality scores based on chemical properties, demonstrating the full cycle from data exploration to model development.",
            repoUrl: "https://www.kaggle.com/code/aathikm/wine-quality-eda-data-vis-model-creation",
        },
        {
            title: "Heart Failure — EDA & Data Visualization",
            stack: "Python, Pandas, Seaborn/Plotly, Scikit-learn",
            image: "/heart_failure_eda.png",
            description: "An analytical notebook focused on heart failure clinical records, performing exploratory data analysis and rich visualizations of risk factors, correlations, and outcomes. The project surfaces insights into patient profiles, feature distributions, and relationships that can inform predictive modelling in healthcare analytics.",
            repoUrl: "https://www.kaggle.com/code/aathikm/heart-failure-eda-data-visualization",
        },

    ],

    "Web Projects": [
        {
            title: "Bolt App Clone",
            stack: "Flutter / Dart, Firebase, Google Maps API",
            image: "/bolt_app_clone.png",
            description: "A ride-hailing app clone inspired by popular platforms like Bolt and Uber, built with Flutter and Firebase. The app includes features such as real-time location tracking, pickup and destination selection, route mapping via Google Maps, and a driver rating system. Designed to demonstrate end-to-end mobile app development including UI/UX, backend integration, state management and geolocation services.",
            repoUrl: "https://github.com/aathikm/bolt_app_clone",
        },
        {
            title: "Personal Portfolio Website",
            stack: "React, Next.js, Tailwind CSS",
            image: "/portfolio.png",
            description: "A modern personal portfolio website built to showcase projects, skills, and achievements. The site is responsive across devices, features smooth animations, SEO-friendly pages built with Next.js, and Tailwind CSS for styling. Includes sections such as About Me, Projects, Blog (optional), and a Contact form—ideal for presenting a developer/tech-professional’s personal brand online.",
            repoUrl: "https://github.com/aathikm8943/portfolio",
        },

    ],
};

const AllProjects: React.FC = () => {
    const categories = Object.keys(allProjects);
    const [activeCategory, setActiveCategory] = React.useState<string>(categories[0]);

    return (
        <section className="pb-20 bg-[#2C2F36]">
            {/* Back button */}
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-[#C084FC] mt-6">
                <FaArrowLeft className="mr-2" />
                Back to Home
            </Link>

            <h1 className="text-4xl font-semibold text-[#C084FC] my-6">All Projects</h1>

            {/* Category Navigation */}
            <div className="mb-8 overflow-x-auto">
                <div className="flex space-x-4 pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${activeCategory === category
                                ? "bg-[#C084FC] text-black font-medium"
                                : "bg-[#1E1F24] text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                {Object.entries(allProjects)
                    .filter(([category]) => category === activeCategory)
                    .map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-2xl font-medium text-gray-200 mb-4">{category}</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((p: any, idx: number) => (
                                    <div key={idx} className="bg-[#1E1F24] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                        <img src={p.image} alt={p.title} className="w-full h-48 sm:h-40 object-cover" />
                                        <div className="p-4">
                                            <p className="text-sm text-gray-400">{p.stack}</p>
                                            <hr className="my-2 border-gray-700" />
                                            <h3 className="text-lg font-semibold">{p.title}</h3>
                                            <p className="text-sm text-gray-300 mt-1 line-clamp-2">{p.description}</p>
                                            <div className="mt-4 flex gap-3">
                                                {p.liveUrl && (
                                                    <a
                                                        href={p.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-1.5 bg-[#C084FC] text-black rounded text-sm font-medium hover:bg-opacity-90 transition-colors"
                                                    >
                                                        <FaExternalLinkAlt className="mr-1.5 text-xs" />
                                                        Live Demo
                                                    </a>
                                                )}
                                                {p.repoUrl && (
                                                    <a
                                                        href={p.repoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-3 py-1.5 bg-transparent border border-gray-600 rounded text-sm hover:border-[#C084FC] hover:text-[#C084FC] transition-colors"
                                                    >
                                                        <FaGithub className="mr-1.5" />
                                                        Code
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default AllProjects;
