import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const articles = {
  "7": {
    id: 7,
    category: "News Release",
    title: "Job Fair Announced in Chandigarh Hospital on April 25–26",
    excerpt: "A job fair is set to be organised near Chandigarh Hospital, opposite Solkhian Gurdwara in Ropar on April 25 and 26, offering employment opportunities to job seekers across various sectors.",
    date: "April 21, 2026",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBmYWlyJTIwY2FyZWVyJTIwZmFpciUyMGhpcmluZ3xlbnwxfHx8fDE3NzA3ODk0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Employment",
    content: `
      <p>A job fair is set to be organised near Chandigarh Hospital, opposite Solkhian Gurdwara in Ropar, on <strong>April 25 and 26, 2026</strong>, offering employment opportunities to job seekers across various sectors. The event is being organised with the support of Ek Punjab Foundation and aims to connect employers with skilled and semi-skilled individuals looking for job opportunities.</p>

      <h2>Participating Companies</h2>
      <p>Multiple leading companies and organisations are expected to participate in the event and will conduct on-the-spot hiring for eligible candidates, including:</p>
      <ul>
        <li>Chandigarh Hospital</li>
        <li>Healing Groove</li>
        <li>Oceaniek Technologies</li>
        <li>Punjab Ports</li>
        <li>And many more organisations across sectors</li>
      </ul>
      <p>The fair aims to connect employers with skilled and semi-skilled individuals looking for job opportunities across healthcare, technology, logistics, and other fields.</p>

      <h2>Skill Development Support by Ek Punjab Foundation</h2>
      <p>In addition to recruitment, <strong>Ek Punjab Foundation</strong> will provide support to candidates who require skill development or updates. The organisation will guide attendees on improving their employability and preparing for current job market demands.</p>

      <h2>Career Counselling in Roopnagar</h2>
      <p>Ek Punjab Foundation is organising regular career counselling sessions in Roopnagar on <strong>every second and fourth Saturday</strong>, aiming to equip youth with skills and improve employment prospects in the region.</p>

      <p>Speaking about the initiative, a representative of the foundation said, <em>"Our goal is to bridge the gap between education and employability. Many young people have potential but lack direction. These sessions provide them with clarity, skills, and confidence to pursue meaningful careers."</em></p>

      <h2>Participant Response</h2>
      <p>Participants have also responded positively to the programme. One attendee shared, <em>"The counselling sessions helped me understand different career paths and the skills required. It gave me a clearer roadmap for my future."</em></p>

      <h2>Background</h2>
      <p>The initiative comes at a time when career awareness and skill development are being prioritised across India. These efforts align individual interests with job opportunities, reflecting a broader push toward informed career decision-making.</p>
      <p>In Punjab, growing investments and economic activity have also increased the demand for a skilled workforce, making such grassroots counselling initiatives crucial for connecting youth with emerging opportunities.</p>

      <h2>Impact</h2>
      <p>By holding sessions twice a month, the foundation is creating consistent access to guidance for students, job seekers, and fresh graduates. The programme focuses on:</p>
      <ul>
        <li>Career awareness across diverse sectors</li>
        <li>Skill identification and development</li>
        <li>Guidance on education, training, and job readiness</li>
      </ul>
      <p>Experts note that regular counselling interventions can significantly improve employability outcomes by helping candidates make informed decisions and align their skills with market needs.</p>
      <p>The initiative is expected to benefit a growing number of young people in and around Roopnagar, contributing to local workforce development and supporting broader employment generation efforts in the state.</p>

      <h2>About Ek Punjab Foundation</h2>
      <p>Ek Punjab Foundation is a registered non-profit organisation dedicated to comprehensive social development across Punjab through initiatives in healthcare, education, women empowerment, skill development, and emergency relief.</p>
    `
  },
  "1": {
    id: 1,
    category: "Press Release",
    title: "Free Medical Camp Conducted in Ludhiana",
    excerpt: "Ek Punjab Foundation successfully organized a comprehensive medical camp providing free health screenings and consultations to over 500 families.",
    date: "February 8, 2026",
    image: "https://images.unsplash.com/photo-1667577334865-732daf6963dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2FtcCUyMGhlYWx0aCUyMGNoZWNrdXAlMjBpbmRpYSUyMGRvY3RvcnxlbnwxfHx8fDE3NzA3ODk0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Health",
    content: `
      <p>Ek Punjab Foundation successfully conducted a comprehensive free medical camp in Ludhiana on February 8, 2026, providing essential healthcare services to over 500 families from underserved communities across the district.</p>

      <h2>Comprehensive Healthcare Services</h2>
      <p>The medical camp offered a wide range of services including general health check-ups, blood pressure monitoring, diabetes screening, eye examinations, and dental consultations. A team of 25 volunteer doctors and 40 healthcare workers worked tirelessly throughout the day to serve the community.</p>

      <h2>Community Impact</h2>
      <p>Dr. Amarjeet Singh, Founder & President of Ek Punjab Foundation, stated: "Access to quality healthcare remains a challenge for many families in Punjab. Through these medical camps, we aim to bridge this gap and ensure that no one is left behind in receiving basic health services."</p>

      <p>The camp also distributed free medicines worth ₹2.5 lakhs to patients who needed immediate treatment. Additionally, patients requiring specialized care were referred to partner hospitals for follow-up consultations at subsidized rates.</p>

      <h2>Local Government Support</h2>
      <p>The initiative received support from the local district administration and was conducted in collaboration with the Punjab Health Department. Local community leaders praised Ek Punjab Foundation's efforts in bringing quality healthcare services directly to the people.</p>

      <p>Ek Punjab Foundation plans to conduct similar medical camps in 12 more districts across Punjab over the next six months, with a goal of serving 10,000 families by the end of 2026.</p>

      <h2>About Ek Punjab Foundation</h2>
      <p>Ek Punjab Foundation is a registered non-profit organization working towards comprehensive social development across Punjab through initiatives in healthcare, education, women empowerment, and emergency relief.</p>
    `
  },
  "2": {
    id: 2,
    category: "Council Update",
    title: "Winter Relief Drive Reaches 5,000 Families",
    excerpt: "Distribution of blankets, warm clothing, and essential supplies completed across 8 districts during the winter season.",
    date: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1752010284872-76526682bfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eSUyMGhlbHBpbmd8ZW58MXx8fHwxNzcwNzg5MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Relief",
    content: `
      <p>Ek Punjab Foundation's annual Winter Relief Drive has successfully reached 5,000 families across 8 districts of Punjab, providing essential winter supplies and support during the harsh winter months.</p>

      <h2>Distribution Details</h2>
      <p>The relief drive, which ran from December 2025 to January 2026, distributed:</p>
      <ul>
        <li>10,000 blankets</li>
        <li>5,000 warm clothing sets</li>
        <li>3,500 food ration kits</li>
        <li>2,000 pairs of winter footwear</li>
      </ul>

      <h2>Focus on Vulnerable Communities</h2>
      <p>Special attention was given to homeless individuals, elderly citizens living alone, daily wage laborers, and families in remote rural areas. Ek Punjab Foundation volunteers worked in coordination with local village councils to identify families most in need of support.</p>

      <p>Harpreet Kaur, Vice President of Ek Punjab Foundation, said: "Winter can be particularly harsh for families struggling with poverty. Our winter relief program ensures that vulnerable members of our society have access to basic necessities to stay warm and healthy."</p>

      <h2>Community Participation</h2>
      <p>The success of this initiative was made possible through generous donations from individual donors, corporate partners, and community organizations. Over 500 volunteers participated in the distribution drive across all 8 districts.</p>

      <h2>Long-term Impact</h2>
      <p>Beyond immediate relief, Ek Punjab Foundation also connected beneficiary families with its ongoing social support programs, including skill development training, healthcare services, and education support for children.</p>

      <p>The organization has announced plans to expand the winter relief program to cover 15 districts in the 2026-27 winter season, aiming to support 10,000 families.</p>
    `
  },
  "3": {
    id: 3,
    category: "Public Statement",
    title: "Youth Skill Development Program Launched",
    excerpt: "New initiative aims to provide vocational training and job placement assistance to 1,000 youth across rural Punjab.",
    date: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1660796116086-eb82087fcc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDc4OTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Education",
    content: `
      <p>Ek Punjab Foundation has launched an ambitious Youth Skill Development Program aimed at providing vocational training and job placement assistance to 1,000 young individuals across rural Punjab over the next 12 months.</p>

      <h2>Program Objectives</h2>
      <p>The program focuses on equipping youth aged 18-30 with market-relevant skills in sectors including:</p>
      <ul>
        <li>Information Technology and Digital Marketing</li>
        <li>Healthcare and Medical Services</li>
        <li>Retail and Customer Service</li>
        <li>Agriculture Technology</li>
        <li>Entrepreneurship and Business Management</li>
      </ul>

      <h2>Training Infrastructure</h2>
      <p>Ek Punjab Foundation has established 5 skill development centers across Punjab, equipped with modern training facilities and experienced instructors. Each center can accommodate 50 trainees at a time, with courses ranging from 3 to 6 months.</p>

      <h2>Job Placement Support</h2>
      <p>A key component of the program is job placement assistance. Ek Punjab Foundation has partnered with 35 companies across various sectors who have committed to interviewing program graduates for employment opportunities.</p>

      <p>Kulwinder Singh, General Secretary of Ek Punjab Foundation, explained: "Punjab's youth are talented and hardworking, but many lack access to quality training and job opportunities. This program aims to bridge that gap and empower young people to build successful careers."</p>

      <h2>Free Training for All</h2>
      <p>The entire program is offered free of cost to participants, made possible through funding from corporate CSR partners and individual donors. Additionally, participants from economically disadvantaged backgrounds receive monthly stipends during training.</p>

      <h2>Application Process</h2>
      <p>Youth interested in the program can apply through Ek Punjab Foundation's website or visit any of the 5 skill development centers. The first batch of 200 trainees will begin their programs in March 2026.</p>

      <p>Ek Punjab Foundation expects this initiative to significantly contribute to reducing youth unemployment in rural Punjab while addressing the skill gap in various industries.</p>
    `
  },
  "4":{
  id: 4,
  category: "Press Release",
  title: "Ek Punjab Crown Award 2026 to Honour Humanity in Chandigarh",
  excerpt: "Ek Punjab Foundation announces the Ek Punjab Crown Award ceremony, set to honour humanitarians on September 5, 2026, at Rani Laxmi Bai Bhawan, Chandigarh.",
  date: "September 5, 2026",
  image: "/Ekpunjabevent.png",
  tag: "Award",
  content: `
    <p>Ek Punjab Foundation is set to host the prestigious Ek Punjab Crown Award ceremony on September 5, 2026, at the Rani Laxmi Bai Bhawan in Chandigarh Sector 38C. The event, running from 4:00 PM onwards, is dedicated to honouring outstanding individuals who have made significant contributions to humanity and social welfare in the region.</p>

    <h2>Celebrating Humanitarians</h2>
    <p>The Ek Punjab Crown Award is a certificate of appreciation recognizing selfless service and community leadership. The ceremony is supported by the Indian National Federation Party and will bring together social workers, activists, and community leaders from across Punjab to celebrate the spirit of humanity.</p>

    <h2>Organizational Leadership</h2>
    <p>The event is organized by Ek Punjab Foundation under the leadership of Chairperson, Prof. MS. Jaspreet Preeti Shahid. The foundation's Chief Coordinator, Juneet Pal Singh, is overseeing the event's arrangements, with support from the General Secretary of NP India, Lovepreet Singh.</p>

    <p>The foundation aims to use this platform to inspire more individuals to engage in humanitarian work and to highlight the critical role of community service in building a more inclusive and compassionate society.</p>

    <h2>A Call for Unity</h2>
    <p>In line with its tagline "Together For Humanity," Ek Punjab Foundation continues to foster a sense of unity and collective responsibility. The award ceremony is not just a recognition event but a movement to encourage ongoing social action and collaboration across all sectors of society.</p>

    <p>Community members, volunteers, and well-wishers are invited to attend the ceremony and support the honorees. Further details regarding award nominations and guest speakers will be announced in the coming weeks.</p>

    <h2>About Ek Punjab Foundation</h2>
    <p>Ek Punjab Foundation is a registered non-profit organization working towards comprehensive social development across Punjab through initiatives in healthcare, education, women empowerment, and emergency relief. The foundation regularly organizes events and campaigns to uplift marginalized communities and promote sustainable development.</p>
  `
},
  "6": {
    id: 3,
    category: "Public Statement",
    title: "Youth Skill Development Program Launched",
    excerpt: "New initiative aims to provide vocational training and job placement assistance to 1,000 youth across rural Punjab.",
    date: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1660796116086-eb82087fcc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDc4OTEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Education",
    content: `
      <p>Ek Punjab Foundation has launched an ambitious Youth Skill Development Program aimed at providing vocational training and job placement assistance to 1,000 young individuals across rural Punjab over the next 12 months.</p>

      <h2>Program Objectives</h2>
      <p>The program focuses on equipping youth aged 18-30 with market-relevant skills in sectors including:</p>
      <ul>
        <li>Information Technology and Digital Marketing</li>
        <li>Healthcare and Medical Services</li>
        <li>Retail and Customer Service</li>
        <li>Agriculture Technology</li>
        <li>Entrepreneurship and Business Management</li>
      </ul>

      <h2>Training Infrastructure</h2>
      <p>Ek Punjab Foundation has established 5 skill development centers across Punjab, equipped with modern training facilities and experienced instructors. Each center can accommodate 50 trainees at a time, with courses ranging from 3 to 6 months.</p>

      <h2>Job Placement Support</h2>
      <p>A key component of the program is job placement assistance. Ek Punjab Foundation has partnered with 35 companies across various sectors who have committed to interviewing program graduates for employment opportunities.</p>

      <p>Kulwinder Singh, General Secretary of Ek Punjab Foundation, explained: "Punjab's youth are talented and hardworking, but many lack access to quality training and job opportunities. This program aims to bridge that gap and empower young people to build successful careers."</p>

      <h2>Free Training for All</h2>
      <p>The entire program is offered free of cost to participants, made possible through funding from corporate CSR partners and individual donors. Additionally, participants from economically disadvantaged backgrounds receive monthly stipends during training.</p>

      <h2>Application Process</h2>
      <p>Youth interested in the program can apply through Ek Punjab Foundation's website or visit any of the 5 skill development centers. The first batch of 200 trainees will begin their programs in March 2026.</p>

      <p>Ek Punjab Foundation expects this initiative to significantly contribute to reducing youth unemployment in rural Punjab while addressing the skill gap in various industries.</p>
    `
  },
 
};

export default function NewsArticle() {
  const { id } = useParams();
  const { t } = useTranslation();
  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/newsroom">Back to Newsroom</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[400px] bg-gray-900">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link to="/newsroom">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.back')}
            </Link>
          </Button>
        </div>

        {/* Article Card */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 pb-6">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge className="bg-[#0059D2] text-white">
                {article.tag}
              </Badge>
              <span className="text-sm text-[#F59E0B] font-semibold uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-sm text-gray-400">•</span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Share Button */}
            <div className="flex gap-3 mt-6 pt-6 border-t">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 pb-8">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
                prose-li:text-gray-700 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Published by</p>
                <p className="font-bold text-gray-900">Ek Punjab Foundation</p>
              </div>
              <Button className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white" asChild>
                <Link to="/newsroom">
                  {t('newsroom.readFull')}
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(articles)
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/newsroom/${relatedArticle.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-[#0059D2]">
                      {relatedArticle.tag}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {relatedArticle.date}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0059D2] transition line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}