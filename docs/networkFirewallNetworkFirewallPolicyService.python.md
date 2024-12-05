# `networkFirewallNetworkFirewallPolicyService` Submodule <a name="`networkFirewallNetworkFirewallPolicyService` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyService <a name="NetworkFirewallNetworkFirewallPolicyService" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service oci_network_firewall_network_firewall_policy_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_firewall_policy_id: str,
  port_ranges: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]],
  type: str,
  id: str = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.portRanges">port_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]</code> | port_ranges block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}.

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.portRanges"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]

port_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#port_ranges NetworkFirewallNetworkFirewallPolicyService#port_ranges}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#timeouts NetworkFirewallNetworkFirewallPolicyService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges">put_port_ranges</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_port_ranges` <a name="put_port_ranges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges"></a>

```python
def put_port_ranges(
  value: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#create NetworkFirewallNetworkFirewallPolicyService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#delete NetworkFirewallNetworkFirewallPolicyService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#update NetworkFirewallNetworkFirewallPolicyService#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkFirewallNetworkFirewallPolicyService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRanges">port_ranges</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList">NetworkFirewallNetworkFirewallPolicyServicePortRangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRangesInput">port_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRanges"></a>

```python
port_ranges: NetworkFirewallNetworkFirewallPolicyServicePortRangesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList">NetworkFirewallNetworkFirewallPolicyServicePortRangesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRangesInput"></a>

```python
port_ranges_input: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyServiceConfig <a name="NetworkFirewallNetworkFirewallPolicyServiceConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_firewall_policy_id: str,
  port_ranges: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]],
  type: str,
  id: str = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.portRanges">port_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]</code> | port_ranges block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}.

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.portRanges"></a>

```python
port_ranges: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]

port_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#port_ranges NetworkFirewallNetworkFirewallPolicyService#port_ranges}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyServiceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#timeouts NetworkFirewallNetworkFirewallPolicyService#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyServicePortRanges <a name="NetworkFirewallNetworkFirewallPolicyServicePortRanges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges(
  minimum_port: typing.Union[int, float],
  maximum_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.minimumPort">minimum_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#minimum_port NetworkFirewallNetworkFirewallPolicyService#minimum_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.maximumPort">maximum_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#maximum_port NetworkFirewallNetworkFirewallPolicyService#maximum_port}. |

---

##### `minimum_port`<sup>Required</sup> <a name="minimum_port" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.minimumPort"></a>

```python
minimum_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#minimum_port NetworkFirewallNetworkFirewallPolicyService#minimum_port}.

---

##### `maximum_port`<sup>Optional</sup> <a name="maximum_port" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.maximumPort"></a>

```python
maximum_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#maximum_port NetworkFirewallNetworkFirewallPolicyService#maximum_port}.

---

### NetworkFirewallNetworkFirewallPolicyServiceTimeouts <a name="NetworkFirewallNetworkFirewallPolicyServiceTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#create NetworkFirewallNetworkFirewallPolicyService#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#delete NetworkFirewallNetworkFirewallPolicyService#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#update NetworkFirewallNetworkFirewallPolicyService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#create NetworkFirewallNetworkFirewallPolicyService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#delete NetworkFirewallNetworkFirewallPolicyService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#update NetworkFirewallNetworkFirewallPolicyService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyServicePortRangesList <a name="NetworkFirewallNetworkFirewallPolicyServicePortRangesList" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkFirewallNetworkFirewallPolicyServicePortRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]]

---


### NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference <a name="NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resetMaximumPort">reset_maximum_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_port` <a name="reset_maximum_port" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resetMaximumPort"></a>

```python
def reset_maximum_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPortInput">maximum_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPortInput">minimum_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPort">maximum_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPort">minimum_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_port_input`<sup>Optional</sup> <a name="maximum_port_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPortInput"></a>

```python
maximum_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_port_input`<sup>Optional</sup> <a name="minimum_port_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPortInput"></a>

```python
minimum_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_port`<sup>Required</sup> <a name="maximum_port" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPort"></a>

```python
maximum_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_port`<sup>Required</sup> <a name="minimum_port" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPort"></a>

```python
minimum_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyServicePortRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges">NetworkFirewallNetworkFirewallPolicyServicePortRanges</a>]

---


### NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_service

networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>]

---



