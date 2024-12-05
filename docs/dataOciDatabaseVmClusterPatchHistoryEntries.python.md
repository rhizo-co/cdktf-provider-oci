# `dataOciDatabaseVmClusterPatchHistoryEntries` Submodule <a name="`dataOciDatabaseVmClusterPatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntries <a name="DataOciDatabaseVmClusterPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries oci_database_vm_cluster_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.vmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#filter DataOciDatabaseVmClusterPatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseVmClusterPatchHistoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseVmClusterPatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterPatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList">DataOciDatabaseVmClusterPatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.patchHistoryEntries">patch_history_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterIdInput">vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filter"></a>

```python
filter: DataOciDatabaseVmClusterPatchHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList">DataOciDatabaseVmClusterPatchHistoryEntriesFilterList</a>

---

##### `patch_history_entries`<sup>Required</sup> <a name="patch_history_entries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.patchHistoryEntries"></a>

```python
patch_history_entries: DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `vm_cluster_id_input`<sup>Optional</sup> <a name="vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterIdInput"></a>

```python
vm_cluster_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntriesConfig <a name="DataOciDatabaseVmClusterPatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vm_cluster_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#filter DataOciDatabaseVmClusterPatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseVmClusterPatchHistoryEntriesFilter <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#name DataOciDatabaseVmClusterPatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#values DataOciDatabaseVmClusterPatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#regex DataOciDatabaseVmClusterPatchHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#name DataOciDatabaseVmClusterPatchHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#values DataOciDatabaseVmClusterPatchHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#regex DataOciDatabaseVmClusterPatchHistoryEntries#regex}.

---

### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterPatchHistoryEntriesFilterList <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseVmClusterPatchHistoryEntriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]]

---


### DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseVmClusterPatchHistoryEntriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>]

---


### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_vm_cluster_patch_history_entries

dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">patch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `patch_id`<sup>Required</sup> <a name="patch_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```python
patch_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries</a>

---



