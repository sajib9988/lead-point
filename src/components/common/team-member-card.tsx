import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TeamMember } from '@/lib/constants';
import Link from 'next/link';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, bio, avatar, dataAiHint, socials } = member;
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <CardHeader className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
          <AvatarImage src={avatar} alt={name} data-ai-hint={dataAiHint} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription className="text-primary">{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex justify-center space-x-3">
          {socials.map((social, index) => (
            <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.icon.displayName}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
