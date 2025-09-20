import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Users, Search, Download, RefreshCw, Calendar, Mail, Phone, GraduationCap } from 'lucide-react';
import { studentRegistrationService, type StudentRegistration } from '@/lib/supabase';
import { toast } from 'sonner';

const AdminDashboard: React.FC = () => {
  const [registrations, setRegistrations] = useState<StudentRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadRegistrations = async () => {
    try {
      setLoading(true);
      const data = await studentRegistrationService.getAll();
      setRegistrations(data);
    } catch (error) {
      console.error('Error loading registrations:', error);
      toast.error('Failed to load student registrations');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadRegistrations();
    setRefreshing(false);
    toast.success('Data refreshed successfully');
  };

  const exportToCSV = () => {
    if (filteredRegistrations.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = ['Name', 'Email', 'Mobile', 'College', 'Course', 'Year', 'Tech Knowledge', 'Registration Date'];
    const csvContent = [
      headers.join(','),
      ...filteredRegistrations.map(reg => [
        `"${reg.name}"`,
        `"${reg.email}"`,
        `"${reg.mobile}"`,
        `"${reg.college}"`,
        `"${reg.course}"`,
        `"${reg.year}"`,
        `"${reg.tech_knowledge}"`,
        `"${new Date(reg.created_at).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `student-registrations-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Data exported successfully');
  };

  useEffect(() => {
    loadRegistrations();

    // Set up real-time subscription
    const unsubscribe = studentRegistrationService.subscribeToChanges((payload) => {
      if (payload.eventType === 'INSERT') {
        setRegistrations(prev => [payload.new as StudentRegistration, ...prev]);
        toast.success('New registration received!');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const filteredRegistrations = registrations.filter(reg =>
    reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTechKnowledgeBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-lg text-gray-600">Loading student registrations...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-2"
          >
            Admin Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Manage and view student registrations for Pixel Plus Tech Community
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Total Registrations</p>
                    <p className="text-3xl font-bold">{registrations.length}</p>
                  </div>
                  <Users className="w-12 h-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm font-medium">Today's Registrations</p>
                    <p className="text-3xl font-bold">
                      {registrations.filter(reg => 
                        new Date(reg.created_at).toDateString() === new Date().toDateString()
                      ).length}
                    </p>
                  </div>
                  <Calendar className="w-12 h-12 text-pink-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cyan-100 text-sm font-medium">Filtered Results</p>
                    <p className="text-3xl font-bold">{filteredRegistrations.length}</p>
                  </div>
                  <Search className="w-12 h-12 text-cyan-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, college, or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleRefresh}
                    disabled={refreshing}
                    variant="outline"
                    className="border-gray-200 hover:border-purple-500 hover:text-purple-600"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                  <Button
                    onClick={exportToCSV}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registrations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Student Registrations ({filteredRegistrations.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {filteredRegistrations.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    {searchTerm ? 'No registrations match your search.' : 'No registrations yet.'}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-700">Student Info</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Contact</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Academic</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Tech Level</th>
                        <th className="text-left p-4 font-semibold text-gray-700">Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRegistrations.map((registration, index) => (
                        <motion.tr
                          key={registration.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="p-4">
                            <div>
                              <p className="font-semibold text-gray-900">{registration.name}</p>
                              <p className="text-sm text-gray-500">ID: {registration.id.slice(0, 8)}...</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{registration.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{registration.mobile}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <GraduationCap className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{registration.college}</span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {registration.course} - {registration.year}
                              </p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={getTechKnowledgeBadgeColor(registration.tech_knowledge)}>
                              {registration.tech_knowledge}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <p className="text-sm text-gray-700">
                              {new Date(registration.created_at).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(registration.created_at).toLocaleTimeString()}
                            </p>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;