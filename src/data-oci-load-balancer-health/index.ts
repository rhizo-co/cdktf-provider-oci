// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLoadBalancerHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_health#id DataOciLoadBalancerHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_health#load_balancer_id DataOciLoadBalancerHealth#load_balancer_id}
  */
  readonly loadBalancerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_health oci_load_balancer_health}
*/
export class DataOciLoadBalancerHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_health";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_health oci_load_balancer_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLoadBalancerHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_health',
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
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // critical_state_backend_set_names - computed: true, optional: false, required: false
  public get criticalStateBackendSetNames() {
    return this.getListAttribute('critical_state_backend_set_names');
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_backend_set_count - computed: true, optional: false, required: false
  public get totalBackendSetCount() {
    return this.getNumberAttribute('total_backend_set_count');
  }

  // unknown_state_backend_set_names - computed: true, optional: false, required: false
  public get unknownStateBackendSetNames() {
    return this.getListAttribute('unknown_state_backend_set_names');
  }

  // warning_state_backend_set_names - computed: true, optional: false, required: false
  public get warningStateBackendSetNames() {
    return this.getListAttribute('warning_state_backend_set_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
    };
  }
}
