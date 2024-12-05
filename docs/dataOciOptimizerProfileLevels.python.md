# `dataOciOptimizerProfileLevels` Submodule <a name="`dataOciOptimizerProfileLevels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerProfileLevels <a name="DataOciOptimizerProfileLevels" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels oci_optimizer_profile_levels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable],
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]] = None,
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id DataOciOptimizerProfileLevels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id_in_subtree DataOciOptimizerProfileLevels#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#id DataOciOptimizerProfileLevels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#recommendation_name DataOciOptimizerProfileLevels#recommendation_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id DataOciOptimizerProfileLevels#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id_in_subtree DataOciOptimizerProfileLevels#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#filter DataOciOptimizerProfileLevels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#id DataOciOptimizerProfileLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.Initializer.parameter.recommendationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#recommendation_name DataOciOptimizerProfileLevels#recommendation_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetRecommendationName">reset_recommendation_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recommendation_name` <a name="reset_recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.resetRecommendationName"></a>

```python
def reset_recommendation_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOptimizerProfileLevels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOptimizerProfileLevels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOptimizerProfileLevels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOptimizerProfileLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerProfileLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList">DataOciOptimizerProfileLevelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.profileLevelCollection">profile_level_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList">DataOciOptimizerProfileLevelsProfileLevelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.recommendationNameInput">recommendation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.recommendationName">recommendation_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.filter"></a>

```python
filter: DataOciOptimizerProfileLevelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList">DataOciOptimizerProfileLevelsFilterList</a>

---

##### `profile_level_collection`<sup>Required</sup> <a name="profile_level_collection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.profileLevelCollection"></a>

```python
profile_level_collection: DataOciOptimizerProfileLevelsProfileLevelCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList">DataOciOptimizerProfileLevelsProfileLevelCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recommendation_name_input`<sup>Optional</sup> <a name="recommendation_name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.recommendationNameInput"></a>

```python
recommendation_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recommendation_name`<sup>Required</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerProfileLevelsConfig <a name="DataOciOptimizerProfileLevelsConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable],
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]] = None,
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id DataOciOptimizerProfileLevels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id_in_subtree DataOciOptimizerProfileLevels#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#id DataOciOptimizerProfileLevels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#recommendation_name DataOciOptimizerProfileLevels#recommendation_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id DataOciOptimizerProfileLevels#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#compartment_id_in_subtree DataOciOptimizerProfileLevels#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#filter DataOciOptimizerProfileLevels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#id DataOciOptimizerProfileLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsConfig.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#recommendation_name DataOciOptimizerProfileLevels#recommendation_name}.

---

### DataOciOptimizerProfileLevelsFilter <a name="DataOciOptimizerProfileLevelsFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#values DataOciOptimizerProfileLevels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#regex DataOciOptimizerProfileLevels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#name DataOciOptimizerProfileLevels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#values DataOciOptimizerProfileLevels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profile_levels#regex DataOciOptimizerProfileLevels#regex}.

---

### DataOciOptimizerProfileLevelsProfileLevelCollection <a name="DataOciOptimizerProfileLevelsProfileLevelCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollection()
```


### DataOciOptimizerProfileLevelsProfileLevelCollectionItems <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItems()
```


### DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerProfileLevelsFilterList <a name="DataOciOptimizerProfileLevelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerProfileLevelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOptimizerProfileLevelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]]

---


### DataOciOptimizerProfileLevelsFilterOutputReference <a name="DataOciOptimizerProfileLevelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOptimizerProfileLevelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsFilter">DataOciOptimizerProfileLevelsFilter</a>]

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetrics</a>

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.defaultInterval">default_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.recommendationName">recommendation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.validIntervals">valid_intervals</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItems">DataOciOptimizerProfileLevelsProfileLevelCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_interval`<sup>Required</sup> <a name="default_interval" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.defaultInterval"></a>

```python
default_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.metrics"></a>

```python
metrics: DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsMetricsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recommendation_name`<sup>Required</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `valid_intervals`<sup>Required</sup> <a name="valid_intervals" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.validIntervals"></a>

```python
valid_intervals: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerProfileLevelsProfileLevelCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItems">DataOciOptimizerProfileLevelsProfileLevelCollectionItems</a>

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionList <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference <a name="DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_profile_levels

dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollection">DataOciOptimizerProfileLevelsProfileLevelCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.items"></a>

```python
items: DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList">DataOciOptimizerProfileLevelsProfileLevelCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerProfileLevelsProfileLevelCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfileLevels.DataOciOptimizerProfileLevelsProfileLevelCollection">DataOciOptimizerProfileLevelsProfileLevelCollection</a>

---



