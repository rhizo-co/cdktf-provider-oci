# `dataOciDatabaseExadbVmClusterUpdates` Submodule <a name="`dataOciDatabaseExadbVmClusterUpdates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusterUpdates <a name="DataOciDatabaseExadbVmClusterUpdates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates oci_database_exadb_vm_cluster_updates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exadb_vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]] = None,
  id: str = None,
  update_type: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdates#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#id DataOciDatabaseExadbVmClusterUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#update_type DataOciDatabaseExadbVmClusterUpdates#update_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#version DataOciDatabaseExadbVmClusterUpdates#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdates#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#filter DataOciDatabaseExadbVmClusterUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#id DataOciDatabaseExadbVmClusterUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.updateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#update_type DataOciDatabaseExadbVmClusterUpdates#update_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#version DataOciDatabaseExadbVmClusterUpdates#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetUpdateType">reset_update_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_update_type` <a name="reset_update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetUpdateType"></a>

```python
def reset_update_type() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseExadbVmClusterUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterUpdates">exadb_vm_cluster_updates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList">DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList">DataOciDatabaseExadbVmClusterUpdatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterIdInput">exadb_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.updateTypeInput">update_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `exadb_vm_cluster_updates`<sup>Required</sup> <a name="exadb_vm_cluster_updates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterUpdates"></a>

```python
exadb_vm_cluster_updates: DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList">DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.filter"></a>

```python
filter: DataOciDatabaseExadbVmClusterUpdatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList">DataOciDatabaseExadbVmClusterUpdatesFilterList</a>

---

##### `exadb_vm_cluster_id_input`<sup>Optional</sup> <a name="exadb_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterIdInput"></a>

```python
exadb_vm_cluster_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `update_type_input`<sup>Optional</sup> <a name="update_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.updateTypeInput"></a>

```python
update_type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClusterUpdatesConfig <a name="DataOciDatabaseExadbVmClusterUpdatesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exadb_vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]] = None,
  id: str = None,
  update_type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdates#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#id DataOciDatabaseExadbVmClusterUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#update_type DataOciDatabaseExadbVmClusterUpdates#update_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#version DataOciDatabaseExadbVmClusterUpdates#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdates#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#filter DataOciDatabaseExadbVmClusterUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#id DataOciDatabaseExadbVmClusterUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#update_type DataOciDatabaseExadbVmClusterUpdates#update_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#version DataOciDatabaseExadbVmClusterUpdates#version}.

---

### DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates <a name="DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates()
```


### DataOciDatabaseExadbVmClusterUpdatesFilter <a name="DataOciDatabaseExadbVmClusterUpdatesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#name DataOciDatabaseExadbVmClusterUpdates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#values DataOciDatabaseExadbVmClusterUpdates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#regex DataOciDatabaseExadbVmClusterUpdates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#name DataOciDatabaseExadbVmClusterUpdates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#values DataOciDatabaseExadbVmClusterUpdates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_updates#regex DataOciDatabaseExadbVmClusterUpdates#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList <a name="DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference <a name="DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.availableActions">available_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.lastAction">last_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.timeReleased">time_released</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates">DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_actions`<sup>Required</sup> <a name="available_actions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.availableActions"></a>

```python
available_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_action`<sup>Required</sup> <a name="last_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.lastAction"></a>

```python
last_action: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_released`<sup>Required</sup> <a name="time_released" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.timeReleased"></a>

```python
time_released: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates">DataOciDatabaseExadbVmClusterUpdatesExadbVmClusterUpdates</a>

---


### DataOciDatabaseExadbVmClusterUpdatesFilterList <a name="DataOciDatabaseExadbVmClusterUpdatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]]

---


### DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference <a name="DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_updates

dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseExadbVmClusterUpdatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdates.DataOciDatabaseExadbVmClusterUpdatesFilter">DataOciDatabaseExadbVmClusterUpdatesFilter</a>]

---



