import pymysql
import pymysql.cursors

class Mysql:
    SQL = [
        # CONSULTA 0
        """ 
            SELECT * FROM Region;
        """,
        # CONSULTA 1
        """
            SELECT p.nombre Profesional, COUNT(i.id_invento) Inventos_asignados
            FROM Profesional p
            INNER JOIN Invento i ON i.id_profesional = p.id_profesional 
            GROUP BY p.nombre
            ORDER BY Inventos_asignados DESC;
        """,
        # CONSULTA 2
        """
            SELECT p.nombre Pais, COUNT(rp.id_pregunta) Respuestas
            FROM Pais p
            LEFT JOIN Respuesta_pais rp ON rp.id_pais = p.id_pais
            GROUP BY Pais
            ORDER BY Respuestas DESC;
        """,
        # CONSULTA 3
        """
            SELECT p.nombre Pais, p.area Area
            FROM Pais p
            LEFT JOIN Frontera f ON f.id_pais = p.id_pais 
            LEFT JOIN Inventor i ON i.id_pais = p.id_pais 
            WHERE i.id_pais IS NULL
            AND f.id_pais IS NULL
            ORDER BY p.area DESC;
        """,
        # CONSULTA 4
        """
            SELECT 
                a.nombre Area, 
                (
                    SELECT p2.nombre Jefazo
                    FROM Area a 
                    INNER JOIN Profesional p2 ON p2.id_profesional = a.prof_jefe 
                    WHERE a.nombre ='TODAS'
                ) `Jefe de jefes`,
                p2.nombre Jefe, 
                p.nombre Subalternos
            FROM Area a
            INNER JOIN Area_prof ap ON ap.id_area = a.id_area 
            LEFT JOIN Profesional p ON p.id_profesional = ap.id_profesional
            INNER JOIN Profesional p2 ON p2.id_profesional = a.prof_jefe 
            ORDER BY Jefe, Subalternos;
        """,
        # CONSULTA 5
        """
            SELECT a.nombre Area, p.nombre Prof, p.salario Salario, Promedio.prom Prom
            FROM Profesional p 
            INNER JOIN Area_prof ap ON ap.id_profesional = p.id_profesional 
            INNER JOIN Area a ON a.id_area = ap.id_area
            INNER JOIN (
                SELECT a.id_area , AVG(p.salario) prom
                FROM Profesional p 
                INNER JOIN Area_prof ap ON ap.id_profesional = p.id_profesional 
                INNER JOIN Area a ON a.id_area = ap.id_area
                GROUP BY a.id_area
            ) AS Promedio ON Promedio.id_area = a.id_area 
            WHERE Salario > Prom;
        """,
        # CONSULTA 6
        """
            SELECT p.nombre Pais, COUNT(r.correcta) Correctas
            FROM Pais p 
            INNER JOIN Respuesta_pais rp ON rp.id_pais = p.id_pais 
            INNER JOIN Respuesta r ON r.id_respuesta = rp.id_respuesta
            WHERE r.correcta = 'Y'
            GROUP BY pais
            ORDER BY correctas DESC;
        """,
        # CONSULTA 7
        """
            SELECT i.nombre Invento, p.nombre Profesional, a.nombre Area
            FROM Invento i 
            INNER JOIN Profesional p ON p.id_profesional = i.id_profesional
            INNER JOIN Area_prof ap ON ap.id_profesional = p.id_profesional 
            INNER JOIN Area a ON a.id_area = ap.id_area
            WHERE a.nombre = 'Óptica';
        """,
        # CONSULTA 8
        """
            SELECT LEFT(p.nombre,1) Inicial, SUM(area) Area
            FROM Pais p 
            GROUP BY inicial
            ORDER BY inicial;
        """,
        # CONSULTA 9
        """
            SELECT i.nombre Inventor, i2.nombre Invento
            FROM Inventor i 
            INNER JOIN Asignacion a ON i.id_inventor = a.id_inventor 
            INNER JOIN Invento i2 ON i2.id_invento = a.id_invento 
            WHERE i.nombre LIKE 'be%';
        """,
        # CONSULTA 10
        """
            SELECT i.nombre Inventor, i2.nombre Invento, i2.anio Anio 
            FROM Inventor i 
            INNER JOIN Asignacion a ON i.id_inventor = a.id_inventor 
            INNER JOIN Invento i2 ON i2.id_invento = a.id_invento AND i2.anio <= 1900 AND i2.anio >= 1801
            WHERE i.nombre LIKE 'b%r' OR i.nombre LIKE 'b%n';
        """,
        # CONSULTA 11
        """
            SELECT p.nombre Pais, p.area Area, COUNT(f.id_pais_frontera) Fronteras
            FROM Pais p 
            INNER JOIN Frontera f ON f.id_pais = p.id_pais 
            GROUP BY p.nombre, p.area 
            HAVING fronteras > 7
            ORDER BY p.area DESC;
        """,
        # CONSULTA 12
        """
            SELECT i.nombre Invento
            FROM Invento i 
            WHERE i.nombre LIKE 'l___';
        """,
        # CONSULTA 13
        """
            SELECT p.nombre Prof, p.salario Salario, p.comision Comision, (p.salario+p.comision) Total
            FROM Profesional p
            WHERE comision >0.25*salario;
        """,
        # CONSULTA 14
        """
            SELECT e.nombre Encuesta, COUNT(p2.id_pais) Paises
            FROM Respuesta_pais rp
            INNER JOIN Pais p2 ON p2.id_pais = rp.id_pais 
            INNER JOIN Pregunta p ON rp.id_pregunta = p.id_pregunta 
            INNER JOIN Encuesta e ON e.id_encuesta = p.id_encuesta
            GROUP BY encuesta
            ORDER BY paises DESC;
        """,
        # CONSULTA 15
        """
            SELECT p.nombre Pais, p.poblacion Poblacion
            FROM Pais p,(
                SELECT SUM(p.poblacion) poblacion_c
                FROM Pais p
                INNER JOIN Region r ON r.id_region = p.id_region 
                WHERE r.nombre = 'Centro America'
            )AS centro
            WHERE p.poblacion > poblacion_c
            ORDER BY p.poblacion DESC;
        """,
        # CONSULTA 16
        """
            SELECT ar.nombre Area, pr.nombre Prof
            FROM Profesional pr, Area ar, (
                SELECT ap.id_area id
                FROM Profesional p 
                INNER JOIN Invento i ON i.id_profesional = p.id_profesional 
                INNER JOIN Asignacion a ON a.id_invento = i.id_invento 
                INNER JOIN Inventor i2 ON i2.id_inventor = a.id_inventor 
                INNER JOIN Area_prof ap ON ap.id_profesional = p.id_profesional 
                WHERE i2.nombre = 'Pasteur'
            )AS betado
            WHERE ar.prof_jefe = pr.id_profesional AND ar.id_area != betado.id;
        """,
        # CONSULTA 17
        """
            SELECT i3.nombre Invento
            FROM Invento i
            INNER JOIN Asignacion a ON a.id_invento = i.id_invento 
            INNER JOIN Inventor i2 ON i2.id_inventor = a.id_inventor AND i2.nombre = 'benz'
            INNER JOIN Invento i3 ON i3.anio = i.anio;
        """,
        # CONSULTA 18
        """
            SELECT p.nombre Pais, p.area Area,(
                SELECT p2.area 
                FROM Pais p2 
                WHERE p2.nombre = 'Japon'
            ) Japon_area
            FROM Pais p 
            LEFT JOIN Frontera f ON f.id_pais = p.id_pais 
            WHERE f.id_pais_frontera IS NULL
            HAVING Japon_area<=p.area;
        """,
        # CONSULTA 19
        """
            SELECT p.nombre Pais, COUNT(f.id_pais_frontera) Fronteras
            FROM Pais p 
            INNER JOIN Frontera f ON f.id_pais = p.id_pais 
            GROUP BY p.nombre
            HAVING fronteras = 1;
        """,
        # CONSULTA 20
        """
            SELECT p.nombre Prof, p.salario Salario, p.comision Comision
            FROM Profesional p 
            WHERE p.salario > 2*p.comision;
        """
    ]
    
    def __init__(self):
        self.connection = pymysql.connect(
            # host="localhost", 
            host='172.19.0.4',
            user="root", 
            passwd="12345678", 
            db="P2Bases", 
            cursorclass=pymysql.cursors.DictCursor, 
            sql_mode=''
        )
        
    def consulta(self, num):
        with self.connection.cursor() as cursor:
            cursor.execute(self.SQL[num])
            res = cursor.fetchall()
        self.connection.close()
        return res
