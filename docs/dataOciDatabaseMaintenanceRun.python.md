# `dataOciDatabaseMaintenanceRun` Submodule <a name="`dataOciDatabaseMaintenanceRun` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRun <a name="DataOciDatabaseMaintenanceRun" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run oci_database_maintenance_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_run_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.maintenanceRunId">maintenance_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run#maintenance_run_id DataOciDatabaseMaintenanceRun#maintenance_run_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_run_id`<sup>Required</sup> <a name="maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.Initializer.parameter.maintenanceRunId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run#maintenance_run_id DataOciDatabaseMaintenanceRun#maintenance_run_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMaintenanceRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMaintenanceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins">current_custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.currentPatchingComponent">current_patching_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime">estimated_component_patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.estimatedPatchingTime">estimated_patching_time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.isDstFileUpdateEnabled">is_dst_file_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchFailureCount">patch_failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchId">patch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingEndTime">patching_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingStartTime">patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.peerMaintenanceRunId">peer_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetDbServerVersion">target_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetStorageServerVersion">target_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceRunIdInput">maintenance_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceRunId">maintenance_run_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `current_custom_action_timeout_in_mins`<sup>Required</sup> <a name="current_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins"></a>

```python
current_custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_patching_component`<sup>Required</sup> <a name="current_patching_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.currentPatchingComponent"></a>

```python
current_patching_component: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_component_patching_start_time`<sup>Required</sup> <a name="estimated_component_patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime"></a>

```python
estimated_component_patching_start_time: str
```

- *Type:* str

---

##### `estimated_patching_time`<sup>Required</sup> <a name="estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.estimatedPatchingTime"></a>

```python
estimated_patching_time: DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dst_file_update_enabled`<sup>Required</sup> <a name="is_dst_file_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.isDstFileUpdateEnabled"></a>

```python
is_dst_file_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_subtype`<sup>Required</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `patch_failure_count`<sup>Required</sup> <a name="patch_failure_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchFailureCount"></a>

```python
patch_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_id`<sup>Required</sup> <a name="patch_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchId"></a>

```python
patch_id: str
```

- *Type:* str

---

##### `patching_end_time`<sup>Required</sup> <a name="patching_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingEndTime"></a>

```python
patching_end_time: str
```

- *Type:* str

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `patching_start_time`<sup>Required</sup> <a name="patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingStartTime"></a>

```python
patching_start_time: str
```

- *Type:* str

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `peer_maintenance_run_id`<sup>Required</sup> <a name="peer_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.peerMaintenanceRunId"></a>

```python
peer_maintenance_run_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_db_server_version`<sup>Required</sup> <a name="target_db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetDbServerVersion"></a>

```python
target_db_server_version: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_storage_server_version`<sup>Required</sup> <a name="target_storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.targetStorageServerVersion"></a>

```python
target_storage_server_version: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `maintenance_run_id_input`<sup>Optional</sup> <a name="maintenance_run_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceRunIdInput"></a>

```python
maintenance_run_id_input: str
```

- *Type:* str

---

##### `maintenance_run_id`<sup>Required</sup> <a name="maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.maintenanceRunId"></a>

```python
maintenance_run_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunConfig <a name="DataOciDatabaseMaintenanceRunConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_run_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.maintenanceRunId">maintenance_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run#maintenance_run_id DataOciDatabaseMaintenanceRun#maintenance_run_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_run_id`<sup>Required</sup> <a name="maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunConfig.property.maintenanceRunId"></a>

```python
maintenance_run_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run#maintenance_run_id DataOciDatabaseMaintenanceRun#maintenance_run_id}.

---

### DataOciDatabaseMaintenanceRunEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run

dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimated_db_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimated_network_switches_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimated_storage_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">total_estimated_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTime">DataOciDatabaseMaintenanceRunEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_db_server_patching_time`<sup>Required</sup> <a name="estimated_db_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```python
estimated_db_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_network_switches_patching_time`<sup>Required</sup> <a name="estimated_network_switches_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```python
estimated_network_switches_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_storage_server_patching_time`<sup>Required</sup> <a name="estimated_storage_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```python
estimated_storage_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimated_patching_time`<sup>Required</sup> <a name="total_estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```python
total_estimated_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRun.DataOciDatabaseMaintenanceRunEstimatedPatchingTime">DataOciDatabaseMaintenanceRunEstimatedPatchingTime</a>

---



