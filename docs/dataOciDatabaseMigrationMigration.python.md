# `dataOciDatabaseMigrationMigration` Submodule <a name="`dataOciDatabaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigration <a name="DataOciDatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration#migration_id DataOciDatabaseMigrationMigration#migration_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.Initializer.parameter.migrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration#migration_id DataOciDatabaseMigrationMigration#migration_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMigrationMigration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.advancedParameters">advanced_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList">DataOciDatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.advisorSettings">advisor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList">DataOciDatabaseMigrationMigrationAdvisorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.bulkIncludeExcludeData">bulk_include_exclude_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.databaseCombination">database_combination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.dataTransferMediumDetails">data_transfer_medium_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.excludeObjects">exclude_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList">DataOciDatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.executingJobId">executing_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.ggsDetails">ggs_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList">DataOciDatabaseMigrationMigrationGgsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.hubDetails">hub_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList">DataOciDatabaseMigrationMigrationHubDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.includeObjects">include_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList">DataOciDatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.initialLoadSettings">initial_load_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">source_container_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.sourceDatabaseConnectionId">source_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.targetDatabaseConnectionId">target_database_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeLastMigration">time_last_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.waitAfter">wait_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.migrationIdInput">migration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `advanced_parameters`<sup>Required</sup> <a name="advanced_parameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.advancedParameters"></a>

```python
advanced_parameters: DataOciDatabaseMigrationMigrationAdvancedParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList">DataOciDatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `advisor_settings`<sup>Required</sup> <a name="advisor_settings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.advisorSettings"></a>

```python
advisor_settings: DataOciDatabaseMigrationMigrationAdvisorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList">DataOciDatabaseMigrationMigrationAdvisorSettingsList</a>

---

##### `bulk_include_exclude_data`<sup>Required</sup> <a name="bulk_include_exclude_data" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```python
bulk_include_exclude_data: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_combination`<sup>Required</sup> <a name="database_combination" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.databaseCombination"></a>

```python
database_combination: str
```

- *Type:* str

---

##### `data_transfer_medium_details`<sup>Required</sup> <a name="data_transfer_medium_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```python
data_transfer_medium_details: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exclude_objects`<sup>Required</sup> <a name="exclude_objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.excludeObjects"></a>

```python
exclude_objects: DataOciDatabaseMigrationMigrationExcludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList">DataOciDatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `executing_job_id`<sup>Required</sup> <a name="executing_job_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.executingJobId"></a>

```python
executing_job_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ggs_details`<sup>Required</sup> <a name="ggs_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.ggsDetails"></a>

```python
ggs_details: DataOciDatabaseMigrationMigrationGgsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList">DataOciDatabaseMigrationMigrationGgsDetailsList</a>

---

##### `hub_details`<sup>Required</sup> <a name="hub_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.hubDetails"></a>

```python
hub_details: DataOciDatabaseMigrationMigrationHubDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList">DataOciDatabaseMigrationMigrationHubDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_objects`<sup>Required</sup> <a name="include_objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.includeObjects"></a>

```python
include_objects: DataOciDatabaseMigrationMigrationIncludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList">DataOciDatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `initial_load_settings`<sup>Required</sup> <a name="initial_load_settings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.initialLoadSettings"></a>

```python
initial_load_settings: DataOciDatabaseMigrationMigrationInitialLoadSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `source_container_database_connection_id`<sup>Required</sup> <a name="source_container_database_connection_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```python
source_container_database_connection_id: str
```

- *Type:* str

---

##### `source_database_connection_id`<sup>Required</sup> <a name="source_database_connection_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```python
source_database_connection_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_database_connection_id`<sup>Required</sup> <a name="target_database_connection_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```python
target_database_connection_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_migration`<sup>Required</sup> <a name="time_last_migration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeLastMigration"></a>

```python
time_last_migration: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `wait_after`<sup>Required</sup> <a name="wait_after" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.waitAfter"></a>

```python
wait_after: str
```

- *Type:* str

---

##### `migration_id_input`<sup>Optional</sup> <a name="migration_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.migrationIdInput"></a>

```python
migration_id_input: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationAdvancedParameters <a name="DataOciDatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParameters()
```


### DataOciDatabaseMigrationMigrationAdvisorSettings <a name="DataOciDatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettings()
```


### DataOciDatabaseMigrationMigrationConfig <a name="DataOciDatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration#migration_id DataOciDatabaseMigrationMigration#migration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationConfig.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration#migration_id DataOciDatabaseMigrationMigration#migration_id}.

---

### DataOciDatabaseMigrationMigrationDataTransferMediumDetails <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetails()
```


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket()
```


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource()
```


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget()
```


### DataOciDatabaseMigrationMigrationExcludeObjects <a name="DataOciDatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjects()
```


### DataOciDatabaseMigrationMigrationGgsDetails <a name="DataOciDatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetails()
```


### DataOciDatabaseMigrationMigrationGgsDetailsExtract <a name="DataOciDatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtract()
```


### DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment()
```


### DataOciDatabaseMigrationMigrationGgsDetailsReplicat <a name="DataOciDatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicat()
```


### DataOciDatabaseMigrationMigrationHubDetails <a name="DataOciDatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetails()
```


### DataOciDatabaseMigrationMigrationHubDetailsExtract <a name="DataOciDatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtract()
```


### DataOciDatabaseMigrationMigrationHubDetailsReplicat <a name="DataOciDatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicat()
```


### DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials()
```


### DataOciDatabaseMigrationMigrationIncludeObjects <a name="DataOciDatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjects()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettings <a name="DataOciDatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettings()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps()
```


### DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationAdvancedParametersList <a name="DataOciDatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParameters">DataOciDatabaseMigrationMigrationAdvancedParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationAdvancedParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvancedParameters">DataOciDatabaseMigrationMigrationAdvancedParameters</a>

---


### DataOciDatabaseMigrationMigrationAdvisorSettingsList <a name="DataOciDatabaseMigrationMigrationAdvisorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">is_ignore_errors</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">is_skip_advisor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettings">DataOciDatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_ignore_errors`<sup>Required</sup> <a name="is_ignore_errors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```python
is_ignore_errors: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_skip_advisor`<sup>Required</sup> <a name="is_skip_advisor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```python
is_skip_advisor: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationAdvisorSettings">DataOciDatabaseMigrationMigrationAdvisorSettings</a>

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">object_storage_bucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">shared_storage_mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetails">DataOciDatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_storage_bucket`<sup>Required</sup> <a name="object_storage_bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```python
object_storage_bucket: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `shared_storage_mount_target_id`<sup>Required</sup> <a name="shared_storage_mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```python
shared_storage_mount_target_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```python
source: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```python
target: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetails">DataOciDatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">oci_home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">wallet_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `oci_home`<sup>Required</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

---

##### `wallet_location`<sup>Required</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">oci_home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">wallet_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `oci_home`<sup>Required</sup> <a name="oci_home" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```python
oci_home: str
```

- *Type:* str

---

##### `wallet_location`<sup>Required</sup> <a name="wallet_location" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```python
wallet_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DataOciDatabaseMigrationMigrationExcludeObjectsList <a name="DataOciDatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjects">DataOciDatabaseMigrationMigrationExcludeObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication`<sup>Required</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationExcludeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationExcludeObjects">DataOciDatabaseMigrationMigrationExcludeObjects</a>

---


### DataOciDatabaseMigrationMigrationGgsDetailsExtractList <a name="DataOciDatabaseMigrationMigrationGgsDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtract">DataOciDatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `long_trans_duration`<sup>Required</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtract">DataOciDatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">ggs_admin_credentials_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `ggs_admin_credentials_secret_id`<sup>Required</sup> <a name="ggs_admin_credentials_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```python
ggs_admin_credentials_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DataOciDatabaseMigrationMigrationGgsDetailsList <a name="DataOciDatabaseMigrationMigrationGgsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationGgsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationGgsDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList">DataOciDatabaseMigrationMigrationGgsDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">ggs_deployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationGgsDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetails">DataOciDatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acceptable_lag`<sup>Required</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```python
extract: DataOciDatabaseMigrationMigrationGgsDetailsExtractList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsExtractList">DataOciDatabaseMigrationMigrationGgsDetailsExtractList</a>

---

##### `ggs_deployment`<sup>Required</sup> <a name="ggs_deployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```python
ggs_deployment: DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```python
replicat: DataOciDatabaseMigrationMigrationGgsDetailsReplicatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationGgsDetailsReplicatList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetails">DataOciDatabaseMigrationMigrationGgsDetails</a>

---


### DataOciDatabaseMigrationMigrationGgsDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationGgsDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicat">DataOciDatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationGgsDetailsReplicat">DataOciDatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationHubDetailsExtractList <a name="DataOciDatabaseMigrationMigrationHubDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">long_trans_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtract">DataOciDatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `long_trans_duration`<sup>Required</sup> <a name="long_trans_duration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```python
long_trans_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtract">DataOciDatabaseMigrationMigrationHubDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationHubDetailsList <a name="DataOciDatabaseMigrationMigrationHubDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationHubDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationHubDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">acceptable_lag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">compute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList">DataOciDatabaseMigrationMigrationHubDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList">DataOciDatabaseMigrationMigrationHubDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">rest_admin_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetails">DataOciDatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acceptable_lag`<sup>Required</sup> <a name="acceptable_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```python
acceptable_lag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_id`<sup>Required</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```python
compute_id: str
```

- *Type:* str

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```python
extract: DataOciDatabaseMigrationMigrationHubDetailsExtractList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsExtractList">DataOciDatabaseMigrationMigrationHubDetailsExtractList</a>

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```python
replicat: DataOciDatabaseMigrationMigrationHubDetailsReplicatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList">DataOciDatabaseMigrationMigrationHubDetailsReplicatList</a>

---

##### `rest_admin_credentials`<sup>Required</sup> <a name="rest_admin_credentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```python
rest_admin_credentials: DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetails">DataOciDatabaseMigrationMigrationHubDetails</a>

---


### DataOciDatabaseMigrationMigrationHubDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationHubDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">performance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicat">DataOciDatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `performance_profile`<sup>Required</sup> <a name="performance_profile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```python
performance_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsReplicat">DataOciDatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList <a name="DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DataOciDatabaseMigrationMigrationIncludeObjectsList <a name="DataOciDatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">is_omit_excluded_table_from_replication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjects">DataOciDatabaseMigrationMigrationIncludeObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_omit_excluded_table_from_replication`<sup>Required</sup> <a name="is_omit_excluded_table_from_replication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```python
is_omit_excluded_table_from_replication: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationIncludeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationIncludeObjects">DataOciDatabaseMigrationMigrationIncludeObjects</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">estimate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">exclude_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">export_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">import_parallelism_degree</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">is_cluster</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">table_exists_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimate`<sup>Required</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```python
estimate: str
```

- *Type:* str

---

##### `exclude_parameters`<sup>Required</sup> <a name="exclude_parameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```python
exclude_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `export_parallelism_degree`<sup>Required</sup> <a name="export_parallelism_degree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```python
export_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_parallelism_degree`<sup>Required</sup> <a name="import_parallelism_degree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```python
import_parallelism_degree: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_cluster`<sup>Required</sup> <a name="is_cluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```python
is_cluster: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `table_exists_action`<sup>Required</sup> <a name="table_exists_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```python
table_exists_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">new_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">old_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_value`<sup>Required</sup> <a name="new_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```python
new_value: str
```

- *Type:* str

---

##### `old_value`<sup>Required</sup> <a name="old_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```python
old_value: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">compatibility</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">data_pump_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">export_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">handle_grant_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">import_directory_object</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">is_consistent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">is_ignore_existing_objects</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">is_tz_utc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">job_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">metadata_remaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">primary_key_compatibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">tablespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettings">DataOciDatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```python
compatibility: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_pump_parameters`<sup>Required</sup> <a name="data_pump_parameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```python
data_pump_parameters: DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList</a>

---

##### `export_directory_object`<sup>Required</sup> <a name="export_directory_object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```python
export_directory_object: DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList</a>

---

##### `handle_grant_errors`<sup>Required</sup> <a name="handle_grant_errors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```python
handle_grant_errors: str
```

- *Type:* str

---

##### `import_directory_object`<sup>Required</sup> <a name="import_directory_object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```python
import_directory_object: DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList</a>

---

##### `is_consistent`<sup>Required</sup> <a name="is_consistent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```python
is_consistent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ignore_existing_objects`<sup>Required</sup> <a name="is_ignore_existing_objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```python
is_ignore_existing_objects: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_tz_utc`<sup>Required</sup> <a name="is_tz_utc" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```python
is_tz_utc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `job_mode`<sup>Required</sup> <a name="job_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```python
job_mode: str
```

- *Type:* str

---

##### `metadata_remaps`<sup>Required</sup> <a name="metadata_remaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```python
metadata_remaps: DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `primary_key_compatibility`<sup>Required</sup> <a name="primary_key_compatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```python
primary_key_compatibility: str
```

- *Type:* str

---

##### `tablespace_details`<sup>Required</sup> <a name="tablespace_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```python
tablespace_details: DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettings">DataOciDatabaseMigrationMigrationInitialLoadSettings</a>

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_migration

dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">block_size_in_kbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">extend_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">is_auto_create</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">is_big_file</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">remap_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_size_in_kbs`<sup>Required</sup> <a name="block_size_in_kbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```python
block_size_in_kbs: str
```

- *Type:* str

---

##### `extend_size_in_mbs`<sup>Required</sup> <a name="extend_size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```python
extend_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_create`<sup>Required</sup> <a name="is_auto_create" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```python
is_auto_create: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_big_file`<sup>Required</sup> <a name="is_big_file" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```python
is_big_file: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remap_target`<sup>Required</sup> <a name="remap_target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```python
remap_target: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigration.DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---



