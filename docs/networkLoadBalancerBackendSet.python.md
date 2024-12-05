# `networkLoadBalancerBackendSet` Submodule <a name="`networkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerBackendSet <a name="NetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: NetworkLoadBalancerBackendSetHealthChecker,
  name: str,
  network_load_balancer_id: str,
  policy: str,
  id: str = None,
  ip_version: str = None,
  is_fail_open: typing.Union[bool, IResolvable] = None,
  is_instant_failover_enabled: typing.Union[bool, IResolvable] = None,
  is_preserve_source: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkLoadBalancerBackendSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.healthChecker"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#health_checker NetworkLoadBalancerBackendSet#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.ipVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}.

---

##### `is_fail_open`<sup>Optional</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isFailOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}.

---

##### `is_instant_failover_enabled`<sup>Optional</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isInstantFailoverEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}.

---

##### `is_preserve_source`<sup>Optional</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.isPreserveSource"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeouts NetworkLoadBalancerBackendSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker">put_health_checker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen">reset_is_fail_open</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled">reset_is_instant_failover_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource">reset_is_preserve_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_checker` <a name="put_health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker"></a>

```python
def put_health_checker(
  protocol: str,
  dns: NetworkLoadBalancerBackendSetHealthCheckerDns = None,
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

###### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}.

---

###### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.dns"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#dns NetworkLoadBalancerBackendSet#dns}

---

###### `interval_in_millis`<sup>Optional</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.intervalInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}.

---

###### `request_data`<sup>Optional</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.requestData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}.

---

###### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.responseBodyRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}.

---

###### `response_data`<sup>Optional</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.responseData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}.

---

###### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}.

---

###### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.returnCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}.

---

###### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.timeoutInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}.

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.urlPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_is_fail_open` <a name="reset_is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen"></a>

```python
def reset_is_fail_open() -> None
```

##### `reset_is_instant_failover_enabled` <a name="reset_is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled"></a>

```python
def reset_is_instant_failover_enabled() -> None
```

##### `reset_is_preserve_source` <a name="reset_is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource"></a>

```python
def reset_is_preserve_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkLoadBalancerBackendSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput">health_checker_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput">is_fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput">is_instant_failover_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput">is_preserve_source_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends"></a>

```python
backends: NetworkLoadBalancerBackendSetBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a>

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker"></a>

```python
health_checker: NetworkLoadBalancerBackendSetHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerBackendSetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a>

---

##### `health_checker_input`<sup>Optional</sup> <a name="health_checker_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput"></a>

```python
health_checker_input: NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `is_fail_open_input`<sup>Optional</sup> <a name="is_fail_open_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput"></a>

```python
is_fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_instant_failover_enabled_input`<sup>Optional</sup> <a name="is_instant_failover_enabled_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput"></a>

```python
is_instant_failover_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preserve_source_input`<sup>Optional</sup> <a name="is_preserve_source_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput"></a>

```python
is_preserve_source_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkLoadBalancerBackendSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `is_fail_open`<sup>Required</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```python
is_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_instant_failover_enabled`<sup>Required</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```python
is_instant_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_preserve_source`<sup>Required</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```python
is_preserve_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerBackendSetBackends <a name="NetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends()
```


### NetworkLoadBalancerBackendSetConfig <a name="NetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  health_checker: NetworkLoadBalancerBackendSetHealthChecker,
  name: str,
  network_load_balancer_id: str,
  policy: str,
  id: str = None,
  ip_version: str = None,
  is_fail_open: typing.Union[bool, IResolvable] = None,
  is_instant_failover_enabled: typing.Union[bool, IResolvable] = None,
  is_preserve_source: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkLoadBalancerBackendSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen">is_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource">is_preserve_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker"></a>

```python
health_checker: NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#health_checker NetworkLoadBalancerBackendSet#health_checker}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}.

---

##### `is_fail_open`<sup>Optional</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen"></a>

```python
is_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}.

---

##### `is_instant_failover_enabled`<sup>Optional</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled"></a>

```python
is_instant_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}.

---

##### `is_preserve_source`<sup>Optional</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource"></a>

```python
is_preserve_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerBackendSetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeouts NetworkLoadBalancerBackendSet#timeouts}

---

### NetworkLoadBalancerBackendSetHealthChecker <a name="NetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker(
  protocol: str,
  dns: NetworkLoadBalancerBackendSetHealthCheckerDns = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis">interval_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData">request_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData">response_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns"></a>

```python
dns: NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#dns NetworkLoadBalancerBackendSet#dns}

---

##### `interval_in_millis`<sup>Optional</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis"></a>

```python
interval_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}.

---

##### `request_data`<sup>Optional</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData"></a>

```python
request_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}.

---

##### `response_body_regex`<sup>Optional</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}.

---

##### `response_data`<sup>Optional</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData"></a>

```python
response_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}.

---

##### `return_code`<sup>Optional</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}.

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}.

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}.

---

### NetworkLoadBalancerBackendSetHealthCheckerDns <a name="NetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns(
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
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass">query_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType">query_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes">rcodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}.

---

##### `query_class`<sup>Optional</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass"></a>

```python
query_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}.

---

##### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}.

---

##### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes"></a>

```python
rcodes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}.

---

##### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}.

---

### NetworkLoadBalancerBackendSetTimeouts <a name="NetworkLoadBalancerBackendSetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerBackendSetBackendsList <a name="NetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkLoadBalancerBackendSetBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkLoadBalancerBackendSetBackendsOutputReference <a name="NetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">is_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">is_drain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">is_offline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_backup`<sup>Required</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```python
is_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_drain`<sup>Required</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```python
is_drain: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_offline`<sup>Required</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```python
is_offline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkLoadBalancerBackendSetBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass">reset_query_class</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType">reset_query_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes">reset_rcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol">reset_transport_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_class` <a name="reset_query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass"></a>

```python
def reset_query_class() -> None
```

##### `reset_query_type` <a name="reset_query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType"></a>

```python
def reset_query_type() -> None
```

##### `reset_rcodes` <a name="reset_rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes"></a>

```python
def reset_rcodes() -> None
```

##### `reset_transport_protocol` <a name="reset_transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```python
def reset_transport_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput">query_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput">query_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput">rcodes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput">transport_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">query_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `query_class_input`<sup>Optional</sup> <a name="query_class_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```python
query_class_input: str
```

- *Type:* str

---

##### `query_type_input`<sup>Optional</sup> <a name="query_type_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```python
query_type_input: str
```

- *Type:* str

---

##### `rcodes_input`<sup>Optional</sup> <a name="rcodes_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```python
rcodes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transport_protocol_input`<sup>Optional</sup> <a name="transport_protocol_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```python
transport_protocol_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `query_class`<sup>Required</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```python
query_class: str
```

- *Type:* str

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```python
rcodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis">reset_interval_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData">reset_request_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex">reset_response_body_regex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData">reset_response_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode">reset_return_code</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis">reset_timeout_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns` <a name="put_dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns"></a>

```python
def put_dns(
  domain_name: str,
  query_class: str = None,
  query_type: str = None,
  rcodes: typing.List[str] = None,
  transport_protocol: str = None
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}.

---

###### `query_class`<sup>Optional</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.queryClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}.

---

###### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.queryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}.

---

###### `rcodes`<sup>Optional</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.rcodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}.

---

###### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.transportProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}.

---

##### `reset_dns` <a name="reset_dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_interval_in_millis` <a name="reset_interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis"></a>

```python
def reset_interval_in_millis() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_request_data` <a name="reset_request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData"></a>

```python
def reset_request_data() -> None
```

##### `reset_response_body_regex` <a name="reset_response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```python
def reset_response_body_regex() -> None
```

##### `reset_response_data` <a name="reset_response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData"></a>

```python
def reset_response_data() -> None
```

##### `reset_retries` <a name="reset_retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_return_code` <a name="reset_return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode"></a>

```python
def reset_return_code() -> None
```

##### `reset_timeout_in_millis` <a name="reset_timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```python
def reset_timeout_in_millis() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput">dns_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput">interval_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput">request_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput">response_body_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput">response_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput">return_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput">timeout_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">interval_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">request_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">response_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```python
dns: NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a>

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput"></a>

```python
dns_input: NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `interval_in_millis_input`<sup>Optional</sup> <a name="interval_in_millis_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```python
interval_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `request_data_input`<sup>Optional</sup> <a name="request_data_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput"></a>

```python
request_data_input: str
```

- *Type:* str

---

##### `response_body_regex_input`<sup>Optional</sup> <a name="response_body_regex_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```python
response_body_regex_input: str
```

- *Type:* str

---

##### `response_data_input`<sup>Optional</sup> <a name="response_data_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput"></a>

```python
response_data_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code_input`<sup>Optional</sup> <a name="return_code_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput"></a>

```python
return_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis_input`<sup>Optional</sup> <a name="timeout_in_millis_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```python
timeout_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `interval_in_millis`<sup>Required</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```python
interval_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_data`<sup>Required</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```python
request_data: str
```

- *Type:* str

---

##### `response_body_regex`<sup>Required</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

---

##### `response_data`<sup>Required</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```python
response_data: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code`<sup>Required</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```python
internal_value: NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---


### NetworkLoadBalancerBackendSetTimeoutsOutputReference <a name="NetworkLoadBalancerBackendSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend_set

networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkLoadBalancerBackendSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>]

---



