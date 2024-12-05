# `dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges oci_database_management_managed_database_user_object_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#filter DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.objectPrivilegeCollection">object_privilege_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList</a>

---

##### `object_privilege_collection`<sup>Required</sup> <a name="object_privilege_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.objectPrivilegeCollection"></a>

```python
object_privilege_collection: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#filter DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#values DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#regex DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#values DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#regex DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#regex}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection()
```


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>]

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.common">common</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantOption">grant_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.hierarchy">hierarchy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.inherited">inherited</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.common"></a>

```python
common: str
```

- *Type:* str

---

##### `grant_option`<sup>Required</sup> <a name="grant_option" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```python
grant_option: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `hierarchy`<sup>Required</sup> <a name="hierarchy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.hierarchy"></a>

```python
hierarchy: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.inherited"></a>

```python
inherited: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privileges

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection</a>

---



