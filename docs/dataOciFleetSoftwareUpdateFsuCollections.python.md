# `dataOciFleetSoftwareUpdateFsuCollections` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCollections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCollections <a name="DataOciFleetSoftwareUpdateFsuCollections" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections oci_fleet_software_update_fsu_collections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]] = None,
  id: str = None,
  state: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#filter DataOciFleetSoftwareUpdateFsuCollections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCollections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetSoftwareUpdateFsuCollections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCollections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList">DataOciFleetSoftwareUpdateFsuCollectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fsuCollectionSummaryCollection">fsu_collection_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filter"></a>

```python
filter: DataOciFleetSoftwareUpdateFsuCollectionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList">DataOciFleetSoftwareUpdateFsuCollectionsFilterList</a>

---

##### `fsu_collection_summary_collection`<sup>Required</sup> <a name="fsu_collection_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.fsuCollectionSummaryCollection"></a>

```python
fsu_collection_summary_collection: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCollectionsConfig <a name="DataOciFleetSoftwareUpdateFsuCollectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]] = None,
  id: str = None,
  state: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#filter DataOciFleetSoftwareUpdateFsuCollections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}.

---

### DataOciFleetSoftwareUpdateFsuCollectionsFilter <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#name DataOciFleetSoftwareUpdateFsuCollections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#values DataOciFleetSoftwareUpdateFsuCollections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#regex DataOciFleetSoftwareUpdateFsuCollections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#name DataOciFleetSoftwareUpdateFsuCollections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#values DataOciFleetSoftwareUpdateFsuCollections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collections#regex DataOciFleetSoftwareUpdateFsuCollections#regex}.

---

### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection()
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems()
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle()
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery()
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters()
```


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCollectionsFilterList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetSoftwareUpdateFsuCollectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]]

---


### DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetSoftwareUpdateFsuCollectionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFilter">DataOciFleetSoftwareUpdateFsuCollectionsFilter</a>]

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.versions">versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `names`<sup>Required</sup> <a name="names" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.tags"></a>

```python
tags: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fsuDiscoveryId">fsu_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.filters"></a>

```python
filters: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList</a>

---

##### `fsu_discovery_id`<sup>Required</sup> <a name="fsu_discovery_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```python
fsu_discovery_id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.activeFsuCycle">active_fsu_cycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fleetDiscovery">fleet_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.sourceMajorVersion">source_major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.targetCount">target_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_fsu_cycle`<sup>Required</sup> <a name="active_fsu_cycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.activeFsuCycle"></a>

```python
active_fsu_cycle: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fleet_discovery`<sup>Required</sup> <a name="fleet_discovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.fleetDiscovery"></a>

```python
fleet_discovery: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `source_major_version`<sup>Required</sup> <a name="source_major_version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.sourceMajorVersion"></a>

```python
source_major_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_count`<sup>Required</sup> <a name="target_count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.targetCount"></a>

```python
target_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_collections

dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollections.DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection">DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection</a>

---



