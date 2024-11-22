import { type ChangeEvent } from "react";
import moment from "moment";

import { site } from "../const/const";
import { MAIN_MENU } from "../const/nav";

export const replaceAll = (str: any, find: string, replace: string) => {
	const JSONTOString = JSON.stringify(str);
	return JSONTOString.replace(new RegExp(find, "g"), replace);
};

export const arrayPageSkip = (page: number, pagesize: number) => {
	return (page - 1) * pagesize;
};

export const arrayPageTake = (pagesize: number) => {
	return pagesize;
};

export const formatContent = (content: any) => {
	const iframe = content.match(/<iframe(.*)>(.*)<\/iframe>/g);
	let newcontent = content;
	if (iframe) {
		iframe.forEach((item: any) => {
			if (item.includes("youtube.com") || item.includes("youtu.be")) {
				newcontent = newcontent.replace(/<iframe/g, '<span class="iframe-container"><iframe class="responsive-iframe"').replace(/<\/iframe>/g, "</iframe></span>");
			}
		});
	}
	return newcontent;
};

// Remove special characters and spaces
export const removeSpecialCharacters = (str: any) => {
	return str.replace(/[^a-zA-Z0-9]/g, "");
};

// Remove HTML tags
export const removeTags = (str: any) => {
	return str.replace(/(<([^>]+)>)/gi, "");
};

// Truncate string
export const truncateString = (str: any, num: any) => {
	if (str.length <= num) {
		return str;
	}
	// Clear & remove last word
	const newStr = str.slice(0, num + 1).trim();
	// Clear & remove last comma
	const lastSpace = newStr.lastIndexOf(" ");
	if (lastSpace === -1) {
		return `${newStr}...`;
	}
	return `${newStr.slice(0, lastSpace)}...`;
};

export const usStates = [
	// list of US states
	{ value: "AL", label: "Alabama" },
	{ value: "AK", label: "Alaska" },
	{ value: "AZ", label: "Arizona" },
	{ value: "AR", label: "Arkansas" },
	{ value: "CA", label: "California" },
	{ value: "CO", label: "Colorado" },
	{ value: "CT", label: "Connecticut" },
	{ value: "DE", label: "Delaware" },
	{ value: "DC", label: "District Of Columbia" },
	{ value: "FL", label: "Florida" },
	{ value: "GA", label: "Georgia" },
	{ value: "HI", label: "Hawaii" },
	{ value: "ID", label: "Idaho" },
	{ value: "IL", label: "Illinois" },
	{ value: "IN", label: "Indiana" },
	{ value: "IA", label: "Iowa" },
	{ value: "KS", label: "Kansas" },
	{ value: "KY", label: "Kentucky" },
	{ value: "LA", label: "Louisiana" },
	{ value: "ME", label: "Maine" },
	{ value: "MD", label: "Maryland" },
	{ value: "MA", label: "Massachusetts" },
	{ value: "MI", label: "Michigan" },
	{ value: "MN", label: "Minnesota" },
	{ value: "MS", label: "Mississippi" },
	{ value: "MO", label: "Missouri" },
	{ value: "MT", label: "Montana" },
	{ value: "NE", label: "Nebraska" },
	{ value: "NV", label: "Nevada" },
	{ value: "NH", label: "New Hampshire" },
	{ value: "NJ", label: "New Jersey" },
	{ value: "NM", label: "New Mexico" },
	{ value: "NY", label: "New York" },
	{ value: "NC", label: "North Carolina" },
	{ value: "ND", label: "North Dakota" },
	{ value: "OH", label: "Ohio" },
	{ value: "OK", label: "Oklahoma" },
	{ value: "OR", label: "Oregon" },
	{ value: "PA", label: "Pennsylvania" },
	{ value: "RI", label: "Rhode Island" },
	{ value: "SC", label: "South Carolina" },
	{ value: "SD", label: "South Dakota" },
	{ value: "TN", label: "Tennessee" },
	{ value: "TX", label: "Texas" },
	{ value: "UT", label: "Utah" },
	{ value: "VT", label: "Vermont" },
	{ value: "VA", label: "Virginia" },
	{ value: "WA", label: "Washington" },
	{ value: "WV", label: "West Virginia" },
	{ value: "WI", label: "Wisconsin" },
	{ value: "WY", label: "Wyoming" },
	{ value: "AS", label: "American Samoa" },
	{ value: "GU", label: "Guam" },
	{ value: "MP", label: "Northern Mariana Islands" },
	{ value: "PR", label: "Puerto Rico" },
	{ value: "UM", label: "United States Minor Outlying Islands" },
	{ value: "VI", label: "Virgin Islands" },
];
export const countries = [
	// list of countries
	{ name: "Afghanistan", code: "AF" },
	{ name: "Åland Islands", code: "AX" },
	{ name: "Albania", code: "AL" },
	{ name: "Algeria", code: "DZ" },
	{ name: "American Samoa", code: "AS" },
	{ name: "AndorrA", code: "AD" },
	{ name: "Angola", code: "AO" },
	{ name: "Anguilla", code: "AI" },
	{ name: "Antarctica", code: "AQ" },
	{ name: "Antigua and Barbuda", code: "AG" },
	{ name: "Argentina", code: "AR" },
	{ name: "Armenia", code: "AM" },
	{ name: "Aruba", code: "AW" },
	{ name: "Australia", code: "AU" },
	{ name: "Austria", code: "AT" },
	{ name: "Azerbaijan", code: "AZ" },
	{ name: "Bahamas", code: "BS" },
	{ name: "Bahrain", code: "BH" },
	{ name: "Bangladesh", code: "BD" },
	{ name: "Barbados", code: "BB" },
	{ name: "Belarus", code: "BY" },
	{ name: "Belgium", code: "BE" },
	{ name: "Belize", code: "BZ" },
	{ name: "Benin", code: "BJ" },
	{ name: "Bermuda", code: "BM" },
	{ name: "Bhutan", code: "BT" },
	{ name: "Bolivia", code: "BO" },
	{ name: "Bosnia and Herzegovina", code: "BA" },
	{ name: "Botswana", code: "BW" },
	{ name: "Bouvet Island", code: "BV" },
	{ name: "Brazil", code: "BR" },
	{ name: "British Indian Ocean Territory", code: "IO" },
	{ name: "Brunei Darussalam", code: "BN" },
	{ name: "Bulgaria", code: "BG" },
	{ name: "Burkina Faso", code: "BF" },
	{ name: "Burundi", code: "BI" },
	{ name: "Cambodia", code: "KH" },
	{ name: "Cameroon", code: "CM" },
	{ name: "Canada", code: "CA" },
	{ name: "Cape Verde", code: "CV" },
	{ name: "Cayman Islands", code: "KY" },
	{ name: "Central African Republic", code: "CF" },
	{ name: "Chad", code: "TD" },
	{ name: "Chile", code: "CL" },
	{ name: "China", code: "CN" },
	{ name: "Christmas Island", code: "CX" },
	{ name: "Cocos (Keeling) Islands", code: "CC" },
	{ name: "Colombia", code: "CO" },
	{ name: "Comoros", code: "KM" },
	{ name: "Congo", code: "CG" },
	{ name: "Congo, The Democratic Republic of the", code: "CD" },
	{ name: "Cook Islands", code: "CK" },
	{ name: "Costa Rica", code: "CR" },
	{ name: "Cote D'Ivoire", code: "CI" },
	{ name: "Croatia", code: "HR" },
	{ name: "Cuba", code: "CU" },
	{ name: "Cyprus", code: "CY" },
	{ name: "Czech Republic", code: "CZ" },
	{ name: "Denmark", code: "DK" },
	{ name: "Djibouti", code: "DJ" },
	{ name: "Dominica", code: "DM" },
	{ name: "Dominican Republic", code: "DO" },
	{ name: "Ecuador", code: "EC" },
	{ name: "Egypt", code: "EG" },
	{ name: "El Salvador", code: "SV" },
	{ name: "Equatorial Guinea", code: "GQ" },
	{ name: "Eritrea", code: "ER" },
	{ name: "Estonia", code: "EE" },
	{ name: "Ethiopia", code: "ET" },
	{ name: "Falkland Islands (Malvinas)", code: "FK" },
	{ name: "Faroe Islands", code: "FO" },
	{ name: "Fiji", code: "FJ" },
	{ name: "Finland", code: "FI" },
	{ name: "France", code: "FR" },
	{ name: "French Guiana", code: "GF" },
	{ name: "French Polynesia", code: "PF" },
	{ name: "French Southern Territories", code: "TF" },
	{ name: "Gabon", code: "GA" },
	{ name: "Gambia", code: "GM" },
	{ name: "Georgia", code: "GE" },
	{ name: "Germany", code: "DE" },
	{ name: "Ghana", code: "GH" },
	{ name: "Gibraltar", code: "GI" },
	{ name: "Greece", code: "GR" },
	{ name: "Greenland", code: "GL" },
	{ name: "Grenada", code: "GD" },
	{ name: "Guadeloupe", code: "GP" },
	{ name: "Guam", code: "GU" },
	{ name: "Guatemala", code: "GT" },
	{ name: "Guernsey", code: "GG" },
	{ name: "Guinea", code: "GN" },
	{ name: "Guinea-Bissau", code: "GW" },
	{ name: "Guyana", code: "GY" },
	{ name: "Haiti", code: "HT" },
	{ name: "Heard Island and Mcdonald Islands", code: "HM" },
	{ name: "Holy See (Vatican City State)", code: "VA" },
	{ name: "Honduras", code: "HN" },
	{ name: "Hong Kong", code: "HK" },
	{ name: "Hungary", code: "HU" },
	{ name: "Iceland", code: "IS" },
	{ name: "India", code: "IN" },
	{ name: "Indonesia", code: "ID" },
	{ name: "Iran, Islamic Republic Of", code: "IR" },
	{ name: "Iraq", code: "IQ" },
	{ name: "Ireland", code: "IE" },
	{ name: "Isle of Man", code: "IM" },
	{ name: "Israel", code: "IL" },
	{ name: "Italy", code: "IT" },
	{ name: "Jamaica", code: "JM" },
	{ name: "Japan", code: "JP" },
	{ name: "Jersey", code: "JE" },
	{ name: "Jordan", code: "JO" },
	{ name: "Kazakhstan", code: "KZ" },
	{ name: "Kenya", code: "KE" },
	{ name: "Kiribati", code: "KI" },
	{ name: "Korea, Democratic People'S Republic of", code: "KP" },
	{ name: "Korea, Republic of", code: "KR" },
	{ name: "Kuwait", code: "KW" },
	{ name: "Kyrgyzstan", code: "KG" },
	{ name: "Lao People'S Democratic Republic", code: "LA" },
	{ name: "Latvia", code: "LV" },
	{ name: "Lebanon", code: "LB" },
	{ name: "Lesotho", code: "LS" },
	{ name: "Liberia", code: "LR" },
	{ name: "Libyan Arab Jamahiriya", code: "LY" },
	{ name: "Liechtenstein", code: "LI" },
	{ name: "Lithuania", code: "LT" },
	{ name: "Luxembourg", code: "LU" },
	{ name: "Macao", code: "MO" },
	{ name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
	{ name: "Madagascar", code: "MG" },
	{ name: "Malawi", code: "MW" },
	{ name: "Malaysia", code: "MY" },
	{ name: "Maldives", code: "MV" },
	{ name: "Mali", code: "ML" },
	{ name: "Malta", code: "MT" },
	{ name: "Marshall Islands", code: "MH" },
	{ name: "Martinique", code: "MQ" },
	{ name: "Mauritania", code: "MR" },
	{ name: "Mauritius", code: "MU" },
	{ name: "Mayotte", code: "YT" },
	{ name: "Mexico", code: "MX" },
	{ name: "Micronesia, Federated States of", code: "FM" },
	{ name: "Moldova, Republic of", code: "MD" },
	{ name: "Monaco", code: "MC" },
	{ name: "Mongolia", code: "MN" },
	{ name: "Montserrat", code: "MS" },
	{ name: "Morocco", code: "MA" },
	{ name: "Mozambique", code: "MZ" },
	{ name: "Myanmar", code: "MM" },
	{ name: "Namibia", code: "NA" },
	{ name: "Nauru", code: "NR" },
	{ name: "Nepal", code: "NP" },
	{ name: "Netherlands", code: "NL" },
	{ name: "Netherlands Antilles", code: "AN" },
	{ name: "New Caledonia", code: "NC" },
	{ name: "New Zealand", code: "NZ" },
	{ name: "Nicaragua", code: "NI" },
	{ name: "Niger", code: "NE" },
	{ name: "Nigeria", code: "NG" },
	{ name: "Niue", code: "NU" },
	{ name: "Norfolk Island", code: "NF" },
	{ name: "Northern Mariana Islands", code: "MP" },
	{ name: "Norway", code: "NO" },
	{ name: "Oman", code: "OM" },
	{ name: "Pakistan", code: "PK" },
	{ name: "Palau", code: "PW" },
	{ name: "Palestinian Territory, Occupied", code: "PS" },
	{ name: "Panama", code: "PA" },
	{ name: "Papua New Guinea", code: "PG" },
	{ name: "Paraguay", code: "PY" },
	{ name: "Peru", code: "PE" },
	{ name: "Philippines", code: "PH" },
	{ name: "Pitcairn", code: "PN" },
	{ name: "Poland", code: "PL" },
	{ name: "Portugal", code: "PT" },
	{ name: "Puerto Rico", code: "PR" },
	{ name: "Qatar", code: "QA" },
	{ name: "Reunion", code: "RE" },
	{ name: "Romania", code: "RO" },
	{ name: "Russian Federation", code: "RU" },
	{ name: "RWANDA", code: "RW" },
	{ name: "Saint Helena", code: "SH" },
	{ name: "Saint Kitts and Nevis", code: "KN" },
	{ name: "Saint Lucia", code: "LC" },
	{ name: "Saint Pierre and Miquelon", code: "PM" },
	{ name: "Saint Vincent and the Grenadines", code: "VC" },
	{ name: "Samoa", code: "WS" },
	{ name: "San Marino", code: "SM" },
	{ name: "Sao Tome and Principe", code: "ST" },
	{ name: "Saudi Arabia", code: "SA" },
	{ name: "Senegal", code: "SN" },
	{ name: "Serbia and Montenegro", code: "CS" },
	{ name: "Seychelles", code: "SC" },
	{ name: "Sierra Leone", code: "SL" },
	{ name: "Singapore", code: "SG" },
	{ name: "Slovakia", code: "SK" },
	{ name: "Slovenia", code: "SI" },
	{ name: "Solomon Islands", code: "SB" },
	{ name: "Somalia", code: "SO" },
	{ name: "South Africa", code: "ZA" },
	{ name: "South Georgia and the South Sandwich Islands", code: "GS" },
	{ name: "Spain", code: "ES" },
	{ name: "Sri Lanka", code: "LK" },
	{ name: "Sudan", code: "SD" },
	{ name: "Suriname", code: "SR" },
	{ name: "Svalbard and Jan Mayen", code: "SJ" },
	{ name: "Swaziland", code: "SZ" },
	{ name: "Sweden", code: "SE" },
	{ name: "Switzerland", code: "CH" },
	{ name: "Syrian Arab Republic", code: "SY" },
	{ name: "Taiwan, Province of China", code: "TW" },
	{ name: "Tajikistan", code: "TJ" },
	{ name: "Tanzania, United Republic of", code: "TZ" },
	{ name: "Thailand", code: "TH" },
	{ name: "Timor-Leste", code: "TL" },
	{ name: "Togo", code: "TG" },
	{ name: "Tokelau", code: "TK" },
	{ name: "Tonga", code: "TO" },
	{ name: "Trinidad and Tobago", code: "TT" },
	{ name: "Tunisia", code: "TN" },
	{ name: "Turkey", code: "TR" },
	{ name: "Turkmenistan", code: "TM" },
	{ name: "Turks and Caicos Islands", code: "TC" },
	{ name: "Tuvalu", code: "TV" },
	{ name: "Uganda", code: "UG" },
	{ name: "Ukraine", code: "UA" },
	{ name: "United Arab Emirates", code: "AE" },
	{ name: "United Kingdom", code: "GB" },
	{ name: "United States", code: "US" },
	{ name: "United States Minor Outlying Islands", code: "UM" },
	{ name: "Uruguay", code: "UY" },
	{ name: "Uzbekistan", code: "UZ" },
	{ name: "Vanuatu", code: "VU" },
	{ name: "Venezuela", code: "VE" },
	{ name: "Viet Nam", code: "VN" },
	{ name: "Virgin Islands, British", code: "VG" },
	{ name: "Virgin Islands, U.S.", code: "VI" },
	{ name: "Wallis and Futuna", code: "WF" },
	{ name: "Western Sahara", code: "EH" },
	{ name: "Yemen", code: "YE" },
	{ name: "Zambia", code: "ZM" },
	{ name: "Zimbabwe", code: "ZW" },
];

export const updateSlug = (e: ChangeEvent<HTMLInputElement>) => {
	const title = e.target.value;
	const slug = title
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
	const slugInput = document.getElementById("slug") as HTMLInputElement;
	slugInput.value = slug.length + "";
};

export const uppercaseFirstLetter = (type: string) => {
	return type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ");
};

export const currencyFormat = (num: number) => {
	return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// date format
// 2024-06-10T19:27:01.266Z
export const dateFormat = (date: any, type: any) => {
	const newDate = new Date(date);
	if (type === "num") {
		return newDate.toLocaleDateString();
	} else {
		// return June 10, 2024;
		return newDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
	}
};

// Random Order Number
export const randomOrderString = (num = 5) => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let result = "";
	const charactersLength = characters.length;
	for (let i = 0; i < num; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const randomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
export const randomColorByKey = (text: string) => {
	const Arr_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	const Arr_color = ["#f87171", "#fb923c", "#eab308", "#65a30d", "#10b981", "#06b6d4", "#2563eb", "#7c3aed", "#c026d3", "#db2777", "#897689", "#2e3b69", "#4e701a", "#29ab76", "#a59649", "#49a596", "#314839", "#435536", "#364355", "#ff5843", "#ff9c8f", "#c54bb9", "#563b63", "#f8fea6", "#fed8a6", "#fd5a85", "#ff0000", "#0072fb", "#ff91af", "#de3163", "#800020", "#dc143c", "#3ea5a1", "#d4e6f4", "#e5e5ff", "#e0f7e0"];
	let sum = 0;
	for (let i = 0; i < text.length; i++) {
		sum += Arr_alphabet.indexOf(text.toUpperCase().charAt(i));
	}
	return Arr_color[sum % Arr_color.length];
};

export const getCharater = (string: string, num: number) => {
	return string.slice(0, num).toUpperCase();
};

export const saveToiCalendar = (event: any) => {
	const startDate = moment(event?.meta?.event?.startDate).format("YYYYMMDDTHHmmssZ");
	const endDate = moment(event?.meta?.event?.endDate).format("YYYYMMDDTHHmmssZ");
	const location = `${event?.meta?.venueTranslation[0]?.city}, ${event?.meta?.venueTranslation[0]?.state}`;
	const title = event?.meta?.eventTranslation[0]?.name;
	const description = event?.meta?.eventTranslation[0]?.summary;
	const link = `/event/${event?.meta?.event?.eventKey}`;
	const calendar = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//appsheet.com//appsheet 1.0//EN
BEGIN:VEVENT
CREATED:${moment().format("YYYYMMDDTHHmmssZ")}
DTSTAMP:${moment().format("YYYYMMDDTHHmmssZ")}
DTSTART:${startDate}
DTEND:${endDate}
LOCATION:${location}
SUMMARY:${title}
DESCRIPTION:${description}
SEQUENCE:0
URL:${site.site_url}${link}
UID:${moment().format("YYYYMMDDTHHmmssZ")}
END:VEVENT
END:VCALENDAR`;
	const blob = new Blob([calendar], { type: "text/calendar" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${title}.ics`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

export const saveToGoogleCalendar = (event: any) => {
	const startDate = moment(event?.meta?.event?.startDate).format("YYYYMMDDTHHmmssZ");
	const endDate = moment(event?.meta?.event?.endDate).format("YYYYMMDDTHHmmssZ");
	const location = `${event?.meta?.venueTranslation[0]?.city}, ${event?.meta?.venueTranslation[0]?.state}`;
	const title = event?.meta?.eventTranslation[0]?.name;
	const description = event?.meta?.eventTranslation[0]?.summary;
	const link = `/event/${event?.meta?.event?.eventKey}`;
	const calendar = `https://www.google.com/calendar/event?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${startDate}/${endDate}&sprop=website:${site.site_url}${link}`;
	const encodedCalendar = encodeURI(calendar);
	window.open(encodedCalendar, "_blank");
};

export const saveToYahooCalendar = (event: any) => {
	const startDate = moment(event?.meta?.event?.startDate).format("YYYYMMDDTHHmmssZ");
	const endDate = moment(event?.meta?.event?.endDate).format("YYYYMMDDTHHmmssZ");
	const location = `${event?.meta?.venueTranslation[0]?.city}, ${event?.meta?.venueTranslation[0]?.state}`;
	const title = event?.meta?.eventTranslation[0]?.name;
	const description = event?.meta?.eventTranslation[0]?.summary;
	const link = `/event/${event?.meta?.event?.eventKey}`;
	const calendar = `https://calendar.yahoo.com?v=60&st=${startDate}&et=${endDate}&title=${title}&in_loc=${location}&desc=${description}&url=${site.site_url}${link}`;
	const encodedCalendar = encodeURI(calendar);
	window.open(encodedCalendar, "_blank");
};

export const saveToHotmailCalendar = (event: any) => {
	const startDate = moment(event?.meta?.event?.startDate).format("YYYY-MM-DDTHH:mm:ss");
	const endDate = moment(event?.meta?.event?.endDate).format("YYYY-MM-DDTHH:mm:ss");
	const location = `${event?.meta?.venueTranslation[0]?.city}, ${event?.meta?.venueTranslation[0]?.state}`;
	const title = event?.meta?.eventTranslation[0]?.name;
	const description = event?.meta?.eventTranslation[0]?.summary;
	const link = `/event/${event?.meta?.event?.eventKey}`;
	const calendar = `https://outlook.office.com/calendar/0/deeplink/compose?body=${description}${link}&enddt=${endDate}&location=${location}&path=/calendar/action/compose&rru=addevent&startdt=${startDate}&subject=${title}`;
	const encodedCalendar = encodeURI(calendar);
	window.open(encodedCalendar, "_blank");
};

export const setBlogsSchema = (blogs: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: blogs.map((item: any, index: number) => {
					return {
						"@type": "ListItem",
						"@id": `${site.site_url}/blog/${item?.slug}#blog`,
						name: item?.title,
						position: index + 1,
						url: `${site.site_url}/blog/${item?.slug}`,
					};
				}),
			},
		],
	};

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "blogsSchema";
	if (!document.getElementById("blogsSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const setPersonsSchema = (persons: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": persons.map((person: any) => {
			return {
				"@type": "Person",
				"@id": person?.url + "#person",
				name: person?.title,
				image: person?.openGraph?.images[0],
				sameAs: person?.url,
				description: person?.description,
				worksFor: {
					"@type": "Organization",
					name: site.name,
					url: site.site_url,
				},
				affiliation: {
					"@type": "Organization",
					name: site.name,
					url: site.site_url,
				},
				contactPoint: {
					"@type": "ContactPoint",
					contactType: "customer service",
					telephone: "+1-800-555-1212",
					email: "a",
				},
				url: person?.url,
				alumniOf: site.name,
			};
		}),
	};

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "personsSchema";
	if (!document.getElementById("personsSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const setCarouselSchema = (list: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: list.map((item: any, index: number) => {
					return {
						"@type": "ListItem",
						"@id": item?.meta?.event?.eventKey + "#listitem",
						name: item?.meta?.eventTranslation[0]?.name,
						position: index + 1,
						url: `${site.site_url}/event/${item?.meta?.event?.eventKey}`,
					};
				}),
			},
		],
	};
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "carouselSchema";
	if (!document.getElementById("carouselSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const setBlogSchema = (blog: any) => {
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "blogSchema";
	if (!document.getElementById("blogSchema")) {
		script.innerHTML = blog?.yoast_head_json?.schema;
		document.head.appendChild(script);
	}
};

export const setPageSchema = (page: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@context": "https://schema.org",
				"@type": "WebPage",
				"@id": page?.url || site.site_url,
				image: page?.openGraph ? page?.openGraph : "",
				name: page?.title || "",
				description: page?.description || "",
				publisher: {
					"@type": "Organization",
					name: site.name,
				},
				license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
				breadcrumb: page?.breadcrumb || "",
				inLanguage: "English",
				isPartOf: {
					"@type": ["WebSite"],
					name: site.name,
					url: site.site_url,
				},
				url: page?.url || site.site_url,
			},
			{
				"@type": "ImageObject",
				"@id": page?.url + "#primaryimage",
				url: page?.openGraph ? page?.openGraph : "",
				contentUrl: page?.openGraph ? page?.openGraph : "",
				width: 900,
				height: 600,
			},
			{
				"@type": "BreadcrumbList",
				"@id": page?.url + "#breadcrumb",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: site.site_url,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: page?.title,
						item: page?.url,
					},
				],
			},
		],
	};

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "pageSchema";
	if (!document.getElementById("pageSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const setHomePageSchema = () => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"@id": site.site_url + "#website",
				name: site.name,
				url: site.site_url,
				description: site.long_description,
				logo: site.logo,
				publisher: {
					"@id": `${site.site_url}#organization`,
				},
				address: {
					"@type": "PostalAddress",
					streetAddress: site.streetAddress,
					addressLocality: site.addressLocality,
					addressRegion: site.addressRegion,
					postalCode: site.postalCode,
					addressCountry: site.addressCountry,
				},
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate: `${site.site_url}/search?q={search_term_string}`,
					},
					"query-input": "required name=search_term_string",
				},
				image: site.open_graph_image,
				email: site.email,
			},
			{
				"@context": "https://schema.org/",
				"@type": "LocalBusiness",
				"@id": `${site.site_url}#localbusiness`,
				name: site.name,
				address: {
					"@type": "PostalAddress",
					streetAddress: site.streetAddress,
					addressLocality: site.addressLocality,
					addressRegion: site.addressRegion,
					postalCode: site.postalCode,
					addressCountry: site.addressCountry,
					contacType: "customer service",
				},
				image: site.open_graph_image,
				geo: {
					"@type": "GeoCoordinates",
					latitude: site.seo.map_lat,
					longitude: site.seo.map_lng,
				},
				url: site.site_url,
			},
			{
				"@context": "https://schema.org/",
				"@type": "AboutPage",
				about: {
					"@type": "Thing",
					sameAs: `${site.site_url}/about`,
					url: `${site.site_url}/about`,
					name: site.name,
					description: site.long_description,
					alternateName: site.site_name,
				},
			},
			{
				"@type": "Organization",
				"@id": `${site.site_url}#organization`,
				name: site.name,
				url: site.site_url,
				logo: {
					"@type": "ImageObject",
					"@id": `${site.site_url}#/schema/logo/image/`,
					url: site.logo,
					contentUrl: site.logo,
					width: 2048,
					height: 1365,
					caption: site.name,
				},
				image: {
					"@id": `${site.site_url}#/schema/logo/image/`,
				},
				address: {
					"@type": "PostalAddress",
					streetAddress: site.streetAddress,
					addressLocality: site.addressLocality,
					addressRegion: site.addressRegion,
					postalCode: site.postalCode,
					addressCountry: site.addressCountry,
					contacType: "customer service",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: site.seo.map_lat,
					longitude: site.seo.map_lng,
				},
				sameAs: site.social.map((item: any) => item.url),
			},
			{
				"@context": "https://schema.org",
				"@type": "SiteNavigationElement",
				name: "Home",
				url: site.site_url,
				hasPart: MAIN_MENU.map((item: any) => {
					return {
						"@context": "https://schema.org",
						"@type": "SiteNavigationElement",
						name: item.label,
						url: `${site.site_url}${item.path}`,
					};
				}),
			},
			{
				"@context": "https://schema.org",
				"@type": "ItemList",
				listItemElement: MAIN_MENU.map((item: any, index: number) => {
					return {
						"@context": "https://schema.org",
						"@type": "ListItem",
						position: index + 1,
						name: item.label,
						url: `${site.site_url}${item.path}`,
					};
				}),
			},
		],
	};

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "homePageSchema";
	if (!document.getElementById("homePageSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const setVideoSchema = (video: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@context": "https://schema.org",
				"@type": "VideoObject",
				"@id": video?.url + "#video",
				name: video?.name,
				description: video?.description,
				thumbnailUrl: video?.thumbnailUrl,
				uploadDate: video?.uploadDate,
				duration: video?.duration,
				contentUrl: video?.contentUrl || video?.url,
				url: video?.url,
				interactionStatistic: {
					"@type": "InteractionCounter",
					interactionType: { "@type": "WatchAction" },
					userInteractionCount: video?.userInteractionCount,
				},
				embedUrl: video?.embedUrl,
			},
		],
	};

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "videoSchema";
	if (!document.getElementById("videoSchema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

// Set Image List Schema
export const setImageListSchema = (images: any) => {
	const schema = {
		"@context": "https://schema.org",
		"@graph": images.lists.map((image: any) => {
			return {
				"@context": "https://schema.org",
				"@type": "ImageObject",
				"@id": site.site_url + image + "#image",
				contentUrl: site.site_url + image,
				url: site.site_url + image,
				name: images?.name,
				description: images?.description,
				thumbnailUrl: site.site_url + image,
				uploadDate: images?.uploadDate,
			};
		}),
	};

	const random = Math.floor(Math.random() * 1000000);

	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "imageListSchema" + random;
	if (!document.getElementById("imageListSchema" + random)) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}
};

export const genSlug = (e: ChangeEvent<HTMLInputElement>) => {
	const title = e.target.value;
	const slug = title
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
	const slugInput = document.getElementById("slug") as HTMLInputElement;
	slugInput.value = slug;
};
