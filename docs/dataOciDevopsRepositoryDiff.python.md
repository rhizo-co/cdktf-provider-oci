# `dataOciDevopsRepositoryDiff` Submodule <a name="`dataOciDevopsRepositoryDiff` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryDiff <a name="DataOciDevopsRepositoryDiff" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff oci_devops_repository_diff}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff(
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
  file_path: str,
  repository_id: str,
  target_version: str,
  id: str = None,
  is_comparison_from_merge_base: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.baseVersion">base_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.baseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}.

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}.

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.targetVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_comparison_from_merge_base`<sup>Optional</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.isComparisonFromMergeBase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetIsComparisonFromMergeBase">reset_is_comparison_from_merge_base</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_comparison_from_merge_base` <a name="reset_is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetIsComparisonFromMergeBase"></a>

```python
def reset_is_comparison_from_merge_base() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryDiff resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryDiff resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsRepositoryDiff to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsRepositoryDiff that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryDiff to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.areConflictsInFile">are_conflicts_in_file</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList">DataOciDevopsRepositoryDiffChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isBinary">is_binary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isLarge">is_large</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newId">new_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newPath">new_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldId">old_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldPath">old_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersionInput">base_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBaseInput">is_comparison_from_merge_base_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersionInput">target_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersion">base_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `are_conflicts_in_file`<sup>Required</sup> <a name="are_conflicts_in_file" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.areConflictsInFile"></a>

```python
are_conflicts_in_file: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.changes"></a>

```python
changes: DataOciDevopsRepositoryDiffChangesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList">DataOciDevopsRepositoryDiffChangesList</a>

---

##### `is_binary`<sup>Required</sup> <a name="is_binary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isBinary"></a>

```python
is_binary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_large`<sup>Required</sup> <a name="is_large" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isLarge"></a>

```python
is_large: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `new_id`<sup>Required</sup> <a name="new_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newId"></a>

```python
new_id: str
```

- *Type:* str

---

##### `new_path`<sup>Required</sup> <a name="new_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newPath"></a>

```python
new_path: str
```

- *Type:* str

---

##### `old_id`<sup>Required</sup> <a name="old_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldId"></a>

```python
old_id: str
```

- *Type:* str

---

##### `old_path`<sup>Required</sup> <a name="old_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldPath"></a>

```python
old_path: str
```

- *Type:* str

---

##### `base_version_input`<sup>Optional</sup> <a name="base_version_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersionInput"></a>

```python
base_version_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_comparison_from_merge_base_input`<sup>Optional</sup> <a name="is_comparison_from_merge_base_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBaseInput"></a>

```python
is_comparison_from_merge_base_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `target_version_input`<sup>Optional</sup> <a name="target_version_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersionInput"></a>

```python
target_version_input: str
```

- *Type:* str

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersion"></a>

```python
base_version: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_comparison_from_merge_base`<sup>Required</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBase"></a>

```python
is_comparison_from_merge_base: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryDiffChanges <a name="DataOciDevopsRepositoryDiffChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges()
```


### DataOciDevopsRepositoryDiffChangesDiffSections <a name="DataOciDevopsRepositoryDiffChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections()
```


### DataOciDevopsRepositoryDiffChangesDiffSectionsLines <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines()
```


### DataOciDevopsRepositoryDiffConfig <a name="DataOciDevopsRepositoryDiffConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_version: str,
  file_path: str,
  repository_id: str,
  target_version: str,
  id: str = None,
  is_comparison_from_merge_base: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.baseVersion">base_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.isComparisonFromMergeBase">is_comparison_from_merge_base</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_version`<sup>Required</sup> <a name="base_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.baseVersion"></a>

```python
base_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}.

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}.

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_comparison_from_merge_base`<sup>Optional</sup> <a name="is_comparison_from_merge_base" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.isComparisonFromMergeBase"></a>

```python
is_comparison_from_merge_base: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.baseLine">base_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflict_marker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.lineContent">line_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.targetLine">target_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines">DataOciDevopsRepositoryDiffChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_line`<sup>Required</sup> <a name="base_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```python
base_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conflict_marker`<sup>Required</sup> <a name="conflict_marker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```python
conflict_marker: str
```

- *Type:* str

---

##### `line_content`<sup>Required</sup> <a name="line_content" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```python
line_content: str
```

- *Type:* str

---

##### `target_line`<sup>Required</sup> <a name="target_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```python
target_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffChangesDiffSectionsLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines">DataOciDevopsRepositoryDiffChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsList <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections">DataOciDevopsRepositoryDiffChangesDiffSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.lines"></a>

```python
lines: DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffChangesDiffSections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections">DataOciDevopsRepositoryDiffChangesDiffSections</a>

---


### DataOciDevopsRepositoryDiffChangesList <a name="DataOciDevopsRepositoryDiffChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositoryDiffChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositoryDiffChangesOutputReference <a name="DataOciDevopsRepositoryDiffChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_diff

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseLine">base_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseSpan">base_span</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.diffSections">diff_sections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList">DataOciDevopsRepositoryDiffChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetLine">target_line</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetSpan">target_span</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges">DataOciDevopsRepositoryDiffChanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_line`<sup>Required</sup> <a name="base_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseLine"></a>

```python
base_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_span`<sup>Required</sup> <a name="base_span" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseSpan"></a>

```python
base_span: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_sections`<sup>Required</sup> <a name="diff_sections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.diffSections"></a>

```python
diff_sections: DataOciDevopsRepositoryDiffChangesDiffSectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList">DataOciDevopsRepositoryDiffChangesDiffSectionsList</a>

---

##### `target_line`<sup>Required</sup> <a name="target_line" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetLine"></a>

```python
target_line: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_span`<sup>Required</sup> <a name="target_span" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetSpan"></a>

```python
target_span: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositoryDiffChanges
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges">DataOciDevopsRepositoryDiffChanges</a>

---



