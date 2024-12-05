# `dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege oci_database_management_managed_database_user_object_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege(
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
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_object_privilege

dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common">common</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption">grant_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor">grantor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy">hierarchy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited">inherited</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common"></a>

```python
common: str
```

- *Type:* str

---

##### `grant_option`<sup>Required</sup> <a name="grant_option" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption"></a>

```python
grant_option: str
```

- *Type:* str

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor"></a>

```python
grantor: str
```

- *Type:* str

---

##### `hierarchy`<sup>Required</sup> <a name="hierarchy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy"></a>

```python
hierarchy: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited"></a>

```python
inherited: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a>

---



