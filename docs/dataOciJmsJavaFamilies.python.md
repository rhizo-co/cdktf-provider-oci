# `dataOciJmsJavaFamilies` Submodule <a name="`dataOciJmsJavaFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamilies <a name="DataOciJmsJavaFamilies" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families oci_jms_java_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]] = None,
  id: str = None,
  is_supported_version: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.isSupportedVersion">is_supported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.familyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#filter DataOciJmsJavaFamilies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_supported_version`<sup>Optional</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.isSupportedVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion">reset_family_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion">reset_is_supported_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_family_version` <a name="reset_family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion"></a>

```python
def reset_family_version() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_supported_version` <a name="reset_is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion"></a>

```python
def reset_is_supported_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaFamilies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection">java_family_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput">family_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput">is_supported_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion">is_supported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter"></a>

```python
filter: DataOciJmsJavaFamiliesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a>

---

##### `java_family_collection`<sup>Required</sup> <a name="java_family_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection"></a>

```python
java_family_collection: DataOciJmsJavaFamiliesJavaFamilyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `family_version_input`<sup>Optional</sup> <a name="family_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput"></a>

```python
family_version_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_supported_version_input`<sup>Optional</sup> <a name="is_supported_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput"></a>

```python
is_supported_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_supported_version`<sup>Required</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion"></a>

```python
is_supported_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamiliesConfig <a name="DataOciJmsJavaFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  family_version: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]] = None,
  id: str = None,
  is_supported_version: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion">is_supported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}.

---

##### `family_version`<sup>Optional</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#filter DataOciJmsJavaFamilies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_supported_version`<sup>Optional</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion"></a>

```python
is_supported_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}.

---

### DataOciJmsJavaFamiliesFilter <a name="DataOciJmsJavaFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}.

---

### DataOciJmsJavaFamiliesJavaFamilyCollection <a name="DataOciJmsJavaFamiliesJavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection()
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItems <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems()
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamiliesFilterList <a name="DataOciJmsJavaFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaFamiliesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJavaFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]]

---


### DataOciJmsJavaFamiliesFilterOutputReference <a name="DataOciJmsJavaFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJavaFamiliesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>]

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">approximate_file_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType">artifact_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription">artifact_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName">artifact_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl">download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">script_checksum_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">script_download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_file_size_in_bytes`<sup>Required</sup> <a name="approximate_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```python
approximate_file_size_in_bytes: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `artifact_content_type`<sup>Required</sup> <a name="artifact_content_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```python
artifact_content_type: str
```

- *Type:* str

---

##### `artifact_description`<sup>Required</sup> <a name="artifact_description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```python
artifact_description: str
```

- *Type:* str

---

##### `artifact_file_name`<sup>Required</sup> <a name="artifact_file_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```python
artifact_file_name: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `download_url`<sup>Required</sup> <a name="download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```python
download_url: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `script_checksum_url`<sup>Required</sup> <a name="script_checksum_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```python
script_checksum_url: str
```

- *Type:* str

---

##### `script_download_url`<sup>Required</sup> <a name="script_download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```python
script_download_url: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl">doc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate">end_of_support_life_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion">is_supported_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts">latest_release_artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion">latest_release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType">support_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `doc_url`<sup>Required</sup> <a name="doc_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl"></a>

```python
doc_url: str
```

- *Type:* str

---

##### `end_of_support_life_date`<sup>Required</sup> <a name="end_of_support_life_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate"></a>

```python
end_of_support_life_date: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `is_supported_version`<sup>Required</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion"></a>

```python
is_supported_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `latest_release_artifacts`<sup>Required</sup> <a name="latest_release_artifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts"></a>

```python
latest_release_artifacts: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a>

---

##### `latest_release_version`<sup>Required</sup> <a name="latest_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion"></a>

```python
latest_release_version: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `support_type`<sup>Required</sup> <a name="support_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType"></a>

```python
support_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaFamiliesJavaFamilyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_families

dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaFamiliesJavaFamilyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a>

---



