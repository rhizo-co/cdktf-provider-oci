# `dataOciDatabaseManagementExternalExadataStorageGrid` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageGrid` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageGrid <a name="DataOciDatabaseManagementExternalExadataStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid oci_database_management_external_exadata_storage_grid}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_grid_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.externalExadataStorageGridId">external_exadata_storage_grid_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_grid_id`<sup>Required</sup> <a name="external_exadata_storage_grid_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.externalExadataStorageGridId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageGrid to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataStorageGrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageGrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.serverCount">server_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.storageServers">storage_servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList">DataOciDatabaseManagementExternalExadataStorageGridStorageServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput">external_exadata_storage_grid_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId">external_exadata_storage_grid_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `server_count`<sup>Required</sup> <a name="server_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.serverCount"></a>

```python
server_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_servers`<sup>Required</sup> <a name="storage_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.storageServers"></a>

```python
storage_servers: DataOciDatabaseManagementExternalExadataStorageGridStorageServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList">DataOciDatabaseManagementExternalExadataStorageGridStorageServersList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `external_exadata_storage_grid_id_input`<sup>Optional</sup> <a name="external_exadata_storage_grid_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput"></a>

```python
external_exadata_storage_grid_id_input: str
```

- *Type:* str

---

##### `external_exadata_storage_grid_id`<sup>Required</sup> <a name="external_exadata_storage_grid_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId"></a>

```python
external_exadata_storage_grid_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageGridConfig <a name="DataOciDatabaseManagementExternalExadataStorageGridConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_grid_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId">external_exadata_storage_grid_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_grid_id`<sup>Required</sup> <a name="external_exadata_storage_grid_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId"></a>

```python
external_exadata_storage_grid_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

### DataOciDatabaseManagementExternalExadataStorageGridStorageServers <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageGridStorageServersList <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_grid

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel">make_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops">max_flash_disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput">max_flash_disk_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops">max_hard_disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput">max_hard_disk_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers">DataOciDatabaseManagementExternalExadataStorageGridStorageServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `make_model`<sup>Required</sup> <a name="make_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel"></a>

```python
make_model: str
```

- *Type:* str

---

##### `max_flash_disk_iops`<sup>Required</sup> <a name="max_flash_disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops"></a>

```python
max_flash_disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_flash_disk_throughput`<sup>Required</sup> <a name="max_flash_disk_throughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput"></a>

```python
max_flash_disk_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_hard_disk_iops`<sup>Required</sup> <a name="max_hard_disk_iops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops"></a>

```python
max_hard_disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_hard_disk_throughput`<sup>Required</sup> <a name="max_hard_disk_throughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput"></a>

```python
max_hard_disk_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageGridStorageServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers">DataOciDatabaseManagementExternalExadataStorageGridStorageServers</a>

---



