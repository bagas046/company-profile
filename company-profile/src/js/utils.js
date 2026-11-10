import { createIcons, Menu, X, ArrowRight, ArrowUp, MapPin, Mail, Phone, Clock, MessageCircle, Check, Briefcase, Layers, Shield, Target, Users, Zap, Award, Lightbulb, Handshake, Instagram, Linkedin, Facebook, House, Building2, Hammer } from 'lucide';
const icons = { Menu, X, ArrowRight, ArrowUp, MapPin, Mail, Phone, Clock, MessageCircle, Check, Briefcase, Layers, Shield, Target, Users, Zap, Award, Lightbulb, Handshake, Instagram, Linkedin, Facebook, House, Building2, Hammer };
export const refreshIcons = () => createIcons({ icons });
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const waNumber = (n) => String(n).replace(/\D/g, '');
