# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution oci_database_management_managed_database_optimizer_statistics_advisor_execution}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_name: str,
  managed_database_id: str,
  task_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.executionName">execution_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#execution_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.taskName">task_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#task_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_name`<sup>Required</sup> <a name="execution_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.executionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#execution_name}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#managed_database_id}.

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.taskName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#task_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.findings">findings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.report">report</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.executionNameInput">execution_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.taskNameInput">task_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.executionName">execution_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.taskName">task_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.database"></a>

```python
database: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.findings"></a>

```python
findings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `report`<sup>Required</sup> <a name="report" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.report"></a>

```python
report: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `execution_name_input`<sup>Optional</sup> <a name="execution_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.executionNameInput"></a>

```python
execution_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `task_name_input`<sup>Optional</sup> <a name="task_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.taskNameInput"></a>

```python
task_name_input: str
```

- *Type:* str

---

##### `execution_name`<sup>Required</sup> <a name="execution_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.executionName"></a>

```python
execution_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_name: str,
  managed_database_id: str,
  task_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.executionName">execution_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#execution_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.taskName">task_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#task_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_name`<sup>Required</sup> <a name="execution_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.executionName"></a>

```python
execution_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#execution_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#execution_name}.

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#managed_database_id}.

---

##### `task_name`<sup>Required</sup> <a name="task_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.taskName"></a>

```python
task_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#task_name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#task_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_execution#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines()
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbDeploymentType">db_deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbSubType">db_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbType">db_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_deployment_type`<sup>Required</sup> <a name="db_deployment_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbDeploymentType"></a>

```python
db_deployment_type: str
```

- *Type:* str

---

##### `db_sub_type`<sup>Required</sup> <a name="db_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbSubType"></a>

```python
db_sub_type: str
```

- *Type:* str

---

##### `db_type`<sup>Required</sup> <a name="db_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbType"></a>

```python
db_type: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionDatabase</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.rules"></a>

```python
rules: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReport</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.operations">operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.schemas">schemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.operations"></a>

```python
operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.schemas"></a>

```python
schemas: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetails</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.objects">objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `objects`<sup>Required</sup> <a name="objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.objects"></a>

```python
objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsSchemas</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.recommendations">recommendations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.details"></a>

```python
details: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.recommendations"></a>

```python
recommendations: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindings</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLines</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.lines"></a>

```python
lines: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleLinesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExample</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.example">example</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.rationales">rationales</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.example"></a>

```python
example: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsExampleList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `rationales`<sup>Required</sup> <a name="rationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.rationales"></a>

```python
rationales: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendations</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsRecommendationsRationales</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_optimizer_statistics_advisor_execution

dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.findings">findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.findings"></a>

```python
findings: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesFindingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecution.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionReportRules</a>

---



