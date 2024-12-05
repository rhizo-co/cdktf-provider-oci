# `dataOciWafProtectionCapabilityGroupTags` Submodule <a name="`dataOciWafProtectionCapabilityGroupTags` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilityGroupTags <a name="DataOciWafProtectionCapabilityGroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags oci_waf_protection_capability_group_tags}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags(
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
  filter: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]] = None,
  id: str = None,
  name: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWafProtectionCapabilityGroupTags to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWafProtectionCapabilityGroupTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilityGroupTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection">protection_capability_group_tag_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter"></a>

```python
filter: DataOciWafProtectionCapabilityGroupTagsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a>

---

##### `protection_capability_group_tag_collection`<sup>Required</sup> <a name="protection_capability_group_tag_collection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection"></a>

```python
protection_capability_group_tag_collection: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilityGroupTagsConfig <a name="DataOciWafProtectionCapabilityGroupTagsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]] = None,
  id: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

### DataOciWafProtectionCapabilityGroupTagsFilter <a name="DataOciWafProtectionCapabilityGroupTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}.

---

### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection()
```


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilityGroupTagsFilterList <a name="DataOciWafProtectionCapabilityGroupTagsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafProtectionCapabilityGroupTagsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWafProtectionCapabilityGroupTagsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]]

---


### DataOciWafProtectionCapabilityGroupTagsFilterOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWafProtectionCapabilityGroupTagsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>]

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_protection_capability_group_tags

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items"></a>

```python
items: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a>

---


