# `dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan oci_database_management_external_exadata_storage_server_iorm_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_server_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.externalExadataStorageServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerIormPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan">db_plan</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective">plan_objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus">plan_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput">external_exadata_storage_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_plan`<sup>Required</sup> <a name="db_plan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan"></a>

```python
db_plan: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a>

---

##### `plan_objective`<sup>Required</sup> <a name="plan_objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective"></a>

```python
plan_objective: str
```

- *Type:* str

---

##### `plan_status`<sup>Required</sup> <a name="plan_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus"></a>

```python
plan_status: str
```

- *Type:* str

---

##### `external_exadata_storage_server_id_input`<sup>Optional</sup> <a name="external_exadata_storage_server_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput"></a>

```python
external_exadata_storage_server_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_exadata_storage_server_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan()
```


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation">allocation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster">asm_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin">flash_cache_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize">flash_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn">is_flash_cache_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn">is_flash_log_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn">is_pmem_cache_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn">is_pmem_log_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit">pmem_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin">pmem_cache_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize">pmem_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation`<sup>Required</sup> <a name="allocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation"></a>

```python
allocation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asm_cluster`<sup>Required</sup> <a name="asm_cluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster"></a>

```python
asm_cluster: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `flash_cache_min`<sup>Required</sup> <a name="flash_cache_min" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin"></a>

```python
flash_cache_min: str
```

- *Type:* str

---

##### `flash_cache_size`<sup>Required</sup> <a name="flash_cache_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize"></a>

```python
flash_cache_size: str
```

- *Type:* str

---

##### `is_flash_cache_on`<sup>Required</sup> <a name="is_flash_cache_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn"></a>

```python
is_flash_cache_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_flash_log_on`<sup>Required</sup> <a name="is_flash_log_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn"></a>

```python
is_flash_log_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pmem_cache_on`<sup>Required</sup> <a name="is_pmem_cache_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn"></a>

```python
is_pmem_cache_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pmem_log_on`<sup>Required</sup> <a name="is_pmem_log_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn"></a>

```python
is_pmem_log_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pmem_cache_limit`<sup>Required</sup> <a name="pmem_cache_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit"></a>

```python
pmem_cache_limit: str
```

- *Type:* str

---

##### `pmem_cache_min`<sup>Required</sup> <a name="pmem_cache_min" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin"></a>

```python
pmem_cache_min: str
```

- *Type:* str

---

##### `pmem_cache_size`<sup>Required</sup> <a name="pmem_cache_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize"></a>

```python
pmem_cache_size: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_iorm_plan

dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a>

---



