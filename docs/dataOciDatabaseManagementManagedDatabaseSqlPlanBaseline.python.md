# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline oci_database_management_managed_database_sql_plan_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline(
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
  plan_name: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.planName">plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}.

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.planName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.accepted">accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.adaptive">adaptive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.autoPurge">auto_purge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.enabled">enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.executionPlan">execution_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fixed">fixed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.module">module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.reproduced">reproduced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlHandle">sql_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlText">sql_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastExecuted">time_last_executed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastModified">time_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planNameInput">plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planName">plan_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accepted`<sup>Required</sup> <a name="accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.accepted"></a>

```python
accepted: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `adaptive`<sup>Required</sup> <a name="adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.adaptive"></a>

```python
adaptive: str
```

- *Type:* str

---

##### `auto_purge`<sup>Required</sup> <a name="auto_purge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.autoPurge"></a>

```python
auto_purge: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.enabled"></a>

```python
enabled: str
```

- *Type:* str

---

##### `execution_plan`<sup>Required</sup> <a name="execution_plan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.executionPlan"></a>

```python
execution_plan: str
```

- *Type:* str

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fixed"></a>

```python
fixed: str
```

- *Type:* str

---

##### `module`<sup>Required</sup> <a name="module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.module"></a>

```python
module: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `reproduced`<sup>Required</sup> <a name="reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.reproduced"></a>

```python
reproduced: str
```

- *Type:* str

---

##### `sql_handle`<sup>Required</sup> <a name="sql_handle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlHandle"></a>

```python
sql_handle: str
```

- *Type:* str

---

##### `sql_text`<sup>Required</sup> <a name="sql_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlText"></a>

```python
sql_text: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_executed`<sup>Required</sup> <a name="time_last_executed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastExecuted"></a>

```python
time_last_executed: str
```

- *Type:* str

---

##### `time_last_modified`<sup>Required</sup> <a name="time_last_modified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastModified"></a>

```python
time_last_modified: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `plan_name_input`<sup>Optional</sup> <a name="plan_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planNameInput"></a>

```python
plan_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_sql_plan_baseline

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  plan_name: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.planName">plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}.

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}.

---



