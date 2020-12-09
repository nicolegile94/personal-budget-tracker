import React from 'react';
import aboutImage from "../../assets/about/Intro.png";

function About() {
    return (
        <section class="content">
            <img src={aboutImage} class="image" alt="Nicole" />
            <p class="center">Ora was always the black sheep of the family. Her parents combined two tribes, one human and one orc, to strengthen their power and pull. Her father, cheif Glil, represents the humans. Her mother, cheif Vergu, leads the Orcs. The human and orc tribes has successfully integrated, one sign of that being the 10 children Cheif Vergu and Glil had. Ora, the youngest of the 10, definitely got the short end of the generic lottery. Her parents and siblings all have control over their inner rage, and they have the brains to know when to control themselves. Ora, not so much. She constantly got into trouble growing up (I'm thinking Bart Simpson-esque). Since there was no way she would ever rule the tribe, everyone let her do her own thing. Her parents gave her training to become a bodyguard, but it was made obvious that maybe a body guard wasn't the right job for her when she cut off the arm of a very important representative from another tribe after he looked at Ora funny. With this incident Ora's family decided it would be best if she continued her training elsewhere. With shame Ora found the only job opening she could think of, and enforcer. But after watching the puppet show the disappointment of her family came flooding back. Ora wants nothing more than to learn how to control herself, and be strong enough to return and protect her tribe.</p>
        </section>
    );
}

export default About;