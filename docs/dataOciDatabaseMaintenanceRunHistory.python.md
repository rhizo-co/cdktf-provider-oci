# `dataOciDatabaseMaintenanceRunHistory` Submodule <a name="`dataOciDatabaseMaintenanceRunHistory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRunHistory <a name="DataOciDatabaseMaintenanceRunHistory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history oci_database_maintenance_run_history}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_run_history_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.maintenanceRunHistoryId">maintenance_run_history_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_run_history_id`<sup>Required</sup> <a name="maintenance_run_history_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.maintenanceRunHistoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistory resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMaintenanceRunHistory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dbServersHistoryDetails">db_servers_history_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunDetails">maintenance_run_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryIdInput">maintenance_run_history_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryId">maintenance_run_history_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_servers_history_details`<sup>Required</sup> <a name="db_servers_history_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dbServersHistoryDetails"></a>

```python
db_servers_history_details: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList</a>

---

##### `maintenance_run_details`<sup>Required</sup> <a name="maintenance_run_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunDetails"></a>

```python
maintenance_run_details: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_run_history_id_input`<sup>Optional</sup> <a name="maintenance_run_history_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryIdInput"></a>

```python
maintenance_run_history_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_run_history_id`<sup>Required</sup> <a name="maintenance_run_history_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryId"></a>

```python
maintenance_run_history_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunHistoryConfig <a name="DataOciDatabaseMaintenanceRunHistoryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_run_history_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.maintenanceRunHistoryId">maintenance_run_history_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_run_history_id`<sup>Required</sup> <a name="maintenance_run_history_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.maintenanceRunHistoryId"></a>

```python
maintenance_run_history_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails()
```


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails()
```


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails()
```


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimated_patch_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded">time_patching_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted">time_patching_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_patch_duration`<sup>Required</sup> <a name="estimated_patch_duration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```python
estimated_patch_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `time_patching_ended`<sup>Required</sup> <a name="time_patching_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```python
time_patching_ended: str
```

- *Type:* str

---

##### `time_patching_started`<sup>Required</sup> <a name="time_patching_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```python
time_patching_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails">db_server_patching_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_server_patching_details`<sup>Required</sup> <a name="db_server_patching_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails"></a>

```python
db_server_patching_details: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimated_db_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimated_network_switches_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimated_storage_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">total_estimated_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_db_server_patching_time`<sup>Required</sup> <a name="estimated_db_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```python
estimated_db_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_network_switches_patching_time`<sup>Required</sup> <a name="estimated_network_switches_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```python
estimated_network_switches_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_storage_server_patching_time`<sup>Required</sup> <a name="estimated_storage_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```python
estimated_storage_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimated_patching_time`<sup>Required</sup> <a name="total_estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```python
total_estimated_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_history

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins">current_custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentPatchingComponent">current_patching_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime">estimated_component_patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime">estimated_patching_time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled">is_dst_file_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchFailureCount">patch_failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchId">patch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingEndTime">patching_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStartTime">patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId">peer_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetDbServerVersion">target_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion">target_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `current_custom_action_timeout_in_mins`<sup>Required</sup> <a name="current_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```python
current_custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_patching_component`<sup>Required</sup> <a name="current_patching_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentPatchingComponent"></a>

```python
current_patching_component: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_component_patching_start_time`<sup>Required</sup> <a name="estimated_component_patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```python
estimated_component_patching_start_time: str
```

- *Type:* str

---

##### `estimated_patching_time`<sup>Required</sup> <a name="estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime"></a>

```python
estimated_patching_time: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dst_file_update_enabled`<sup>Required</sup> <a name="is_dst_file_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled"></a>

```python
is_dst_file_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_subtype`<sup>Required</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `patch_failure_count`<sup>Required</sup> <a name="patch_failure_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchFailureCount"></a>

```python
patch_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_id`<sup>Required</sup> <a name="patch_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchId"></a>

```python
patch_id: str
```

- *Type:* str

---

##### `patching_end_time`<sup>Required</sup> <a name="patching_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingEndTime"></a>

```python
patching_end_time: str
```

- *Type:* str

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `patching_start_time`<sup>Required</sup> <a name="patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStartTime"></a>

```python
patching_start_time: str
```

- *Type:* str

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `peer_maintenance_run_id`<sup>Required</sup> <a name="peer_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId"></a>

```python
peer_maintenance_run_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_db_server_version`<sup>Required</sup> <a name="target_db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetDbServerVersion"></a>

```python
target_db_server_version: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_storage_server_version`<sup>Required</sup> <a name="target_storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion"></a>

```python
target_storage_server_version: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails</a>

---



