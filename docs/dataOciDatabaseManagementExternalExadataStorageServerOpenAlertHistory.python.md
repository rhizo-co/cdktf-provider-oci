# `dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory <a name="DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history oci_database_management_external_exadata_storage_server_open_alert_history}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.externalExadataStorageServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.alerts">alerts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList">DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.externalExadataStorageServerIdInput">external_exadata_storage_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.alerts"></a>

```python
alerts: DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList">DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList</a>

---

##### `external_exadata_storage_server_id_input`<sup>Optional</sup> <a name="external_exadata_storage_server_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.externalExadataStorageServerIdInput"></a>

```python
external_exadata_storage_server_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts <a name="DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts()
```


### DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.externalExadataStorageServerId">external_exadata_storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_exadata_storage_server_id`<sup>Required</sup> <a name="external_exadata_storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.externalExadataStorageServerId"></a>

```python
external_exadata_storage_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_open_alert_history#id DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList <a name="DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_server_open_alert_history

dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.timeStartAt">time_start_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts">DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `time_start_at`<sup>Required</sup> <a name="time_start_at" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.timeStartAt"></a>

```python
time_start_at: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlertsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistory.DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts">DataOciDatabaseManagementExternalExadataStorageServerOpenAlertHistoryAlerts</a>

---



