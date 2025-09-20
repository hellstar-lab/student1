import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { CheckCircle, User, Phone, Mail, GraduationCap, BookOpen, Calendar, Code, Sparkles, Loader2 } from 'lucide-react';
import { studentRegistrationService } from '../lib/supabase';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    college: '',
    course: '',
    year: '',
    techKnowledge: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (value.trim()) {
      setCompletedFields(prev => new Set([...prev, field]));
    } else {
      setCompletedFields(prev => {
        const newSet = new Set(prev);
        newSet.delete(field);
        return newSet;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = Object.keys(formData);
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Supabase (convert camelCase to snake_case)
      const registrationData = {
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim().toLowerCase(),
        college: formData.college.trim(),
        course: formData.course.trim(),
        year: formData.year,
        tech_knowledge: formData.techKnowledge.trim()
      };

      // Submit to Supabase
      await studentRegistrationService.create(registrationData);
      
      // Enhanced success message with celebration
      toast.success('🎉 Registration submitted successfully! Welcome to Pixel Plus Tech Community! 🚀');
      
      // Reset form with animation
      setFormData({
        name: '',
        mobile: '',
        email: '',
        college: '',
        course: '',
        year: '',
        techKnowledge: ''
      });
      setCompletedFields(new Set());
      
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Handle specific error cases
      if (error.code === '23505') { // Unique constraint violation (duplicate email)
        toast.error('This email is already registered. Please use a different email address.');
      } else if (error.message?.includes('Failed to fetch')) {
        toast.error('Network error. Please check your internet connection and try again.');
      } else {
        toast.error('Registration failed. Please try again or contact support if the problem persists.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldIcons = {
    name: User,
    mobile: Phone,
    email: Mail,
    college: GraduationCap,
    course: BookOpen,
    year: Calendar,
    techKnowledge: Code
  };

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Post Graduate'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card className="backdrop-blur-2xl bg-white/[0.08] border border-white/20 shadow-2xl rounded-3xl p-10 relative overflow-hidden">
        {/* Dynamic background gradient */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-50"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
              'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="absolute inset-0 backdrop-blur-2xl rounded-3xl" />
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 4}px`,
                height: `${3 + Math.random() * 4}px`,
                background: `radial-gradient(circle, ${
                  i % 4 === 0 ? '#a78bfa' : 
                  i % 4 === 1 ? '#06b6d4' : 
                  i % 4 === 2 ? '#f472b6' : '#10b981'
                } 0%, transparent 70%)`,
                left: `${5 + i * 8}%`,
                top: `${10 + i * 7}%`,
              }}
              animate={{
                x: [0, 150, 0],
                y: [0, -150, 0],
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            >
              <span
                className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                Join Our Tech Community
              </span>
            </motion.h2>
            <motion.p
              className="text-white/90 text-xl leading-relaxed max-w-2xl mx-auto"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Register for exclusive workshops and connect with fellow tech enthusiasts
            </motion.p>
            
            {/* Decorative sparkles */}
            <div className="flex justify-center gap-4 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Sparkles className={`w-6 h-6 ${
                    i % 3 === 0 ? 'text-violet-400' : 
                    i % 3 === 1 ? 'text-pink-400' : 'text-cyan-400'
                  }`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <Label className="text-white/95 flex items-center gap-3 text-lg">
                <User className="w-5 h-5 text-violet-400" />
                Full Name
              </Label>
              <div className="relative">
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-violet-400 focus:ring-violet-400/50 transition-all duration-500 pr-12 py-4 text-lg rounded-xl backdrop-blur-sm"
                  placeholder="Enter your full name"
                  required
                />
                {completedFields.has('name') && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                )}
                {focusedField === 'name' && (
                  <motion.div
                    layoutId="focus-ring"
                    className="absolute inset-0 rounded-xl border-2 border-violet-400 shadow-lg shadow-violet-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Mobile Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-3"
            >
              <Label className="text-white/95 flex items-center gap-3 text-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                Mobile Number
              </Label>
              <div className="relative">
                <Input
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  onFocus={() => setFocusedField('mobile')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-500 pr-12 py-4 text-lg rounded-xl backdrop-blur-sm"
                  placeholder="Enter your mobile number"
                  type="tel"
                  required
                />
                {completedFields.has('mobile') && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                )}
                {focusedField === 'mobile' && (
                  <motion.div
                    layoutId="focus-ring"
                    className="absolute inset-0 rounded-xl border-2 border-cyan-400 shadow-lg shadow-cyan-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3"
            >
              <Label className="text-white/95 flex items-center gap-3 text-lg">
                <Mail className="w-5 h-5 text-pink-400" />
                Email ID
              </Label>
              <div className="relative">
                <Input
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-pink-400 focus:ring-pink-400/50 transition-all duration-500 pr-12 py-4 text-lg rounded-xl backdrop-blur-sm"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                {completedFields.has('email') && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                )}
                {focusedField === 'email' && (
                  <motion.div
                    layoutId="focus-ring"
                    className="absolute inset-0 rounded-xl border-2 border-pink-400 shadow-lg shadow-pink-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* College Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="space-y-3"
              >
                <Label className="text-white/95 flex items-center gap-3 text-lg">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                  College Name
                </Label>
                <div className="relative">
                  <Input
                    value={formData.college}
                    onChange={(e) => handleInputChange('college', e.target.value)}
                    onFocus={() => setFocusedField('college')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:ring-emerald-400/50 transition-all duration-500 pr-12 py-4 text-lg rounded-xl backdrop-blur-sm"
                    placeholder="Your college/university"
                    required
                  />
                  {completedFields.has('college') && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                    </motion.div>
                  )}
                  {focusedField === 'college' && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-xl border-2 border-emerald-400 shadow-lg shadow-emerald-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Course Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-3"
              >
                <Label className="text-white/95 flex items-center gap-3 text-lg">
                  <BookOpen className="w-5 h-5 text-orange-400" />
                  Course
                </Label>
                <div className="relative">
                  <Input
                    value={formData.course}
                    onChange={(e) => handleInputChange('course', e.target.value)}
                    onFocus={() => setFocusedField('course')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-orange-400 focus:ring-orange-400/50 transition-all duration-500 pr-12 py-4 text-lg rounded-xl backdrop-blur-sm"
                    placeholder="e.g., Computer Science"
                    required
                  />
                  {completedFields.has('course') && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                    </motion.div>
                  )}
                  {focusedField === 'course' && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 shadow-lg shadow-orange-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Year Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-3"
            >
              <Label className="text-white/95 flex items-center gap-3 text-lg">
                <Calendar className="w-5 h-5 text-indigo-400" />
                Year
              </Label>
              <div className="relative">
                <Select
                  value={formData.year}
                  onValueChange={(value) => handleInputChange('year', value)}
                  required
                >
                  <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-indigo-400 focus:ring-indigo-400/50 transition-all duration-500 py-4 text-lg rounded-xl backdrop-blur-sm">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-white/30 rounded-xl">
                    {years.map((year) => (
                      <SelectItem key={year} value={year} className="text-white hover:bg-white/20 rounded-lg m-1">
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {completedFields.has('year') && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute right-12 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Tech Knowledge Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-3"
            >
              <Label className="text-white/95 flex items-center gap-3 text-lg">
                <Code className="w-5 h-5 text-yellow-400" />
                Tech-Based Knowledge
              </Label>
              <div className="relative">
                <Textarea
                  value={formData.techKnowledge}
                  onChange={(e) => handleInputChange('techKnowledge', e.target.value)}
                  onFocus={() => setFocusedField('techKnowledge')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-400 focus:ring-yellow-400/50 transition-all duration-500 min-h-[120px] resize-none py-4 text-lg rounded-xl backdrop-blur-sm"
                  placeholder="Tell us about your programming languages, frameworks, and tech interests..."
                  required
                />
                {completedFields.has('techKnowledge') && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute right-4 top-4"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-lg" />
                  </motion.div>
                )}
                {focusedField === 'techKnowledge' && (
                  <motion.div
                    layoutId="focus-ring"
                    className="absolute inset-0 rounded-xl border-2 border-yellow-400 shadow-lg shadow-yellow-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Enhanced Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="pt-6"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-xl relative overflow-hidden rounded-2xl border-0 shadow-2xl transition-all duration-500 hover:scale-105 disabled:hover:scale-100 disabled:opacity-70"
                style={{
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #6b7280, #9ca3af, #d1d5db)' 
                    : 'linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4)',
                  backgroundSize: '200% 200%',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundPosition = '100% 100%';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundPosition = '0% 0%';
                  }
                }}
              >
                <motion.span
                  className="flex items-center justify-center gap-3 text-white drop-shadow-lg relative z-10"
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Submitting Registration...
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      Join Pixel Plus Tech Community
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.div>
                    </>
                  )}
                </motion.span>
                
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </Button>
            </motion.div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}