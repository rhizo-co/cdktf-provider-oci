# `networkFirewallNetworkFirewallPolicyMappedSecret` Submodule <a name="`networkFirewallNetworkFirewallPolicyMappedSecret` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecret <a name="NetworkFirewallNetworkFirewallPolicyMappedSecret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret oci_network_firewall_network_firewall_policy_mapped_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret(
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
  source: str,
  type: str,
  vault_secret_id: str,
  version_number: typing.Union[int, float],
  id: str = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}.

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.vaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}.

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.versionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#timeouts NetworkFirewallNetworkFirewallPolicyMappedSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#create NetworkFirewallNetworkFirewallPolicyMappedSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#delete NetworkFirewallNetworkFirewallPolicyMappedSecret#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#update NetworkFirewallNetworkFirewallPolicyMappedSecret#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyMappedSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyMappedSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyMappedSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkFirewallNetworkFirewallPolicyMappedSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyMappedSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretIdInput">vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumberInput">version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vault_secret_id_input`<sup>Optional</sup> <a name="vault_secret_id_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretIdInput"></a>

```python
vault_secret_id_input: str
```

- *Type:* str

---

##### `version_number_input`<sup>Optional</sup> <a name="version_number_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumberInput"></a>

```python
version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecretConfig <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_firewall_policy_id: str,
  source: str,
  type: str,
  vault_secret_id: str,
  version_number: typing.Union[int, float],
  id: str = None,
  timeouts: NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}.

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}.

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}.

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.timeouts"></a>

```python
timeouts: NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#timeouts NetworkFirewallNetworkFirewallPolicyMappedSecret#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#create NetworkFirewallNetworkFirewallPolicyMappedSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#delete NetworkFirewallNetworkFirewallPolicyMappedSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#update NetworkFirewallNetworkFirewallPolicyMappedSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#create NetworkFirewallNetworkFirewallPolicyMappedSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#delete NetworkFirewallNetworkFirewallPolicyMappedSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#update NetworkFirewallNetworkFirewallPolicyMappedSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import network_firewall_network_firewall_policy_mapped_secret

networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>]

---



