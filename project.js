function showStateSchemes() {
    var stateSelect = document.getElementById("stateSelect");
    var selectedState = stateSelect.value;
    var stateSchemesDiv = document.getElementById("stateSchemes");
    // Clear previous schemes
    stateSchemesDiv.innerHTML = "";

    // Define schemes and table data for each state
    var stateData = {
        "Andhra Pradesh": {
            schemes: [
                
            ],
            tableData: [
                ["Amma Vodi Scheme", "Mothers or guardians must ensure that their children attend school regularly."], ["YSR Cheyutha Scheme", "Women aged between 45 and 60 years from SC, ST, BC, and minority communities."], ["YSR Kapu Nestham Scheme", "Women aged between 45 and 60 years from Kapu, Balija, Telaga, and Ontari communities."], ["YSR Arogyasri Scheme", "Economically backward sections of society requiring medical and health services."], ["YSR Asara Scheme", "Self-Help Groups (SHGs) seeking financial assistance for economic activities."], ["YSR Matsyakara Nestham Scheme", "Fishermen and fisherwomen affected during the fishing ban period."], ["YSR Nethanna Nestham Scheme", "Weaver families in need of financial assistance."], ["YSR Bheema Scheme", "Families of deceased or disabled workers in unorganized sectors."], ["YSR Pension Kanuka Scheme", "Elderly, widows, single women, and disabled individuals in need of financial assistance."], ["YSR Rythu Bharosa Scheme", "Farmers needing financial assistance for agricultural investment."]
            ]
        },
        "Arunachal Pradesh": {
            schemes: [
                
            ],
            tableData: [
                ["Rural Roads Development Scheme", "Development of rural roads for better connectivity."], ["Chief Minister's Rural Development Scheme", "Scheme aimed at rural development and poverty alleviation."], ["Skill Development Scheme", "Skill development programs for youth to enhance employability."], ["Agriculture Development Scheme", "Initiatives to promote agriculture and improve productivity."], ["Health Care Scheme", "Improving healthcare facilities and services in rural areas."], ["Education Assistance Scheme", "Financial assistance for education of economically backward students."], ["Women Empowerment Scheme", "Initiatives to empower women through education and skill development."], ["Tribal Welfare Scheme", "Welfare programs for the upliftment of tribal communities."], ["Infrastructure Development Scheme", "Development of infrastructure for better amenities and facilities."], ["Entrepreneurship Development Scheme", "Promotion of entrepreneurship through training and financial support."]
            ]
        },
        "Assam": {
            schemes: [],
            tableData: [
                ["Atal Amrit Abhiyan", "Health insurance scheme providing coverage for critical illnesses."], ["Arundhati Scheme", "Financial assistance for the marriage of brides from economically weaker sections."], ["Swami Vivekananda Assam Youth Empowerment Yojana (SVAYEM)", "Scheme for providing financial support and self-employment opportunities to youth."], ["Chief Minister's Special Scholarship Scheme", "Scholarships for meritorious students."], ["Orunodoi Scheme", "Direct benefit transfer scheme providing financial assistance to eligible households."], ["Pragyan Bharati Scooty Scheme", "Scheme providing free scooty to meritorious girl students."], ["Jiban Sampark Project", "Healthcare scheme for remote areas providing telemedicine services."], ["Chief Minister's Samagra Gramya Unnayan Yojana (CMSGUY)", "Rural development scheme for holistic development of villages."], ["Aponar Apon Ghar Home Loan Scheme", "Housing loan scheme for government employees."], ["Swabalamban Yojana", "Scheme for providing financial assistance and training to entrepreneurs."]
            ]
        },
        "Bihar": {
            schemes: [],
            tableData: [
                ["Financial Assistance for Higher Education", "Support for students pursuing higher education"], ["Credit Facility for Farmers", "Financial support for agricultural expenses of farmers"], ["Rural Transportation Infrastructure Improvement Scheme", "Initiative to enhance rural transportation infrastructure"], ["Rural Water Supply Scheme", "Program to provide adequate water supply in rural areas"], ["Girl Child Welfare and Empowerment Scheme", "Initiative for the welfare and empowerment of girl children"], ["Youth Entrepreneurship Scheme", "Program to encourage youth entrepreneurship"], ["Housing Scheme for Economically Weaker Sections", "Initiative to provide housing for economically weaker sections"], ["Education and Welfare Promotion for Girl Children", "Scheme to promote education and welfare of girl children"], ["Employment Generation and Skill Development Scheme", "Program to generate employment and develop skills among laborers and workers"], ["Financial Assistance Scheme for Youth Entrepreneurship", "Support for youth seeking self-employment opportunities"]
            ]
        },
        "Chattisgarh": {
            schemes: [],
            tableData: [
                ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "Efficient use of water resources in agriculture."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Insurance coverage for crop failure due to natural calamities."], ["Paramparagat Krishi Vikas Yojana (PKVY)", "Promotion of organic farming practices."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Support for agricultural development projects."], ["National Mission for Sustainable Agriculture (NMSA)", "Promotion of sustainable agricultural practices."], ["Soil Health Card Scheme", "Information about soil health and fertilization recommendations."], ["National Food Security Mission (NFSM)", "Increase production of rice, wheat, pulses, and coarse cereals."], ["Pradhan Mantri Kisan Sampada Yojana (PMKSY)", "Modernization of food processing units."], ["Krishi Vigyan Kendra (KVK) Scheme", "Knowledge dissemination and training for farmers."], ["National Horticulture Mission (NHM)", "Promotion of horticulture sector through various initiatives."]
            ]
        },

        "Goa": {
            schemes: [],
            tableData: [
                ["Integrated Pest Management (IPM) Program", "Farmers interested in participating in the program need to attend training sessions and implement eco-friendly pest management techniques on their farms."], ["Organic Farming Promotion Program", "Farmers willing to switch to organic farming practices should undergo training provided by the government and meet the certification requirements for organic produce."], ["Crop Diversification Scheme", "Farmers interested in diversifying their crops should submit proposals outlining their plans and undergo evaluation by agricultural authorities."], ["Soil Conservation and Management Program", "Farmers willing to participate in soil conservation programs should implement recommended soil conservation measures on their land and comply with program guidelines."], ["Horticulture Development Scheme", "Farmers engaged in horticulture should meet eligibility criteria defined by the scheme and adhere to guidelines provided by agricultural authorities."], ["Water Conservation and Irrigation Efficiency Improvement Scheme", "Farmers interested in improving water conservation and irrigation efficiency should implement recommended practices and technologies on their farms."], ["Seed Distribution Program", "Farmers interested in availing high-quality seeds should submit applications to agricultural authorities along with necessary documentation and meet eligibility criteria."], ["Livestock Development Program", "Farmers engaged in livestock farming should meet eligibility criteria defined by the scheme and comply with program guidelines provided by agricultural authorities."], ["Agroforestry Promotion Scheme", "Farmers interested in agroforestry should submit proposals outlining their plans and undergo evaluation by agricultural authorities."], ["Market Linkage and Value Addition Program", "Farmers interested in accessing markets and adding value to their agricultural produce should register with the program and comply with program guidelines provided by agricultural authorities."],
            ]
        },
        "Gujarat": {
            schemes: [],
            tableData: [
                ["Krishi Yantra Subsidy Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as landholding, crop type, and machinery requirements."], ["Kisan Suryoday Yojana", "Farmers need to register for the scheme and fulfill eligibility criteria such as having agricultural pumps, land ownership, and compliance with program guidelines."], ["Mukhya Mantri Kisan Sahay Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as landholding, crop type, and compliance with program guidelines."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Farmers need to enroll for crop insurance through authorized insurance companies and comply with documentation and premium payment requirements."], ["Mukhya Mantri Pak Sangrah Yojana", "Farmers need to participate in the scheme through the agriculture department and comply with quality standards and packaging requirements."], ["Kisan Credit Card Yojana", "Farmers need to apply through banks providing Kisan Credit Cards and fulfill eligibility criteria such as landholding, crop type, and creditworthiness."], ["Pradhan Mantri Krishi Sinchai Yojana (PMKSY)", "Farmers need to register for the scheme through the agriculture department and comply with program guidelines for water resource development and management."], ["Mukhya Mantri Sujlam Suflam Jal Sanchay Abhiyan", "Farmers need to participate in water conservation activities through the agriculture department and comply with program guidelines for water resource management."], ["Khedut Nidhi Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as landholding, crop type, and financial requirements."], ["Mukhya Mantri Saur Sujala Yojana", "Farmers need to register for the scheme and fulfill eligibility criteria such as landholding, access to sunlight, and compliance with program guidelines."],
            ]
        },
        "Haryana": {
            schemes: [],
            tableData: [
                ["Krishi Udyog Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as landholding, investment in agricultural infrastructure, and compliance with program guidelines."], ["Kisan Kalyan Yojana", "Farmers need to register for the scheme and fulfill eligibility criteria such as landholding, agricultural income, and compliance with program guidelines."], ["Bhavantar Bharpayee Yojana", "Farmers need to participate in the scheme through designated mandis and fulfill eligibility criteria such as crop type, yield, and compliance with pricing mechanisms."], ["Khet Sadak Marg Vikas Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as location, connectivity requirements, and compliance with road construction standards."], ["Krishi Aashirwad Yojana", "Farmers need to register for the scheme and fulfill eligibility criteria such as landholding, crop type, and compliance with program guidelines for financial assistance."], ["Bagwani Bima Yojana", "Farmers need to enroll for crop insurance through authorized insurance companies and comply with documentation and premium payment requirements."], ["Kisan Fasal Rin Mafi Yojana", "Farmers with outstanding agricultural loans need to apply for loan waiver through designated channels and fulfill eligibility criteria such as loan amount, crop type, and compliance with program guidelines."], ["Kisan Suvidha Yojana", "Farmers need to register for the scheme and avail benefits such as weather information, market prices, and agricultural advisories through designated channels."], ["Beej Swarozgar Yojana", "Farmers need to apply through the agriculture department and fulfill eligibility criteria such as landholding, investment in seed production, and compliance with program guidelines."], ["Kisan Parivar Samriddhi Yojana", "Farmers need to register for the scheme and fulfill eligibility criteria such as landholding, agricultural income, and compliance with program guidelines for financial assistance."],
            ]
        },
        "Himachal Pradesh": {
            schemes: [],
            tableData: [
                ["Apple Rejuvenation Scheme", "Farmers cultivating apple orchards are eligible for financial assistance for rejuvenation activities such as replanting, pruning, and adopting modern agricultural practices."],["Drip Irrigation Subsidy Scheme", "Farmers intending to adopt drip irrigation systems in their agricultural fields can avail subsidies on equipment and installation costs by applying through designated channels."],["Polyhouse Subsidy Scheme", "Farmers interested in setting up polyhouses for protected cultivation of crops can avail subsidies on construction and equipment costs by applying through designated channels."],["Zero Budget Natural Farming (ZBNF) Scheme", "Farmers willing to adopt natural farming methods without using synthetic inputs can receive training, technical support, and financial incentives by participating in ZBNF programs organized by the agriculture department."],["Horticulture Development Scheme", "Farmers engaged in horticultural activities such as fruit cultivation, vegetable production, and floriculture can avail various incentives and support services for improving productivity, quality, and market access."],["Soil Health Card Scheme", "Farmers can obtain soil health cards containing information on soil nutrients, pH levels, and recommendations for appropriate fertilization and soil management practices by applying through soil testing laboratories."],["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Farmers can avail crop insurance coverage against yield losses due to natural calamities, pests, and diseases by enrolling in PMFBY through designated insurance companies and paying the premium."],["Integrated Pest Management (IPM) Scheme", "Farmers can participate in IPM programs aimed at reducing pesticide usage and promoting eco-friendly pest management practices through training, demonstration, and technical support provided by the agriculture department."],["Organic Farming Promotion Scheme", "Farmers transitioning to organic farming practices or obtaining organic certification for their produce can avail incentives, subsidies, and marketing support through various organic farming promotion schemes implemented by the agriculture department."],
            ]
        },
        "Jharkhand": {
            schemes: [],
            tableData: [
                ["Krishi Ashirwad Yojana", "Financial assistance scheme providing direct income support to farmers."], ["Krishi Sajhedari Yojana", "Scheme aimed at promoting agricultural partnerships and collaborations."], ["Bagwani Rin Yojana", "Scheme providing agricultural loans at subsidized interest rates."], ["Anusuchit Jati Khetihar Mazdoor Kalyan Yojana", "Welfare scheme for Scheduled Caste farmers and agricultural laborers."], ["Sabji Bagwani Vikas Yojana", "Scheme for the development of vegetable cultivation."], ["Sthal Kray Yojana", "Scheme for the sale and purchase of agricultural land."], ["Kisan Credit Card Yojana", "Credit facility scheme for farmers to meet agricultural expenses."], ["Khet Badi Pashu Palan Yojana", "Scheme promoting integrated farming including agriculture, horticulture, and animal husbandry."], ["Krishi Tatha Bagwani Pump Vitaran Yojana", "Scheme for the distribution of agricultural and horticultural pumps."], ["Baans Fasal Kisan Mazdoor Yojana", "Scheme for bamboo cultivation and promotion."],
            ]
        },
        "Karnataka": {
            schemes: [],
            tableData: [
                ["Raitha Siri Scheme", "Financial assistance to farmers for the repayment of agricultural loans."], ["Raitha Belaku Scheme", "Insurance coverage for crops to mitigate risks faced by farmers."], ["Krishi Bhagya Scheme", "Scheme providing financial assistance for drip and sprinkler irrigation systems."], ["Rainwater Harvesting Scheme", "Promotion of rainwater harvesting techniques for agricultural purposes."], ["Organic Farming Promotion Scheme", "Encouragement and support for organic farming practices."], ["Krishi Yantra Dhare Yojane", "Subsidy scheme for the purchase of agricultural machinery and equipment."], ["Jaladhare Scheme", "Promotion of water conservation and management in agriculture."], ["Gobar-Dhan Yojana", "Scheme for the management and utilization of cattle dung for agricultural purposes."], ["Krishi Grama Yojana", "Scheme for the development of agriculture-related infrastructure in rural areas."], ["Krishi Sanjeevini Scheme", "Promotion of sustainable agricultural practices and soil health management."],
            ]
        },
        "Kerala": {
            schemes: [],
            tableData: [
                ["Subhiksha Keralam", "Comprehensive program for the development of agriculture in Kerala."], ["Vegetable Initiative for Urban Clusters (VIUC)", "Promotion of vegetable cultivation in urban areas."], ["Kerala Sustainable Urban Development Project (KSUDP)", "Initiative for sustainable urban development including agriculture."], ["Zero Budget Natural Farming (ZBNF)", "Promotion of natural farming techniques without chemical fertilizers and pesticides."], ["Haritha Keralam Mission", "Mission for environmental sustainability including agriculture and biodiversity conservation."], ["Kerala Agriculture Workers Welfare Fund Scheme", "Welfare scheme for agricultural workers and their families."], ["Karshaka Bhavan Project", "Construction of farmer-friendly facilities for agricultural activities."], ["Kerala Coconut Farmers Welfare Fund Board (KCFWFB)", "Welfare fund for coconut farmers in Kerala."], ["Jalanidhi Project", "Water conservation and management project for agriculture and rural development."], ["Krishi Bhavan Project", "Construction of agriculture department offices to facilitate farmer services."],
            ]
        },
        "Madhya Pradesh": {
            schemes: [],
            tableData: [
                ["Krishak Samriddhi Yojana", "Financial assistance to farmers for agricultural development."], ["Bhavantar Bhugtan Yojana", "Price deficit financing scheme for agricultural produce."], ["Kisan Kalyan Yojana", "Scheme for the welfare of farmers, including crop insurance and financial assistance."], ["Krishi Rin Samadhan Yojana", "Scheme for the resolution of agricultural loans and debt relief."], ["Annapurna Yojana", "Scheme for ensuring food security by providing subsidized food grains."], ["Khet Sadak Marg Yojana", "Construction and maintenance of rural roads to improve agricultural connectivity."], ["Solar Pump Yojana", "Promotion of solar-powered irrigation pumps for agricultural purposes."], ["Chiranjeevi Yojana", "Accidental insurance scheme for farmers and their families."], ["Gramin Peyjal Yojana", "Scheme for rural water supply and irrigation facilities."], ["Horticulture Promotion Yojana", "Promotion of horticulture and allied activities for agricultural diversification."],
            ]
        },
        "Maharashtra": {
            schemes: [],
            tableData: [
                ["Baliraja Chetana Abhiyan", "A campaign to raise awareness among farmers about various government schemes, crop patterns, and modern agricultural practices."], ["Krishi Sanjeevani Scheme", "A scheme aimed at providing financial assistance to farmers affected by crop loss due to natural calamities."], ["Atal Solar Krushi Pump Yojana", "A scheme to provide solar-powered agricultural pumps to farmers for irrigation purposes."], ["Mahatma Phule Shetkari Karj Mukti Yojana", "A scheme for the waiver of agricultural loans for eligible farmers."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "A crop insurance scheme to provide financial support to farmers in case of crop failure."], ["Mukhyamantri Krishi Sanjivani Yojana", "A scheme to promote organic farming and provide financial assistance for adopting organic farming practices."], ["Mukhyamantri Saur Krushi Pump Yojana", "Promotion of solar-powered agricultural pumps to reduce dependency on conventional energy sources."], ["Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)", "A health insurance scheme providing financial coverage for medical expenses to farmers and their families."], ["Mahatma Phule Shetkari Karj Mukti Yojana", "A loan waiver scheme for farmers aimed at reducing their debt burden."], ["Baliraja Chetana Abhiyan", "An awareness campaign to educate farmers about various agricultural practices and government schemes."],
            ]
        },
        "Manipur": {
            schemes: [],
            tableData: [
                ["Integrated Farming System", "Promotion of integrated farming practices combining crop cultivation with animal husbandry, fisheries, and agroforestry."], ["National Mission on Oilseeds and Oil Palm (NMOOP)", "Promotion of oilseed cultivation and oil palm plantation to enhance oilseed production in the state."], ["National Food Security Mission (NFSM)", "A mission aimed at increasing the production of rice, wheat, and pulses to ensure food security in the state."], ["National Horticulture Mission (NHM)", "Promotion of horticulture crops such as fruits, vegetables, flowers, spices, and aromatic plants."], ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "A scheme to promote efficient water usage in agriculture through various interventions such as irrigation infrastructure development and water-saving techniques."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Agricultural development scheme focusing on increasing productivity and income of farmers through various interventions."], ["Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)", "Promotion of organic farming practices and development of organic value chains in the North Eastern region, including Manipur."], ["Sub-Mission on Agriculture Mechanization", "Promotion of farm mechanization to enhance agricultural productivity and efficiency."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities."],
            ]
        },
        "Meghalaya": {
            schemes: [],
            tableData: [
                ["Meghalaya Integrated Agricultural Development Project (MIADP)", "Project aimed at enhancing agricultural productivity, improving rural livelihoods, and promoting sustainable development in Meghalaya."], ["National Food Security Mission (NFSM)", "A mission aimed at increasing the production of rice, wheat, and pulses to ensure food security in the state."], ["National Mission on Oilseeds and Oil Palm (NMOOP)", "Promotion of oilseed cultivation and oil palm plantation to enhance oilseed production in the state."], ["National Horticulture Mission (NHM)", "Promotion of horticulture crops such as fruits, vegetables, flowers, spices, and aromatic plants."], ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "A scheme to promote efficient water usage in agriculture through various interventions such as irrigation infrastructure development and water-saving techniques."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Agricultural development scheme focusing on increasing productivity and income of farmers through various interventions."], ["Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)", "Promotion of organic farming practices and development of organic value chains in the North Eastern region, including Meghalaya."], ["Sub-Mission on Agriculture Mechanization", "Promotion of farm mechanization to enhance agricultural productivity and efficiency."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities."], ["Paramparagat Krishi Vikas Yojana (PKVY)", "Promotion of organic farming practices and certification for organic produce."],
            ]
        },
        "Mizoram": {
            schemes: [],
            tableData: [
                ["Mizoram Integrated Agricultural Development Project (MIADP)", "Project aimed at enhancing agricultural productivity, improving rural livelihoods, and promoting sustainable development in Mizoram."], ["National Food Security Mission (NFSM)", "A mission aimed at increasing the production of rice, wheat, and pulses to ensure food security in the state."], ["National Mission on Oilseeds and Oil Palm (NMOOP)", "Promotion of oilseed cultivation and oil palm plantation to enhance oilseed production in the state."], ["National Horticulture Mission (NHM)", "Promotion of horticulture crops such as fruits, vegetables, flowers, spices, and aromatic plants."], ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "A scheme to promote efficient water usage in agriculture through various interventions such as irrigation infrastructure development and water-saving techniques."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Agricultural development scheme focusing on increasing productivity and income of farmers through various interventions."], ["Mission Organic Value Chain Development for North Eastern Region (MOVCD-NER)", "Promotion of organic farming practices and development of organic value chains in the North Eastern region, including Mizoram."], ["Sub-Mission on Agriculture Mechanization", "Promotion of farm mechanization to enhance agricultural productivity and efficiency."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities."],
            ]
        },
        "Nagaland": {
            schemes: [],
            tableData: [
                ["Mission Organic for Value Chain Development for North Eastern Region (MOVCD-NER)", "Promotion of organic farming practices and development of organic value chains in the North Eastern region, including Nagaland."], ["National Food Security Mission (NFSM)", "A mission aimed at increasing the production of rice, wheat, and pulses to ensure food security in the state."], ["National Mission on Oilseeds and Oil Palm (NMOOP)", "Promotion of oilseed cultivation and oil palm plantation to enhance oilseed production in the state."], ["National Horticulture Mission (NHM)", "Promotion of horticulture crops such as fruits, vegetables, flowers, spices, and aromatic plants."], ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "A scheme to promote efficient water usage in agriculture through various interventions such as irrigation infrastructure development and water-saving techniques."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Agricultural development scheme focusing on increasing productivity and income of farmers through various interventions."], ["Sub-Mission on Agriculture Mechanization", "Promotion of farm mechanization to enhance agricultural productivity and efficiency."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities."], ["Paramparagat Krishi Vikas Yojana (PKVY)", "Promotion of organic farming practices and certification for organic produce."], ["Integrated Pest Management (IPM)", "Promotion of eco-friendly pest management practices to reduce chemical pesticide usage and improve crop yield."],
            ]
        },
        "NewDelhi": {
            schemes: [],
                tableData: [
                     ["Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)", "Provides direct income support of Rs. 6,000 per year to all farmer families across the country."], ["Pradhan Mantri Fasal Bima Yojana (PMFBY)", "Covers yield losses due to non-preventable natural risks, ensuring financial support to farmers."], ["Paramparagat Krishi Vikas Yojana (PKVY)", "Promotes organic farming practices and certification for chemical-free farming."], ["National Mission for Sustainable Agriculture (NMSA)", "Focuses on increasing farm productivity and resource conservation for sustainable agriculture."], ["Soil Health Card Scheme", "Provides soil health cards to farmers which contain information on the nutrient status of their soil."], ["Rashtriya Krishi Vikas Yojana (RKVY)", "Supports states in increasing public investment in agriculture and allied sectors."], ["Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "Aims to provide efficient irrigation solutions to farmers to ensure 'Per Drop More Crop'."], ["National Horticulture Mission (NHM)", "Promotes holistic growth of horticulture sector, including fruits, vegetables, and flowers."], ["MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act)", "Provides 100 days of guaranteed wage employment to rural households."], ["National Food Security Mission (NFSM)", "Aims to increase production and productivity of rice, wheat, pulses, and other food crops."] 
            ]
        },
        "Odisha": {
            schemes: [],
            tableData: [
                ["Krushak Assistance for Livelihood and Income Augmentation (KALIA) Scheme", "Financial assistance to small and marginal farmers, landless agricultural households, and vulnerable agricultural households for cultivation and livelihood support."], ["Odisha Millets Mission", "Promotion of millet cultivation to improve nutritional security, income generation, and climate resilience among farmers."], ["Balaram Yojana", "Credit support and agricultural input subsidy for sharecroppers, landless farmers, and agricultural laborers."], ["Odisha Integrated Irrigation Project for Climate Resilient Agriculture (O-IIP)", "Initiative aimed at enhancing irrigation infrastructure to support climate-resilient agriculture."], ["Mukhyamantri Krushi Udyog Yojana (MKUY)", "Promotion of agro-based industries and value addition in agriculture to enhance farmers' income."], ["Odisha Livelihood Mission", "Implementation of various livelihood promotion programs including agriculture and allied sectors."], ["Odisha Agriculture Entrepreneurship Promotion Scheme", "Promotion of entrepreneurship in agriculture through financial support, capacity building, and market linkage."], ["Odisha Fisheries and Aquaculture Development Policy", "Policy framework for the development of fisheries and aquaculture sector in the state."], ["Mukhyamantri Sashaktikaran Yojana", "Empowerment of women farmers through various support mechanisms and capacity building initiatives."], ["Odisha State Agricultural Policy", "Policy framework for the overall development of agriculture in the state, including support for sustainable farming practices, technology adoption, and market access."], 
            ]
        },
        "Punjab": {
            schemes: [],
            tableData: [
                ["Punjab Crop Loan Waiver Scheme", "Waiver of crop loans for small and marginal farmers."], ["Punjab Farm Debt Waiver Scheme", "Waiver of outstanding loans of eligible farmers."], ["Punjab State Agricultural Marketing Board (Mandi Board) Schemes", "Various schemes for the development of agricultural marketing infrastructure."], ["Punjab Agri Export Policy", "Policy framework to promote agricultural exports from Punjab."], ["Punjab Crop Diversification Program", "Encouraging farmers to diversify from paddy-wheat cropping pattern to other crops for sustainable agriculture."], ["Punjab Agri Business and Food Processing Policy", "Policy framework to promote agribusiness and food processing industries in Punjab."], ["Punjab Dairy Development Board Schemes", "Schemes for the development of dairy sector including breed improvement, infrastructure development, and training programs."], ["Punjab Soil Health Card Scheme", "Distribution of soil health cards to farmers for efficient use of fertilizers and soil nutrients."], ["Punjab Farm Mechanization Program", "Promotion of farm mechanization through subsidies on agricultural machinery and equipment."], ["Punjab Organic Farming Policy", "Policy framework to promote organic farming practices in Punjab."],
            ]
        },
        "Rajasthan": {
            schemes: [],
            tableData: [
                ["Agriculture Marketing Board Schemes", "Various schemes for the development of agricultural marketing infrastructure."], ["Agricultural Credit Policy", "Policy framework to provide credit facilities to farmers for agricultural activities."], ["Soil Health Card Scheme", "Distribution of soil health cards to farmers for better management of soil fertility."], ["Organic Farming Promotion Program", "Promotion of organic farming practices among farmers."], ["Agri Export Promotion Policy", "Policy framework to promote agricultural exports from Rajasthan."], ["Crop Insurance Scheme", "Insurance coverage for crops to mitigate risks associated with crop failure."], ["Integrated Horticulture Development Scheme", "Development of horticulture sector including fruits, vegetables, flowers, and medicinal plants."], ["Seed Replacement Program", "Promotion of high-quality seeds among farmers for improved crop yields."], ["Agricultural Extension Services", "Extension services to provide technical guidance and support to farmers."], ["Water Conservation and Harvesting Schemes", "Schemes for water conservation and rainwater harvesting to address water scarcity issues in agriculture."],
            ]
        },
        "Sikkim": {
            schemes: [],
            tableData: [
                ["Organic Mission", "Promoting organic farming practices and certification."], ["Sikkim Milk Schemes", "Promotion of dairy farming and milk production."], ["Sikkim Floriculture Scheme", "Encouraging floriculture and flower farming."], ["Horticulture Development Scheme", "Supporting the development of horticulture sector."], ["Tea Development Scheme", "Promoting tea cultivation and production."], ["Sikkim Animal Husbandry Scheme", "Supporting animal husbandry and livestock development."], ["Sikkim Poultry Development Scheme", "Encouraging poultry farming and production."], ["Sikkim Fisheries Development Scheme", "Promoting fisheries and aquaculture activities."], ["Sikkim Agri-Export Promotion Scheme", "Promotion of agricultural products for export."], ["Sikkim Water Management Scheme", "Initiatives for efficient water management in agriculture."],
            ]
        },
        "Tamil Nadu": {
            schemes: [],
            tableData: [
                ["Rice Bowl of India", "Promoting paddy cultivation and ensuring food security."], ["Integrated Farming System", "Encouraging integrated farming practices for sustainability."], ["Horticulture Development", "Supporting the development of horticulture sector."], ["Free Bovine Distribution", "Providing free cattle to farmers for dairy farming."], ["Agricultural Loan Waiver", "Waiving off agricultural loans to support farmers."], ["Organic Farming", "Promoting organic farming practices and certification."], ["Micro Irrigation", "Encouraging micro irrigation techniques for water conservation."], ["Crop Insurance", "Providing insurance coverage for crop losses due to natural calamities."], ["Food Processing", "Promoting food processing industries for value addition."], ["Dairy Development", "Supporting dairy farming and milk production."],
            ]
        },
        "Telangana": {
            schemes: [],
            tableData: [
                ["Rythu Bandhu", "Financial assistance for farmers to support investment in agriculture."], ["Rythu Bima", "Crop insurance scheme to provide financial protection against crop loss."], ["Rythu Runa Mafi", "Debt relief scheme for farmers to waive off agricultural loans."], ["Kanti Velugu", "Eye screening and treatment program for agricultural workers."], ["Mission Kakatiya", "Revival and restoration of tanks and lakes for improved irrigation."], ["Mission Bhagiratha", "Safe drinking water supply to rural households for agricultural use."], ["Rythu Raksha", "Life insurance for farmers to provide financial support to their families in case of death."], ["Kalyana Lakshmi", "Financial assistance for the marriage of agricultural families' daughters."], ["Aasara Pensions", "Social security pensions for elderly, widows, and disabled individuals."], ["Shaadi Mubarak", "Financial assistance for the marriage of minority community girls."], ]
        },
        "Tripura": {
            schemes: [],
            tableData: [
                ["Mukhyamantri Fasal Bima Yojana", "Crop insurance scheme to protect farmers from yield loss due to natural calamities."], ["Pradhan Mantri Krishi Sinchai Yojana", "Scheme for enhancing water use efficiency in agriculture."], ["Rashtriya Krishi Vikas Yojana", "Scheme for holistic development of agriculture including horticulture, animal husbandry, and fisheries."], ["Paramparagat Krishi Vikas Yojana", "Scheme for promotion of organic farming in clusters."], ["Soil Health Card Scheme", "Scheme for providing soil health cards to farmers for balanced use of fertilizers."], ["National Food Security Mission", "Scheme aimed at increasing the production of rice, wheat, and pulses."], ["Mukhyamantri Kishan Sahayak Sangathan Yojana", "Scheme for providing financial assistance to farmers' groups for setting up agro-based enterprises."], ["Mukhyamantri Bikash Kishan Yojana", "Scheme for financial assistance to farmers for investment in agriculture."], ["Mukhyamantri Yuba Kisan Yojana", "Scheme for providing entrepreneurship training to youth in agriculture."], ["Tripura Green Revolution for Sustainable Agriculture", "Program for sustainable agriculture development in the state."],
            ]
        },
        "Uttarakhand": {
            schemes: [],
            tableData: [
                ["Rashtriya Krishi Vikas Yojana", "Scheme for holistic development of agriculture including horticulture, animal husbandry, and fisheries."], ["Pradhan Mantri Krishi Sinchai Yojana", "Scheme for enhancing water use efficiency in agriculture."], ["Paramparagat Krishi Vikas Yojana", "Scheme for promotion of organic farming in clusters."], ["National Mission on Sustainable Agriculture", "Scheme for promoting sustainable agriculture practices."], ["Rashtriya Gokul Mission", "Scheme for conservation and development of indigenous cattle breeds."], ["National Food Security Mission", "Scheme aimed at increasing the production of rice, wheat, and pulses."], ["Rashtriya Krishi Vikas Yojana", "Scheme for holistic development of agriculture including horticulture, animal husbandry, and fisheries."], ["Soil Health Card Scheme", "Scheme for providing soil health cards to farmers for balanced use of fertilizers."], ["Pradhan Mantri Fasal Bima Yojana", "Crop insurance scheme to protect farmers from yield loss due to natural calamities."], ["Pradhan Mantri Kisan Samman Nidhi", "Scheme for providing direct income support to farmers."],
            ]
        },
        "Uttar Pradesh": {
            schemes: [],
            tableData: [
                ["Krishi Mahotsav Yojana", "Scheme for promoting agricultural practices and enhancing productivity."], ["Krishi Rin Mochan Yojana", "Scheme for waiving off agricultural loans for farmers."], ["Kisan Uday Yojana", "Scheme for providing electricity to farmers at subsidized rates."], ["Kisan Awaas Yojana", "Housing scheme for farmers."], ["Kisan Accident Bima Yojana", "Accident insurance scheme for farmers."], ["Kisan Fasal Rin Mochan Yojana", "Scheme for waiving off crop loans for farmers."], ["Pradhan Mantri Krishi Sinchai Yojana", "Scheme for enhancing water use efficiency in agriculture."], ["Paramparagat Krishi Vikas Yojana", "Scheme for promotion of organic farming in clusters."], ["Rashtriya Krishi Vikas Yojana", "Scheme for holistic development of agriculture including horticulture, animal husbandry, and fisheries."], ["Rashtriya Gokul Mission", "Scheme for conservation and development of indigenous cattle breeds."],
            ]
        },
    };

    if (selectedState in stateData) {
        var tableData = stateData[selectedState].tableData;

        // Display table
        var tableHTML = "<h2>Schemes of " + selectedState + "</h2><table style='width:100%' id='schemeTable'><tr><th>Schemes</th><th>Requirements</th></tr>";
        for (var j = 0; j < tableData.length; j++) {
            tableHTML += "<tr>";
            tableHTML += "<td>" + tableData[j][0] + "</td>";
            tableHTML += "<td>" + tableData[j][1] + " <button onclick='showSchemeDetails(" + j + ")'style='background-color: white; color: black;'><b>Read More</b></button></td>";
            tableHTML += "</tr>";
        }
        tableHTML += "</table>";
        stateSchemesDiv.innerHTML += tableHTML;
    } else {
        stateSchemesDiv.innerHTML = "No schemes available for the selected state";
    }
}

function showSchemeDetails(index) {
    var stateSchemesDiv = document.getElementById("stateSchemes");

    var existingDetails = document.getElementById("schemeDetails");
    if (existingDetails) {
        existingDetails.remove(); // Remove existing details if present
    }

    var stateSelect = document.getElementById("stateSelect");
    var selectedState = stateSelect.value;
    var stateData = {
        "Andhra Pradesh": {
            schemes: [
                "Amma Vodi Scheme",
                "YSR Cheyutha Scheme",
                "YSR Kapu Nestham Scheme",
                "YSR Arogyasri Scheme",
                "YSR Asara Scheme",
                "YSR Matsyakara Nestham Scheme",
                "YSR Nethanna Nestham Scheme",
                "YSR Bheema Scheme",
                "YSR Pension Kanuka Scheme",
                "YSR Rythu Bharosa Scheme"
            ],
            details: [
                "<h2>Details of Amma Vodi Scheme...</h2><br> The Ammavodi scheme is a welfare program launched by the government of Andhra Pradesh, India. It is aimed at providing financial assistance to below poverty line (BPL) families to support the education of their children. Here are the details:<br><h3>Objective:</h3> The main objective of the Ammavodi scheme is to encourage parents from economically backward sections to send their children to school. It aims to improve the literacy rate and reduce the dropout rate in schools.<br><h3> Key Features:</h3><br><b> Financial Assistance:<b> Under this scheme, financial assistance is provided to mothers or recognized guardians of children studying in government or private schools.<br><b> Eligibility:<b> Families with school-going children are eligible for the Ammavodi scheme. It covers students from classes I to XII.<br><b> Amount:<b> The government provides financial assistance of INR 15,000 annually per child.<br><b> Mode of Payment:<b> The money is directly transferred to the bank accounts of the beneficiaries.<br><b> Implementation:<b> The scheme is implemented by the Department of Education, Government of Andhra Pradesh.<br><b> Focus:<b> The scheme particularly aims to encourage enrollment, retention, and attendance of children in schools.<br><h3> Benefits:</h3><br> <b>Increase in Enrollment:<b> The scheme has resulted in a significant increase in school enrollments as parents are motivated by the financial assistance. <br><b>Reduction in Dropout Rate:<b> The program also aims to reduce the dropout rate, ensuring children complete their education.<br> <b>Empowerment of Women:<b> It empowers women as the financial assistance is usually given to mothers or recognized female guardians.<br><b> Quality Education:<b> The scheme ultimately results in better education for children, which is crucial for their future prospects.<br><h3> Implementation Process:</h3><br><b> Registration:<b> The eligible parents or guardians must register for the scheme through the respective school where their child is enrolled.<br><b> Verification:<b> The authorities verify the details of the registered beneficiaries. Distribution: After verification, the financial assistance is directly transferred to the bank accounts of the beneficiaries.<br><h3> Impact:<h3><br> The Ammavodi scheme has been instrumental in enhancing the education sector in Andhra Pradesh. It has resulted in increased school enrollments, decreased dropout rates, and has significantly contributed to the socio-economic development of the state by investing in education.<br><h3> Conclusion:<h3> The Ammavodi scheme is an exemplary initiative by the Government of Andhra Pradesh to promote education among children from economically weaker sections. It not only encourages education but also helps in the overall development of the state by ensuring a brighter future for its younger generation.",
                "<b>Details of YSR Cheyutha Scheme...<b>",
                "<b>Details of YSR Kapu Nestham Scheme...<b>",
                "<b>Details of YSR Arogyasri Scheme...<b>",
                "<b>Details of YSR Asara Scheme...<b>",
                "<b>Details of YSR Matsyakara Nestham Scheme...<b>",
                "<b>Details of YSR Nethanna Nestham Scheme...<b>",
                "<b>Details of YSR Bheema Scheme...<b>",
                "<b>Details of YSR Pension Kanuka Scheme...<b>",
                "<b>Details of YSR Rythu Bharosa Scheme...<b>"
            ]
        },
        "Uttar Pradesh": {
            schemes: [
                "Krishi Mahotsav Yojana",
                "Krishi Rin Mochan Yojana",
                "Kisan Uday Yojana",
                "Kisan Awaas Yojana",
                "Kisan Accident Bima Yojana",
                "Kisan Fasal Rin Mochan Yojana",
                "Pradhan Mantri Krishi Sinchai Yojana",
                "Paramparagat Krishi Vikas Yojana",
                "Rashtriya Krishi Vikas Yojana",
                "Rashtriya Gokul Mission"
            ],
            details: [
                "<h3>Details of Krishi Mahotsav Yojana:</h3><br> This scheme aims to promote agricultural practices and enhance productivity through various events and programs organized at the state level.",
                "<b>Details of Krishi Rin Mochan Yojana:</b> This scheme is designed to waive off agricultural loans for farmers, thus reducing their financial burden.",
                "<b>Details of Kisan Uday Yojana:</b> The Kisan Uday Yojana provides electricity to farmers at subsidized rates, aiming to support agricultural activities.",
                "<b>Details of Kisan Awaas Yojana:</b> This is a housing scheme specifically designed for farmers, providing them with affordable housing options.",
                "<b>Details of Kisan Accident Bima Yojana:</b> The Kisan Accident Bima Yojana offers accident insurance coverage to farmers, providing financial assistance in case of accidents.",
                "<b>Details of Kisan Fasal Rin Mochan Yojana:</b> This scheme aims to waive off crop loans for farmers, thereby alleviating their financial burden.",
                "<b>Details of Pradhan Mantri Krishi Sinchai Yojana:</b> The Pradhan Mantri Krishi Sinchai Yojana focuses on enhancing water use efficiency in agriculture by promoting various irrigation techniques.",
                "<b>Details of Paramparagat Krishi Vikas Yojana:</b> This scheme promotes organic farming in clusters, aiming for sustainable agricultural practices.",
                "<b>Details of Rashtriya Krishi Vikas Yojana:</b> The Rashtriya Krishi Vikas Yojana aims at the holistic development of agriculture, including horticulture, animal husbandry, and fisheries.",
                "<b>Details of Rashtriya Gokul Mission:</b> <br>This scheme focuses on the conservation and development of indigenous cattle breeds, aiming to improve the quality of livestock in the state."
            ]
        }
    }
    var schemeDetails = stateData[selectedState].details[index];
    var detailsDiv = document.createElement("div");
    detailsDiv.id = "schemeDetails";
    detailsDiv.innerHTML = "<div style='margin-top:20px; text-align:center; color:green'>" + schemeDetails + "</div>";
    stateSchemesDiv.appendChild(detailsDiv);
}