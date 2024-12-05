// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciPsqlDbSystemPrimaryDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#db_system_id DataOciPsqlDbSystemPrimaryDbInstance#db_system_id}
  */
  readonly dbSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance#id DataOciPsqlDbSystemPrimaryDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance oci_psql_db_system_primary_db_instance}
*/
export class DataOciPsqlDbSystemPrimaryDbInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_db_system_primary_db_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_primary_db_instance oci_psql_db_system_primary_db_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciPsqlDbSystemPrimaryDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciPsqlDbSystemPrimaryDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_db_system_primary_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbSystemId = config.dbSystemId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
