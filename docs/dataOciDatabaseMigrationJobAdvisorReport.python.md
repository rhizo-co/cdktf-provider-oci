# `dataOciDatabaseMigrationJobAdvisorReport` Submodule <a name="`dataOciDatabaseMigrationJobAdvisorReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationJobAdvisorReport <a name="DataOciDatabaseMigrationJobAdvisorReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report oci_database_migration_job_advisor_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMigrationJobAdvisorReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMigrationJobAdvisorReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationJobAdvisorReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal">number_of_fatal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers">number_of_fatal_blockers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults">number_of_informational_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings">number_of_warnings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails">report_location_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `number_of_fatal`<sup>Required</sup> <a name="number_of_fatal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal"></a>

```python
number_of_fatal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_fatal_blockers`<sup>Required</sup> <a name="number_of_fatal_blockers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers"></a>

```python
number_of_fatal_blockers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_informational_results`<sup>Required</sup> <a name="number_of_informational_results" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults"></a>

```python
number_of_informational_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_warnings`<sup>Required</sup> <a name="number_of_warnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings"></a>

```python
number_of_warnings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `report_location_details`<sup>Required</sup> <a name="report_location_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails"></a>

```python
report_location_details: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a>

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationJobAdvisorReportConfig <a name="DataOciDatabaseMigrationJobAdvisorReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails()
```


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a>

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_job_advisor_report

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource">location_in_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails">object_storage_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_in_source`<sup>Required</sup> <a name="location_in_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource"></a>

```python
location_in_source: str
```

- *Type:* str

---

##### `object_storage_details`<sup>Required</sup> <a name="object_storage_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails"></a>

```python
object_storage_details: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a>

---



