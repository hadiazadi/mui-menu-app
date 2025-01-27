import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import portfolio4 from './../assets/img/portfolio/portfolio-4.jpg'
import team1 from './../assets/img/team/team-1.jpg';
import team2 from './../assets/img/team/team-2.jpg';
import team3 from './../assets/img/team/team-3.jpg';
export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      expertise: "Web Developer",
      image: team1,
    },
    {
      id: 2,
      name: "Team Member 2",
      expertise: "UI/UX Designer",
      image: team2,
    },
    {
      id: 3,
      name: "Team Member 3",
      expertise: "Project Manager",
      image: team3,
    },
  ];
  
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6,  float:"left"}}>
        About Us
      </Typography>
      <Grid container spacing={4}>
       
        {/* تصویر درباره ما */}
        <Grid item xs={12} md={6}>
          <img
              src={portfolio4}
              alt="Our Team"
              style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              marginTop:"-40px"
            }}
          />
        </Grid>
         {/* بخش توضیحات */}
        <Grid item xs={12 } md={6} style={{marginTop:"290px"}}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We are a passionate team dedicated to providing the best solutions for our customers. 
            Our mission is to innovate and deliver exceptional experiences. With years of experience, 
            we continue to grow and strive for excellence.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Join us on our journey to make the world a better place, one step at a time.
          </Typography>
        </Grid>
      </Grid>
        
      {/* بخش تیم ما */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={teamMembers.image}
                  alt={`Team Member ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Team Member {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expert in [Field of Expertise]
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
