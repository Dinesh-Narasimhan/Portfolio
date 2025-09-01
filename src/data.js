const data = {

    name:     'Dinesh Narasimhan',
    github:   'https://github.com/Dinesh-Narasimhan',
    linkedin: 'https://linkedin.com/in/dinesh-narasimhan',
    email:    'narasimhandinesh2420@gmail.com'
}


const description = {
    about_me: 
                `🚀 Passionate Data Scientist | Machine Learning Engineer | AI Innovator 
                <br>
                <br>
                Hello! I'm ${data.name}, a B.Tech graduate in Electronics and Communication Engineering with a strong interest in Data Science and AI. I have worked on multiple machine learning and AI projects and completed an internship at Ai Variant, where I applied data-driven solutions to real-world problems. I enjoy using data, algorithms, and intelligent tools to create practical and impactful applications.`,

    professional_highlights:
                 [
                    'Gained practical experience as a Data Science Intern at Ai Variant, contributing to customer insights and business decision-making with machine learning solutions.',
                    'Designed and deployed multiple end-to-end AI/ML projects, including chatbots, RAG-based study assistants, disease prediction systems, NLP applications, and price prediction models.',
                    "Skilled in Python, SQL, and data visualization, with hands-on expertise in Pandas, NumPy, Scikit-learn, Streamlit, Tableau, and other AI/ML tools."
                 ]
}

const work_experiences = [

    {
        role: "Data Science Intern",
        company: "Ai Variant",
        duration: '12th Apirl 2025 - 11th July 2025',
        linkedin: 'https://www.linkedin.com/company/ai-variant/',
        description: `Contributed to data-driven business decision-making by developing and deploying machine learning solutions for customer insights and strategic segmentation.`
    }

]

const skills = [
    {
        skill: 'Languages: Python, JAVA',
        percent_known: '90'
    },
    {
        skill: 'skills: Data Science, AI/ML',
        percent_known: '83'
    },
    {
        skill: 'Libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn',
        percent_known: '78'
    },
    {
        skill: 'Web_Tools: Streamlit, GitHub',
        percent_known: '74'
    },
    {
        skill: 'Others: Tableau, SQL',
        percent_known: '70'
    },
   
]


const education = [
    {
        degree:   "BTech",
        branch:   'Electronic and Communication Engineering.',
        college:  'Dhanekula Institute of Engineering and Technology',
        duration: '2020-2024',
        CGPA:     '7.34'
    }
]

const certifications = {

    Internship:[

        {
            name: 'AiVariant Internship',
            url : 'https://drive.google.com/file/d/1wK4eAdBWVJfN2vrH26UPvSJIOJoYFYVj/view?usp=drive_link'
        },
        {
            name: '8-Weeks Internship on Artificial Intelligence, Machine Learning, and Data Science',
            url : 'https://drive.google.com/file/d/1maxtklTqjT_67j5kuweKAFHSH5790SEF/view?usp=drive_link'
        }

    ],

    Infosys : [
                    {
                        name: 'Data Science Foundation Certificate from Infosys',
                        url : 'https://drive.google.com/file/d/1_jXwy2XPQePVYBCrFIb3MTEGuLX2OEI1/view?usp=drive_link'
                    },
                    {
                        name: 'Machine Learning Foundation Certificate from Infosys',
                        url : 'https://drive.google.com/file/d/1jMZ592aNRLz8DLGHBJsahM0poE4KkCyb/view?usp=drive_link'
                    },
                    {
                        name: 'Basics of Python Certificate from Infosys',
                        url: 'https://drive.google.com/file/d/1qHXfVz3N4Bo-hd-t6oj2LFjK63LleJi7/view?usp=drive_link'
                    }
    ],

    Oracle:[
        {
            name: 'Databases for Developers: Foundations Certificate from Oracle',
            url: 'https://drive.google.com/file/d/15bMyuIQlVMhDOl7yNwkbNCnxHivPU0S-/view?usp=drive_link'
        }
    ],

    "Forage":[
        {
            name: 'BCG Data Science Job Simulation on Forage',
            url: 'https://drive.google.com/file/d/1wBcQwIMuyxmwXjoPpUeygN7VVZIwiUsz/view?usp=drive_link'
        },
        {
            name: 'Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on Forage',
            url: 'https://drive.google.com/file/d/1Hw_YcU_3sREOXW0aY6RtmMOiEUwu-zyV/view?usp=drive_link'
        },
        {
            name: 'Accenture North America Data Analytics and Visualization Job Simulation on Forage',
            url: 'https://drive.google.com/file/d/1I8IFOt1vRxWnOr_zgJFB3j8M4B0lgvfp/view?usp=drive_link'
        },

    ]
}

const projects = [
    {
        name: 'Multilingual Chatbot (Mini-LLM)',
        url: 'https://github.com/Dinesh-Narasimhan/Mini-LLM-Chatbot',
        description: `
                Built from scratch using a Transformer Decoder model.
		Supports natural conversation in Telugu, Hindi, Tamil, and English.
		Trained on real-world, manually curated chat data.
		Focused on emotional and everyday conversation flows.
		Deployed via Streamlit with a clean, user-friendly interface.
        `
    },{
        name: 'RAG - Ask Your Notes',
        url: 'https://github.com/Dinesh-Narasimhan/RAG',
        description: `
                Developed an AI-powered study assistant for personalized learning.
		Automatically retrieves the most relevant information from uploaded notes.
		Generates clear and detailed answers to user questions in natural language.
		Delivers an interactive and user-friendly experience through a chat interface.
        `
    },
     {
        name: 'Cardiovascular Disease Prediction from ECG Images',
        url: 'https://github.com/Dinesh-Narasimhan/CARDIOVASCULAR-DISEASE-PREDICTION-FROM-ECG-IMAGES',
        description: `
                Developed a visual deep learning system to analyze ECG report images.
		Automatically identifies heart conditions like myocardial infarction and arrhythmias.
		Extracts and processes ECG waveforms using image preprocessing and signal conversion.
		Trained multiple machine learning models to ensure accurate classification.
		Delivers real-time, interpretable results through a user-friendly web interface.
        `
    },
	{
        name: 'NLP Toolkit Web App',
        url: 'https://github.com/Dinesh-Narasimhan/NLP_Toolkit',
        description: `
                Developed a complete web-based NLP application for real-time language processing tasks.
		Supports emotion detection, topic classification, text summarization, and multilingual translation.
		Translation feature includes major languages such as Hindi, Tamil, Japanese, and French.
		Designed with a clean, user-friendly interface using Streamlit for accessibility.
		Focused on simplicity, making it ideal for educational and demonstration purposes.
        `
    },

    {
        name: 'GeoSentioMap',
        url: 'https://github.com/Dinesh-Narasimhan/GeoSentioMap',
        description: `
	       AI-powered emotional mapping of public spaces using image and context.
               GeoSentioMap combines ResNet18-based image analysis with structured metadata inputs (location, weather, and time of day) to classify public scenes as peaceful, chaotic, or energetic. 
	       The model was trained on real-world, copyright-free imagery and contextual data. It was developed entirely in Python and deployed using Streamlit for interactive use.
        `
    },
    {
        name: 'cars24-based-price-prediction',
        url: 'https://github.com/Dinesh-Narasimhan/car-price-prediction',
        description: `
                Developed a machine learning system to predict used car prices.
		Analyzes key details like make, model, year, mileage, and ownership history.
		Provides accurate price estimates to support better buying and selling decisions.
		Built an interactive web application for real-time predictions with a simple interface.
        `
    }
]

export const variables = {data, description, work_experiences, skills, education, certifications, projects} ;
