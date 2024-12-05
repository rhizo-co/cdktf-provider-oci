# `dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule <a name="`dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries oci_database_vm_cluster_update_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]] = None,
  id: str = None,
  state: str = None,
  update_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.vmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#filter DataOciDatabaseVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.updateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType">reset_update_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_update_type` <a name="reset_update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType"></a>

```python
def reset_update_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdateHistoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusterUpdateHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdateHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries">vm_cluster_update_history_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput">update_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput">vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter"></a>

```python
filter: DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a>

---

##### `vm_cluster_update_history_entries`<sup>Required</sup> <a name="vm_cluster_update_history_entries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries"></a>

```python
vm_cluster_update_history_entries: DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `update_type_input`<sup>Optional</sup> <a name="update_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput"></a>

```python
update_type_input: str
```

- *Type:* str

---

##### `vm_cluster_id_input`<sup>Optional</sup> <a name="vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput"></a>

```python
vm_cluster_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesConfig <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]] = None,
  id: str = None,
  state: str = None,
  update_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType">update_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#filter DataOciDatabaseVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}.

---

##### `update_type`<sup>Optional</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilter <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]]

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClusterUpdateHistoryEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>]

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_update_history_entries

dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted">time_completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction">update_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId">update_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_completed`<sup>Required</sup> <a name="time_completed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted"></a>

```python
time_completed: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `update_action`<sup>Required</sup> <a name="update_action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction"></a>

```python
update_action: str
```

- *Type:* str

---

##### `update_id`<sup>Required</sup> <a name="update_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId"></a>

```python
update_id: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a>

---



