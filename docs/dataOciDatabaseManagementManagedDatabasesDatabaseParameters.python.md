# `dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameters <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]] = None,
  id: str = None,
  is_allowed_values_included: typing.Union[bool, IResolvable] = None,
  name: str = None,
  opc_named_credential_id: str = None,
  source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.isAllowedValuesIncluded">is_allowed_values_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_allowed_values_included`<sup>Optional</sup> <a name="is_allowed_values_included" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.isAllowedValuesIncluded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded">reset_is_allowed_values_included</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_allowed_values_included` <a name="reset_is_allowed_values_included" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded"></a>

```python
def reset_is_allowed_values_included() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection">database_parameters_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput">is_allowed_values_included_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded">is_allowed_values_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_parameters_collection`<sup>Required</sup> <a name="database_parameters_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection"></a>

```python
database_parameters_collection: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_allowed_values_included_input`<sup>Optional</sup> <a name="is_allowed_values_included_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput"></a>

```python
is_allowed_values_included_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_allowed_values_included`<sup>Required</sup> <a name="is_allowed_values_included" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded"></a>

```python
is_allowed_values_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]] = None,
  id: str = None,
  is_allowed_values_included: typing.Union[bool, IResolvable] = None,
  name: str = None,
  opc_named_credential_id: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded">is_allowed_values_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_allowed_values_included`<sup>Optional</sup> <a name="is_allowed_values_included" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded"></a>

```python
is_allowed_values_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection()
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems()
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues()
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal">ordinal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal"></a>

```python
ordinal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues">allowed_values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId">container_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue">display_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted">is_adjusted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic">is_basic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated">is_deprecated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable">is_instance_modifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified">is_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable">is_pdb_modifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable">is_session_modifiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified">is_specified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable">is_system_modifiable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal">ordinal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment">update_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues"></a>

```python
allowed_values: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a>

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId"></a>

```python
container_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

---

##### `is_adjusted`<sup>Required</sup> <a name="is_adjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted"></a>

```python
is_adjusted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_basic`<sup>Required</sup> <a name="is_basic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic"></a>

```python
is_basic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_deprecated`<sup>Required</sup> <a name="is_deprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated"></a>

```python
is_deprecated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_instance_modifiable`<sup>Required</sup> <a name="is_instance_modifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable"></a>

```python
is_instance_modifiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_modified`<sup>Required</sup> <a name="is_modified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified"></a>

```python
is_modified: str
```

- *Type:* str

---

##### `is_pdb_modifiable`<sup>Required</sup> <a name="is_pdb_modifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable"></a>

```python
is_pdb_modifiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_session_modifiable`<sup>Required</sup> <a name="is_session_modifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable"></a>

```python
is_session_modifiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_specified`<sup>Required</sup> <a name="is_specified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified"></a>

```python
is_specified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_system_modifiable`<sup>Required</sup> <a name="is_system_modifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable"></a>

```python
is_system_modifiable: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal"></a>

```python
ordinal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sid`<sup>Required</sup> <a name="sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_comment`<sup>Required</sup> <a name="update_comment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment"></a>

```python
update_comment: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType">database_sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_sub_type`<sup>Required</sup> <a name="database_sub_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType"></a>

```python
database_sub_type: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_databases_database_parameters

dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter</a>]

---



