# `dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles oci_network_firewall_network_firewall_policy_decryption_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.decryptionProfileSummaryCollection">decryption_profile_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `decryption_profile_summary_collection`<sup>Required</sup> <a name="decryption_profile_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.decryptionProfileSummaryCollection"></a>

```python
decryption_profile_summary_collection: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.filter"></a>

```python
filter: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.areCertificateExtensionsRestricted">are_certificate_extensions_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isAutoIncludeAltName">is_auto_include_alt_name</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isExpiredCertificateBlocked">is_expired_certificate_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isOutOfCapacityBlocked">is_out_of_capacity_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isRevocationStatusTimeoutBlocked">is_revocation_status_timeout_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnknownRevocationStatusBlocked">is_unknown_revocation_status_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnsupportedCipherBlocked">is_unsupported_cipher_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnsupportedVersionBlocked">is_unsupported_version_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUntrustedIssuerBlocked">is_untrusted_issuer_blocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_certificate_extensions_restricted`<sup>Required</sup> <a name="are_certificate_extensions_restricted" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.areCertificateExtensionsRestricted"></a>

```python
are_certificate_extensions_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_include_alt_name`<sup>Required</sup> <a name="is_auto_include_alt_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isAutoIncludeAltName"></a>

```python
is_auto_include_alt_name: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_expired_certificate_blocked`<sup>Required</sup> <a name="is_expired_certificate_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isExpiredCertificateBlocked"></a>

```python
is_expired_certificate_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_out_of_capacity_blocked`<sup>Required</sup> <a name="is_out_of_capacity_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isOutOfCapacityBlocked"></a>

```python
is_out_of_capacity_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_revocation_status_timeout_blocked`<sup>Required</sup> <a name="is_revocation_status_timeout_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isRevocationStatusTimeoutBlocked"></a>

```python
is_revocation_status_timeout_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unknown_revocation_status_blocked`<sup>Required</sup> <a name="is_unknown_revocation_status_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnknownRevocationStatusBlocked"></a>

```python
is_unknown_revocation_status_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unsupported_cipher_blocked`<sup>Required</sup> <a name="is_unsupported_cipher_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnsupportedCipherBlocked"></a>

```python
is_unsupported_cipher_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unsupported_version_blocked`<sup>Required</sup> <a name="is_unsupported_version_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUnsupportedVersionBlocked"></a>

```python
is_unsupported_version_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_untrusted_issuer_blocked`<sup>Required</sup> <a name="is_untrusted_issuer_blocked" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.isUntrustedIssuerBlocked"></a>

```python
is_untrusted_issuer_blocked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]]

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_profiles

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter</a>]

---



