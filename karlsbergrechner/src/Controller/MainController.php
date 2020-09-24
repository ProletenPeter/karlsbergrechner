<?php


namespace App\Controller;


use App\Entity\Getraenke;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    /**
     * @Route("/")
     */

    public function mainPage(EntityManagerInterface $em)
    {

        $repo = $em->getRepository(Getraenke::class);
        $bier = $repo->findBy([], ["name" => "DESC"]);

        return $this->render("mainPage.html.twig",[
            "bier" => $bier,

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

}