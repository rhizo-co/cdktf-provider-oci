// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkLoadBalancerBackendSetHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#backend_set_name DataOciNetworkLoadBalancerBackendSetHealth#backend_set_name}
  */
  readonly backendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#id DataOciNetworkLoadBalancerBackendSetHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health#network_load_balancer_id DataOciNetworkLoadBalancerBackendSetHealth#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health oci_network_load_balancer_backend_set_health}
*/
export class DataOciNetworkLoadBalancerBackendSetHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_backend_set_health";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set_health oci_network_load_balancer_backend_set_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkLoadBalancerBackendSetHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkLoadBalancerBackendSetHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_backend_set_health',
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
    this._backendSetName = config.backendSetName;
    this._id = config.id;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName?: string; 
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetNameInput() {
    return this._backendSetName;
  }

  // critical_state_backend_names - computed: true, optional: false, required: false
  public get criticalStateBackendNames() {
    return this.getListAttribute('critical_state_backend_names');
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

  // network_load_balancer_id - computed: false, optional: false, required: true
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_backend_count - computed: true, optional: false, required: false
  public get totalBackendCount() {
    return this.getNumberAttribute('total_backend_count');
  }

  // unknown_state_backend_names - computed: true, optional: false, required: false
  public get unknownStateBackendNames() {
    return this.getListAttribute('unknown_state_backend_names');
  }

  // warning_state_backend_names - computed: true, optional: false, required: false
  public get warningStateBackendNames() {
    return this.getListAttribute('warning_state_backend_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_set_name: cdktf.stringToTerraform(this._backendSetName),
      id: cdktf.stringToTerraform(this._id),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
    };
  }
}
