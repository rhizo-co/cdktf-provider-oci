# `dataOciOsManagementHubSoftwareSourceVendors` Submodule <a name="`dataOciOsManagementHubSoftwareSourceVendors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceVendors <a name="DataOciOsManagementHubSoftwareSourceVendors" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors oci_os_management_hub_software_source_vendors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#filter DataOciOsManagementHubSoftwareSourceVendors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceVendors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceVendors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceVendors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourceVendors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceVendors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList">DataOciOsManagementHubSoftwareSourceVendorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.softwareSourceVendorCollection">software_source_vendor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourceVendorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList">DataOciOsManagementHubSoftwareSourceVendorsFilterList</a>

---

##### `software_source_vendor_collection`<sup>Required</sup> <a name="software_source_vendor_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.softwareSourceVendorCollection"></a>

```python
software_source_vendor_collection: DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceVendorsConfig <a name="DataOciOsManagementHubSoftwareSourceVendorsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#filter DataOciOsManagementHubSoftwareSourceVendors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}.

---

### DataOciOsManagementHubSoftwareSourceVendorsFilter <a name="DataOciOsManagementHubSoftwareSourceVendorsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#values DataOciOsManagementHubSoftwareSourceVendors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#regex DataOciOsManagementHubSoftwareSourceVendors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#values DataOciOsManagementHubSoftwareSourceVendors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#regex DataOciOsManagementHubSoftwareSourceVendors#regex}.

---

### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection()
```


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceVendorsFilterList <a name="DataOciOsManagementHubSoftwareSourceVendorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceVendorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourceVendorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter">DataOciOsManagementHubSoftwareSourceVendorsFilter</a>]

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.archTypes">arch_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.osFamilies">os_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arch_types`<sup>Required</sup> <a name="arch_types" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.archTypes"></a>

```python
arch_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_families`<sup>Required</sup> <a name="os_families" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.osFamilies"></a>

```python
os_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_vendors

dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection</a>

---



