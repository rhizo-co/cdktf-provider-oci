// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_instance_wallet_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabaseInstanceWalletManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_instance_wallet_management#autonomous_database_id DataOciDatabaseAutonomousDatabaseInstanceWalletManagement#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_instance_wallet_management oci_database_autonomous_database_instance_wallet_management}
*/
export class DataOciDatabaseAutonomousDatabaseInstanceWalletManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database_instance_wallet_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_instance_wallet_management oci_database_autonomous_database_instance_wallet_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabaseInstanceWalletManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseInstanceWalletManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_instance_wallet_management',
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
    this._autonomousDatabaseId = config.autonomousDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // should_rotate - computed: true, optional: false, required: false
  public get shouldRotate() {
    return this.getBooleanAttribute('should_rotate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_rotated - computed: true, optional: false, required: false
  public get timeRotated() {
    return this.getStringAttribute('time_rotated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
    };
  }
}
