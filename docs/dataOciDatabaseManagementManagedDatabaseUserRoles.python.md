# `dataOciDatabaseManagementManagedDatabaseUserRoles` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserRoles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserRoles <a name="DataOciDatabaseManagementManagedDatabaseUserRoles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles oci_database_management_managed_database_user_roles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles(
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
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#managed_database_id DataOciDatabaseManagementManagedDatabaseUserRoles#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#user_name DataOciDatabaseManagementManagedDatabaseUserRoles#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#id DataOciDatabaseManagementManagedDatabaseUserRoles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserRoles#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#managed_database_id DataOciDatabaseManagementManagedDatabaseUserRoles#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#user_name DataOciDatabaseManagementManagedDatabaseUserRoles#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#filter DataOciDatabaseManagementManagedDatabaseUserRoles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#id DataOciDatabaseManagementManagedDatabaseUserRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserRoles#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseUserRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList">DataOciDatabaseManagementManagedDatabaseUserRolesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.roleCollection">role_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseUserRolesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList">DataOciDatabaseManagementManagedDatabaseUserRolesFilterList</a>

---

##### `role_collection`<sup>Required</sup> <a name="role_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.roleCollection"></a>

```python
role_collection: DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserRolesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserRolesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#managed_database_id DataOciDatabaseManagementManagedDatabaseUserRoles#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#user_name DataOciDatabaseManagementManagedDatabaseUserRoles#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#id DataOciDatabaseManagementManagedDatabaseUserRoles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserRoles#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#managed_database_id DataOciDatabaseManagementManagedDatabaseUserRoles#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#user_name DataOciDatabaseManagementManagedDatabaseUserRoles#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#filter DataOciDatabaseManagementManagedDatabaseUserRoles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#id DataOciDatabaseManagementManagedDatabaseUserRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserRoles#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserRolesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserRolesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#values DataOciDatabaseManagementManagedDatabaseUserRoles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#regex DataOciDatabaseManagementManagedDatabaseUserRoles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#name DataOciDatabaseManagementManagedDatabaseUserRoles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#values DataOciDatabaseManagementManagedDatabaseUserRoles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_roles#regex DataOciDatabaseManagementManagedDatabaseUserRoles#regex}.

---

### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection()
```


### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserRolesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserRolesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserRolesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseUserRolesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesFilter">DataOciDatabaseManagementManagedDatabaseUserRolesFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.adminOption">admin_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.common">common</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.defaultRole">default_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.delegateOption">delegate_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.inherited">inherited</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_option`<sup>Required</sup> <a name="admin_option" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.adminOption"></a>

```python
admin_option: str
```

- *Type:* str

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.common"></a>

```python
common: str
```

- *Type:* str

---

##### `default_role`<sup>Required</sup> <a name="default_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

---

##### `delegate_option`<sup>Required</sup> <a name="delegate_option" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.delegateOption"></a>

```python
delegate_option: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.inherited"></a>

```python
inherited: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_roles

dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserRoles.DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection">DataOciDatabaseManagementManagedDatabaseUserRolesRoleCollection</a>

---



