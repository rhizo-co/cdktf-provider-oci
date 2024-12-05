# `dataOciDatabaseExadbVmClusterUpdateHistoryEntries` Submodule <a name="`dataOciDatabaseExadbVmClusterUpdateHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntries <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries oci_database_exadb_vm_cluster_update_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]] = None,
  id: str = None,
  update_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#filter DataOciDatabaseExadbVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.updateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetUpdateType">reset_update_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_update_type` <a name="reset_update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetUpdateType"></a>

```python
def reset_update_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdateHistoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseExadbVmClusterUpdateHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdateHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterUpdateHistoryEntries">exadb_vm_cluster_update_history_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterIdInput">exadb_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateTypeInput">update_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `exadb_vm_cluster_update_history_entries`<sup>Required</sup> <a name="exadb_vm_cluster_update_history_entries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterUpdateHistoryEntries"></a>

```python
exadb_vm_cluster_update_history_entries: DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filter"></a>

```python
filter: DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList</a>

---

##### `exadb_vm_cluster_id_input`<sup>Optional</sup> <a name="exadb_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterIdInput"></a>

```python
exadb_vm_cluster_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `update_type_input`<sup>Optional</sup> <a name="update_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateTypeInput"></a>

```python
update_type_input: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exadb_vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]] = None,
  id: str = None,
  update_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#filter DataOciDatabaseExadbVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}.

---

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries()
```


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#name DataOciDatabaseExadbVmClusterUpdateHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#values DataOciDatabaseExadbVmClusterUpdateHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#regex DataOciDatabaseExadbVmClusterUpdateHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#name DataOciDatabaseExadbVmClusterUpdateHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#values DataOciDatabaseExadbVmClusterUpdateHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#regex DataOciDatabaseExadbVmClusterUpdateHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted">time_completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateAction">update_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateId">update_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_completed`<sup>Required</sup> <a name="time_completed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted"></a>

```python
time_completed: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `update_action`<sup>Required</sup> <a name="update_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateAction"></a>

```python
update_action: str
```

- *Type:* str

---

##### `update_id`<sup>Required</sup> <a name="update_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateId"></a>

```python
update_id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries</a>

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]]

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_exadb_vm_cluster_update_history_entries

dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>]

---



