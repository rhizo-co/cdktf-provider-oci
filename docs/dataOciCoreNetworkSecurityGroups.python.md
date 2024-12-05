# `dataOciCoreNetworkSecurityGroups` Submodule <a name="`dataOciCoreNetworkSecurityGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroups <a name="DataOciCoreNetworkSecurityGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups oci_core_network_security_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None,
  vlan_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#filter DataOciCoreNetworkSecurityGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.Initializer.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVcnId">reset_vcn_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreNetworkSecurityGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList">DataOciCoreNetworkSecurityGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.networkSecurityGroups">network_security_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filter"></a>

```python
filter: DataOciCoreNetworkSecurityGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList">DataOciCoreNetworkSecurityGroupsFilterList</a>

---

##### `network_security_groups`<sup>Required</sup> <a name="network_security_groups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.networkSecurityGroups"></a>

```python
network_security_groups: DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupsConfig <a name="DataOciCoreNetworkSecurityGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None,
  vlan_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#compartment_id DataOciCoreNetworkSecurityGroups#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#display_name DataOciCoreNetworkSecurityGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#filter DataOciCoreNetworkSecurityGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#id DataOciCoreNetworkSecurityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#state DataOciCoreNetworkSecurityGroups#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vcn_id DataOciCoreNetworkSecurityGroups#vcn_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsConfig.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#vlan_id DataOciCoreNetworkSecurityGroups#vlan_id}.

---

### DataOciCoreNetworkSecurityGroupsFilter <a name="DataOciCoreNetworkSecurityGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#name DataOciCoreNetworkSecurityGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#values DataOciCoreNetworkSecurityGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#regex DataOciCoreNetworkSecurityGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#name DataOciCoreNetworkSecurityGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#values DataOciCoreNetworkSecurityGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_groups#regex DataOciCoreNetworkSecurityGroups#regex}.

---

### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupsFilterList <a name="DataOciCoreNetworkSecurityGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]]

---


### DataOciCoreNetworkSecurityGroupsFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreNetworkSecurityGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsFilter">DataOciCoreNetworkSecurityGroupsFilter</a>]

---


### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference <a name="DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_groups

dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroups.DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups">DataOciCoreNetworkSecurityGroupsNetworkSecurityGroups</a>

---



