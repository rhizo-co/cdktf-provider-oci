// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateConnectionAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignment#connection_assignment_id DataOciGoldenGateConnectionAssignment#connection_assignment_id}
  */
  readonly connectionAssignmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignment oci_golden_gate_connection_assignment}
*/
export class DataOciGoldenGateConnectionAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_connection_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignment oci_golden_gate_connection_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateConnectionAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateConnectionAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_connection_assignment',
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
    this._connectionAssignmentId = config.connectionAssignmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_name - computed: true, optional: false, required: false
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_assignment_id - computed: false, optional: false, required: true
  private _connectionAssignmentId?: string; 
  public get connectionAssignmentId() {
    return this.getStringAttribute('connection_assignment_id');
  }
  public set connectionAssignmentId(value: string) {
    this._connectionAssignmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAssignmentIdInput() {
    return this._connectionAssignmentId;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_assignment_id: cdktf.stringToTerraform(this._connectionAssignmentId),
    };
  }
}
