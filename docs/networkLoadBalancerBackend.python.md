# `networkLoadBalancerBackend` Submodule <a name="`networkLoadBalancerBackend` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerBackend <a name="NetworkLoadBalancerBackend" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend oci_network_load_balancer_backend}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_set_name: str,
  network_load_balancer_id: str,
  port: typing.Union[int, float],
  id: str = None,
  ip_address: str = None,
  is_backup: typing.Union[bool, IResolvable] = None,
  is_drain: typing.Union[bool, IResolvable] = None,
  is_offline: typing.Union[bool, IResolvable] = None,
  name: str = None,
  target_id: str = None,
  timeouts: NetworkLoadBalancerBackendTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.backendSetName">backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#backend_set_name NetworkLoadBalancerBackend#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#network_load_balancer_id NetworkLoadBalancerBackend#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#port NetworkLoadBalancerBackend#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#id NetworkLoadBalancerBackend#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#ip_address NetworkLoadBalancerBackend#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isBackup">is_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_backup NetworkLoadBalancerBackend#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isDrain">is_drain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_drain NetworkLoadBalancerBackend#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isOffline">is_offline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_offline NetworkLoadBalancerBackend#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#name NetworkLoadBalancerBackend#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#target_id NetworkLoadBalancerBackend#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#weight NetworkLoadBalancerBackend#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.backendSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#backend_set_name NetworkLoadBalancerBackend#backend_set_name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#network_load_balancer_id NetworkLoadBalancerBackend#network_load_balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#port NetworkLoadBalancerBackend#port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#id NetworkLoadBalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#ip_address NetworkLoadBalancerBackend#ip_address}.

---

##### `is_backup`<sup>Optional</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_backup NetworkLoadBalancerBackend#is_backup}.

---

##### `is_drain`<sup>Optional</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isDrain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_drain NetworkLoadBalancerBackend#is_drain}.

---

##### `is_offline`<sup>Optional</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.isOffline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_offline NetworkLoadBalancerBackend#is_offline}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#name NetworkLoadBalancerBackend#name}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#target_id NetworkLoadBalancerBackend#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#timeouts NetworkLoadBalancerBackend#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#weight NetworkLoadBalancerBackend#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsBackup">reset_is_backup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsDrain">reset_is_drain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsOffline">reset_is_offline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#create NetworkLoadBalancerBackend#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#delete NetworkLoadBalancerBackend#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#update NetworkLoadBalancerBackend#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_is_backup` <a name="reset_is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsBackup"></a>

```python
def reset_is_backup() -> None
```

##### `reset_is_drain` <a name="reset_is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsDrain"></a>

```python
def reset_is_drain() -> None
```

##### `reset_is_offline` <a name="reset_is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetIsOffline"></a>

```python
def reset_is_offline() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weight` <a name="reset_weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkLoadBalancerBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkLoadBalancerBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkLoadBalancerBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference">NetworkLoadBalancerBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.backendSetNameInput">backend_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isBackupInput">is_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isDrainInput">is_drain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isOfflineInput">is_offline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.backendSetName">backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isBackup">is_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isDrain">is_drain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isOffline">is_offline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerBackendTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference">NetworkLoadBalancerBackendTimeoutsOutputReference</a>

---

##### `backend_set_name_input`<sup>Optional</sup> <a name="backend_set_name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.backendSetNameInput"></a>

```python
backend_set_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `is_backup_input`<sup>Optional</sup> <a name="is_backup_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isBackupInput"></a>

```python
is_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_drain_input`<sup>Optional</sup> <a name="is_drain_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isDrainInput"></a>

```python
is_drain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_offline_input`<sup>Optional</sup> <a name="is_offline_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isOfflineInput"></a>

```python
is_offline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkLoadBalancerBackendTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_backup`<sup>Required</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isBackup"></a>

```python
is_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_drain`<sup>Required</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isDrain"></a>

```python
is_drain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_offline`<sup>Required</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.isOffline"></a>

```python
is_offline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerBackendConfig <a name="NetworkLoadBalancerBackendConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_set_name: str,
  network_load_balancer_id: str,
  port: typing.Union[int, float],
  id: str = None,
  ip_address: str = None,
  is_backup: typing.Union[bool, IResolvable] = None,
  is_drain: typing.Union[bool, IResolvable] = None,
  is_offline: typing.Union[bool, IResolvable] = None,
  name: str = None,
  target_id: str = None,
  timeouts: NetworkLoadBalancerBackendTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.backendSetName">backend_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#backend_set_name NetworkLoadBalancerBackend#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#network_load_balancer_id NetworkLoadBalancerBackend#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#port NetworkLoadBalancerBackend#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#id NetworkLoadBalancerBackend#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#ip_address NetworkLoadBalancerBackend#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isBackup">is_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_backup NetworkLoadBalancerBackend#is_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isDrain">is_drain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_drain NetworkLoadBalancerBackend#is_drain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isOffline">is_offline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_offline NetworkLoadBalancerBackend#is_offline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#name NetworkLoadBalancerBackend#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#target_id NetworkLoadBalancerBackend#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#weight NetworkLoadBalancerBackend#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_set_name`<sup>Required</sup> <a name="backend_set_name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.backendSetName"></a>

```python
backend_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#backend_set_name NetworkLoadBalancerBackend#backend_set_name}.

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#network_load_balancer_id NetworkLoadBalancerBackend#network_load_balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#port NetworkLoadBalancerBackend#port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#id NetworkLoadBalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#ip_address NetworkLoadBalancerBackend#ip_address}.

---

##### `is_backup`<sup>Optional</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isBackup"></a>

```python
is_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_backup NetworkLoadBalancerBackend#is_backup}.

---

##### `is_drain`<sup>Optional</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isDrain"></a>

```python
is_drain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_drain NetworkLoadBalancerBackend#is_drain}.

---

##### `is_offline`<sup>Optional</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.isOffline"></a>

```python
is_offline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#is_offline NetworkLoadBalancerBackend#is_offline}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#name NetworkLoadBalancerBackend#name}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#target_id NetworkLoadBalancerBackend#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.timeouts"></a>

```python
timeouts: NetworkLoadBalancerBackendTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#timeouts NetworkLoadBalancerBackend#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#weight NetworkLoadBalancerBackend#weight}.

---

### NetworkLoadBalancerBackendTimeouts <a name="NetworkLoadBalancerBackendTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#create NetworkLoadBalancerBackend#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#delete NetworkLoadBalancerBackend#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#update NetworkLoadBalancerBackend#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#create NetworkLoadBalancerBackend#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#delete NetworkLoadBalancerBackend#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend#update NetworkLoadBalancerBackend#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerBackendTimeoutsOutputReference <a name="NetworkLoadBalancerBackendTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_load_balancer_backend

networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkLoadBalancerBackendTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackend.NetworkLoadBalancerBackendTimeouts">NetworkLoadBalancerBackendTimeouts</a>]

---



