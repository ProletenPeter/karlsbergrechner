<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{


    /**
     * @Route("/admin")
     */

    public function adminPage()
    {
        return $this->render("adminPage.html.twig", [

        ]);
    }


}