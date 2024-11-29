import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import style from '../styles/home.module.css';

const Hero: NextPage = (): JSX.Element => {
    const [userActivity, setUserActivity] = useState<string>("Loading...");  // Başlangıçta "Loading..." yazacağız.

    useEffect(() => {
        const fetchUserActivity = async () => {
            try {
                const response = await fetch('/api/discord');  // API'den Discord etkinliğini alıyoruz.
                const data = await response.json();
                if (data.activity) {
                    setUserActivity(`Currently ${data.activity}`);  // Etkinlik bilgisi varsa bunu set ediyoruz.
                } else {
                    setUserActivity("No activity");  // Eğer etkinlik yoksa "No activity" yazıyoruz.
                }
            } catch (error) {
                console.error('Error fetching Discord user activity:', error);
                setUserActivity("Failed to fetch activity");  // Hata olursa hata mesajını gösteriyoruz.
            }
        };

        fetchUserActivity();  // API'den veriyi alıyoruz.
    }, []);  // Bu efekti sadece component mount olduğunda çalıştırıyoruz.

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-row lg:flex-col justify-center items-center my-8 py-6">
                <div className="block m-10 lg:m-2">
                    <img className="block h-72 w-72" src="/assets/images/avatar.png" alt="Avatar" />
                </div>
                <div className="block m-10 lg:m-2">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl md:text-5xl font-semibold my-3 text-center uppercase tracking-wide">
                            Bahoz
                        </h1>
                        <div className="block">
                            {/* Etkinlik bilgisi burada sabit olarak gösterilecek */}
                            <p className="text-xl md:text-lg my-3 text-center">{userActivity}</p>
