<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    /**
     * @Route("/")
     */

    public function mainPage()
    {

        return $this->render("mainPage.html.twig",[

        ]);
        
    }

    /**
     * @Route("/login")
     */

    public function loginPage()
    {

        return $this->render("loginPage.html.twig", [
            
        ]);
        
    }

    /**
     * @Route("admin")
     */

    public function adminPage()
    {
        return $this->render("adminPage.html.twig", [

        ]);
    }

}