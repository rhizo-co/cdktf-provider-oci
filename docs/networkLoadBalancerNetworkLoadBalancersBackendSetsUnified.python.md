# `networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule <a name="`networkLoadBalancerNetworkLoadBalancersBackendSetsUnified` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker,
  name: str,
  network_load_balancer_id: str,
  policy: str,
  backends: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]] = None,
  id: str = None,
  ip_version: str = None,
  is_fail_open: typing.Union[bool, IResolvable] = None,
  is_instant_failover_enabled: typing.Union[bool, IResolvable] = None,
  is_preserve_source: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.backends">backends</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]</code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.healthChecker"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `backends`<sup>Optional</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.backends"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.ipVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `is_fail_open`<sup>Optional</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isFailOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `is_instant_failover_enabled`<sup>Optional</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isInstantFailoverEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `is_preserve_source`<sup>Optional</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.isPreserveSource"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends">put_backends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker">put_health_checker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends">reset_backends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen">reset_is_fail_open</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled">reset_is_instant_failover_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource">reset_is_preserve_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backends` <a name="put_backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends"></a>

```python
def put_backends(
  value: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putBackends.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]

---

##### `put_health_checker` <a name="put_health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker"></a>

```python
def put_health_checker(
  protocol: str,
  dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns = None,
  interval_in_millis: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  request_data: str = None,
  response_body_regex: str = None,
  response_data: str = None,
  retries: typing.Union[int, float] = None,
  return_code: typing.Union[int, float] = None,
  timeout_in_millis: typing.Union[int, float] = None,
  url_path: str = None
) -> None
```

###### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}.

---

###### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.dns"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}

---

###### `interval_in_millis`<sup>Optional</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.intervalInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

###### `request_data`<sup>Optional</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.requestData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}.

---

###### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.responseBodyRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}.

---

###### `response_data`<sup>Optional</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.responseData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}.

---

###### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}.

---

###### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.returnCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}.

---

###### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.timeoutInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}.

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putHealthChecker.parameter.urlPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}.

---

##### `reset_backends` <a name="reset_backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetBackends"></a>

```python
def reset_backends() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_is_fail_open` <a name="reset_is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsFailOpen"></a>

```python
def reset_is_fail_open() -> None
```

##### `reset_is_instant_failover_enabled` <a name="reset_is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsInstantFailoverEnabled"></a>

```python
def reset_is_instant_failover_enabled() -> None
```

##### `reset_is_preserve_source` <a name="reset_is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetIsPreserveSource"></a>

```python
def reset_is_preserve_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput">backends_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput">health_checker_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput">is_fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput">is_instant_failover_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput">is_preserve_source_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backends"></a>

```python
backends: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList</a>

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthChecker"></a>

```python
health_checker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference</a>

---

##### `backends_input`<sup>Optional</sup> <a name="backends_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.backendsInput"></a>

```python
backends_input: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]

---

##### `health_checker_input`<sup>Optional</sup> <a name="health_checker_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.healthCheckerInput"></a>

```python
health_checker_input: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `is_fail_open_input`<sup>Optional</sup> <a name="is_fail_open_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpenInput"></a>

```python
is_fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_instant_failover_enabled_input`<sup>Optional</sup> <a name="is_instant_failover_enabled_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabledInput"></a>

```python
is_instant_failover_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preserve_source_input`<sup>Optional</sup> <a name="is_preserve_source_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSourceInput"></a>

```python
is_preserve_source_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `is_fail_open`<sup>Required</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isFailOpen"></a>

```python
is_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_instant_failover_enabled`<sup>Required</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isInstantFailoverEnabled"></a>

```python
is_instant_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preserve_source`<sup>Required</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.isPreserveSource"></a>

```python
is_preserve_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends(
  port: typing.Union[int, float],
  ip_address: str = None,
  is_backup: typing.Union[bool, IResolvable] = None,
  is_drain: typing.Union[bool, IResolvable] = None,
  is_offline: typing.Union[bool, IResolvable] = None,
  name: str = None,
  target_id: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup">is_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain">is_drain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline">is_offline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}.

---

##### `is_backup`<sup>Optional</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isBackup"></a>

```python
is_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}.

---

##### `is_drain`<sup>Optional</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isDrain"></a>

```python
is_drain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}.

---

##### `is_offline`<sup>Optional</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.isOffline"></a>

```python
is_offline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker,
  name: str,
  network_load_balancer_id: str,
  policy: str,
  backends: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]] = None,
  id: str = None,
  ip_version: str = None,
  is_fail_open: typing.Union[bool, IResolvable] = None,
  is_instant_failover_enabled: typing.Union[bool, IResolvable] = None,
  is_preserve_source: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends">backends</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]</code> | backends block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.healthChecker"></a>

```python
health_checker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}.

---

##### `backends`<sup>Optional</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.backends"></a>

```python
backends: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]

backends block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}.

---

##### `is_fail_open`<sup>Optional</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isFailOpen"></a>

```python
is_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}.

---

##### `is_instant_failover_enabled`<sup>Optional</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isInstantFailoverEnabled"></a>

```python
is_instant_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}.

---

##### `is_preserve_source`<sup>Optional</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.isPreserveSource"></a>

```python
is_preserve_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker(
  protocol: str,
  dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns = None,
  interval_in_millis: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  request_data: str = None,
  response_body_regex: str = None,
  response_data: str = None,
  retries: typing.Union[int, float] = None,
  return_code: typing.Union[int, float] = None,
  timeout_in_millis: typing.Union[int, float] = None,
  url_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis">interval_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData">request_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData">response_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.dns"></a>

```python
dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}

---

##### `interval_in_millis`<sup>Optional</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.intervalInMillis"></a>

```python
interval_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}.

---

##### `request_data`<sup>Optional</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.requestData"></a>

```python
request_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}.

---

##### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}.

---

##### `response_data`<sup>Optional</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.responseData"></a>

```python
response_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}.

---

##### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}.

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}.

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns(
  domain_name: str,
  query_class: str = None,
  query_type: str = None,
  rcodes: typing.List[str] = None,
  transport_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass">query_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType">query_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes">rcodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}.

---

##### `query_class`<sup>Optional</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryClass"></a>

```python
query_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}.

---

##### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}.

---

##### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.rcodes"></a>

```python
rcodes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}.

---

##### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}.

---

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]]

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup">reset_is_backup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain">reset_is_drain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline">reset_is_offline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_is_backup` <a name="reset_is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsBackup"></a>

```python
def reset_is_backup() -> None
```

##### `reset_is_drain` <a name="reset_is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsDrain"></a>

```python
def reset_is_drain() -> None
```

##### `reset_is_offline` <a name="reset_is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetIsOffline"></a>

```python
def reset_is_offline() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_weight` <a name="reset_weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput">is_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput">is_drain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput">is_offline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup">is_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain">is_drain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline">is_offline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `is_backup_input`<sup>Optional</sup> <a name="is_backup_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackupInput"></a>

```python
is_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_drain_input`<sup>Optional</sup> <a name="is_drain_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrainInput"></a>

```python
is_drain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_offline_input`<sup>Optional</sup> <a name="is_offline_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOfflineInput"></a>

```python
is_offline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_backup`<sup>Required</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isBackup"></a>

```python
is_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_drain`<sup>Required</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isDrain"></a>

```python
is_drain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_offline`<sup>Required</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.isOffline"></a>

```python
is_offline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends</a>]

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass">reset_query_class</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType">reset_query_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes">reset_rcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol">reset_transport_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_class` <a name="reset_query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryClass"></a>

```python
def reset_query_class() -> None
```

##### `reset_query_type` <a name="reset_query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetQueryType"></a>

```python
def reset_query_type() -> None
```

##### `reset_rcodes` <a name="reset_rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetRcodes"></a>

```python
def reset_rcodes() -> None
```

##### `reset_transport_protocol` <a name="reset_transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```python
def reset_transport_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput">query_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput">query_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput">rcodes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput">transport_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass">query_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `query_class_input`<sup>Optional</sup> <a name="query_class_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```python
query_class_input: str
```

- *Type:* str

---

##### `query_type_input`<sup>Optional</sup> <a name="query_type_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```python
query_type_input: str
```

- *Type:* str

---

##### `rcodes_input`<sup>Optional</sup> <a name="rcodes_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```python
rcodes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transport_protocol_input`<sup>Optional</sup> <a name="transport_protocol_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```python
transport_protocol_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `query_class`<sup>Required</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryClass"></a>

```python
query_class: str
```

- *Type:* str

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.rcodes"></a>

```python
rcodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis">reset_interval_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData">reset_request_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex">reset_response_body_regex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData">reset_response_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode">reset_return_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis">reset_timeout_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns` <a name="put_dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns"></a>

```python
def put_dns(
  domain_name: str,
  query_class: str = None,
  query_type: str = None,
  rcodes: typing.List[str] = None,
  transport_protocol: str = None
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}.

---

###### `query_class`<sup>Optional</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.queryClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}.

---

###### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.queryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}.

---

###### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.rcodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}.

---

###### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.putDns.parameter.transportProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}.

---

##### `reset_dns` <a name="reset_dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_interval_in_millis` <a name="reset_interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetIntervalInMillis"></a>

```python
def reset_interval_in_millis() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_request_data` <a name="reset_request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRequestData"></a>

```python
def reset_request_data() -> None
```

##### `reset_response_body_regex` <a name="reset_response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```python
def reset_response_body_regex() -> None
```

##### `reset_response_data` <a name="reset_response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetResponseData"></a>

```python
def reset_response_data() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_return_code` <a name="reset_return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetReturnCode"></a>

```python
def reset_return_code() -> None
```

##### `reset_timeout_in_millis` <a name="reset_timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```python
def reset_timeout_in_millis() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput">dns_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput">interval_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput">request_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput">response_body_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput">response_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput">return_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput">timeout_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis">interval_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData">request_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData">response_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dns"></a>

```python
dns: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference</a>

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.dnsInput"></a>

```python
dns_input: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns</a>

---

##### `interval_in_millis_input`<sup>Optional</sup> <a name="interval_in_millis_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```python
interval_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `request_data_input`<sup>Optional</sup> <a name="request_data_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestDataInput"></a>

```python
request_data_input: str
```

- *Type:* str

---

##### `response_body_regex_input`<sup>Optional</sup> <a name="response_body_regex_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```python
response_body_regex_input: str
```

- *Type:* str

---

##### `response_data_input`<sup>Optional</sup> <a name="response_data_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseDataInput"></a>

```python
response_data_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code_input`<sup>Optional</sup> <a name="return_code_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCodeInput"></a>

```python
return_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis_input`<sup>Optional</sup> <a name="timeout_in_millis_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```python
timeout_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `interval_in_millis`<sup>Required</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.intervalInMillis"></a>

```python
interval_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_data`<sup>Required</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.requestData"></a>

```python
request_data: str
```

- *Type:* str

---

##### `response_body_regex`<sup>Required</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

---

##### `response_data`<sup>Required</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.responseData"></a>

```python
response_data: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code`<sup>Required</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference.property.internalValue"></a>

```python
internal_value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker</a>

---


### NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference <a name="NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_network_load_balancers_backend_sets_unified

networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerNetworkLoadBalancersBackendSetsUnified.NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts">NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts</a>]

---



