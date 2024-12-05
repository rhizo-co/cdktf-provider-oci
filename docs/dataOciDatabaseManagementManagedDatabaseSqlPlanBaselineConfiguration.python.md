# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration oci_database_management_managed_database_sql_plan_baseline_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters">auto_capture_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters">auto_spm_evolve_task_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled">is_automatic_initial_plan_capture_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled">is_auto_spm_evolve_task_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled">is_high_frequency_auto_spm_evolve_task_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled">is_sql_plan_baselines_usage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks">plan_retention_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb">space_budget_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent">space_budget_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb">space_used_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_capture_filters`<sup>Required</sup> <a name="auto_capture_filters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters"></a>

```python
auto_capture_filters: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a>

---

##### `auto_spm_evolve_task_parameters`<sup>Required</sup> <a name="auto_spm_evolve_task_parameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters"></a>

```python
auto_spm_evolve_task_parameters: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a>

---

##### `is_automatic_initial_plan_capture_enabled`<sup>Required</sup> <a name="is_automatic_initial_plan_capture_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled"></a>

```python
is_automatic_initial_plan_capture_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_spm_evolve_task_enabled`<sup>Required</sup> <a name="is_auto_spm_evolve_task_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled"></a>

```python
is_auto_spm_evolve_task_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_high_frequency_auto_spm_evolve_task_enabled`<sup>Required</sup> <a name="is_high_frequency_auto_spm_evolve_task_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled"></a>

```python
is_high_frequency_auto_spm_evolve_task_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sql_plan_baselines_usage_enabled`<sup>Required</sup> <a name="is_sql_plan_baselines_usage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled"></a>

```python
is_sql_plan_baselines_usage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `plan_retention_weeks`<sup>Required</sup> <a name="plan_retention_weeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks"></a>

```python
plan_retention_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `space_budget_mb`<sup>Required</sup> <a name="space_budget_mb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb"></a>

```python
space_budget_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `space_budget_percent`<sup>Required</sup> <a name="space_budget_percent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent"></a>

```python
space_budget_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `space_used_mb`<sup>Required</sup> <a name="space_used_mb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb"></a>

```python
space_used_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters()
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters()
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified">time_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude">values_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude">values_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_last_modified`<sup>Required</sup> <a name="time_last_modified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified"></a>

```python
time_last_modified: str
```

- *Type:* str

---

##### `values_to_exclude`<sup>Required</sup> <a name="values_to_exclude" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude"></a>

```python
values_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_to_include`<sup>Required</sup> <a name="values_to_include" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude"></a>

```python
values_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline_configuration

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit">allowed_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines">alternate_plan_baselines</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit">alternate_plan_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources">alternate_plan_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted">are_plans_auto_accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_time_limit`<sup>Required</sup> <a name="allowed_time_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit"></a>

```python
allowed_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alternate_plan_baselines`<sup>Required</sup> <a name="alternate_plan_baselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines"></a>

```python
alternate_plan_baselines: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alternate_plan_limit`<sup>Required</sup> <a name="alternate_plan_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit"></a>

```python
alternate_plan_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alternate_plan_sources`<sup>Required</sup> <a name="alternate_plan_sources" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources"></a>

```python
alternate_plan_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `are_plans_auto_accepted`<sup>Required</sup> <a name="are_plans_auto_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted"></a>

```python
are_plans_auto_accepted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a>

---



