import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/logo_w.svg';

export const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer_bx">
                                <img src={Logo} />
                                <ul>
                                    <li>
                                        <Link to={""}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM9.25312 12L3.75 17.0438V6.95625L9.25312 12ZM10.3594 13.0219L11.4937 14.0531C11.632 14.1796 11.8126 14.2498 12 14.2498C12.1874 14.2498 12.368 14.1796 12.5062 14.0531L13.6406 13.0219L19.0687 18H4.93125L10.3594 13.0219ZM14.7469 12L20.25 6.95625V17.0438L14.7469 12Z" fill="white" />
                                        </svg></span><span>PIIoHide@company.ca</span></Link>
                                    </li>
                                    <li>
                                        <Link to={""}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.7125 16.4156C21.5467 17.6816 20.9267 18.8443 19.9679 19.6876C19.0092 20.5308 17.7768 20.9972 16.5 21C9.05625 21 3 14.9438 3 7.50001C3.00281 6.22319 3.46919 4.99083 4.31243 4.03206C5.15566 3.07329 6.31837 2.45336 7.58437 2.28751C7.90711 2.25172 8.23284 2.31967 8.51435 2.4815C8.79586 2.64332 9.01851 2.89061 9.15 3.18751L11.0344 7.58438C11.1321 7.81261 11.1713 8.06163 11.1484 8.30885C11.1255 8.55607 11.0412 8.79364 10.9031 9.00001L9.34687 11.3813C10.0516 12.8114 11.2127 13.966 12.6469 14.6625L15 13.0969C15.2061 12.9579 15.4443 12.8738 15.692 12.8525C15.9397 12.8312 16.1888 12.8733 16.4156 12.975L20.8125 14.85C21.1094 14.9815 21.3567 15.2041 21.5185 15.4857C21.6803 15.7672 21.7483 16.0929 21.7125 16.4156V16.4156ZM14.7562 4.47188C15.8979 4.78377 16.9384 5.38794 17.7752 6.22477C18.6121 7.06159 19.2162 8.10215 19.5281 9.24376C19.5695 9.40404 19.6627 9.54612 19.7933 9.64787C19.9239 9.74962 20.0845 9.80531 20.25 9.80626C20.3166 9.80613 20.3829 9.79667 20.4469 9.77813C20.5422 9.75319 20.6316 9.70946 20.7098 9.64953C20.7881 9.58959 20.8535 9.51465 20.9024 9.42908C20.9513 9.34352 20.9827 9.24905 20.9946 9.15123C21.0065 9.05341 20.9988 8.95419 20.9719 8.85938C20.5969 7.46128 19.8607 6.18644 18.8371 5.16289C17.8136 4.13934 16.5387 3.40311 15.1406 3.02813C15.0428 2.99249 14.9386 2.97761 14.8347 2.98444C14.7308 2.99127 14.6295 3.01965 14.5372 3.06779C14.4448 3.11593 14.3635 3.18277 14.2985 3.26404C14.2334 3.34532 14.1859 3.43925 14.1591 3.53987C14.1324 3.64049 14.1268 3.74558 14.1429 3.84846C14.1589 3.95133 14.1962 4.04974 14.2524 4.13741C14.3086 4.22508 14.3824 4.3001 14.4691 4.35769C14.5559 4.41527 14.6536 4.45416 14.7562 4.47188V4.47188ZM13.9781 7.36876C14.6127 7.54246 15.1911 7.87847 15.6563 8.3437C16.1215 8.80892 16.4575 9.3873 16.6312 10.0219C16.6712 10.183 16.764 10.326 16.8949 10.428C17.0258 10.53 17.1872 10.5851 17.3531 10.5844C17.4167 10.585 17.48 10.5755 17.5406 10.5563C17.6368 10.5323 17.7272 10.4894 17.8065 10.4299C17.8857 10.3704 17.9523 10.2956 18.0021 10.2099C18.0519 10.1242 18.0841 10.0294 18.0966 9.93109C18.1091 9.83277 18.1018 9.73294 18.075 9.63751C17.8382 8.74642 17.3702 7.93374 16.7182 7.28179C16.0663 6.62983 15.2536 6.16177 14.3625 5.92501C14.2647 5.88937 14.1605 5.87449 14.0566 5.88131C13.9527 5.88814 13.8514 5.91653 13.759 5.96467C13.6667 6.01281 13.5854 6.07964 13.5203 6.16092C13.4553 6.24219 13.4078 6.33613 13.381 6.43675C13.3542 6.53736 13.3487 6.64246 13.3647 6.74533C13.3808 6.84821 13.4181 6.94662 13.4743 7.03429C13.5304 7.12196 13.6042 7.19698 13.691 7.25456C13.7777 7.31214 13.8755 7.35104 13.9781 7.36876V7.36876Z" fill="white" />
                                        </svg></span> <span>(021) 876 347 294</span></Link>
                                    </li>
                                    <li>
                                        <Link to={""}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.7594 21H14.1281C14.9085 20.3031 15.6443 19.5579 16.3313 18.7687C18.9 15.8156 20.2594 12.6937 20.2594 9.75C20.2594 7.56196 19.3902 5.46354 17.843 3.91637C16.2959 2.36919 14.1974 1.5 12.0094 1.5C9.82136 1.5 7.72294 2.36919 6.17577 3.91637C4.62859 5.46354 3.7594 7.56196 3.7594 9.75C3.7594 12.6937 5.11877 15.8156 7.6969 18.7687C8.38137 19.5602 9.11735 20.3055 9.90002 21H5.2594C5.06049 21 4.86972 21.079 4.72907 21.2197C4.58842 21.3603 4.5094 21.5511 4.5094 21.75C4.5094 21.9489 4.58842 22.1397 4.72907 22.2803C4.86972 22.421 5.06049 22.5 5.2594 22.5H18.7594C18.9583 22.5 19.1491 22.421 19.2897 22.2803C19.4304 22.1397 19.5094 21.9489 19.5094 21.75C19.5094 21.5511 19.4304 21.3603 19.2897 21.2197C19.1491 21.079 18.9583 21 18.7594 21ZM12.0094 6.75C12.6027 6.75 13.1828 6.92595 13.6761 7.25559C14.1695 7.58524 14.554 8.05377 14.781 8.60195C15.0081 9.15013 15.0675 9.75333 14.9518 10.3353C14.836 10.9172 14.5503 11.4518 14.1307 11.8713C13.7112 12.2909 13.1766 12.5766 12.5947 12.6924C12.0127 12.8081 11.4095 12.7487 10.8613 12.5216C10.3132 12.2946 9.84464 11.9101 9.51499 11.4167C9.18535 10.9234 9.0094 10.3433 9.0094 9.75C9.0094 8.95435 9.32547 8.19129 9.88808 7.62868C10.4507 7.06607 11.2138 6.75 12.0094 6.75V6.75Z" fill="white" />
                                        </svg></span><span>3891 Ranchview
                                            765-8764 Dr. Richardson
                                            California 62639</span></Link>
                                    </li>

                                </ul>


                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer_bx">
                                <h3 class="heading_ft">Our Service</h3>
                                <ul>
                                    <li>
                                        <Link to={""}>About us</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>How It Works?</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>Our Features</Link>
                                    </li>
                                    <li>
                                        <Link to={""}>Community</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer_bx">
                                <h3 class="heading_ft">More Links</h3>
                                <ul>
                                    <li>
                                        <Link to={""}>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to={""}> Team</Link>
                                    </li>
                                    <li>
                                        <Link to={""}> FAQs</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="footer_bx">
                                <h3 class="heading_ft">Platform Connect</h3>
                                <ul class="ft_soical">
                                    <li>
                                        <Link to={""}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M20 16C20 16.7911 19.7654 17.5645 19.3259 18.2223C18.8864 18.8801 18.2616 19.3928 17.5307 19.6955C16.7998 19.9983 15.9956 20.0775 15.2196 19.9231C14.4437 19.7688 13.731 19.3878 13.1716 18.8284C12.6122 18.269 12.2312 17.5563 12.0769 16.7804C11.9225 16.0044 12.0017 15.2002 12.3045 14.4693C12.6072 13.7384 13.1199 13.1136 13.7777 12.6741C14.4355 12.2346 15.2089 12 16 12C17.0599 12.0033 18.0754 12.4258 18.8248 13.1752C19.5742 13.9246 19.9967 14.9401 20 16V16ZM28.5 10.5V21.5C28.5 23.3565 27.7625 25.137 26.4497 26.4497C25.137 27.7625 23.3565 28.5 21.5 28.5H10.5C8.64348 28.5 6.86301 27.7625 5.55025 26.4497C4.2375 25.137 3.5 23.3565 3.5 21.5V10.5C3.5 8.64348 4.2375 6.86301 5.55025 5.55025C6.86301 4.2375 8.64348 3.5 10.5 3.5H21.5C23.3565 3.5 25.137 4.2375 26.4497 5.55025C27.7625 6.86301 28.5 8.64348 28.5 10.5V10.5ZM22 16C22 14.8133 21.6481 13.6533 20.9888 12.6666C20.3295 11.6799 19.3925 10.9108 18.2961 10.4567C17.1997 10.0026 15.9933 9.88378 14.8295 10.1153C13.6656 10.3468 12.5965 10.9182 11.7574 11.7574C10.9182 12.5965 10.3468 13.6656 10.1153 14.8295C9.88378 15.9933 10.0026 17.1997 10.4567 18.2961C10.9108 19.3925 11.6799 20.3295 12.6666 20.9888C13.6533 21.6481 14.8133 22 16 22C17.5913 22 19.1174 21.3679 20.2426 20.2426C21.3679 19.1174 22 17.5913 22 16ZM24 9.5C24 9.20333 23.912 8.91332 23.7472 8.66665C23.5824 8.41997 23.3481 8.22771 23.074 8.11418C22.7999 8.00065 22.4983 7.97094 22.2074 8.02882C21.9164 8.0867 21.6491 8.22956 21.4393 8.43934C21.2296 8.64912 21.0867 8.91639 21.0288 9.20736C20.9709 9.49834 21.0007 9.79994 21.1142 10.074C21.2277 10.3481 21.42 10.5824 21.6666 10.7472C21.9133 10.912 22.2033 11 22.5 11C22.8978 11 23.2794 10.842 23.5607 10.5607C23.842 10.2794 24 9.89782 24 9.5Z" fill="white" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={""}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M29.2875 8.72499C29.1726 8.26415 28.9477 7.83803 28.632 7.48317C28.3163 7.12831 27.9193 6.85528 27.475 6.68749C23.2 5.03749 16.375 5.04999 16 5.04999C15.625 5.04999 8.8 5.03749 4.525 6.68749C4.08068 6.85528 3.68366 7.12831 3.36799 7.48317C3.05231 7.83803 2.82739 8.26415 2.7125 8.72499C2.3875 9.96249 2 12.2375 2 16C2 19.7625 2.3875 22.0375 2.7125 23.275C2.82739 23.7358 3.05231 24.1619 3.36799 24.5168C3.68366 24.8717 4.08068 25.1447 4.525 25.3125C8.625 26.9 15.05 26.95 15.9125 26.95H16.0875C16.95 26.95 23.375 26.9 27.475 25.3125C27.9193 25.1447 28.3163 24.8717 28.632 24.5168C28.9477 24.1619 29.1726 23.7358 29.2875 23.275C29.6125 22.0375 30 19.7625 30 16C30 12.2375 29.6125 9.96249 29.2875 8.72499V8.72499ZM20.275 16.4125L14.275 20.4125C14.1954 20.4711 14.0988 20.5018 14 20.5C13.9172 20.4969 13.8361 20.4756 13.7625 20.4375C13.6826 20.3959 13.6158 20.333 13.5694 20.2558C13.5231 20.1786 13.4991 20.09 13.5 20V12C13.4991 11.9099 13.5231 11.8214 13.5694 11.7442C13.6158 11.6669 13.6826 11.6041 13.7625 11.5625C13.8422 11.52 13.932 11.4998 14.0222 11.5042C14.1124 11.5086 14.1998 11.5374 14.275 11.5875L20.275 15.5875C20.3447 15.6314 20.4022 15.6923 20.442 15.7644C20.4818 15.8365 20.5027 15.9176 20.5027 16C20.5027 16.0824 20.4818 16.1634 20.442 16.2356C20.4022 16.3077 20.3447 16.3686 20.275 16.4125Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={""}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M30.7125 9.71249L26.9375 13.475C26.1875 22.2125 18.8125 29 10 29C8.1875 29 6.6875 28.7125 5.55 28.15C4.6375 27.6875 4.2625 27.2 4.1625 27.05C4.07976 26.9243 4.02645 26.7816 4.00653 26.6325C3.98661 26.4833 4.0006 26.3316 4.04746 26.1887C4.09431 26.0457 4.17283 25.9151 4.27716 25.8067C4.38148 25.6983 4.50893 25.6148 4.65 25.5625C4.675 25.55 7.625 24.425 9.5375 22.2625C8.35142 21.418 7.30894 20.3882 6.45 19.2125C4.7375 16.8875 2.925 12.85 4.0125 6.82499C4.04668 6.64588 4.12861 6.47932 4.24962 6.34291C4.37063 6.20649 4.52623 6.10529 4.7 6.05C4.87431 5.99292 5.06097 5.98488 5.23955 6.02677C5.41813 6.06866 5.58174 6.15886 5.7125 6.2875C5.75 6.3375 9.9125 10.4375 15 11.7625V11C15.0049 10.2071 15.1659 9.42301 15.4739 8.69238C15.7819 7.96175 16.2307 7.29894 16.7948 6.74179C17.3589 6.18463 18.0273 5.74405 18.7617 5.44519C19.4961 5.14633 20.2821 4.99506 21.075 5C22.1156 5.01484 23.1346 5.29897 24.0328 5.82472C24.9309 6.35047 25.6776 7.0999 26.2 8H30C30.1974 7.99938 30.3906 8.05721 30.5552 8.16621C30.7198 8.27521 30.8485 8.43049 30.925 8.6125C30.997 8.79721 31.0153 8.99854 30.9777 9.1932C30.9401 9.38787 30.8482 9.56791 30.7125 9.71249Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li><Link to={""}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M29 16C28.9936 19.1761 27.8279 22.2406 25.722 24.6182C23.616 26.9957 20.7146 28.5227 17.5625 28.9125C17.4922 28.9194 17.4212 28.9117 17.3539 28.8898C17.2867 28.868 17.2247 28.8325 17.1719 28.7855C17.1191 28.7386 17.0765 28.6812 17.047 28.617C17.0174 28.5528 17.0014 28.4832 17 28.4125V19H20C20.1368 19.0003 20.2721 18.9725 20.3977 18.9184C20.5233 18.8643 20.6364 18.785 20.7302 18.6854C20.8239 18.5858 20.8962 18.468 20.9426 18.3394C20.989 18.2108 21.0086 18.074 21 17.9375C20.9779 17.6789 20.8585 17.4384 20.6659 17.2644C20.4734 17.0904 20.222 16.9959 19.9625 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.1368 12.0003 21.2721 11.9725 21.3977 11.9184C21.5233 11.8643 21.6364 11.785 21.7302 11.6854C21.8239 11.5858 21.8962 11.468 21.9426 11.3394C21.989 11.2108 22.0086 11.074 22 10.9375C21.9779 10.6789 21.8585 10.4384 21.6659 10.2644C21.4734 10.0904 21.222 9.9959 20.9625 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.8633 16.9997 11.7279 17.0275 11.6023 17.0816C11.4767 17.1358 11.3636 17.2151 11.2698 17.3146C11.1761 17.4142 11.1038 17.532 11.0574 17.6606C11.011 17.7892 10.9915 17.926 11 18.0625C11.0221 18.3211 11.1415 18.5616 11.3341 18.7356C11.5266 18.9096 11.778 19.0041 12.0375 19H15V28.4125C15.0004 28.4826 14.986 28.552 14.9578 28.6161C14.9296 28.6803 14.8882 28.7378 14.8363 28.785C14.7845 28.8321 14.7233 28.8679 14.6567 28.8898C14.5902 28.9118 14.5197 28.9195 14.45 28.9125C7.85 28.1125 2.75 22.375 3.0125 15.5125C3.15986 12.1235 4.62607 8.9263 7.09817 6.60339C9.57027 4.28048 12.8524 3.01588 16.2441 3.0795C19.6357 3.14312 22.8681 4.52994 25.2513 6.94393C27.6346 9.35792 28.9799 12.6078 29 16V16Z" fill="white" />
                                    </svg></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="footer_btm">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <p>@ Copyright PlloHide 2024. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};