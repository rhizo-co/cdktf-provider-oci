# `dataOciDevopsRepositoryDiffs` Submodule <a name="`dataOciDevopsRepositoryDiffs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryDiffs <a name="DataOciDevopsRepositoryDiffs" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs oci_devops_repository_diffs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_version: str,
  repository_id: str,
  target_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]] = None,
  id: str = None,
  is_comparison_from_merge_base: typing.Union[bool, IResolvable] = None,
  target_repository_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.baseVersion">base_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetRepositoryId">target_repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.baseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}.

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_comparison_from_merge_base`<sup>Optional</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.isComparisonFromMergeBase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}.

---

##### `target_repository_id`<sup>Optional</sup> <a name="target_repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetRepositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase">reset_is_comparison_from_merge_base</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId">reset_target_repository_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_comparison_from_merge_base` <a name="reset_is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase"></a>

```python
def reset_is_comparison_from_merge_base() -> None
```

##### `reset_target_repository_id` <a name="reset_target_repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId"></a>

```python
def reset_target_repository_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsRepositoryDiffs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsRepositoryDiffs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryDiffs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection">diff_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput">base_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput">is_comparison_from_merge_base_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput">target_repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput">target_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion">base_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId">target_repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `diff_collection`<sup>Required</sup> <a name="diff_collection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection"></a>

```python
diff_collection: DataOciDevopsRepositoryDiffsDiffCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter"></a>

```python
filter: DataOciDevopsRepositoryDiffsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a>

---

##### `base_version_input`<sup>Optional</sup> <a name="base_version_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput"></a>

```python
base_version_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_comparison_from_merge_base_input`<sup>Optional</sup> <a name="is_comparison_from_merge_base_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput"></a>

```python
is_comparison_from_merge_base_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `target_repository_id_input`<sup>Optional</sup> <a name="target_repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput"></a>

```python
target_repository_id_input: str
```

- *Type:* str

---

##### `target_version_input`<sup>Optional</sup> <a name="target_version_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput"></a>

```python
target_version_input: str
```

- *Type:* str

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion"></a>

```python
base_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_comparison_from_merge_base`<sup>Required</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase"></a>

```python
is_comparison_from_merge_base: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `target_repository_id`<sup>Required</sup> <a name="target_repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId"></a>

```python
target_repository_id: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryDiffsConfig <a name="DataOciDevopsRepositoryDiffsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_version: str,
  repository_id: str,
  target_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]] = None,
  id: str = None,
  is_comparison_from_merge_base: typing.Union[bool, IResolvable] = None,
  target_repository_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion">base_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId">target_repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion"></a>

```python
base_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}.

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_comparison_from_merge_base`<sup>Optional</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase"></a>

```python
is_comparison_from_merge_base: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}.

---

##### `target_repository_id`<sup>Optional</sup> <a name="target_repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId"></a>

```python
target_repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}.

---

### DataOciDevopsRepositoryDiffsDiffCollection <a name="DataOciDevopsRepositoryDiffsDiffCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection()
```


### DataOciDevopsRepositoryDiffsDiffCollectionItems <a name="DataOciDevopsRepositoryDiffsDiffCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems()
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges()
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections()
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines()
```


### DataOciDevopsRepositoryDiffsFilter <a name="DataOciDevopsRepositoryDiffsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine">base_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflict_marker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent">line_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine">target_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_line`<sup>Required</sup> <a name="base_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```python
base_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conflict_marker`<sup>Required</sup> <a name="conflict_marker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```python
conflict_marker: str
```

- *Type:* str

---

##### `line_content`<sup>Required</sup> <a name="line_content" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```python
line_content: str
```

- *Type:* str

---

##### `target_line`<sup>Required</sup> <a name="target_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```python
target_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines"></a>

```python
lines: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine">base_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan">base_span</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections">diff_sections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine">target_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan">target_span</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_line`<sup>Required</sup> <a name="base_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine"></a>

```python
base_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_span`<sup>Required</sup> <a name="base_span" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan"></a>

```python
base_span: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_sections`<sup>Required</sup> <a name="diff_sections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections"></a>

```python
diff_sections: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a>

---

##### `target_line`<sup>Required</sup> <a name="target_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine"></a>

```python
target_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_span`<sup>Required</sup> <a name="target_span" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan"></a>

```python
target_span: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile">are_conflicts_in_file</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary">is_binary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge">is_large</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId">new_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath">new_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId">old_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath">old_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_conflicts_in_file`<sup>Required</sup> <a name="are_conflicts_in_file" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile"></a>

```python
are_conflicts_in_file: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes"></a>

```python
changes: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_binary`<sup>Required</sup> <a name="is_binary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary"></a>

```python
is_binary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_large`<sup>Required</sup> <a name="is_large" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge"></a>

```python
is_large: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `new_id`<sup>Required</sup> <a name="new_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId"></a>

```python
new_id: str
```

- *Type:* str

---

##### `new_path`<sup>Required</sup> <a name="new_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath"></a>

```python
new_path: str
```

- *Type:* str

---

##### `old_id`<sup>Required</sup> <a name="old_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId"></a>

```python
old_id: str
```

- *Type:* str

---

##### `old_path`<sup>Required</sup> <a name="old_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath"></a>

```python
old_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffsDiffCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionList <a name="DataOciDevopsRepositoryDiffsDiffCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsDiffCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffsDiffCollectionOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items"></a>

```python
items: DataOciDevopsRepositoryDiffsDiffCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffsDiffCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a>

---


### DataOciDevopsRepositoryDiffsFilterList <a name="DataOciDevopsRepositoryDiffsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDevopsRepositoryDiffsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]]

---


### DataOciDevopsRepositoryDiffsFilterOutputReference <a name="DataOciDevopsRepositoryDiffsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diffs

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDevopsRepositoryDiffsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>]

---



