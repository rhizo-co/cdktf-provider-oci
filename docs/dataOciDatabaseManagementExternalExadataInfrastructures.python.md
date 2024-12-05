# `dataOciDatabaseManagementExternalExadataInfrastructures` Submodule <a name="`dataOciDatabaseManagementExternalExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructures <a name="DataOciDatabaseManagementExternalExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures oci_database_management_external_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#filter DataOciDatabaseManagementExternalExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataInfrastructures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection">external_exadata_infrastructure_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_exadata_infrastructure_collection`<sup>Required</sup> <a name="external_exadata_infrastructure_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection"></a>

```python
external_exadata_infrastructure_collection: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalExadataInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresConfig <a name="DataOciDatabaseManagementExternalExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#filter DataOciDatabaseManagementExternalExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection()
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems()
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems()
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid()
```


### DataOciDatabaseManagementExternalExadataInfrastructuresFilter <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments">database_compartments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems">database_systems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds">db_system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey">discovery_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize">rack_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid">storage_grid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames">storage_server_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_compartments`<sup>Required</sup> <a name="database_compartments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments"></a>

```python
database_compartments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_systems`<sup>Required</sup> <a name="database_systems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems"></a>

```python
database_systems: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a>

---

##### `db_system_ids`<sup>Required</sup> <a name="db_system_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds"></a>

```python
db_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `discovery_key`<sup>Required</sup> <a name="discovery_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey"></a>

```python
discovery_key: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `rack_size`<sup>Required</sup> <a name="rack_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize"></a>

```python
rack_size: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_grid`<sup>Required</sup> <a name="storage_grid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid"></a>

```python
storage_grid: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a>

---

##### `storage_server_names`<sup>Required</sup> <a name="storage_server_names" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames"></a>

```python
storage_server_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount">server_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `server_count`<sup>Required</sup> <a name="server_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount"></a>

```python
server_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]]

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_infrastructures

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalExadataInfrastructuresFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>]

---



